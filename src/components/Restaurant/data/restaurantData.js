// меню ресторана
// Последнее обновление: февраль 2026

// Функция для создания данных с учетом i18next
export const getRestaurantData = (t) => {
  // Безопасная функция перевода
  const safeT = (key, fallback) => {
    try {
      return t ? t(key, fallback) : fallback;
    } catch (error) {
      console.warn('Translation error:', error);
      return fallback;
    }
  };
  // Данные блюд для меню организованные по категориям
  const menuItems = [
    // ===============================
    // ЗАВТРАКИ / BREAKFAST (с 8:00 до 12:00)
    // ===============================
    {
      id: 1,
      name: safeT('restaurant.menu.items.kaif_breakfast.name', 'Завтрак KAIF · KAIF Breakfast'),
      description: safeT('restaurant.menu.items.kaif_breakfast.description', 'Яйца / эмменталь / ростбиф / черри / хлеб · Eggs / emmental / roast beef / cherry / bread'),
      price: '450 THB',
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      tags: ['breakfast', 'popular'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 43,
      name: safeT('restaurant.menu.items.buckwheat_chicken_mushrooms.name', 'Гречка с цыпленком · Buckwheat with Chicken'),
      description: safeT('restaurant.menu.items.buckwheat_chicken_mushrooms.description', 'Гречка / цыпленок / соус пармезан · Buckwheat / chicken / parmesan sauce'),
      price: '285 THB',
      image: '/images/menu/breakfast/grechka.jpg',
      tags: ['breakfast', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 2,
      name: safeT('restaurant.menu.items.oatmeal_apple_almonds.name', 'Овсянка на кокосовом молоке · Coconut Oatmeal'),
      description: safeT('restaurant.menu.items.oatmeal_apple_almonds.description', 'Овсянка / манго / мед / орехи · Oatmeal / mango / honey / nuts'),
      price: '210 THB',
      image: '/images/menu/breakfast/oatmeal-breakfast.jpg',
      tags: ['breakfast', 'sweet', 'healthy', 'vegan'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 3,
      name: safeT('restaurant.menu.items.shakshuka_spinach_salmon.name', 'Скрэмбл с лососем · Scramble with Salmon'),
      description: safeT('restaurant.menu.items.shakshuka_spinach_salmon.description', 'Скрэмбл / риет лосося / черри / хлеб · Scramble / salmon rillette / cherry / bread'),
      price: '310 THB',
      image: '/images/menu/breakfast/Shakshuka-salmon.jpg',
      tags: ['breakfast', 'seafood'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 5,
      name: safeT('restaurant.menu.items.toast_salmon_avocado.name', 'Тост с лососем · Salmon Toast'),
      description: safeT('restaurant.menu.items.toast_salmon_avocado.description', 'Лосось / скрэмбл / гуакамоле / салат · Salmon / scramble / guacamole / salad'),
      price: '370 THB',
      image: '/images/menu/breakfast/tostlos.jpg',
      tags: ['breakfast', 'seafood'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 6,
      name: safeT('restaurant.menu.items.homemade_granola.name', 'Домашняя гранола · Homemade Granola'),
      description: safeT('restaurant.menu.items.homemade_granola.description', 'Гранола / лабне / ягоды · Granola / labneh / berries'),
      price: '310 THB',
      image: null,
      tags: ['breakfast', 'healthy', 'vegan'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 7,
      name: safeT('restaurant.menu.items.syrniki_passion_fruit.name', 'Сырники · Cottage Cheese Pancakes'),
      description: safeT('restaurant.menu.items.syrniki_passion_fruit.description', 'Сырники / сметана / манго джем · Syrniki / sour cream / mango jam'),
      price: '290 THB',
      image: '/images/menu/breakfast/sirniki.jpg',
      tags: ['breakfast', 'sweet'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 44,
      name: safeT('restaurant.menu.items.potato_pancakes.name', 'Драники · Potato Pancakes'),
      description: safeT('restaurant.menu.items.potato_pancakes.description', 'Драники / грибной соус · Potato pancakes / mushroom sauce'),
      price: '230 THB',
      image: null,
      tags: ['breakfast'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 45,
      name: safeT('restaurant.menu.items.eggs_benedict.name', 'Яйца Бенедикт · Eggs Benedict'),
      description: safeT('restaurant.menu.items.eggs_benedict.description', 'Классические яйца Бенедикт · Classic Eggs Benedict'),
      price: '390 THB',
      image: null,
      tags: ['breakfast', 'popular'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 46,
      name: safeT('restaurant.menu.items.waffles.name', 'Вафли · Waffles'),
      description: safeT('restaurant.menu.items.waffles.description', 'Вафли / соленая карамель / мороженое · Waffles / salted caramel / ice cream'),
      price: '190 THB',
      image: null,
      tags: ['breakfast', 'sweet'],
      popular: false,
      category: 'breakfast'
    },

    // ===============================
    // СУПЫ / SOUPS
    // ===============================
    {
      id: 8,
      name: safeT('restaurant.menu.items.pumpkin_soup.name', 'Тыквенный крем-суп · Pumpkin Cream Soup'),
      description: safeT('restaurant.menu.items.pumpkin_soup.description', 'Тыква / фета / семечки · Pumpkin / feta / seeds'),
      price: '210 THB',
      image: null,
      tags: ['soup', 'hot', 'vegan'],
      popular: true,
      category: 'soup'
    },
    {
      id: 47,
      name: safeT('restaurant.menu.items.minestrone.name', 'Минестроне · Minestrone'),
      description: safeT('restaurant.menu.items.minestrone.description', 'Итальянский овощной суп · Italian vegetable soup'),
      price: '190 THB',
      image: null,
      tags: ['soup', 'hot', 'vegetarian'],
      popular: false,
      category: 'soup'
    },
    {
      id: 9,
      name: safeT('restaurant.menu.items.borsch_classic.name', 'Борщ с говядиной · Borsch with Beef'),
      description: safeT('restaurant.menu.items.borsch_classic.description', 'Классический борщ · Classic Ukrainian borsch'),
      price: '310 THB',
      image: '/images/menu/soup/borsch-classic.jpg',
      tags: ['soup', 'hot'],
      popular: true,
      category: 'soup'
    },
    {
      id: 10,
      name: safeT('restaurant.menu.items.creamy_salmon.name', 'Сливочный суп с лососем · Creamy Salmon Soup'),
      description: safeT('restaurant.menu.items.creamy_salmon.description', 'Лосось / сливки · Salmon / cream'),
      price: '330 THB',
      image: null,
      tags: ['soup', 'hot', 'seafood'],
      popular: false,
      category: 'soup'
    },
    {
      id: 11,
      name: safeT('restaurant.menu.items.gazpacho_shrimp.name', 'Гаспачо с креветками · Gazpacho with Shrimp'),
      description: safeT('restaurant.menu.items.gazpacho_shrimp.description', 'Гаспачо / тар-тар креветок · Gazpacho / shrimp tartare'),
      price: '290 THB',
      image: null,
      tags: ['soup', 'cold'],
      popular: false,
      category: 'soup'
    },
    // ===============================
    // САЛАТЫ И ЗАКУСКИ / SALADS AND APPETIZERS
    // ===============================
    {
      id: 12,
      name: safeT('restaurant.menu.items.green_salad.name', 'Зелёный салат · Green Salad'),
      description: safeT('restaurant.menu.items.green_salad.description', 'Брокколи / огурцы / шпинат / эдамамэ · Broccoli / cucumber / spinach / edamame'),
      price: '310 THB',
      image: null,
      tags: ['salad', 'vegetarian', 'vegan', 'healthy'],
      popular: true,
      category: 'salad'
    },
    {
      id: 13,
      name: safeT('restaurant.menu.items.crispy_eggplant.name', 'Хрустящие баклажаны · Crispy Eggplant'),
      description: safeT('restaurant.menu.items.crispy_eggplant.description', 'Баклажаны / йогурт / орехи / чили · Eggplant / yogurt / nuts / chili'),
      price: '310 THB',
      image: null,
      tags: ['appetizer', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 14,
      name: safeT('restaurant.menu.items.caesar_chicken.name', 'Цезарь с цыплёнком · Caesar with Chicken'),
      description: safeT('restaurant.menu.items.caesar_chicken.description', 'Цыплёнок / перепелиные яйца · Chicken / quail eggs'),
      price: '350 THB',
      image: '/images/menu/salad/caesar-salad.jpg',
      tags: ['salad', 'meat'],
      popular: true,
      category: 'salad'
    },
    {
      id: 15,
      name: safeT('restaurant.menu.items.vegetable_salad.name', 'Овощной салат · Vegetable Salad'),
      description: safeT('restaurant.menu.items.vegetable_salad.description', 'Огурцы / томаты / редис / оливковое масло · Cucumber / tomato / radish / olive oil'),
      price: '190 THB',
      image: null,
      tags: ['salad', 'vegetarian', 'vegan', 'healthy'],
      popular: false,
      category: 'salad'
    },
    {
      id: 16,
      name: safeT('restaurant.menu.items.roast_beef_salad.name', 'Салат с ростбифом · Roast Beef Salad'),
      description: safeT('restaurant.menu.items.roast_beef_salad.description', 'Ростбиф / перец / огурцы / азиатская заправка · Roast beef / pepper / cucumber / Asian dressing'),
      price: '420 THB',
      image: null,
      tags: ['salad', 'meat'],
      popular: false,
      category: 'salad'
    },
    {
      id: 17,
      name: safeT('restaurant.menu.items.crispy_shrimp.name', 'Хрустящие креветки · Crispy Shrimp'),
      description: safeT('restaurant.menu.items.crispy_shrimp.description', 'Креветки / овощной мусс · Shrimp / vegetable mousse'),
      price: '420 THB',
      image: null,
      tags: ['appetizer', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 48,
      name: safeT('restaurant.menu.items.chili_con_carne.name', 'Чили кон карне · Chili con Carne'),
      description: safeT('restaurant.menu.items.chili_con_carne.description', 'Чили / копчёная сметана · Chili / smoked sour cream'),
      price: '390 THB',
      image: null,
      tags: ['appetizer', 'meat', 'spicy'],
      popular: false,
      category: 'salad'
    },
    {
      id: 18,
      name: safeT('restaurant.menu.items.big_snack_set.name', 'Большой сет снеков · Large Snack Set'),
      description: safeT('restaurant.menu.items.big_snack_set.description', 'Микс копчёной рыбы · Smoked fish mix'),
      price: '2390 THB',
      image: null,
      tags: ['appetizer', 'meat', 'seafood'],
      popular: false,
      category: 'salad'
    },
    {
      id: 19,
      name: safeT('restaurant.menu.items.small_snack_set.name', 'Малый сет снеков · Small Snack Set'),
      description: safeT('restaurant.menu.items.small_snack_set.description', 'Микс копчёной рыбы · Smoked fish mix'),
      price: '1310 THB',
      image: null,
      tags: ['appetizer', 'meat'],
      popular: false,
      category: 'salad'
    },
    // ===============================
    // БЛЮДА НА МАНГАЛЕ / DISHES ON THE MANGAL
    // ===============================
    {
      id: 20,
      name: safeT('restaurant.menu.items.chicken_kebab.name', 'Шашлык из курицы · Chicken Kebab'),
      description: safeT('restaurant.menu.items.chicken_kebab.description', 'Куриное филе на мангале · Grilled chicken fillet'),
      price: '290 THB',
      image: '/images/menu/grill/chicken_kebab.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 21,
      name: safeT('restaurant.menu.items.pork_kebab.name', 'Шашлык из свинины · Pork Kebab'),
      description: safeT('restaurant.menu.items.pork_kebab.description', 'Свинина на мангале · Grilled pork'),
      price: '310 THB',
      image: '/images/menu/grill/pork_kebab.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 22,
      name: safeT('restaurant.menu.items.lyulya_chicken.name', 'Люля-кебаб из курицы · Chicken Lula Kebab'),
      description: safeT('restaurant.menu.items.lyulya_chicken.description', 'Куриный люля-кебаб · Minced chicken kebab'),
      price: '290 THB',
      image: '/images/menu/grill/lyulya_chicken.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 23,
      name: safeT('restaurant.menu.items.lyulya_lamb.name', 'Люля-кебаб из баранины · Lamb Lula Kebab'),
      description: safeT('restaurant.menu.items.lyulya_lamb.description', 'Бараний люля-кебаб · Minced lamb kebab'),
      price: '420 THB',
      image: '/images/menu/grill/lyulya_lamb.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 24,
      name: safeT('restaurant.menu.items.lyulya_beef_pork.name', 'Люля-кебаб говядина-свинина · Beef & Pork Lula'),
      description: safeT('restaurant.menu.items.lyulya_beef_pork.description', 'Говядина и свинина · Beef and pork'),
      price: '410 THB',
      image: '/images/menu/grill/lyulya_beef_pork.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 25,
      name: safeT('restaurant.menu.items.assorted_kebabs.name', 'Ассорти шашлыков · Kebab Platter'),
      description: safeT('restaurant.menu.items.assorted_kebabs.description', 'Микс шашлыков · Mixed kebabs'),
      price: '1490 THB',
      image: '/images/menu/grill/assorted_kebabs.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 26,
      name: safeT('restaurant.menu.items.vegetables_kebab.name', 'Овощной шашлык · Vegetable Kebab'),
      description: safeT('restaurant.menu.items.vegetables_kebab.description', 'Овощи на мангале · Grilled vegetables'),
      price: '190 THB',
      image: '/images/menu/grill/vegetables_kebab.jpg',
      tags: ['grill', 'vegetarian', 'vegan'],
      popular: true,
      category: 'grill'
    },
    {
      id: 27,
      name: safeT('restaurant.menu.items.chicken_thigh_grill.name', 'Бедро цыплёнка · Grilled Chicken Thigh'),
      description: safeT('restaurant.menu.items.chicken_thigh_grill.description', 'Цыплёнок / молодой картофель · Chicken / baby potatoes'),
      price: '370 THB',
      image: '/images/menu/grill/chicken_thigh.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 49,
      name: safeT('restaurant.menu.items.pork_ribs_bbq.name', 'Свиные рёбра BBQ · BBQ Pork Ribs'),
      description: safeT('restaurant.menu.items.pork_ribs_bbq.description', 'Рёбра / кукуруза на мангале · Ribs / grilled corn'),
      price: '420 THB',
      image: null,
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    // ===============================
    // ГОРЯЧИЕ БЛЮДА / HOT DISHES
    // ===============================
    {
      id: 28,
      name: safeT('restaurant.menu.items.salmon_steak.name', 'Стейк лосося · Salmon Steak'),
      description: safeT('restaurant.menu.items.salmon_steak.description', 'Лосось / спаржа / шпинат · Salmon / asparagus / spinach'),
      price: '530 THB',
      image: null,
      tags: ['main', 'seafood'],
      popular: true,
      category: 'main'
    },
    {
      id: 29,
      name: safeT('restaurant.menu.items.sea_bass_zucchini.name', 'Сибас с цукини · Sea Bass with Zucchini'),
      description: safeT('restaurant.menu.items.sea_bass_zucchini.description', 'Сибас / цукини / белое вино · Sea bass / zucchini / white wine'),
      price: '490 THB',
      image: null,
      tags: ['main', 'seafood'],
      popular: false,
      category: 'main'
    },
    {
      id: 50,
      name: safeT('restaurant.menu.items.grilled_lobster.name', 'Лобстер на гриле · Grilled Lobster'),
      description: safeT('restaurant.menu.items.grilled_lobster.description', 'Целый лобстер на гриле · Whole grilled lobster'),
      price: '3790 THB',
      image: null,
      tags: ['main', 'seafood', 'popular'],
      popular: true,
      category: 'main'
    },
    {
      id: 51,
      name: safeT('restaurant.menu.items.wagyu_ribeye.name', 'Рибай Вагю · Wagyu Ribeye'),
      description: safeT('restaurant.menu.items.wagyu_ribeye.description', 'Стейк рибай Вагю · Wagyu ribeye steak'),
      price: '1590 THB',
      image: null,
      tags: ['main', 'meat', 'popular'],
      popular: true,
      category: 'main'
    },
    {
      id: 30,
      name: safeT('restaurant.menu.items.classic_cheeseburger.name', 'Чизбургер · Cheeseburger'),
      description: safeT('restaurant.menu.items.classic_cheeseburger.description', 'Бургер / фри с пармезаном · Burger / parmesan fries'),
      price: '450 THB',
      image: '/images/menu/burger/cheeseburger-deluxe.jpg',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'main'
    },
    {
      id: 31,
      name: safeT('restaurant.menu.items.mignon_steak.name', 'Стейк миньон · Filet Mignon'),
      description: safeT('restaurant.menu.items.mignon_steak.description', 'Миньон / пюре / соус демиглас · Mignon / mash / demi-glace'),
      price: '1190 THB',
      image: null,
      tags: ['main', 'meat'],
      popular: true,
      category: 'main'
    },
    {
      id: 32,
      name: safeT('restaurant.menu.items.fried_rice_shrimp.name', 'Рис с креветками · Fried Rice with Shrimp'),
      description: safeT('restaurant.menu.items.fried_rice_shrimp.description', 'Жареный рис / овощи / креветки · Fried rice / vegetables / shrimp'),
      price: '230 THB',
      image: null,
      tags: ['main', 'seafood'],
      popular: false,
      category: 'main'
    },
    {
      id: 52,
      name: safeT('restaurant.menu.items.chicken_schnitzel.name', 'Куриный шницель · Chicken Schnitzel'),
      description: safeT('restaurant.menu.items.chicken_schnitzel.description', 'Шницель / картофель / сальса · Schnitzel / potato / salsa'),
      price: '250 THB',
      image: null,
      tags: ['main', 'meat'],
      popular: false,
      category: 'main'
    },
    {
      id: 53,
      name: safeT('restaurant.menu.items.duck_breast.name', 'Утиная грудка · Duck Breast'),
      description: safeT('restaurant.menu.items.duck_breast.description', 'Утка / брусника / пюре батата · Duck / lingonberry / sweet potato'),
      price: '420 THB',
      image: null,
      tags: ['main', 'meat'],
      popular: false,
      category: 'main'
    },

    // ===============================
    // ГАРНИРЫ / GARNISHES
    // ===============================
    {
      id: 33,
      name: safeT('restaurant.menu.items.mashed_potatoes_truffle.name', 'Пюре с трюфелем · Truffle Mashed Potatoes'),
      description: safeT('restaurant.menu.items.mashed_potatoes_truffle.description', 'Картофель / трюфельное масло · Potato / truffle oil'),
      price: '160 THB',
      image: null,
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 34,
      name: safeT('restaurant.menu.items.broccoli_grill.name', 'Брокколи гриль · Grilled Broccoli'),
      description: safeT('restaurant.menu.items.broccoli_grill.description', 'Брокколи / йогурт / авокадо · Broccoli / yogurt / avocado'),
      price: '160 THB',
      image: null,
      tags: ['side', 'vegetarian', 'healthy'],
      popular: false,
      category: 'side'
    },
    {
      id: 35,
      name: safeT('restaurant.menu.items.steamed_rice.name', 'Рис на пару · Steamed Rice'),
      description: safeT('restaurant.menu.items.steamed_rice.description', 'Белый рис · White rice'),
      price: '80 THB',
      image: null,
      tags: ['side', 'vegetarian', 'vegan'],
      popular: false,
      category: 'side'
    },
    {
      id: 36,
      name: safeT('restaurant.menu.items.baked_potatoes_herbs.name', 'Печёный картофель · Baked Potatoes'),
      description: safeT('restaurant.menu.items.baked_potatoes_herbs.description', 'Картофель / зелень · Potato / herbs'),
      price: '160 THB',
      image: null,
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    // ===============================
    // ДЕСЕРТЫ / DESSERTS
    // ===============================
    {
      id: 37,
      name: safeT('restaurant.menu.items.napoleon.name', 'Наполеон · Napoleon Cake'),
      description: safeT('restaurant.menu.items.napoleon.description', 'Наполеон / белый шоколад · Napoleon / white chocolate'),
      price: '280 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 38,
      name: safeT('restaurant.menu.items.cheesecake_pistachio.name', 'Чизкейк · Cheesecake'),
      description: safeT('restaurant.menu.items.cheesecake_pistachio.description', 'Чизкейк / фисташковый соус · Cheesecake / pistachio sauce'),
      price: '280 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 39,
      name: safeT('restaurant.menu.items.chocolate_fondant.name', 'Шоколадный фондан · Chocolate Fondant'),
      description: safeT('restaurant.menu.items.chocolate_fondant.description', 'Фондан / мороженое / вишня · Fondant / ice cream / cherry'),
      price: '280 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 40,
      name: safeT('restaurant.menu.items.tiramisu.name', 'Тирамису · Tiramisu'),
      description: safeT('restaurant.menu.items.tiramisu.description', 'Классический тирамису · Classic tiramisu'),
      price: '280 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 41,
      name: safeT('restaurant.menu.items.coconut_pudding_chia.name', 'Кокосовый пудинг · Coconut Chia Pudding'),
      description: safeT('restaurant.menu.items.coconut_pudding_chia.description', 'Кокос / чиа / манго · Coconut / chia / mango'),
      price: '190 THB',
      image: null,
      tags: ['dessert', 'sweet', 'vegan'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 42,
      name: safeT('restaurant.menu.items.italian_gelato.name', 'Джелато · Italian Gelato'),
      description: safeT('restaurant.menu.items.italian_gelato.description', 'Ваниль / шоколад / карамель · Vanilla / chocolate / caramel'),
      price: '80 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 54,
      name: safeT('restaurant.menu.items.bonafi_pie.name', 'Банофи пай · Banoffee Pie'),
      description: safeT('restaurant.menu.items.bonafi_pie.description', 'Банан / карамель / сливки · Banana / caramel / cream'),
      price: '280 THB',
      image: null,
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },

  ];

  // Функция для группировки меню по категориям
  const getMenuByCategory = () => {
    return {
      breakfast: menuItems.filter(item => item.category === 'breakfast'),
      soup: menuItems.filter(item => item.category === 'soup'),
      salad: menuItems.filter(item => item.category === 'salad'),
      grill: menuItems.filter(item => item.category === 'grill'),
      main: menuItems.filter(item => item.category === 'main'),
      side: menuItems.filter(item => item.category === 'side'),
      dessert: menuItems.filter(item => item.category === 'dessert')
    };
  };

  // Категории меню в порядке отображения
  const menuCategories = [
    { key: 'breakfast', name: safeT('restaurant.categories.breakfast', 'Завтраки'), nameEn: 'Breakfast' },
    { key: 'soup', name: safeT('restaurant.categories.soup', 'Супы'), nameEn: 'Soups' },
    { key: 'salad', name: safeT('restaurant.categories.salad', 'Салаты и закуски'), nameEn: 'Salads and Appetizers' },
    { key: 'grill', name: safeT('restaurant.categories.grill', 'Блюда на мангале'), nameEn: 'Dishes on the Mangal' },
    { key: 'main', name: safeT('restaurant.categories.main', 'Горячие блюда'), nameEn: 'Hot Dishes' },
    { key: 'side', name: safeT('restaurant.categories.side', 'Гарниры'), nameEn: 'Garnishes' },
    { key: 'dessert', name: safeT('restaurant.categories.dessert', 'Десерты'), nameEn: 'Desserts' }
  ];

  // Данные для слайдера
  const slides = [
    {
      id: 1,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: safeT('restaurant.slider.slide1.title', 'Изысканная кухня'),
      description: safeT('restaurant.slider.slide1.description', 'Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане')
    },
    {
      id: 2,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: safeT('restaurant.slider.slide2.title', 'Атмосфера комфорта'),
      description: safeT('restaurant.slider.slide2.description', 'Наслаждайтесь едой в уютной атмосфере с видом на тропический сад')
    },
    {
      id: 3,
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      title: safeT('restaurant.slider.slide3.title', 'Свежие ингредиенты'),
      description: safeT('restaurant.slider.slide3.description', 'Мы используем только свежие и качественные ингредиенты для приготовления наших блюд')
    }
  ];

  // Стили для тегов
  const tagStyles = {
    breakfast: 'bg-orange-50 text-orange-600',
    soup: 'bg-blue-50 text-blue-600',
    salad: 'bg-green-50 text-green-600',
    appetizer: 'bg-purple-50 text-purple-600',
    grill: 'bg-red-50 text-red-600',
    main: 'bg-indigo-50 text-indigo-600',
    dessert: 'bg-pink-50 text-pink-600',
    drinks: 'bg-cyan-50 text-cyan-600',
    popular: 'bg-yellow-50 text-yellow-600',
    vegetarian: 'bg-emerald-50 text-emerald-600',
    vegan: 'bg-lime-50 text-lime-600',
    healthy: 'bg-teal-50 text-teal-600',
    spicy: 'bg-red-100 text-red-700',
    seafood: 'bg-blue-100 text-blue-700',
    meat: 'bg-amber-50 text-amber-600',
    sweet: 'bg-rose-50 text-rose-600',
    cold: 'bg-slate-50 text-slate-600',
    hot: 'bg-orange-100 text-orange-700',
    burger: 'bg-amber-100 text-amber-700',
    side: 'bg-gray-50 text-gray-600'
  };

  // Category card data for Pasture-style grid
  const categoryCards = [
    {
      key: 'breakfast',
      number: '01',
      name: safeT('restaurant.categories.breakfast', 'Завтраки'),
      description: safeT('restaurant.categories.breakfast_desc', 'Начните утро с авторских блюд от нашего шефа'),
      image: '/images-optimized/menu/breakfast/kaif-breakfast.jpg'
    },
    {
      key: 'soup',
      number: '02',
      name: safeT('restaurant.categories.soup', 'Супы'),
      description: safeT('restaurant.categories.soup_desc', 'Согревающие бульоны и кремовые классические супы'),
      image: '/images-optimized/menu/soup/borsch-classic.jpg'
    },
    {
      key: 'salad',
      number: '03',
      name: safeT('restaurant.categories.salad', 'Салаты и закуски'),
      description: safeT('restaurant.categories.salad_desc', 'Свежая зелень и изысканные закуски'),
      image: '/images-optimized/menu/salad/caesar-salad.jpg'
    },
    {
      key: 'grill',
      number: '04',
      name: safeT('restaurant.categories.grill', 'Блюда на мангале'),
      description: safeT('restaurant.categories.grill_desc', 'Шашлыки на углях и мясо на мангале'),
      image: '/images-optimized/menu/grill/chicken_kebab.jpg'
    },
    {
      key: 'main',
      number: '05',
      name: safeT('restaurant.categories.main', 'Горячие блюда'),
      description: safeT('restaurant.categories.main_desc', 'Авторские горячие блюда, приготовленные с заботой'),
      image: '/images-optimized/menu/burger/cheeseburger-deluxe.jpg'
    },
    {
      key: 'side',
      number: '06',
      name: safeT('restaurant.categories.side', 'Гарниры'),
      description: safeT('restaurant.categories.side_desc', 'Идеальное дополнение к основным блюдам'),
      image: null
    },
    {
      key: 'dessert',
      number: '07',
      name: safeT('restaurant.categories.dessert', 'Десерты'),
      description: safeT('restaurant.categories.dessert_desc', 'Сладкое завершение идеального ужина'),
      image: '/images-optimized/menu/dessert/apple.jpg'
    }
  ];

  return {
    menuItems,
    slides,
    tagStyles,
    getMenuByCategory,
    menuCategories,
    categoryCards
  };
};
