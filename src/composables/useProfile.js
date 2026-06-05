import { reactive, computed, watch } from 'vue'

const STORAGE_KEY = 'renouveau-profil-v1'

const defaults = {
  sex: 'femme',
  age: 32,
  height: 165,
  weight: 75,
  targetWeight: 65,
  activity: 1.3,        // sédentaire->léger
  pace: 'douce',        // douce | moderee | recomp
  diet: 'vegan',
  equipment: ['halteres'],
  injuries: ['dos', 'jambe', 'cheville'],
  waterCups: 0,
  done: {}              // { 'YYYY-MM-DD-exId': true }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...defaults, ...JSON.parse(raw) }
  } catch (e) { /* ignore */ }
  return { ...defaults }
}

export const profile = reactive(load())

watch(profile, (val) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(val)) } catch (e) { /* ignore */ }
}, { deep: true })

// Mifflin-St Jeor
export const bmr = computed(() => {
  const { sex, weight, height, age } = profile
  const base = 10 * weight + 6.25 * height - 5 * age
  return Math.round(sex === 'homme' ? base + 5 : base - 161)
})

export const tdee = computed(() => Math.round(bmr.value * profile.activity))

// Déficit selon le rythme
export const deficit = computed(() => {
  if (profile.pace === 'douce') return 300
  if (profile.pace === 'moderee') return 500
  return 250 // recomp : déficit léger + protéines hautes
})

export const calorieTarget = computed(() => Math.max(1200, tdee.value - deficit.value))

// Répartition macro (g) — protéines hautes pour préserver le muscle
export const macroTarget = computed(() => {
  const kcal = calorieTarget.value
  const protG = Math.round(profile.weight * (profile.pace === 'recomp' ? 1.8 : 1.6))
  const fatG = Math.round((kcal * 0.27) / 9)
  const carbKcal = kcal - (protG * 4) - (fatG * 9)
  const carbG = Math.max(60, Math.round(carbKcal / 4))
  return { kcal, prot: protG, carb: carbG, fat: fatG }
})

export const bmi = computed(() => {
  const h = profile.height / 100
  return +(profile.weight / (h * h)).toFixed(1)
})

export function resetProfile() {
  Object.assign(profile, { ...defaults })
}
