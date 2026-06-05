<script setup>
import { ref, reactive, computed } from 'vue'
import { recipes, dayPlan } from '../data/recipes.js'
import { macroTarget, profile } from '../composables/useProfile.js'
import RecipeCard from '../components/RecipeCard.vue'
import Icon from '../components/Icon.vue'

const byId = Object.fromEntries(recipes.map(r => [r.id, r]))

// Sélection courante (1 recette par créneau)
const selection = reactive(Object.fromEntries(dayPlan.map(d => [d.slot, d.options[0]])))
const flipped = reactive({})

function swap(slot) {
  const opts = dayPlan.find(d => d.slot === slot).options
  const cur = opts.indexOf(selection[slot])
  selection[slot] = opts[(cur + 1) % opts.length]
  // flip back to front when changing recipe
  const r = byId[selection[slot]]
  if (r) flipped[r.id] = false
}

function toggleFlip(id) {
  flipped[id] = !flipped[id]
}

const chosen = computed(() => dayPlan.map(d => byId[selection[d.slot]]))

const totals = computed(() => chosen.value.reduce((a, r) => ({
  kcal: a.kcal + r.kcal, prot: a.prot + r.prot, carb: a.carb + r.carb, fat: a.fat + r.fat
}), { kcal: 0, prot: 0, carb: 0, fat: 0 }))

const filter = ref('Tous')
const tags = ['Tous', 'Petit-déjeuner', 'Déjeuner', 'Dîner', 'Collation']
const filtered = computed(() =>
  filter.value === 'Tous' ? recipes : recipes.filter(r => r.tag === filter.value))

function pct(val, target) { return Math.min(100, Math.round((val / target) * 100)) }
</script>

<template>
  <div class="stagger">
    <div class="card">
      <h2 class="section-title" style="color:var(--ink)">Ta journée — {{ profile.diet === 'vegan' ? '100% végétale' : 'sur-mesure' }}</h2>
      <p class="section-sub" style="color:var(--ink-soft)">Touche « Changer » pour faire varier un repas.</p>

      <div class="grid stagger" style="gap:14px">
        <div v-for="(r, i) in chosen" :key="r.id" class="day-flip-wrap">
          <div class="day-flip-inner" :class="{ flipped: flipped[r.id] }">

            <!-- FACE AVANT -->
            <div class="day-flip-face day-flip-front" @click="toggleFlip(r.id)">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
                <div>
                  <span class="meal-tag">{{ dayPlan[i].slot }}</span>
                  <h3 class="meal-title">{{ r.title }}</h3>
                </div>
                <button class="btn" style="background:#fff;color:var(--leaf);padding:8px 14px;font-size:0.82rem;border:1.5px solid var(--line);flex:none"
                        @click.stop="swap(dayPlan[i].slot)">
                  <Icon name="sparkle" style="width:15px;height:15px" /> Changer
                </button>
              </div>
              <div class="meal-meta">
                <span><Icon name="flame" /> {{ r.kcal }} kcal</span>
                <span><Icon name="clock" /> {{ r.time }} min</span>
                <span style="color:var(--leaf);font-weight:600">P {{ r.prot }}g · G {{ r.carb }}g · L {{ r.fat }}g</span>
              </div>
              <p class="flip-hint">Appuyer pour voir la recette →</p>
            </div>

            <!-- FACE ARRIÈRE -->
            <div class="day-flip-face day-flip-back">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <div>
                  <span class="meal-tag" style="margin-bottom:4px">{{ dayPlan[i].slot }}</span>
                  <h3 class="meal-title" style="font-size:1rem">{{ r.title }}</h3>
                </div>
                <button class="flip-back-btn" @click="toggleFlip(r.id)">← Retour</button>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;overflow-y:auto;max-height:calc(100% - 80px)">
                <div>
                  <p class="recipe-h" style="margin-bottom:6px">Ingrédients</p>
                  <ul class="flip-ing">
                    <li v-for="(ing, j) in r.ingredients" :key="j">
                      <span>{{ ing.n }}</span><span>{{ ing.q }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="recipe-h" style="margin-bottom:6px">Préparation</p>
                  <ol class="flip-steps">
                    <li v-for="(s, j) in r.steps" :key="j">{{ s }}</li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Bilan vs objectif -->
    <div class="card">
      <h3 class="meal-title" style="margin-bottom:14px">Bilan de la journée</h3>
      <div v-for="m in [
        { k:'kcal', l:'Calories', v:totals.kcal, t:macroTarget.kcal, u:'kcal', cls:'p' },
        { k:'prot', l:'Protéines', v:totals.prot, t:macroTarget.prot, u:'g', cls:'p' },
        { k:'carb', l:'Glucides', v:totals.carb, t:macroTarget.carb, u:'g', cls:'c' },
        { k:'fat', l:'Lipides', v:totals.fat, t:macroTarget.fat, u:'g', cls:'f' }
      ]" :key="m.k" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:0.86rem;margin-bottom:4px">
          <strong style="color:var(--ink)">{{ m.l }}</strong>
          <span style="color:var(--ink-soft)">{{ m.v }} / {{ m.t }} {{ m.u }}</span>
        </div>
        <div class="mbar"><span :class="m.cls" :style="{ width: pct(m.v, m.t)+'%' }"></span></div>
      </div>
      <p style="font-size:0.8rem;color:var(--ink-soft);margin-top:6px">
        Le plan vise un léger déficit pour une perte progressive et durable, avec des protéines suffisantes pour préserver ta masse musculaire.
      </p>
    </div>

    <!-- Toutes les recettes -->
    <div>
      <h2 class="section-title">Toutes les recettes</h2>
      <p class="section-sub">Recettes véganes, macros incluses.</p>
      <div class="day-pills">
        <div v-for="t in tags" :key="t" class="day-pill" :class="{ on: filter===t }" @click="filter=t">{{ t }}</div>
      </div>
      <div class="grid grid-2 stagger">
        <RecipeCard v-for="r in filtered" :key="r.id" :recipe="r" />
      </div>
    </div>
  </div>
</template>
