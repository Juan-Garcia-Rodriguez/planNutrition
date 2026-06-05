<script setup>
import { profile, bmr, tdee, calorieTarget, macroTarget, bmi } from '../composables/useProfile.js'
import Icon from '../components/Icon.vue'

const equipmentOpts = [
  { v: 'aucun', l: 'Sans matériel' },
  { v: 'halteres', l: 'Haltères / élastiques' },
  { v: 'salle', l: 'Salle complète' },
  { v: 'cardio', l: 'Cardio extérieur' }
]
const injuryOpts = [
  { v: 'dos', l: 'Hernie / dos' },
  { v: 'jambe', l: 'Jambe / neuropathie' },
  { v: 'cheville', l: 'Cheville / malléole' },
  { v: 'epaule', l: 'Épaule / bras' }
]

function toggle(arr, v) {
  const i = arr.indexOf(v)
  if (i === -1) arr.push(v); else arr.splice(i, 1)
}
</script>

<template>
  <div class="stagger">
    <div class="card">
      <h2 class="section-title" style="color:var(--ink)">Mon profil</h2>
      <p class="section-sub" style="color:var(--ink-soft)">Tout s'adapte automatiquement à ces informations.</p>

      <div class="grid grid-2">
        <div class="field">
          <label>Sexe biologique <small>(calcul calorique)</small></label>
          <select class="input" v-model="profile.sex">
            <option value="femme">Femme</option>
            <option value="homme">Homme</option>
          </select>
        </div>
        <div class="field">
          <label>Âge</label>
          <input class="input" type="number" v-model.number="profile.age" min="14" max="100" />
        </div>
      </div>

      <div class="field">
        <label>Taille — {{ profile.height }} cm</label>
        <div class="range-row">
          <input type="range" v-model.number="profile.height" min="140" max="210" />
          <span class="range-val">{{ profile.height }} cm</span>
        </div>
      </div>

      <div class="field">
        <label>Poids actuel — {{ profile.weight }} kg</label>
        <div class="range-row">
          <input type="range" v-model.number="profile.weight" min="40" max="160" />
          <span class="range-val">{{ profile.weight }} kg</span>
        </div>
      </div>

      <div class="field">
        <label>Poids objectif — {{ profile.targetWeight }} kg</label>
        <div class="range-row">
          <input type="range" v-model.number="profile.targetWeight" min="40" max="160" />
          <span class="range-val">{{ profile.targetWeight }} kg</span>
        </div>
      </div>

      <div class="field">
        <label>Niveau d'activité quotidienne</label>
        <select class="input" v-model.number="profile.activity">
          <option :value="1.2">Sédentaire (bureau, peu de marche)</option>
          <option :value="1.3">Légèrement actif</option>
          <option :value="1.45">Modérément actif</option>
          <option :value="1.6">Très actif</option>
        </select>
      </div>

      <div class="field">
        <label>Rythme de perte de poids</label>
        <div class="chip-group">
          <span class="chip" :class="{ on: profile.pace==='douce' }" @click="profile.pace='douce'">Douce (~0,3 kg/sem)</span>
          <span class="chip" :class="{ on: profile.pace==='moderee' }" @click="profile.pace='moderee'">Modérée (~0,5 kg/sem)</span>
          <span class="chip" :class="{ on: profile.pace==='recomp' }" @click="profile.pace='recomp'">Recomposition</span>
        </div>
      </div>
    </div>

    <div class="card">
      <h3 class="meal-title" style="margin-bottom:6px">Régime & contraintes</h3>
      <div class="field">
        <label>Régime alimentaire</label>
        <select class="input" v-model="profile.diet">
          <option value="omnivore">Omnivore</option>
          <option value="vegetarien">Végétarien</option>
          <option value="vegan">Végétalien / Vegan</option>
        </select>
      </div>

      <div class="field">
        <label>Matériel / sport disponible</label>
        <div class="chip-group">
          <span v-for="o in equipmentOpts" :key="o.v" class="chip"
                :class="{ on: profile.equipment.includes(o.v) }"
                @click="toggle(profile.equipment, o.v)">{{ o.l }}</span>
        </div>
      </div>

      <div class="field" style="margin-bottom:0">
        <label>Zones à ménager (blessures / opérations)</label>
        <div class="chip-group">
          <span v-for="o in injuryOpts" :key="o.v" class="chip warn"
                :class="{ on: profile.injuries.includes(o.v) }"
                @click="toggle(profile.injuries, o.v)">{{ o.l }}</span>
        </div>
      </div>
    </div>

    <div class="card">
      <h3 class="meal-title" style="margin-bottom:14px">Tes objectifs calculés</h3>
      <div class="macro-row">
        <div class="macro kcal"><div class="v">{{ calorieTarget }}</div><div class="l">kcal / jour</div></div>
        <div class="macro prot"><div class="v">{{ macroTarget.prot }}g</div><div class="l">protéines</div></div>
        <div class="macro carb"><div class="v">{{ macroTarget.carb }}g</div><div class="l">glucides</div></div>
        <div class="macro fat"><div class="v">{{ macroTarget.fat }}g</div><div class="l">lipides</div></div>
      </div>
      <div class="meal-meta" style="margin-top:14px; color:var(--ink-soft)">
        <span>Métabolisme de base : <strong>{{ bmr }} kcal</strong></span>
        <span>Dépense estimée : <strong>{{ tdee }} kcal</strong></span>
        <span>IMC : <strong>{{ bmi }}</strong></span>
      </div>
    </div>

    <div class="notice">
      <Icon name="alert" />
      <div>Les calculs sont des estimations (formule Mifflin-St Jeor) et ne remplacent pas un avis médical.
      Avec une hernie discale et des séquelles, fais valider ton programme par ton médecin ou kinésithérapeute.</div>
    </div>
  </div>
</template>
