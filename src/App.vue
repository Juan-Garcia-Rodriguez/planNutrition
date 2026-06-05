<script setup>
import { ref, computed } from 'vue'
import Icon from './components/Icon.vue'
import ProfileView from './views/ProfileView.vue'
import NutritionView from './views/NutritionView.vue'
import WorkoutView from './views/WorkoutView.vue'
import ProgressView from './views/ProgressView.vue'

const tabs = [
  { id: 'nutrition', label: 'Nutrition', icon: 'bowl', comp: NutritionView },
  { id: 'sport', label: 'Sport', icon: 'dumbbell', comp: WorkoutView },
  { id: 'progres', label: 'Progrès', icon: 'chart', comp: ProgressView },
  { id: 'profil', label: 'Profil', icon: 'user', comp: ProfileView }
]
const active = ref('nutrition')
const current = computed(() => tabs.find(t => t.id === active.value).comp)

const heroText = {
  nutrition: { e: 'Plan nutritionnel', t: 'Manger <em>vivant</em>, mincir en douceur', p: 'Des repas 100% végétaux pensés pour la perte de poids, avec recettes et macros détaillées.' },
  sport: { e: 'Programme adapté', t: 'Bouger <em>sans</em> se blesser', p: 'Des séances conçues autour de tes contraintes : dos, jambe et cheville protégés.' },
  progres: { e: 'Suivi', t: 'Avancer, <em>un jour</em> à la fois', p: 'Garde un œil sur ton poids, ton hydratation et tes séances accomplies.' },
  profil: { e: 'Configuration', t: 'Ton plan, <em>à ta mesure</em>', p: 'Ajuste tes données : tout le reste de l\'application s\'adapte instantanément.' }
}
const hero = computed(() => heroText[active.value])
</script>

<template>
  <div class="app">
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-mark"><Icon name="leaf" style="color:#fff" /></div>
          <div>
            <div class="brand-name">Renouveau</div>
            <div class="brand-sub">Nutrition & Sport</div>
          </div>
        </div>
        <nav class="nav-desktop">
          <button v-for="t in tabs" :key="t.id" class="nav-btn" :class="{ active: active===t.id }" @click="active=t.id">
            <Icon :name="t.icon" /> {{ t.label }}
          </button>
        </nav>
      </div>
    </header>

    <div class="shell">
      <section class="hero">
        <div class="hero-eyebrow">{{ hero.e }}</div>
        <h1 v-html="hero.t"></h1>
        <p>{{ hero.p }}</p>
      </section>

      <transition name="fade" mode="out-in">
        <component :is="current" :key="active" />
      </transition>

      <p class="footer-note">
        Renouveau · application personnelle de remise en forme.<br>
        Les informations fournies ne constituent pas un avis médical. Consulte un professionnel de santé.
      </p>
    </div>

    <nav class="nav-mobile">
      <button v-for="t in tabs" :key="t.id" :class="{ active: active===t.id }" @click="active=t.id">
        <Icon :name="t.icon" /> {{ t.label }}
      </button>
    </nav>
  </div>
</template>
