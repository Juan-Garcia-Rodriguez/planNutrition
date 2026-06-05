// Programme adapté : hernie discale L4-L5, neuropathie jambe gauche, plaque malléole droite.
// Principes : préserver la colonne (gainage neutre, pas de flexion/charge axiale lourde),
// faible impact (pas de saut), travail unilatéral prudent, mobilité quotidienne.

export const safetyNotes = {
  back: 'Dos neutre — pas de flexion chargée ni de rotation brusque (hernie L4-L5).',
  leg: 'Contrôle de l\'équilibre — appui prudent jambe gauche (neuropathie).',
  ankle: 'Pas d\'impact ni de saut — cheville droite ménagée (plaque malléole).'
}

// 5 jours-types : 2 renforcement doux, 2 musculation adaptée, mobilité + repos actifs
export const weekPlan = [
  {
    id: 'mob',
    day: 'Lun',
    title: 'Mobilité & réveil du dos',
    type: 'Mobilité douce',
    duration: 25,
    intro: 'Séance quotidienne possible. Aucun impact, focus colonne et hanches.',
    exercises: [
      { name: 'Bascule du bassin au sol (pelvic tilt)', sets: '2 × 12', cue: 'Allongée, plaquer le bas du dos au sol en douceur.', flags: ['back'] },
      { name: 'Chat-vache lent', sets: '2 × 10', cue: 'À quatre pattes, mouvement ample et contrôlé, sans forcer.', flags: ['back'] },
      { name: 'Étirement piriforme', sets: '2 × 30s/côté', cue: 'Décompresse le nerf sciatique, utile pour la jambe.', flags: ['leg'] },
      { name: 'Ouverture de hanche (90/90)', sets: '2 × 8/côté', cue: 'Mobilité hanche sans contrainte cheville.', flags: [] },
      { name: 'Respiration diaphragmatique', sets: '5 min', cue: 'Active le transverse, gaine la colonne naturellement.', flags: ['back'] }
    ]
  },
  {
    id: 'upper',
    day: 'Mar',
    title: 'Haut du corps — haltères',
    type: 'Renforcement',
    duration: 35,
    intro: 'Assise ou debout dos neutre. Charges modérées, exécution lente.',
    exercises: [
      { name: 'Développé épaules assise (haltères)', sets: '3 × 12', cue: 'Dos calé, gainage actif, ne pas cambrer.', flags: ['back'] },
      { name: 'Rowing buste penché léger / appui banc', sets: '3 × 12', cue: 'Un genou en appui, dos plat — évite la charge axiale.', flags: ['back'] },
      { name: 'Curl biceps', sets: '3 × 12', cue: 'Coudes fixes, tempo contrôlé.', flags: [] },
      { name: 'Extension triceps au-dessus de la tête', sets: '3 × 12', cue: 'Gainage abdominal pour stabiliser le dos.', flags: ['back'] },
      { name: 'Élévations latérales (élastique)', sets: '3 × 15', cue: 'Mouvement fluide, épaules basses.', flags: [] }
    ]
  },
  {
    id: 'core',
    day: 'Mer',
    title: 'Gainage sécurisé & stabilité',
    type: 'Core protecteur',
    duration: 30,
    intro: 'Gainage anti-flexion. Aucune situation type "crunch" qui sollicite L4-L5.',
    exercises: [
      { name: 'Gainage planche (genoux si besoin)', sets: '3 × 25s', cue: 'Bassin verrouillé, ligne droite épaules-hanches.', flags: ['back'] },
      { name: 'Dead bug', sets: '3 × 10', cue: 'Bas du dos collé au sol en permanence.', flags: ['back'] },
      { name: 'Bird-dog', sets: '3 × 8/côté', cue: 'Stabilité du tronc, mouvements lents et contrôlés.', flags: ['back'] },
      { name: 'Pont fessier', sets: '3 × 12', cue: 'Pousse dans les talons, renforce sans charger la colonne.', flags: ['leg'] },
      { name: 'Gainage latéral genoux', sets: '2 × 20s/côté', cue: 'Renforce les obliques sans rotation lombaire.', flags: ['back'] }
    ]
  },
  {
    id: 'lower',
    day: 'Jeu',
    title: 'Bas du corps — sans impact',
    type: 'Renforcement',
    duration: 35,
    intro: 'Pas de saut. Amplitude maîtrisée pour ménager cheville droite et jambe gauche.',
    exercises: [
      { name: 'Squat sur chaise (box squat)', sets: '3 × 12', cue: 'S\'asseoir/se relever, dos droit, contrôle de l\'appui.', flags: ['leg', 'back'] },
      { name: 'Soulevé de terre roumain léger (haltères)', sets: '3 × 10', cue: 'Charnière de hanche, dos PLAT impératif, charge légère.', flags: ['back'] },
      { name: 'Fente arrière contrôlée (appui mur)', sets: '2 × 8/côté', cue: 'Tenir un appui pour l\'équilibre, descente lente.', flags: ['leg', 'ankle'] },
      { name: 'Élévation mollet assise', sets: '3 × 15', cue: 'Sans impact, renforce autour de la cheville droite.', flags: ['ankle'] },
      { name: 'Abduction hanche (élastique)', sets: '3 × 15/côté', cue: 'Renforce les fessiers, stabilise le bassin.', flags: ['leg'] }
    ]
  },
  {
    id: 'cardio',
    day: 'Ven',
    title: 'Cardio doux & étirements',
    type: 'Cardio faible impact',
    duration: 30,
    intro: 'Zéro impact articulaire. Idéal pour la dépense sans agresser cheville/dos.',
    exercises: [
      { name: 'Marche rapide ou vélo d\'appartement', sets: '20 min', cue: 'Intensité modérée, respiration régulière.', flags: ['ankle'] },
      { name: 'Step-touch latéral (sans saut)', sets: '3 × 1 min', cue: 'Reste fluide, garde l\'équilibre.', flags: ['leg'] },
      { name: 'Étirement chaîne postérieure', sets: '3 × 30s', cue: 'Doux, sans à-coup sur le bas du dos.', flags: ['back'] },
      { name: 'Étirement mollets & cheville', sets: '2 × 30s/côté', cue: 'Mobilité articulaire de la cheville droite.', flags: ['ankle'] }
    ]
  },
  {
    id: 'rest1',
    day: 'Sam',
    title: 'Repos actif',
    type: 'Récupération',
    duration: 15,
    rest: true,
    intro: 'Marche tranquille 20-30 min + mobilité libre. Écoute ton corps.',
    exercises: [
      { name: 'Marche en extérieur', sets: '20-30 min', cue: 'Allure de conversation.', flags: [] },
      { name: 'Mobilité libre / étirements', sets: '10 min', cue: 'Reprends les mouvements qui font du bien au dos.', flags: ['back'] }
    ]
  },
  {
    id: 'rest2',
    day: 'Dim',
    title: 'Repos complet',
    type: 'Récupération',
    duration: 0,
    rest: true,
    intro: 'Journée off. Le repos fait partie du progrès.',
    exercises: []
  }
]
