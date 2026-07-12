// Меню бара
// Последнее обновление: февраль 2025

export const getBarData = (t) => {
  const safeT = (key, fallback) => {
    try {
      return t ? t(key, fallback) : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const barItems = [
    // ===============================
    // КОКТЕЙЛИ / COCKTAILS
    // ===============================
    { id: 'b1', name: safeT('bar.items.aperol_spritz', 'Aperol Spritz'), price: '350 THB', category: 'cocktails' },
    { id: 'b2', name: safeT('bar.items.mojito', 'Mojito'), price: '350 THB', category: 'cocktails' },
    { id: 'b3', name: safeT('bar.items.negroni', 'Negroni'), price: '350 THB', category: 'cocktails' },
    { id: 'b4', name: safeT('bar.items.frozen_margarita', 'Frozen Margarita'), description: safeT('bar.items.frozen_margarita_desc', ''), price: '350 THB', category: 'cocktails' },
    { id: 'b5', name: safeT('bar.items.pina_colada', 'Pina Colada'), price: '350 THB', category: 'cocktails' },
    // Mocktails
    { id: 'b6', name: safeT('bar.items.honey_lemon', 'Honey and Lemon'), price: '120 THB', category: 'cocktails' },
    { id: 'b7', name: safeT('bar.items.mojito_nonalco', 'Mojito Without Alcohol'), price: '180 THB', category: 'cocktails' },
    { id: 'b8', name: safeT('bar.items.passion_fruit', 'Passion Fruit'), price: '170 THB', category: 'cocktails' },
    { id: 'b9', name: safeT('bar.items.pink_lemonade', 'Pink Lemonade (Premix)'), price: '120 THB', category: 'cocktails' },

    // ===============================
    // ВИНО И КРЕПКИЙ АЛКОГОЛЬ / WINE & SPIRITS
    // ===============================
    // Wine
    { id: 'b10', name: safeT('bar.items.red_wine', 'Red Wine Glass 150 ml'), price: '300 THB', category: 'wine_spirits' },
    { id: 'b11', name: safeT('bar.items.white_wine', 'White Wine Glass 150 ml'), price: '300 THB', category: 'wine_spirits' },
    { id: 'b12', name: safeT('bar.items.sparkling_glass', 'Sparkling Wine Glass 150 ml'), price: '310 THB', category: 'wine_spirits' },
    { id: 'b13', name: safeT('bar.items.sparkling_bottle', 'Sparkling Wine Bottle 750 ml'), price: '1550 THB', category: 'wine_spirits' },
    // Spirits
    { id: 'b14', name: 'Bacardi Carta Blanca 40 ml', price: '250 THB', category: 'wine_spirits' },
    { id: 'b15', name: 'Bacardi Carta Negra 40 ml', price: '250 THB', category: 'wine_spirits' },
    { id: 'b16', name: 'Ron Zacapa 23', price: '450 THB', category: 'wine_spirits' },
    { id: 'b17', name: 'Tanqueray Gin', price: '250 THB', category: 'wine_spirits' },
    { id: 'b18', name: 'Chivas Regal 40 ml', price: '250 THB', category: 'wine_spirits' },
    { id: 'b19', name: 'Grey Goose Vodka 40 ml', price: '350 THB', category: 'wine_spirits' },
    { id: 'b20', name: 'Jack Daniels 40 ml', price: '270 THB', category: 'wine_spirits' },
    { id: 'b21', name: 'Jim Beam 40 ml', price: '220 THB', category: 'wine_spirits' },
    { id: 'b22', name: 'Don Julio', price: '350 THB', category: 'wine_spirits' },
    { id: 'b23', name: 'Macallan 12 40 ml', price: '750 THB', category: 'wine_spirits' },
    { id: 'b24', name: 'Pure Vodka 40 ml', price: '120 THB', category: 'wine_spirits' },
    { id: 'b25', name: 'Hennessy VSOP', price: '600 THB', category: 'wine_spirits' },
    { id: 'b26', name: 'Martini Extra Dry Vermouth 150 ml', price: '350 THB', category: 'wine_spirits' },

    // ===============================
    // ПИВО / BEER
    // ===============================
    // Bottle
    { id: 'b27', name: 'Chang Beer 0.33', price: '110 THB', category: 'beer' },
    { id: 'b28', name: 'Corona Extra 0.33', price: '230 THB', category: 'beer' },
    { id: 'b29', name: 'Singha Beer 0.33', price: '110 THB', category: 'beer' },
    // Draft
    { id: 'b30', name: safeT('bar.items.cherry_03', 'Cherry 0.3'), price: '210 THB', category: 'beer' },
    { id: 'b31', name: safeT('bar.items.classic_lager_03', 'Classic Lager 0.3'), price: '180 THB', category: 'beer' },
    { id: 'b32', name: safeT('bar.items.german_wheat_03', 'German Wheat Beer 0.3'), price: '180 THB', category: 'beer' },
    { id: 'b33', name: safeT('bar.items.imperial_stout_03', 'Russian Imperial Stout 0.3'), price: '220 THB', category: 'beer' },
    { id: 'b34', name: safeT('bar.items.cherry_05', 'Cherry 0.5'), price: '310 THB', category: 'beer' },
    { id: 'b35', name: safeT('bar.items.classic_lager_05', 'Classic Lager 0.5'), price: '250 THB', category: 'beer' },
    { id: 'b36', name: safeT('bar.items.german_wheat_05', 'German Wheat Beer 0.5'), price: '250 THB', category: 'beer' },
    { id: 'b37', name: safeT('bar.items.imperial_stout_05', 'Russian Imperial Stout 0.5'), price: '310 THB', category: 'beer' },
    { id: 'b38', name: safeT('bar.items.tower_cherry', 'Tower Cherry 3L'), price: '1600 THB', category: 'beer' },
    { id: 'b39', name: safeT('bar.items.tower_classic', 'Tower Classic Lager 3L'), price: '1400 THB', category: 'beer' },
    { id: 'b40', name: safeT('bar.items.tower_wheat', 'Tower German Wheat 3L'), price: '1400 THB', category: 'beer' },
    { id: 'b41', name: safeT('bar.items.tower_stout', 'Tower Imperial Stout 3L'), price: '1600 THB', category: 'beer' },

    // ===============================
    // КОФЕ И ЧАЙ / COFFEE & TEA
    // ===============================
    // Coffee/Matcha
    { id: 'b42', name: safeT('bar.items.espresso', 'Espresso'), price: '90 THB', category: 'coffee_tea' },
    { id: 'b43', name: safeT('bar.items.americano', 'Americano (Hot/Iced)'), price: '100 THB', category: 'coffee_tea' },
    { id: 'b44', name: safeT('bar.items.cappuccino', 'Cappuccino (Hot/Iced)'), price: '110 THB', category: 'coffee_tea' },
    { id: 'b45', name: safeT('bar.items.bumble_coffee', 'Bumble Coffee'), price: '190 THB', category: 'coffee_tea' },
    { id: 'b46', name: safeT('bar.items.espresso_tonic', 'Espresso Tonic'), price: '135 THB', category: 'coffee_tea' },
    { id: 'b47', name: safeT('bar.items.latte', 'Latte'), price: '110 THB', category: 'coffee_tea' },
    { id: 'b48', name: safeT('bar.items.matcha_coco', 'Matcha Coco'), price: '135 THB', category: 'coffee_tea' },
    // Premium Chinese Tea
    { id: 'b49', name: safeT('bar.items.ya_bao', 'White Kidney Tea from Yunnan (Ya Bao)'), description: safeT('bar.items.ya_bao_desc', 'Harvested from ancient tea trees over 100 years old in Yunnan province. Soft, fresh and ideal for relaxation'), price: '250 THB', category: 'coffee_tea' },
    { id: 'b50', name: safeT('bar.items.tie_guan_yin', 'Light Oolong (Tie Guan Yin)'), description: safeT('bar.items.tie_guan_yin_desc', 'Famous light oolong from Southern Fujian with a delicate floral taste. Refreshes body and mind'), price: '300 THB', category: 'coffee_tea' },
    { id: 'b51', name: safeT('bar.items.da_hong_pao', 'Dark Oolong (Da Hong Pao)'), description: safeT('bar.items.da_hong_pao_desc', 'Mineral-rich oolong from Wuishan with woody and tobacco notes. Sweet, complex aftertaste'), price: '300 THB', category: 'coffee_tea' },
    { id: 'b52', name: safeT('bar.items.gaba_oolong', 'GABA Oolong (Ali Shan)'), description: safeT('bar.items.gaba_oolong_desc', 'Rich in catechins and vitamin C. Refreshing and energizing tea'), price: '350 THB', category: 'coffee_tea' },
    { id: 'b53', name: safeT('bar.items.milk_oolong', 'Milk Oolong (Nai Xiang)'), description: safeT('bar.items.milk_oolong_desc', 'Intriguing tea combinations with rich aromas'), price: '250 THB', category: 'coffee_tea' },
    { id: 'b54', name: safeT('bar.items.shu_puerh', 'Black Pu-erh (Shu Pu-erh)'), description: safeT('bar.items.shu_puerh_desc', 'Rich pu-erh with woody and nutty notes. Slightly viscous, for lovers of strong tea'), price: '250 THB', category: 'coffee_tea' },
    // Not Tea (No Caffeine)
    { id: 'b55', name: safeT('bar.items.herbal_tea', 'Herbal Collection'), description: safeT('bar.items.herbal_tea_desc', 'Aromatic herbal blend with mint, thyme and oregano. Refreshing, restorative and ideal after sauna'), price: '250 THB', category: 'coffee_tea' },
    { id: 'b56', name: safeT('bar.items.buckwheat_tea', 'Buckwheat Tea'), description: safeT('bar.items.buckwheat_tea_desc', 'Natural sweet buckwheat tea. Caffeine-free, soothing and good for children'), price: '250 THB', category: 'coffee_tea' },
    { id: 'b57', name: safeT('bar.items.ivan_tea', 'Ivan Tea'), description: safeT('bar.items.ivan_tea_desc', 'Traditional Russian herbal tea with a delicate floral-herbal taste and light honey-fruit aroma. Caffeine-free'), price: '300 THB', category: 'coffee_tea' },

    // ===============================
    // БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ / SOFT DRINKS
    // ===============================
    { id: 'b58', name: '7UP 0.325L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b59', name: 'Coca-Cola 0.325L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b60', name: safeT('bar.items.coconut', 'Coconut 1 piece'), price: '120 THB', category: 'soft_drinks' },
    { id: 'b61', name: safeT('bar.items.kvas', 'Kvas 0.5L'), price: '140 THB', category: 'soft_drinks' },
    { id: 'b62', name: 'Lipton 0.325L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b63', name: 'Mirinda 0.245L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b64', name: safeT('bar.items.mors', 'Mors 0.35L'), price: '165 THB', category: 'soft_drinks' },
    { id: 'b65', name: 'Pepsi 0.325L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b66', name: 'Red Bull 0.25L', price: '165 THB', category: 'soft_drinks' },
    { id: 'b67', name: 'Swepess 0.325L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b68', name: 'Tea Plus 0.5L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b69', name: safeT('bar.items.soda_singha', 'Soda Singha 0.33L'), price: '55 THB', category: 'soft_drinks' },
    { id: 'b70', name: 'Aura 0.5L', price: '35 THB', category: 'soft_drinks' },
    { id: 'b71', name: 'Aura 1.5L', price: '55 THB', category: 'soft_drinks' },
    { id: 'b72', name: 'Gatorade 0.5L', price: '75 THB', category: 'soft_drinks' },
    { id: 'b73', name: 'Pocari 0.5L', price: '75 THB', category: 'soft_drinks' },
    // Mineral Water
    { id: 'b74', name: safeT('bar.items.narzan', 'Narzan 0.5L'), price: '165 THB', category: 'soft_drinks' },
    { id: 'b75', name: safeT('bar.items.essentuki', 'Essentuki 1L'), price: '200 THB', category: 'soft_drinks' },
    { id: 'b76', name: 'Santa Vittorio 1L', price: '180 THB', category: 'soft_drinks' },

    // ===============================
    // СОКИ И СМУЗИ / JUICES & SMOOTHIES
    // ===============================
    { id: 'b77', name: safeT('bar.items.apple_juice', 'Apple Juice'), price: '200 THB', category: 'juices' },
    { id: 'b78', name: safeT('bar.items.apple_carrot', 'Apple/Carrot Juice'), price: '200 THB', category: 'juices' },
    { id: 'b79', name: safeT('bar.items.carrot_juice', 'Carrot Juice'), price: '200 THB', category: 'juices' },
    { id: 'b80', name: safeT('bar.items.mango_juice', 'Mango Juice'), price: '200 THB', category: 'juices' },
    { id: 'b81', name: safeT('bar.items.orange_juice', 'Orange Juice'), price: '200 THB', category: 'juices' },
    { id: 'b82', name: safeT('bar.items.pineapple_juice', 'Pineapple Juice'), price: '200 THB', category: 'juices' },
    // Smoothies
    { id: 'b83', name: safeT('bar.items.banana_shake', 'Banana Shake'), price: '190 THB', category: 'juices' },
    { id: 'b84', name: safeT('bar.items.lychee_lime', 'Lychee-Lime'), price: '190 THB', category: 'juices' },
    { id: 'b85', name: safeT('bar.items.mango_passion', 'Mango-Passionfruit'), price: '190 THB', category: 'juices' },

    // ===============================
    // ФИТНЕС И ПРОТЕИН / FITNESS & PROTEIN
    // ===============================
    { id: 'b86', name: 'BCAA / EAA', price: '100 THB', category: 'fitness' },
    { id: 'b87', name: safeT('bar.items.electrolyte', 'Electrolyte Boost'), price: '120 THB', category: 'fitness' },
    { id: 'b88', name: safeT('bar.items.fat_burning', 'Fat Burning'), price: '120 THB', category: 'fitness' },
    { id: 'b89', name: safeT('bar.items.mass_gainer', 'Mass Gainer'), price: '200 THB', category: 'fitness' },
    { id: 'b90', name: safeT('bar.items.pre_workout', 'Pre-Workout'), price: '120 THB', category: 'fitness' },
    // Protein Shakes
    { id: 'b91', name: safeT('bar.items.protein_chocolate', 'Chocolate'), description: safeT('bar.items.protein_desc', 'Protein / Almond Milk / Milk / Coconut Water'), price: '140 THB', category: 'fitness' },
    { id: 'b92', name: safeT('bar.items.protein_strawberry', 'Strawberry'), description: safeT('bar.items.protein_desc', 'Protein / Almond Milk / Milk / Coconut Water'), price: '140 THB', category: 'fitness' },
    { id: 'b93', name: safeT('bar.items.protein_vanilla', 'Vanilla'), description: safeT('bar.items.protein_desc', 'Protein / Almond Milk / Milk / Coconut Water'), price: '140 THB', category: 'fitness' },
  ];

  const barCategories = [
    {
      key: 'cocktails',
      number: '01',
      name: safeT('bar.categories.cocktails', 'Cocktails'),
      description: safeT('bar.categories.cocktails_desc', 'Alcoholic & non-alcoholic cocktails'),
    },
    {
      key: 'wine_spirits',
      number: '02',
      name: safeT('bar.categories.wine_spirits', 'Wine & Spirits'),
      description: safeT('bar.categories.wine_spirits_desc', 'Wine, whiskey, vodka, rum, gin & more'),
    },
    {
      key: 'beer',
      number: '03',
      name: safeT('bar.categories.beer', 'Beer'),
      description: safeT('bar.categories.beer_desc', 'Craft draft & bottled beer'),
    },
    {
      key: 'coffee_tea',
      number: '04',
      name: safeT('bar.categories.coffee_tea', 'Coffee & Tea'),
      description: safeT('bar.categories.coffee_tea_desc', 'Espresso, matcha & premium Chinese tea'),
    },
    {
      key: 'soft_drinks',
      number: '05',
      name: safeT('bar.categories.soft_drinks', 'Soft Drinks'),
      description: safeT('bar.categories.soft_drinks_desc', 'Soda, water & mineral water'),
    },
    {
      key: 'juices',
      number: '06',
      name: safeT('bar.categories.juices', 'Juices & Smoothies'),
      description: safeT('bar.categories.juices_desc', 'Fresh juices & smoothies'),
    },
    {
      key: 'fitness',
      number: '07',
      name: safeT('bar.categories.fitness', 'Fitness & Protein'),
      description: safeT('bar.categories.fitness_desc', 'Sports drinks & protein shakes'),
    },
  ];

  const getBarMenuByCategory = () => {
    const grouped = {};
    barItems.forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });
    return grouped;
  };

  return { barCategories, barItems, getBarMenuByCategory };
};
