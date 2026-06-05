<script setup>
import { ref, computed } from 'vue'
import { weekPlan, safetyNotes } from '../data/workouts.js'
import { profile } from '../composables/useProfile.js'
import Icon from '../components/Icon.vue'

const activeId = ref(weekPlan[0].id)
const active = computed(() => weekPlan.find(d => d.id === activeId.value))

const today = new Date().toISOString().slice(0, 10)
function key(ex) { return `${today}-${activeId.value}-${ex}` }
function isDone(ex) { return !!profile.done[key(ex)] }
function toggleDone(ex) {
  const k = key(ex)
  if (profile.done[k]) delete profile.done[k]
  else profile.done[k] = true
}

const doneCount = computed(() =>
  active.value.exercises.filter((e, i) => isDone(i)).length)

const flagLabel = { back: safetyNotes.back, leg: safetyNotes.leg, ankle: safetyNotes.ankle }
const flagShort = { back: 'Dos protégé', leg: 'Appui prudent', ankle: 'Sans impact' }
</script>

<template>
  <div class="stagger">
    <div class="notice">
      <Icon name="shield" />
      <div><strong>Programme adapté</strong> à tes contraintes : hernie L4-L5, neuropathie jambe gauche, malléole droite.
      Aucun saut, colonne préservée, charges progressives. Stoppe tout mouvement douloureux.</div>
    </div>

    <div>
      <h2 class="section-title">Programme de la semaine</h2>
      <p class="section-sub">5 séances + 2 jours de récupération.</p>
      <div class="day-pills">
        <div v-for="d in weekPlan" :key="d.id" class="day-pill"
             :class="{ on: activeId===d.id, rest: d.rest }" @click="activeId=d.id">
          {{ d.day }}<small>{{ d.rest ? 'repos' : d.type }}</small>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div :key="activeId" class="card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
          <div>
            <span class="meal-tag">{{ active.type }}</span>
            <h3 class="meal-title">{{ active.title }}</h3>
          </div>
          <div class="meal-meta" style="margin-top:0">
            <span v-if="active.duration"><Icon name="clock" /> ~{{ active.duration }} min</span>
            <span v-if="active.exercises.length" style="color:var(--leaf);font-weight:600">
              {{ doneCount }}/{{ active.exercises.length }} fait
            </span>
          </div>
        </div>
        <p style="color:var(--ink-soft);font-size:0.9rem;margin-top:10px">{{ active.intro }}</p>

        <div v-if="active.exercises.length" style="margin-top:10px">
          <div v-for="(ex, i) in active.exercises" :key="i" class="ex">
            <div class="ex-num"
                 :style="isDone(i) ? 'background:var(--leaf);color:#fff' : ''"
                 @click="toggleDone(i)" style="cursor:pointer">
              <Icon v-if="isDone(i)" name="check" style="width:18px;height:18px" />
              <span v-else>{{ i + 1 }}</span>
            </div>
            <div class="ex-body">
              <div class="ex-name">{{ ex.name }}</div>
              <div class="ex-sets">{{ ex.sets }}</div>
              <div class="ex-cue">{{ ex.cue }}</div>
              <span v-for="f in ex.flags" :key="f" class="safe-flag" :title="flagLabel[f]" style="margin-right:6px">
                <Icon name="shield" /> {{ flagShort[f] }}
              </span>
            </div>
          </div>
        </div>
        <div v-else class="empty">
          <Icon name="leaf" />
          <p>Profite de ta journée de repos. La récupération fait partie des progrès.</p>
        </div>
      </div>
    </transition>
  </div>
</template>
