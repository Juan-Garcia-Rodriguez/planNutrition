<script setup>
import { ref, computed } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({ recipe: Object })
const open = ref(false)

const total = computed(() => props.recipe.kcal + props.recipe.prot + props.recipe.carb + props.recipe.fat)
const pPct = computed(() => (props.recipe.prot * 4))
const cPct = computed(() => (props.recipe.carb * 4))
const fPct = computed(() => (props.recipe.fat * 9))
const sum = computed(() => pPct.value + cPct.value + fPct.value || 1)
</script>

<template>
  <div class="card">
    <span class="meal-tag">{{ recipe.tag }}</span>
    <h3 class="meal-title">{{ recipe.title }}</h3>
    <div class="meal-meta">
      <span><Icon name="clock" /> {{ recipe.time }} min</span>
      <span><Icon name="user" /> {{ recipe.servings }} portion{{ recipe.servings > 1 ? 's' : '' }}</span>
    </div>

    <div class="macro-row" style="margin-top:16px">
      <div class="macro kcal"><div class="v">{{ recipe.kcal }}</div><div class="l">kcal</div></div>
      <div class="macro prot"><div class="v">{{ recipe.prot }}g</div><div class="l">protéines</div></div>
      <div class="macro carb"><div class="v">{{ recipe.carb }}g</div><div class="l">glucides</div></div>
      <div class="macro fat"><div class="v">{{ recipe.fat }}g</div><div class="l">lipides</div></div>
    </div>

    <div class="mbar" :title="`P ${recipe.prot}g · G ${recipe.carb}g · L ${recipe.fat}g`">
      <span class="p" :style="{ width: (pPct/sum*100)+'%' }"></span>
      <span class="c" :style="{ width: (cPct/sum*100)+'%' }"></span>
      <span class="f" :style="{ width: (fPct/sum*100)+'%' }"></span>
    </div>

    <button class="disclosure-btn" :class="{ open }" @click="open = !open">
      {{ open ? 'Masquer la recette' : 'Voir la recette' }}
      <Icon name="chevron" />
    </button>

    <transition name="fade">
      <div v-if="open" class="recipe-body">
        <p class="recipe-h">Ingrédients</p>
        <ul class="ing-list">
          <li v-for="(ing, i) in recipe.ingredients" :key="i">
            <span>{{ ing.n }}</span><span>{{ ing.q }}</span>
          </li>
        </ul>
        <p class="recipe-h" style="margin-top:16px">Préparation</p>
        <ol class="steps">
          <li v-for="(s, i) in recipe.steps" :key="i">{{ s }}</li>
        </ol>
      </div>
    </transition>
  </div>
</template>
