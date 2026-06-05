<script setup>
import { ref, computed } from 'vue'
import { yogaSessions } from '../data/yoga.js'
import { profile } from '../composables/useProfile.js'
import Icon from '../components/Icon.vue'

const activeId = ref(yogaSessions[0].id)
const active = computed(() => yogaSessions.find(s => s.id === activeId.value))

const today = new Date().toISOString().slice(0, 10)
function key(i) { return `yoga-${today}-${activeId.value}-${i}` }
function isDone(i) { return !!profile.done[key(i)] }
function toggleDone(i) {
  const k = key(i)
  if (profile.done[k]) delete profile.done[k]
  else profile.done[k] = true
}

const doneCount = computed(() =>
  active.value.poses.filter((_, i) => isDone(i)).length)

const flagLabel = {
  back: 'Dos neutre — pas de flexion lombaire forcée (hernie L4-L5).',
  leg: 'Contrôle de l\'équilibre — appui prudent jambe gauche (neuropathie).',
  ankle: 'Amplitude réduite — cheville droite ménagée (plaque malléole).'
}
const flagShort = { back: 'Dos protégé', leg: 'Appui prudent', ankle: 'Cheville douce' }
</script>

<template>
  <div class="stagger">
    <div class="notice">
      <Icon name="shield" />
      <div><strong>Yoga adapté</strong> à tes contraintes : hernie L4-L5, neuropathie jambe gauche, malléole droite.
      Utilise un appui mural pour l\'équilibre, un coussin pour les postures au sol. Stoppe tout mouvement douloureux.</div>
    </div>

    <div>
      <h2 class="section-title">Choisir une séance</h2>
      <p class="section-sub">6 séances pour tous les moments de la journée.</p>
      <div class="day-pills">
        <div v-for="s in yogaSessions" :key="s.id"
             class="day-pill" :class="{ on: activeId === s.id }"
             @click="activeId = s.id">
          {{ s.label }}<small>{{ s.duration }} min</small>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div :key="activeId" class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
          <div>
            <span class="yoga-level-tag">{{ active.level }}</span>
            <h3 class="meal-title" style="margin-top:6px">{{ active.title }}</h3>
          </div>
          <div class="meal-meta" style="margin-top:0">
            <span><Icon name="clock" /> {{ active.duration }} min</span>
            <span v-if="active.poses.length" style="color:var(--berry);font-weight:600">
              {{ doneCount }}/{{ active.poses.length }} postures
            </span>
          </div>
        </div>
        <p style="color:var(--ink-soft);font-size:0.9rem;margin-top:10px">{{ active.intro }}</p>

        <div style="margin-top:16px;display:flex;flex-direction:column;gap:10px">
          <div v-for="(pose, i) in active.poses" :key="i" class="yoga-pose"
               :class="{ done: isDone(i) }">
            <div class="yoga-check" @click="toggleDone(i)">
              <Icon v-if="isDone(i)" name="check" style="width:16px;height:16px" />
              <span v-else>{{ i + 1 }}</span>
            </div>
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
                <span class="yoga-name">{{ pose.name }}</span>
                <span class="yoga-hold">{{ pose.hold }}</span>
              </div>
              <div class="yoga-sanskrit">{{ pose.sanskrit }}</div>
              <div class="yoga-cue">{{ pose.cue }}</div>
              <div v-if="pose.flags?.length" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">
                <span v-for="f in pose.flags" :key="f" class="safe-flag" :title="flagLabel[f]">
                  <Icon name="shield" /> {{ flagShort[f] }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="doneCount === active.poses.length && active.poses.length > 0"
             class="yoga-complete">
          Séance terminée — bien joué !
        </div>
      </div>
    </transition>
  </div>
</template>
