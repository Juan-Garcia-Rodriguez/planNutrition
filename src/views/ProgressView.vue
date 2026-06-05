<script setup>
import { computed } from 'vue'
import { profile, bmi } from '../composables/useProfile.js'
import Icon from '../components/Icon.vue'

const toLose = computed(() => Math.max(0, +(profile.weight - profile.targetWeight).toFixed(1)))

const today = new Date().toISOString().slice(0, 10)
const doneToday = computed(() =>
  Object.keys(profile.done).filter(k => k.startsWith(today)).length)
const doneTotal = computed(() => Object.keys(profile.done).length)

function setCup(n) {
  profile.waterCups = profile.waterCups === n ? n - 1 : n
}
</script>

<template>
  <div class="stagger">
    <div>
      <h2 class="section-title">Ma progression</h2>
      <p class="section-sub">Un pas après l'autre.</p>
      <div class="kpi-row">
        <div class="kpi"><div class="v">{{ profile.weight }}</div><div class="l">Poids (kg)</div></div>
        <div class="kpi"><div class="v">{{ toLose }}</div><div class="l">À perdre (kg)</div></div>
        <div class="kpi"><div class="v">{{ bmi }}</div><div class="l">IMC</div></div>
        <div class="kpi"><div class="v">{{ doneTotal }}</div><div class="l">Exos validés</div></div>
      </div>
    </div>

    <div class="card">
      <h3 class="meal-title" style="margin-bottom:6px">Hydratation du jour</h3>
      <p class="section-sub" style="color:var(--ink-soft);margin-bottom:14px">Objectif : 8 verres (~2 L).</p>
      <div class="water-grid">
        <div v-for="n in 8" :key="n" class="water-cup" :class="{ full: n <= profile.waterCups }" @click="setCup(n)">
        </div>
      </div>
      <p style="margin-top:12px;font-size:0.86rem;color:var(--ink-soft)">
        {{ profile.waterCups }} / 8 verres · {{ (profile.waterCups * 0.25).toFixed(2) }} L
      </p>
    </div>

    <div class="card">
      <h3 class="meal-title" style="margin-bottom:6px">Activité du jour</h3>
      <div class="meal-meta" style="margin-top:10px">
        <span><Icon name="dumbbell" /> {{ doneToday }} exercice{{ doneToday > 1 ? 's' : '' }} validé{{ doneToday > 1 ? 's' : '' }} aujourd'hui</span>
      </div>
      <p style="margin-top:10px;font-size:0.86rem;color:var(--ink-soft)">
        Coche tes exercices dans l'onglet Sport pour suivre tes séances.
      </p>
    </div>

    <div class="notice">
      <Icon name="leaf" />
      <div>La régularité bat l'intensité. Vise la constance sur des petites séances plutôt que des efforts intenses ponctuels — c'est ce qui protège ton dos et installe l'habitude.</div>
    </div>
  </div>
</template>
