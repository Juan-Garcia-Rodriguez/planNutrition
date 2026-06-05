// Recettes véganes orientées perte de poids — macros approximatives par portion
export const recipes = [

  // ─── Petit-déjeuner ───────────────────────────────────────────────────────
  {
    id: 'porridge-cacao',
    tag: 'Petit-déjeuner',
    title: 'Porridge avoine, cacao & graines de chia',
    time: 10, servings: 1,
    kcal: 340, prot: 14, carb: 48, fat: 11,
    ingredients: [
      { n: 'Flocons d\'avoine', q: '50 g' },
      { n: 'Lait de soja non sucré', q: '220 ml' },
      { n: 'Graines de chia', q: '1 c. à soupe' },
      { n: 'Cacao non sucré', q: '1 c. à café' },
      { n: 'Banane', q: '1/2' },
      { n: 'Beurre de cacahuète', q: '1 c. à café' }
    ],
    steps: [
      'Verser l\'avoine, le lait de soja et le cacao dans une casserole.',
      'Cuire 5 min à feu doux en remuant jusqu\'à épaississement.',
      'Hors du feu, incorporer les graines de chia, laisser reposer 2 min.',
      'Garnir de banane tranchée et d\'une pointe de beurre de cacahuète.'
    ]
  },
  {
    id: 'tofu-scramble',
    tag: 'Petit-déjeuner',
    title: 'Tofu brouillé épinards & curcuma',
    time: 12, servings: 1,
    kcal: 300, prot: 24, carb: 12, fat: 17,
    ingredients: [
      { n: 'Tofu ferme', q: '150 g' },
      { n: 'Épinards frais', q: '60 g' },
      { n: 'Curcuma', q: '1/2 c. à café' },
      { n: 'Levure maltée', q: '1 c. à soupe' },
      { n: 'Oignon', q: '1/4' },
      { n: 'Huile d\'olive', q: '1 c. à café' }
    ],
    steps: [
      'Émietter le tofu à la fourchette.',
      'Faire revenir l\'oignon dans l\'huile 2 min.',
      'Ajouter le tofu, le curcuma et la levure maltée, cuire 5 min.',
      'Incorporer les épinards jusqu\'à ce qu\'ils fondent. Saler, poivrer.'
    ]
  },
  {
    id: 'smoothie-bowl-acai',
    tag: 'Petit-déjeuner',
    title: 'Smoothie bowl açaï & fruits rouges',
    time: 8, servings: 1,
    kcal: 310, prot: 10, carb: 52, fat: 8,
    ingredients: [
      { n: 'Purée d\'açaï surgelée', q: '100 g' },
      { n: 'Banane congelée', q: '1' },
      { n: 'Lait de soja', q: '60 ml' },
      { n: 'Myrtilles', q: '50 g' },
      { n: 'Framboises', q: '40 g' },
      { n: 'Granola sans sucre ajouté', q: '20 g' },
      { n: 'Graines de chanvre', q: '1 c. à soupe' }
    ],
    steps: [
      'Mixer l\'açaï, la banane congelée et le lait de soja jusqu\'à consistance épaisse.',
      'Verser dans un bol et lisser la surface.',
      'Disposer les fruits rouges, le granola et les graines de chanvre.',
      'Servir immédiatement.'
    ]
  },
  {
    id: 'toast-avocat',
    tag: 'Petit-déjeuner',
    title: 'Toast avocat, tomates & graines de tournesol',
    time: 7, servings: 1,
    kcal: 355, prot: 12, carb: 38, fat: 18,
    ingredients: [
      { n: 'Pain complet', q: '2 tranches' },
      { n: 'Avocat mûr', q: '1/2' },
      { n: 'Tomates cerises', q: '80 g' },
      { n: 'Graines de tournesol', q: '1 c. à soupe' },
      { n: 'Jus de citron', q: '1 c. à café' },
      { n: 'Flocons de piment', q: 'une pincée' }
    ],
    steps: [
      'Toaster le pain.',
      'Écraser l\'avocat avec le jus de citron, sel et poivre.',
      'Tartiner généreusement sur les toasts.',
      'Couper les tomates cerises en deux, disposer sur l\'avocat.',
      'Parsemer de graines de tournesol et de flocons de piment.'
    ]
  },
  {
    id: 'pancakes-banane',
    tag: 'Petit-déjeuner',
    title: 'Pancakes protéinés banane & avoine',
    time: 15, servings: 1,
    kcal: 360, prot: 16, carb: 54, fat: 9,
    ingredients: [
      { n: 'Banane mûre', q: '1' },
      { n: 'Flocons d\'avoine mixés', q: '60 g' },
      { n: 'Protéines de pois en poudre', q: '20 g' },
      { n: 'Lait de soja', q: '80 ml' },
      { n: 'Levure chimique', q: '1/2 c. à café' },
      { n: 'Sirop d\'érable', q: '1 c. à café' }
    ],
    steps: [
      'Mixer tous les ingrédients sauf le sirop jusqu\'à obtenir une pâte lisse.',
      'Chauffer une poêle antiadhésive légèrement huilée à feu moyen.',
      'Verser des petites louches de pâte, cuire 2 min par côté.',
      'Servir avec un filet de sirop d\'érable.'
    ]
  },
  {
    id: 'overnight-oats',
    tag: 'Petit-déjeuner',
    title: 'Overnight oats vanille, mangue & passion',
    time: 5, servings: 1,
    kcal: 330, prot: 13, carb: 51, fat: 9,
    ingredients: [
      { n: 'Flocons d\'avoine', q: '50 g' },
      { n: 'Lait de soja vanille', q: '150 ml' },
      { n: 'Yaourt de soja nature', q: '80 g' },
      { n: 'Graines de chia', q: '1 c. à soupe' },
      { n: 'Mangue', q: '80 g' },
      { n: 'Fruit de la passion', q: '1' }
    ],
    steps: [
      'Mélanger avoine, lait de soja, yaourt et graines de chia dans un bocal.',
      'Couvrir et réfrigérer toute la nuit (minimum 6 h).',
      'Le matin, couper la mangue en dés.',
      'Garnir avec la mangue et la pulpe du fruit de la passion.'
    ]
  },
  {
    id: 'bowl-sarrasin-kiwi',
    tag: 'Petit-déjeuner',
    title: 'Bowl sarrasin soufflé, kiwi & noix de cajou',
    time: 5, servings: 1,
    kcal: 345, prot: 11, carb: 50, fat: 12,
    ingredients: [
      { n: 'Sarrasin soufflé', q: '40 g' },
      { n: 'Yaourt de coco nature', q: '120 g' },
      { n: 'Kiwi', q: '2' },
      { n: 'Noix de cajou', q: '15 g' },
      { n: 'Miel d\'agave', q: '1 c. à café' },
      { n: 'Zeste de citron vert', q: '1/2' }
    ],
    steps: [
      'Verser le yaourt de coco dans un bol.',
      'Éplucher et trancher les kiwis.',
      'Disposer le sarrasin soufflé, les kiwis et les noix de cajou.',
      'Arroser d\'agave et râper le zeste de citron vert.'
    ]
  },

  // ─── Déjeuner ─────────────────────────────────────────────────────────────
  {
    id: 'buddha-pois-chiche',
    tag: 'Déjeuner',
    title: 'Buddha bowl quinoa & pois chiches rôtis',
    time: 25, servings: 1,
    kcal: 480, prot: 21, carb: 62, fat: 16,
    ingredients: [
      { n: 'Quinoa cuit', q: '120 g' },
      { n: 'Pois chiches', q: '120 g' },
      { n: 'Brocoli', q: '100 g' },
      { n: 'Carotte râpée', q: '50 g' },
      { n: 'Tahini', q: '1 c. à soupe' },
      { n: 'Citron', q: '1/2' },
      { n: 'Paprika fumé', q: '1/2 c. à café' }
    ],
    steps: [
      'Rôtir les pois chiches avec le paprika 18 min à 200°C.',
      'Cuire le brocoli à la vapeur 6 min.',
      'Mélanger le tahini avec le jus de citron et un peu d\'eau pour la sauce.',
      'Dresser le quinoa, légumes et pois chiches, napper de sauce.'
    ]
  },
  {
    id: 'lentilles-curry',
    tag: 'Déjeuner',
    title: 'Dahl de lentilles corail au lait de coco',
    time: 30, servings: 2,
    kcal: 420, prot: 19, carb: 55, fat: 13,
    ingredients: [
      { n: 'Lentilles corail', q: '150 g' },
      { n: 'Lait de coco allégé', q: '150 ml' },
      { n: 'Tomates concassées', q: '200 g' },
      { n: 'Oignon', q: '1' },
      { n: 'Ail', q: '2 gousses' },
      { n: 'Curry en poudre', q: '1 c. à soupe' },
      { n: 'Épinards', q: '80 g' }
    ],
    steps: [
      'Faire revenir oignon et ail, ajouter le curry.',
      'Ajouter lentilles, tomates et 300 ml d\'eau, cuire 18 min.',
      'Verser le lait de coco, mijoter 5 min.',
      'Incorporer les épinards en fin de cuisson.'
    ]
  },
  {
    id: 'wrap-tempeh',
    tag: 'Déjeuner',
    title: 'Wrap de tempeh grillé & légumes marinés',
    time: 20, servings: 1,
    kcal: 460, prot: 26, carb: 50, fat: 17,
    ingredients: [
      { n: 'Tempeh', q: '120 g' },
      { n: 'Tortilla de blé complet', q: '1 grande' },
      { n: 'Poivron rouge', q: '1/2' },
      { n: 'Concombre', q: '1/3' },
      { n: 'Sauce soja', q: '1 c. à soupe' },
      { n: 'Ail en poudre', q: '1/2 c. à café' },
      { n: 'Avocat', q: '1/4' },
      { n: 'Houmous', q: '2 c. à soupe' }
    ],
    steps: [
      'Trancher le tempeh et le mariner dans la sauce soja et l\'ail 5 min.',
      'Griller le tempeh à la poêle 3 min par côté.',
      'Tartiner la tortilla d\'houmous.',
      'Garnir de tempeh, poivron, concombre et avocat, rouler serré.'
    ]
  },
  {
    id: 'taboulee-choufleur',
    tag: 'Déjeuner',
    title: 'Taboulé de chou-fleur & herbes fraîches',
    time: 15, servings: 2,
    kcal: 280, prot: 9, carb: 32, fat: 14,
    ingredients: [
      { n: 'Chou-fleur', q: '400 g' },
      { n: 'Tomates', q: '2' },
      { n: 'Concombre', q: '1/2' },
      { n: 'Persil frais', q: '30 g' },
      { n: 'Menthe fraîche', q: '10 g' },
      { n: 'Jus de citron', q: '2 c. à soupe' },
      { n: 'Huile d\'olive', q: '2 c. à soupe' },
      { n: 'Pois chiches', q: '80 g' }
    ],
    steps: [
      'Mixer le chou-fleur en petits grains style semoule.',
      'Couper tomates et concombre en petits dés.',
      'Hacher finement persil et menthe.',
      'Mélanger tous les ingrédients, assaisonner et réfrigérer 10 min avant de servir.'
    ]
  },
  {
    id: 'riz-tofu-teriyaki',
    tag: 'Déjeuner',
    title: 'Bol riz brun, tofu teriyaki & brocoli',
    time: 25, servings: 1,
    kcal: 500, prot: 27, carb: 64, fat: 14,
    ingredients: [
      { n: 'Riz brun cuit', q: '150 g' },
      { n: 'Tofu ferme', q: '150 g' },
      { n: 'Brocoli', q: '120 g' },
      { n: 'Sauce soja', q: '2 c. à soupe' },
      { n: 'Sirop d\'érable', q: '1 c. à soupe' },
      { n: 'Vinaigre de riz', q: '1 c. à café' },
      { n: 'Fécule de maïs', q: '1 c. à café' },
      { n: 'Sésame', q: '1 c. à café' }
    ],
    steps: [
      'Mélanger sauce soja, sirop d\'érable, vinaigre et fécule pour la sauce teriyaki.',
      'Saisir le tofu en dés 5 min, verser la sauce et caraméliser 2 min.',
      'Cuire le brocoli à la vapeur 5 min.',
      'Dresser le riz, le tofu laqué et le brocoli. Parsemer de sésame.'
    ]
  },
  {
    id: 'soupe-pois-patate',
    tag: 'Déjeuner',
    title: 'Soupe de pois cassés & patate douce',
    time: 35, servings: 2,
    kcal: 380, prot: 20, carb: 60, fat: 6,
    ingredients: [
      { n: 'Pois cassés jaunes', q: '150 g' },
      { n: 'Patate douce', q: '200 g' },
      { n: 'Oignon', q: '1' },
      { n: 'Ail', q: '2 gousses' },
      { n: 'Cumin en poudre', q: '1 c. à café' },
      { n: 'Coriandre fraîche', q: '10 g' },
      { n: 'Bouillon de légumes', q: '700 ml' }
    ],
    steps: [
      'Faire revenir oignon et ail avec le cumin 3 min.',
      'Ajouter les pois cassés, la patate douce en dés et le bouillon.',
      'Cuire à couvert 25 min jusqu\'à ce que les pois soient fondants.',
      'Mixer partiellement, ajuster l\'assaisonnement, garnir de coriandre.'
    ]
  },
  {
    id: 'salade-lentilles-beluga',
    tag: 'Déjeuner',
    title: 'Salade lentilles beluga, betterave & noix',
    time: 20, servings: 1,
    kcal: 430, prot: 18, carb: 48, fat: 19,
    ingredients: [
      { n: 'Lentilles beluga cuites', q: '150 g' },
      { n: 'Betterave cuite', q: '100 g' },
      { n: 'Roquette', q: '40 g' },
      { n: 'Noix', q: '20 g' },
      { n: 'Oignon rouge', q: '1/4' },
      { n: 'Vinaigre balsamique', q: '1 c. à soupe' },
      { n: 'Huile d\'olive', q: '1 c. à soupe' },
      { n: 'Moutarde de Dijon', q: '1 c. à café' }
    ],
    steps: [
      'Couper la betterave en dés et l\'oignon rouge en fines lamelles.',
      'Préparer la vinaigrette : mélanger vinaigre, moutarde et huile.',
      'Mélanger lentilles, betterave, roquette et oignon.',
      'Arroser de vinaigrette, parsemer de noix concassées.'
    ]
  },

  // ─── Dîner ────────────────────────────────────────────────────────────────
  {
    id: 'wok-tofu',
    tag: 'Dîner',
    title: 'Wok de tofu, edamame & légumes croquants',
    time: 20, servings: 1,
    kcal: 390, prot: 28, carb: 30, fat: 16,
    ingredients: [
      { n: 'Tofu ferme', q: '150 g' },
      { n: 'Edamame écossés', q: '60 g' },
      { n: 'Poivron', q: '1/2' },
      { n: 'Champignons', q: '80 g' },
      { n: 'Sauce soja', q: '1 c. à soupe' },
      { n: 'Gingembre frais', q: '1 cm' },
      { n: 'Huile de sésame', q: '1 c. à café' }
    ],
    steps: [
      'Saisir le tofu en dés jusqu\'à coloration.',
      'Ajouter légumes, edamame et gingembre, sauter 6 min à feu vif.',
      'Déglacer à la sauce soja, finir avec l\'huile de sésame.'
    ]
  },
  {
    id: 'soupe-miso',
    tag: 'Dîner',
    title: 'Soupe miso, nouilles soba & tofu soyeux',
    time: 15, servings: 1,
    kcal: 320, prot: 18, carb: 44, fat: 7,
    ingredients: [
      { n: 'Nouilles soba', q: '60 g' },
      { n: 'Pâte de miso', q: '1,5 c. à soupe' },
      { n: 'Tofu soyeux', q: '100 g' },
      { n: 'Algues wakamé', q: '1 c. à café' },
      { n: 'Champignons shiitake', q: '40 g' },
      { n: 'Oignon vert', q: '1' }
    ],
    steps: [
      'Cuire les soba selon le paquet, réserver.',
      'Chauffer 400 ml d\'eau (sans bouillir), dissoudre le miso.',
      'Ajouter shiitake, wakamé et tofu en dés, chauffer 3 min.',
      'Servir sur les nouilles, parsemer d\'oignon vert.'
    ]
  },
  {
    id: 'curry-pois-chiches-epinards',
    tag: 'Dîner',
    title: 'Curry de pois chiches, épinards & coco',
    time: 25, servings: 2,
    kcal: 410, prot: 17, carb: 48, fat: 16,
    ingredients: [
      { n: 'Pois chiches', q: '240 g' },
      { n: 'Épinards surgelés', q: '150 g' },
      { n: 'Lait de coco', q: '200 ml' },
      { n: 'Tomates concassées', q: '200 g' },
      { n: 'Oignon', q: '1' },
      { n: 'Ail', q: '2 gousses' },
      { n: 'Garam masala', q: '1,5 c. à café' },
      { n: 'Gingembre frais', q: '1 cm' }
    ],
    steps: [
      'Faire revenir l\'oignon, l\'ail et le gingembre 3 min.',
      'Ajouter le garam masala et cuire 1 min.',
      'Incorporer les tomates, les pois chiches et le lait de coco, mijoter 12 min.',
      'Ajouter les épinards, cuire 3 min. Servir avec du riz ou du pain naan.'
    ]
  },
  {
    id: 'pad-thai-tofu',
    tag: 'Dîner',
    title: 'Pad thaï de nouilles de riz & tofu',
    time: 25, servings: 1,
    kcal: 450, prot: 22, carb: 58, fat: 15,
    ingredients: [
      { n: 'Nouilles de riz larges', q: '80 g' },
      { n: 'Tofu ferme', q: '120 g' },
      { n: 'Pousses de soja', q: '80 g' },
      { n: 'Carotte', q: '1 petite' },
      { n: 'Sauce tamari', q: '2 c. à soupe' },
      { n: 'Jus de citron vert', q: '1 c. à soupe' },
      { n: 'Beurre de cacahuète', q: '1 c. à soupe' },
      { n: 'Cacahuètes', q: '15 g' },
      { n: 'Oignon vert', q: '2' }
    ],
    steps: [
      'Tremper les nouilles dans l\'eau chaude 8 min, égoutter.',
      'Mélanger tamari, jus de citron vert et beurre de cacahuète pour la sauce.',
      'Saisir le tofu en dés, ajouter la carotte râpée et les pousses de soja 3 min.',
      'Ajouter les nouilles et la sauce, mélanger à feu vif. Garnir de cacahuètes et d\'oignon vert.'
    ]
  },
  {
    id: 'gratin-patate-douce',
    tag: 'Dîner',
    title: 'Gratin de patate douce & haricots blancs',
    time: 40, servings: 2,
    kcal: 370, prot: 14, carb: 55, fat: 10,
    ingredients: [
      { n: 'Patates douces', q: '400 g' },
      { n: 'Haricots blancs', q: '200 g' },
      { n: 'Lait de soja non sucré', q: '150 ml' },
      { n: 'Levure maltée', q: '2 c. à soupe' },
      { n: 'Ail', q: '2 gousses' },
      { n: 'Thym', q: '2 branches' },
      { n: 'Huile d\'olive', q: '1 c. à soupe' }
    ],
    steps: [
      'Préchauffer le four à 190°C.',
      'Couper les patates douces en rondelles fines.',
      'Mélanger les haricots avec l\'ail écrasé, le lait de soja et la levure maltée.',
      'Alterner couches de patates et de haricots dans un plat huilé. Ajouter le thym.',
      'Enfourner 30 min jusqu\'à ce que le dessus soit doré.'
    ]
  },
  {
    id: 'bol-sarrasin-champignons',
    tag: 'Dîner',
    title: 'Bol de sarrasin, champignons & sauce miso',
    time: 20, servings: 1,
    kcal: 350, prot: 14, carb: 50, fat: 10,
    ingredients: [
      { n: 'Sarrasin cuit', q: '130 g' },
      { n: 'Champignons de Paris', q: '150 g' },
      { n: 'Pak choï', q: '100 g' },
      { n: 'Pâte de miso blanche', q: '1 c. à soupe' },
      { n: 'Sauce soja', q: '1 c. à café' },
      { n: 'Gingembre frais', q: '1 cm' },
      { n: 'Huile de sésame', q: '1 c. à café' },
      { n: 'Sésame grillé', q: '1 c. à café' }
    ],
    steps: [
      'Mélanger miso, sauce soja et gingembre râpé pour la sauce.',
      'Faire revenir les champignons tranchés à feu vif 5 min.',
      'Ajouter le pak choï, cuire 3 min.',
      'Dresser le sarrasin, les légumes, napper de sauce miso et parsemer de sésame.'
    ]
  },
  {
    id: 'tacos-haricots-noirs',
    tag: 'Dîner',
    title: 'Tacos de haricots noirs & salsa avocat',
    time: 20, servings: 1,
    kcal: 430, prot: 17, carb: 55, fat: 16,
    ingredients: [
      { n: 'Tortillas de maïs', q: '3' },
      { n: 'Haricots noirs', q: '150 g' },
      { n: 'Avocat', q: '1/2' },
      { n: 'Tomate', q: '1' },
      { n: 'Oignon rouge', q: '1/4' },
      { n: 'Coriandre fraîche', q: '10 g' },
      { n: 'Cumin', q: '1/2 c. à café' },
      { n: 'Jus de citron vert', q: '1 c. à soupe' }
    ],
    steps: [
      'Écraser grossièrement les haricots noirs avec le cumin, saler.',
      'Préparer la salsa : couper tomate et oignon en petits dés, mélanger avec la coriandre et le citron.',
      'Écraser l\'avocat avec un peu de sel et de citron.',
      'Chauffer les tortillas, garnir de haricots, guacamole et salsa.'
    ]
  },

  // ─── Collation ────────────────────────────────────────────────────────────
  {
    id: 'energy-balls',
    tag: 'Collation',
    title: 'Energy balls dattes & amandes',
    time: 10, servings: 6,
    kcal: 110, prot: 3, carb: 14, fat: 5,
    ingredients: [
      { n: 'Dattes dénoyautées', q: '100 g' },
      { n: 'Amandes', q: '50 g' },
      { n: 'Flocons d\'avoine', q: '30 g' },
      { n: 'Cacao non sucré', q: '1 c. à soupe' }
    ],
    steps: [
      'Mixer tous les ingrédients jusqu\'à obtenir une pâte.',
      'Former 6 boules, réfrigérer 30 min.'
    ]
  },
  {
    id: 'houmous-crudites',
    tag: 'Collation',
    title: 'Houmous maison & bâtonnets de légumes',
    time: 8, servings: 2,
    kcal: 180, prot: 7, carb: 18, fat: 9,
    ingredients: [
      { n: 'Pois chiches', q: '150 g' },
      { n: 'Tahini', q: '1 c. à soupe' },
      { n: 'Citron', q: '1/2' },
      { n: 'Ail', q: '1 gousse' },
      { n: 'Carotte / concombre', q: '150 g' }
    ],
    steps: [
      'Mixer pois chiches, tahini, citron et ail avec un peu d\'eau.',
      'Servir avec les bâtonnets de légumes.'
    ]
  },
  {
    id: 'yaourt-soja-granola',
    tag: 'Collation',
    title: 'Yaourt de soja, granola & myrtilles',
    time: 3, servings: 1,
    kcal: 200, prot: 8, carb: 28, fat: 7,
    ingredients: [
      { n: 'Yaourt de soja nature', q: '150 g' },
      { n: 'Granola aux noix', q: '25 g' },
      { n: 'Myrtilles fraîches', q: '50 g' },
      { n: 'Miel d\'agave', q: '1 c. à café' }
    ],
    steps: [
      'Verser le yaourt dans un bol.',
      'Ajouter le granola et les myrtilles.',
      'Arroser d\'un filet de sirop d\'agave.'
    ]
  },
  {
    id: 'galette-riz-amande',
    tag: 'Collation',
    title: 'Galettes de riz, purée d\'amande & banane',
    time: 3, servings: 1,
    kcal: 165, prot: 4, carb: 25, fat: 6,
    ingredients: [
      { n: 'Galettes de riz soufflé', q: '3' },
      { n: 'Purée d\'amande', q: '1 c. à soupe' },
      { n: 'Banane', q: '1/2' },
      { n: 'Cannelle', q: 'une pincée' }
    ],
    steps: [
      'Étaler la purée d\'amande sur les galettes.',
      'Trancher la banane et disposer les rondelles.',
      'Saupoudrer de cannelle.'
    ]
  },
  {
    id: 'mix-noix-cranberries',
    tag: 'Collation',
    title: 'Mix de noix, cranberries & graines de citrouille',
    time: 2, servings: 1,
    kcal: 190, prot: 5, carb: 16, fat: 13,
    ingredients: [
      { n: 'Noix mélangées (cajou, noix, noisettes)', q: '25 g' },
      { n: 'Cranberries séchées', q: '15 g' },
      { n: 'Graines de citrouille', q: '10 g' },
      { n: 'Chocolat noir 85%', q: '1 carré (5 g)' }
    ],
    steps: [
      'Mélanger toutes les noix, les cranberries et les graines dans un bol.',
      'Ajouter le carré de chocolat émietté.',
      'Servir en en-cas ou emporter dans un petit sachet.'
    ]
  },
  {
    id: 'edamame-fleur-sel',
    tag: 'Collation',
    title: 'Edamame vapeur & fleur de sel',
    time: 6, servings: 1,
    kcal: 150, prot: 12, carb: 11, fat: 6,
    ingredients: [
      { n: 'Edamame en cosse (surgelé)', q: '150 g' },
      { n: 'Fleur de sel', q: 'une pincée' },
      { n: 'Jus de citron', q: '1/2 c. à café' },
      { n: 'Flocons de piment (optionnel)', q: 'une pincée' }
    ],
    steps: [
      'Cuire les edamame à la vapeur 5 min ou selon le paquet.',
      'Égoutter et déposer dans un bol.',
      'Assaisonner de fleur de sel, citron et éventuellement de piment.'
    ]
  },
  {
    id: 'smoothie-proteine',
    tag: 'Collation',
    title: 'Smoothie protéiné banane, cacao & amande',
    time: 5, servings: 1,
    kcal: 220, prot: 15, carb: 28, fat: 6,
    ingredients: [
      { n: 'Banane congelée', q: '1' },
      { n: 'Protéines de pois chocolat', q: '20 g' },
      { n: 'Lait d\'amande non sucré', q: '200 ml' },
      { n: 'Cacao non sucré', q: '1 c. à café' },
      { n: 'Beurre de cacahuète', q: '1/2 c. à café' }
    ],
    steps: [
      'Mixer tous les ingrédients jusqu\'à consistance lisse et crémeuse.',
      'Servir immédiatement ou réfrigérer jusqu\'à 2 h.'
    ]
  }
]

// Modèle de journée type (références aux recettes)
export const dayPlan = [
  { slot: 'Petit-déjeuner', options: ['porridge-cacao', 'tofu-scramble', 'smoothie-bowl-acai', 'overnight-oats'] },
  { slot: 'Déjeuner', options: ['buddha-pois-chiche', 'lentilles-curry', 'wrap-tempeh', 'riz-tofu-teriyaki'] },
  { slot: 'Collation', options: ['energy-balls', 'houmous-crudites', 'edamame-fleur-sel', 'smoothie-proteine'] },
  { slot: 'Dîner', options: ['wok-tofu', 'soupe-miso', 'curry-pois-chiches-epinards', 'pad-thai-tofu'] }
]
