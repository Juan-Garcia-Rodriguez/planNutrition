# Renouveau — Nutrition & Sport

Application Vue 3 (Vite) responsive (ordinateur + téléphone) pour se remettre au sport et perdre du poids en douceur.

## Fonctionnalités

- **Profil** : sexe, âge, taille, poids, objectif, régime, matériel, blessures. Calcul automatique des besoins caloriques (Mifflin-St Jeor) et des macros.
- **Nutrition** : journée type végane modifiable (repas interchangeables), recettes complètes avec ingrédients, étapes et macros, bilan calories/macros vs objectif.
- **Sport** : programme hebdomadaire adapté aux contraintes (hernie L4-L5, neuropathie jambe gauche, malléole droite) — sans impact, colonne protégée. Suivi des exercices validés.
- **Progrès** : poids, IMC, hydratation, exercices accomplis. Données sauvegardées localement (localStorage).

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production (dossier dist/)
npm run preview  # prévisualiser le build
```

Ouvre l'URL affichée (par défaut http://localhost:5173).

## Pile technique

- Vue 3 (`<script setup>`)
- Vite
- CSS pur (design system par variables), zéro dépendance UI.

## Avertissement

Les informations (calories, macros, exercices) sont des estimations à but informatif et **ne constituent pas un avis médical**. Avec une hernie discale et des séquelles, faites valider votre programme par un médecin ou kinésithérapeute.
