// Séances de yoga adaptées : hernie L4-L5, neuropathie jambe gauche, plaque malléole droite.
// Principes : aucune flexion lombaire forcée, appui mural disponible, amplitude maîtrisée.

export const yogaSessions = [
  {
    id: 'matin',
    label: 'Matin',
    title: 'Réveil en douceur',
    duration: 20,
    level: 'Doux',
    intro: 'Idéal au saut du lit. Transitions lentes, respiration guidée, aucun impact.',
    poses: [
      {
        name: 'Respiration 4-4-4',
        sanskrit: 'Sama Vritti Pranayama',
        hold: '3 min',
        cue: 'Assis en tailleur, inspire 4 temps, retiens 4, expire 4. Mains posées sur les genoux.'
      },
      {
        name: 'Chat-vache',
        sanskrit: 'Marjaryasana · Bitilasana',
        hold: '2 × 10 rép.',
        cue: 'À quatre pattes, dos en arrondi (expire) puis en creux (inspire). Mouvement lié au souffle.',
        flags: ['back']
      },
      {
        name: 'Chien tête en bas',
        sanskrit: 'Adho Mukha Svanasana',
        hold: '3 × 20 s',
        cue: 'Genoux légèrement fléchis, talons vers le sol, colonne allongée. Relâche la nuque.',
        flags: ['back']
      },
      {
        name: 'Guerrier I',
        sanskrit: 'Virabhadrasana I',
        hold: '2 × 30 s/côté',
        cue: 'Pied arrière à 45°, bassin de face, appui mural conseillé pour l\'équilibre côté gauche.',
        flags: ['leg', 'ankle']
      },
      {
        name: 'Torsion assise douce',
        sanskrit: 'Parivrtta Sukhasana',
        hold: '2 × 30 s/côté',
        cue: 'Allonge la colonne avant de tourner. La rotation part de la cage thoracique, pas des lombaires.',
        flags: ['back']
      },
      {
        name: 'Posture de l\'enfant',
        sanskrit: 'Balasana',
        hold: '2 min',
        cue: 'Bras tendus ou le long du corps, front au sol ou sur un coussin. Souffle dans le bas du dos.',
        flags: ['back']
      }
    ]
  },
  {
    id: 'dos',
    label: 'Dos',
    title: 'Soulager le bas du dos',
    duration: 25,
    level: 'Thérapeutique',
    intro: 'Séance ciblée L4-L5. Décompression lombaire, mobilité du sacrum, aucune flexion forcée.',
    poses: [
      {
        name: 'Bascule du bassin',
        sanskrit: 'Apana Mudra',
        hold: '2 × 12 rép.',
        cue: 'Allongée, genoux fléchis. Plaquer doucement le bas du dos au sol puis relâcher.',
        flags: ['back']
      },
      {
        name: 'Genoux-poitrine',
        sanskrit: 'Apanasana',
        hold: '2 min',
        cue: 'Ramène les deux genoux. Fais de petits cercles pour masser le sacrum. Respiration lente.',
        flags: ['back']
      },
      {
        name: 'Pont de yoga',
        sanskrit: 'Setu Bandhasana',
        hold: '3 × 30 s',
        cue: 'Talons sous les genoux, pousse dans les pieds, fessiers contractés. Colonne neutre, pas cambrer.',
        flags: ['back', 'ankle']
      },
      {
        name: 'Pigeon modifié au sol',
        sanskrit: 'Eka Pada Raja Kapotasana (modifié)',
        hold: '2 × 1 min/côté',
        cue: 'Jambe avant fléchie au sol, coussin sous la fesse si besoin. Respecte tes limites sans forcer.',
        flags: ['leg', 'ankle']
      },
      {
        name: 'Jambe levée avec sangle',
        sanskrit: 'Supta Padangusthasana',
        hold: '2 × 30 s/côté',
        cue: 'Allongée, ceinture ou serviette autour du pied. Jambe levée sans forcer, bas du dos collé au sol.',
        flags: ['back']
      },
      {
        name: 'Torsion reclinée',
        sanskrit: 'Supta Matsyendrasana',
        hold: '2 × 1 min/côté',
        cue: 'Genou plié vers le sol opposé, épaules restent au sol. Regard inverse. Amplitude douce.',
        flags: ['back']
      },
      {
        name: 'Savasana',
        sanskrit: 'Savasana',
        hold: '3 min',
        cue: 'Petite serviette roulée sous les genoux si besoin. Relâchement total, respiration libre.'
      }
    ]
  },
  {
    id: 'detente',
    label: 'Détente',
    title: 'Soir — Lâcher prise',
    duration: 30,
    level: 'Restauratif',
    intro: 'Séance de fin de journée. Postures longues, souffle profond, activation du système parasympathique.',
    poses: [
      {
        name: 'Jambes au mur',
        sanskrit: 'Viparita Karani',
        hold: '5 min',
        cue: 'Bassin proche du mur, jambes levées. Main sur le ventre, main sur la poitrine. Abandonne le poids.',
        flags: ['ankle']
      },
      {
        name: 'Papillon',
        sanskrit: 'Baddha Konasana',
        hold: '3 min',
        cue: 'Plantes de pieds jointes, dos droit ou légèrement incliné. Coussin sous les genoux si besoin.',
        flags: ['leg']
      },
      {
        name: 'Happy Baby',
        sanskrit: 'Ananda Balasana',
        hold: '2 min',
        cue: 'Saisir l\'extérieur des pieds ou les chevilles, genoux vers les aisselles. Balancement latéral doux.',
        flags: ['back']
      },
      {
        name: 'Torsion reclinée profonde',
        sanskrit: 'Supta Matsyendrasana',
        hold: '2 × 2 min/côté',
        cue: 'Laisse les deux épaules s\'ancrer. Expire pour aller un peu plus loin dans la rotation.',
        flags: ['back']
      },
      {
        name: 'Posture de l\'enfant étendu',
        sanskrit: 'Utthita Balasana',
        hold: '2 min',
        cue: 'Bras étirés devant, front au sol ou sur les poings. Souffle dans le bas du dos.',
        flags: ['back']
      },
      {
        name: 'Yoga nidra',
        sanskrit: 'Savasana',
        hold: '5 min',
        cue: 'Scanner ton corps des pieds à la tête. Relâche chaque zone consciemment à chaque expiration.'
      }
    ]
  },
  {
    id: 'force',
    label: 'Force',
    title: 'Force & équilibre doux',
    duration: 30,
    level: 'Modéré',
    intro: 'Renforcement musculaire en douceur. Appui mural disponible pour toutes les postures d\'équilibre.',
    poses: [
      {
        name: 'Chaise',
        sanskrit: 'Utkatasana',
        hold: '3 × 30 s',
        cue: 'Genoux dans l\'axe des orteils, dos droit, bras levés ou mains sur les hanches. Expire en montant.',
        flags: ['leg', 'back']
      },
      {
        name: 'Guerrier II',
        sanskrit: 'Virabhadrasana II',
        hold: '3 × 30 s/côté',
        cue: 'Bras en croix, genou avant à 90° dans l\'axe du pied. Appui mural conseillé côté gauche.',
        flags: ['leg', 'ankle']
      },
      {
        name: 'Demi-guerrier',
        sanskrit: 'Viparita Virabhadrasana',
        hold: '2 × 20 s/côté',
        cue: 'Depuis Guerrier II, bras arrière glisse sur la jambe, bras avant s\'étire vers le plafond.',
        flags: ['back']
      },
      {
        name: 'Planche de yoga',
        sanskrit: 'Phalakasana',
        hold: '3 × 20 s',
        cue: 'Gainage complet, dos plat, épaules au-dessus des poignets. Version sur les genoux si besoin.',
        flags: ['back']
      },
      {
        name: 'Cobra doux',
        sanskrit: 'Bhujangasana',
        hold: '3 × 20 s',
        cue: 'Mains sous les épaules, coudes légèrement fléchis, poitrine qui s\'ouvre sans forcer les lombaires.',
        flags: ['back']
      },
      {
        name: 'Arbre',
        sanskrit: 'Vrikshasana',
        hold: '2 × 30 s/côté',
        cue: 'Pied sur la cheville ou le mollet (jamais le genou). Appui mural impératif côté jambe gauche.',
        flags: ['leg', 'ankle']
      }
    ]
  },
  {
    id: 'pranayama',
    label: 'Souffle',
    title: 'Pranayama & méditation',
    duration: 15,
    level: 'Tous niveaux',
    intro: 'Séance de respiration. Peut se pratiquer assis, allongé, ou n\'importe où. Calme immédiat du système nerveux.',
    poses: [
      {
        name: 'Respiration abdominale',
        sanskrit: 'Diaphragmatic Breathing',
        hold: '3 min',
        cue: 'Main sur le ventre, inspire : le ventre gonfle en premier. Expire : ventre rentre lentement.'
      },
      {
        name: 'Respiration complète (3 temps)',
        sanskrit: 'Dirga Pranayama',
        hold: '3 min',
        cue: 'Inspire ventre → côtes → poitrine. Expire poitrine → côtes → ventre. Vague lente et fluide.'
      },
      {
        name: 'Respiration alternée',
        sanskrit: 'Nadi Shodhana',
        hold: '5 min',
        cue: 'Pouce bouche narine droite, inspire par la gauche. Annulaire bouche gauche, expire par la droite.'
      },
      {
        name: 'Respiration Ujjayi',
        sanskrit: 'Ujjayi Pranayama',
        hold: '3 min',
        cue: 'Légère contraction à la gorge, bruit de vague. Inspire et expire uniquement par le nez.'
      },
      {
        name: 'Méditation silencieuse',
        sanskrit: 'Dhyana',
        hold: '1 min',
        cue: 'Observe les sensations sans les juger. Si l\'esprit s\'échappe, reviens doucement au souffle.'
      }
    ]
  },
  {
    id: 'yin',
    label: 'Yin',
    title: 'Yin — Récupération profonde',
    duration: 40,
    level: 'Doux / Long',
    intro: 'Postures tenues longtemps pour les fascias et les articulations. Abandon total, aucun effort musculaire.',
    poses: [
      {
        name: 'Dragon bas',
        sanskrit: 'Low Dragon · Anjaneyasana',
        hold: '3 min/côté',
        cue: 'Genou arrière au sol, bassin qui descend. Un blocage est normal ; une douleur aiguë = stop.',
        flags: ['leg', 'ankle']
      },
      {
        name: 'Papillon yin',
        sanskrit: 'Baddha Konasana Yin',
        hold: '5 min',
        cue: 'Plantes jointes, buste qui s\'abandonne vers l\'avant sur un coussin. Aucun effort musculaire.',
        flags: ['back']
      },
      {
        name: 'Libellule',
        sanskrit: 'Dragonfly · Upavistha Konasana',
        hold: '5 min',
        cue: 'Jambes écartées, buste vers l\'avant sur coussin ou avant-bras au sol. Ajuste par petits mouvements.',
        flags: ['leg']
      },
      {
        name: 'Demi-selle',
        sanskrit: 'Half Saddle · Ardha Virasana',
        hold: '3 min/côté',
        cue: 'Un genou fléchi pied au côté, l\'autre jambe tendue. Ne force pas vers l\'arrière si douleur au genou.',
        flags: ['leg', 'ankle']
      },
      {
        name: 'Torsion supine profonde',
        sanskrit: 'Supta Matsyendrasana Yin',
        hold: '3 min/côté',
        cue: 'Laisse la gravité travailler. Coussin sous le genou pour réduire l\'intensité si besoin.',
        flags: ['back']
      },
      {
        name: 'Savasana — Yoga nidra',
        sanskrit: 'Savasana',
        hold: '5 min',
        cue: 'Couverture optionnelle. Scanner le corps de bas en haut, laisser chaque zone se liquéfier.'
      }
    ]
  }
]
