// Данные меню ресторана KAIF
// Последнее обновление: Май 2025

// Функция для создания данных с учетом i18next
export const getRestaurantData = (t) => {
  // Данные блюд для меню
  const menuItems = [
    // ЗАВТРАКИ (с 8:00 до 12:00)
    {
      id: 1,
      name: 'Завтрак "KAIF"',
      description: 'Фирменный завтрак нашего ресторана',
      price: '320 THB',
      image: '/images/menu/breakfast/kaif-breakfast.jpg',
      tags: ['breakfast', 'popular'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 2,
      name: 'Шакшука со шпинатом и лососем',
      description: 'Яичное блюдо с добавлением шпината и нежного лосося',
      price: '330 THB',
      image: '/images/menu/breakfast/Shakshuka-salmon.jpg',
      tags: ['breakfast', 'seafood'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 3,
      name: 'Шакшука с томатами и фетой',
      description: 'Традиционная шакшука с сочными томатами и сыром фета',
      price: '300 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['breakfast', 'vegetarian'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 4,
      name: 'Сырники со сметаной и соусом из маракуйи',
      description: 'Нежные домашние сырники с оригинальным соусом из маракуйи',
      price: '250 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['breakfast', 'sweet'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 5,
      name: 'Тост со сливочным сыром и ветчиной',
      description: 'Хрустящий тост с нежным сливочным сыром и качественной ветчиной',
      price: '250 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['breakfast', 'meat'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 6,
      name: 'Тост с соленым лососем и авокадо',
      description: 'Изысканное сочетание хрустящего тоста, нежного лосося и спелого авокадо',
      price: '330 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['breakfast', 'seafood'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 7,
      name: 'Тост с авокадо и томатами',
      description: 'Легкий и полезный завтрак из хрустящего тоста с авокадо и сочными томатами',
      price: '270 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['breakfast', 'vegetarian', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 8,
      name: 'Мацони с абрикосовым вареньем',
      description: 'Традиционный кавказский йогурт с натуральным абрикосовым вареньем',
      price: '120 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['breakfast', 'vegetarian'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 9,
      name: 'Гречневая каша с цыпленком, грибами и соусом Пармезан',
      description: 'Питательная гречневая каша с нежным цыпленком, ароматными грибами и сливочным соусом',
      price: '250 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['breakfast', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    
    // СУПЫ
    {
      id: 10,
      name: 'Окрошка на айране',
      description: 'Освежающий холодный суп на кисломолочной основе с овощами и зеленью',
      price: '270 THB',
      image: '/images/menu/breakfast/breakfast-dish.jpg',
      tags: ['soup', 'cold'],
      popular: true,
      category: 'soup'
    },
    {
      id: 11,
      name: 'Окрошка на квасе',
      description: 'Классическая окрошка на квасе с отборными овощами, яйцом и свежей зеленью',
      price: '270 THB',
      image: '/images/menu/soup/soup-dish.jpg',
      tags: ['soup', 'cold'],
      popular: false,
      category: 'soup'
    },
    {
      id: 12,
      name: 'Чихиртма с кукурузой',
      description: 'Традиционный грузинский суп с насыщенным вкусом, дополненный сладкой кукурузой',
      price: '190 THB',
      image: '/images/menu/soup/soup-dish.jpg',
      tags: ['soup', 'hot'],
      popular: false,
      category: 'soup'
    },
    {
      id: 13,
      name: 'Борщ классический',
      description: 'Традиционный славянский суп насыщенного рубинового цвета с говядиной и овощами',
      price: '270 THB',
      image: '/images/menu/soup/soup-dish.jpg',
      tags: ['soup', 'hot'],
      popular: true,
      category: 'soup'
    },
    
    // САЛАТЫ И ЗАКУСКИ
    {
      id: 14,
      name: 'Листья салата с молодым картофелем и соленым лососем',
      description: 'Свежий микс салатов с молодым картофелем и нежным соленым лососем',
      price: '360 THB',
      image: '/images/menu/soup/soup-dish.jpg',
      tags: ['salad', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 15,
      name: 'Салат из свежих овощей с брынзой',
      description: 'Традиционный салат из свежих овощей с добавлением нежной брынзы',
      price: '320 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['salad', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 16,
      name: 'Помидоры, огурцы, зелень',
      description: 'Свежие сочные помидоры и хрустящие огурцы с ароматной зеленью, заправленные по выбору сметаной или оливковым маслом',
      price: '190 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['salad', 'vegetarian', 'healthy'],
      popular: false,
      category: 'salad'
    },
    {
      id: 17,
      name: 'Хумус с печеным нутом',
      description: 'Нежный хумус с дополнительным печеным нутом для текстуры',
      price: '170 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['appetizer', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 18,
      name: 'Хумус с авокадо и томатами',
      description: 'Оригинальный хумус с добавлением спелого авокадо и свежих томатов',
      price: '250 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['appetizer', 'vegetarian', 'healthy'],
      popular: true,
      category: 'salad'
    },
    {
      id: 19,
      name: 'Хумус с креветками гриль',
      description: 'Классический хумус, дополненный сочными креветками с гриля',
      price: '390 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['appetizer', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 20,
      name: 'Хумус с куриным кебабом',
      description: 'Хумус, поданный с ароматными кусочками куриного кебаба',
      price: '250 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['appetizer', 'meat'],
      popular: false,
      category: 'salad'
    },
    {
      id: 21,
      name: 'Дзадзыки с оливками и маринованным перцем',
      description: 'Освежающий йогуртовый соус с огурцами, чесноком и зеленью, дополненный оливками и маринованным перцем',
      price: '220 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['appetizer', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    
    // БЛЮДА НА МАНГАЛЕ
    {
      id: 22,
      name: 'Кебаб из курицы (в йогурте)',
      description: 'Сочный кебаб из куриного филе, маринованного в йогурте с восточными специями',
      price: '250 THB',
      image: '/images/menu/salad/salad-dish.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 23,
      name: 'Кебаб из говядины',
      description: 'Сочный кебаб из отборной говядины, приготовленный на открытом огне',
      price: '490 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 24,
      name: 'Кебаб из свиной шеи',
      description: 'Кебаб из маринованной свиной шеи с ароматными специями',
      price: '290 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 25,
      name: 'Цыпленок в аджике с картофелем',
      description: 'Сочный цыпленок, маринованный в пикантном соусе аджика, с гарниром из молодого картофеля',
      price: '330 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 26,
      name: 'Люля-кебаб (курица)',
      description: 'Рубленый кебаб из куриного филе с добавлением ароматных специй',
      price: '250 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 27,
      name: 'Люля-кебаб (баранина)',
      description: 'Традиционный люля-кебаб из рубленой баранины с восточными специями',
      price: '390 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 28,
      name: 'Люля-кебаб (говядина и свинина)',
      description: 'Сочный люля-кебаб из смеси рубленой говядины и свинины',
      price: '370 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 29,
      name: 'Лосось на мангале',
      description: 'Нежное филе лосося, приготовленное на открытом огне',
      price: '420 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'seafood'],
      popular: true,
      category: 'grill'
    },
    {
      id: 30,
      name: 'Филе белого окуня',
      description: 'Нежное филе белого окуня, приготовленное на мангале',
      price: '390 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'seafood'],
      popular: false,
      category: 'grill'
    },
    {
      id: 31,
      name: 'Креветки на мангале',
      description: 'Сочные тигровые креветки, приготовленные на мангале с добавлением трав и чесночного масла',
      price: '490 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['grill', 'seafood'],
      popular: true,
      category: 'grill'
    },
    
    // ГАРНИРЫ
    {
      id: 32,
      name: 'Картофель фри',
      description: 'Хрустящий картофель фри, приготовленный в растительном масле',
      price: '170 THB',
      image: '/images/menu/grill/grill-dish.jpg',
      tags: ['side', 'vegetarian'],
      popular: true,
      category: 'side'
    },
    {
      id: 33,
      name: 'Картофельное пюре',
      description: 'Нежное картофельное пюре с маслом и сливками',
      price: '150 THB',
      image: '/images/menu/side/side-dish.jpg',
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 34,
      name: 'Овощи гриль',
      description: 'Ассорти из сезонных овощей, приготовленных на гриле',
      price: '250 THB',
      image: '/images/menu/side/side-dish.jpg',
      tags: ['side', 'vegetarian', 'healthy'],
      popular: true,
      category: 'side'
    },
    {
      id: 35,
      name: 'Рис с шафраном',
      description: 'Ароматный рис длиннозерный с добавлением шафрана',
      price: '150 THB',
      image: '/images/menu/side/side-dish.jpg',
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 36,
      name: 'Зеленый салат с заправкой',
      description: 'Свежий микс зелени с легкой заправкой на основе оливкового масла',
      price: '120 THB',
      image: '/images/menu/side/side-dish.jpg',
      tags: ['side', 'vegetarian', 'healthy'],
      popular: false,
      category: 'side'
    },
    
    // СОУСЫ И ХЛЕБ
    {
      id: 37,
      name: 'Томатный соус',
      description: 'Классический томатный соус с добавлением трав и специй',
      price: '70 THB',
      image: '/images/menu/side/side-dish.jpg',
      tags: ['sauce', 'vegetarian'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 38,
      name: 'Соус Тар-тар',
      description: 'Сливочный соус с добавлением корнишонов и зелени',
      price: '90 THB',
      image: '/images/menu/sauce/sauce-dish.jpg',
      tags: ['sauce', 'vegetarian'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 39,
      name: 'Соус Чимичурри',
      description: 'Традиционный аргентинский соус из зелени, чеснока и оливкового масла',
      price: '90 THB',
      image: '/images/menu/sauce/sauce-dish.jpg',
      tags: ['sauce', 'vegetarian'],
      popular: true,
      category: 'sauce'
    },
    {
      id: 40,
      name: 'Соус Сацебели',
      description: 'Острый грузинский соус из томатов, чеснока, перца и зелени',
      price: '90 THB',
      image: '/images/menu/sauce/sauce-dish.jpg',
      tags: ['sauce', 'vegetarian', 'spicy'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 41,
      name: 'Фокачча с розмарином',
      description: 'Традиционный итальянский хлеб с розмарином и морской солью',
      price: '120 THB',
      image: '/images/menu/sauce/sauce-dish.jpg',
      tags: ['bread', 'vegetarian'],
      popular: true,
      category: 'bread'
    },
    {
      id: 42,
      name: 'Лепешка заатар',
      description: 'Тонкая лепешка с добавлением смеси восточных специй заатар',
      price: '90 THB',
      image: '/images/menu/bread/bread-dish.jpg',
      tags: ['bread', 'vegetarian'],
      popular: false,
      category: 'bread'
    },
    
    // БУРГЕРЫ И ШАУРМА
    {
      id: 43,
      name: 'Бургер классический',
      description: 'Сочная говяжья котлета, салат, помидор, маринованные огурцы, сыр и специальный соус',
      price: '350 THB',
      image: '/images/menu/bread/bread-dish.jpg',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'burger'
    },
    {
      id: 44,
      name: 'Бургер с беконом и яйцом',
      description: 'Бургер с говяжьей котлетой, хрустящим беконом и жареным яйцом',
      price: '390 THB',
      image: '/images/menu/burger/burger-dish.jpg',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'burger'
    },
    {
      id: 45,
      name: 'Бургер с курицей и сыром',
      description: 'Нежная куриная котлета с плавленым сыром, салатом и специальным соусом',
      price: '320 THB',
      image: '/images/menu/burger/burger-dish.jpg',
      tags: ['burger', 'meat'],
      popular: false,
      category: 'burger'
    },
    {
      id: 46,
      name: 'Бургер с рыбой',
      description: 'Котлета из филе окуня в хрустящей панировке с соусом тар-тар',
      price: '350 THB',
      image: '/images/menu/burger/burger-dish.jpg',
      tags: ['burger', 'seafood'],
      popular: false,
      category: 'burger'
    },
    {
      id: 47,
      name: 'Бургер вегетарианский',
      description: 'Котлета из нута, чечевицы и овощей с свежими овощами и специальным соусом',
      price: '290 THB',
      image: '/images/menu/burger/burger-dish.jpg',
      tags: ['burger', 'vegetarian', 'healthy'],
      popular: false,
      category: 'burger'
    },
    {
      id: 48,
      name: 'Шаурма с курицей',
      description: 'Традиционная шаурма с курицей, овощами и соусом',
      price: '250 THB',
      image: '/images/menu/burger/burger-dish.jpg',
      tags: ['shawarma', 'meat'],
      popular: true,
      category: 'shawarma'
    },
    {
      id: 49,
      name: 'Шаурма с говядиной',
      description: 'Шаурма с сочной говядиной, свежими овощами и фирменным соусом',
      price: '290 THB',
      image: '/images/menu/shawarma/shawarma-dish.jpg',
      tags: ['shawarma', 'meat'],
      popular: false,
      category: 'shawarma'
    },
    {
      id: 50,
      name: 'Шаурма вегетарианская',
      description: 'Вегетарианская шаурма с фалафелем, хумусом и свежими овощами',
      price: '220 THB',
      image: '/images/menu/shawarma/shawarma-dish.jpg',
      tags: ['shawarma', 'vegetarian', 'healthy'],
      popular: false,
      category: 'shawarma'
    },
    
    // ДЕСЕРТЫ
    {
      id: 51,
      name: 'Чизкейк Нью-Йорк',
      description: 'Классический американский чизкейк с нежной кремовой текстурой и тонким слоем сливочного крема',
      price: '270 THB',
      image: '/images/menu/shawarma/shawarma-dish.jpg',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 52,
      name: 'Тирамису',
      description: 'Традиционный итальянский десерт с маскарпоне, пропитанный кофе и ликером',
      price: '250 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 53,
      name: 'Яблочный штрудель',
      description: 'Теплый яблочный штрудель с корицей и ванильным мороженым',
      price: '220 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 54,
      name: 'Шоколадный фондан',
      description: 'Теплый шоколадный кекс с жидкой шоколадной начинкой и шариком ванильного мороженого',
      price: '290 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 55,
      name: 'Панна-котта с ягодным соусом',
      description: 'Нежный сливочный десерт с ванилью и свежим ягодным соусом',
      price: '190 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 56,
      name: 'Фруктовый салат',
      description: 'Ассорти из свежих сезонных фруктов с медом и мятой',
      price: '190 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['dessert', 'sweet', 'healthy'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 57,
      name: 'Мороженое ассорти (3 шарика)',
      description: 'Три шарика мороженого на выбор: ванильное, шоколадное, клубничное, фисташковое или манговое',
      price: '170 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    
    // ЧАЙ
    {
      id: 58,
      name: 'Чай зеленый',
      description: 'Классический китайский зеленый чай',
      price: '120 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 59,
      name: 'Чай черный',
      description: 'Крепкий черный чай',
      price: '120 THB',
      image: '/images/menu/dessert/dessert-dish.jpg',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 60,
      name: 'Чай с имбирем и медом',
      description: 'Согревающий чай со свежим имбирем, лимоном и медом',
      price: '150 THB',
      image: '/images/menu/tea/tea-dish.jpg',
      tags: ['tea', 'hot'],
      popular: true,
      category: 'tea'
    },
    {
      id: 61,
      name: 'Чай с мятой',
      description: 'Освежающий чай со свежей мятой',
      price: '150 THB',
      image: '/images/menu/tea/tea-dish.jpg',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 62,
      name: 'Чай ясминовый',
      description: 'Деликатный зеленый чай с ясмином',
      price: '120 THB',
      image: '/images/menu/tea/tea-dish.jpg',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 63,
      name: 'Чай фруктовый',
      description: 'Чай с ассорти из сушеных фруктов и ягод',
      price: '150 THB',
      image: '/images/menu/tea/tea-dish.jpg',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 64,
      name: 'Тайский чай со льдом и молоком',
      description: 'Традиционный тайский чай со сгущенным молоком и льдом',
      price: '150 THB',
      image: '/images/menu/tea/tea-dish.jpg',
      tags: ['tea', 'cold'],
      popular: true,
      category: 'tea'
    },
    
    // КОФЕ
    {
      id: 65,
      name: 'Эспрессо',
      description: 'Классический эспрессо из зерен арабики',
      price: '120 THB',
      image: '/images/menu/tea/tea-dish.jpg',
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 66,
      name: 'Американо',
      description: 'Эспрессо с добавлением горячей воды',
      price: '140 THB',
      image: '/images/menu/coffee/coffee-dish.jpg',
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 67,
      name: 'Капучино',
      description: 'Эспрессо с добавлением взбитого молока',
      price: '150 THB',
      image: '/images/menu/coffee/coffee-dish.jpg',
      tags: ['coffee', 'hot'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 68,
      name: 'Латте',
      description: 'Эспрессо с добавлением стеамед молока',
      price: '160 THB',
      image: '/images/menu/coffee/coffee-dish.jpg',
      tags: ['coffee', 'hot'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 69,
      name: 'Мокко',
      description: 'Эспрессо с добавлением горячего шоколада и взбитого молока',
      price: '180 THB',
      image: '/images/menu/coffee/coffee-dish.jpg',
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 70,
      name: 'Айс латте',
      description: 'Охлажденный кофе с молоком и льдом',
      price: '170 THB',
      image: '/images/menu/coffee/coffee-dish.jpg',
      tags: ['coffee', 'cold'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 71,
      name: 'Фраппе',
      description: 'Холодный кофейный напиток с молочной пенкой',
      price: '170 THB',
      image: '/images/menu/coffee/coffee-dish.jpg',
      tags: ['coffee', 'cold'],
      popular: false,
      category: 'coffee'
    },
    
    // СМУЗИ И ЛИМОНАДЫ
    {
      id: 72,
      name: 'Смузи манго и маракуйя',
      description: 'Свежий смузи из спелого манго и маракуйи',
      price: '190 THB',
      image: '/images/menu/coffee/coffee-dish.jpg',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: true,
      category: 'smoothie'
    },
    {
      id: 73,
      name: 'Смузи клубника и банан',
      description: 'Нежный смузи из свежей клубники и спелых бананов',
      price: '180 THB',
      image: '/images/menu/other/smoothie-dish.jpg',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: true,
      category: 'smoothie'
    },
    {
      id: 74,
      name: 'Смузи авокадо и шпинат',
      description: 'Полезный смузи из спелого авокадо, шпината и зеленого яблока',
      price: '200 THB',
      image: '/images/menu/other/smoothie-dish.jpg',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: false,
      category: 'smoothie'
    },
    {
      id: 75,
      name: 'Смузи черника и ацаи',
      description: 'Смузи с насыщенным вкусом черники и ягод ацаи',
      price: '220 THB',
      image: '/images/menu/other/smoothie-dish.jpg',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: false,
      category: 'smoothie'
    },
    {
      id: 76,
      name: 'Лимонад классический',
      description: 'Освежающий напиток из свежих лимонов, мяты и тростникового сахара',
      price: '150 THB',
      image: '/images/menu/other/smoothie-dish.jpg',
      tags: ['lemonade', 'cold'],
      popular: true,
      category: 'lemonade'
    },
    {
      id: 77,
      name: 'Лимонад малиновый',
      description: 'Лимонад с добавлением свежей малины и мяты',
      price: '160 THB',
      image: '/images/menu/other/lemonade-dish.jpg',
      tags: ['lemonade', 'cold'],
      popular: false,
      category: 'lemonade'
    },
    {
      id: 78,
      name: 'Лимонад имбирный',
      description: 'Острый имбирный лимонад со свежим имбирем и медом',
      price: '160 THB',
      image: '/images/menu/other/lemonade-dish.jpg',
      tags: ['lemonade', 'cold'],
      popular: false,
      category: 'lemonade'
    },
    {
      id: 79,
      name: 'Лимонад из маракуйи',
      description: 'Экзотический лимонад из свежей маракуйи',
      price: '170 THB',
      image: '/images/menu/other/lemonade-dish.jpg',
      tags: ['lemonade', 'cold'],
      popular: true,
      category: 'lemonade'
    },
    
    // СВЕЖИЕ СОКИ
    {
      id: 80,
      name: 'Сок апельсиновый',
      description: 'Свежевыжатый апельсиновый сок',
      price: '180 THB',
      image: '/images/menu/other/lemonade-dish.jpg',
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },
    {
      id: 81,
      name: 'Сок яблочный',
      description: 'Свежевыжатый яблочный сок',
      price: '170 THB',
      image: '/images/menu/other/juice-dish.jpg',
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 82,
      name: 'Сок грейпфрутовый',
      description: 'Свежевыжатый грейпфрутовый сок',
      price: '180 THB',
      image: '/images/menu/other/juice-dish.jpg',
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 83,
      name: 'Сок ананасовый',
      description: 'Свежевыжатый сок из спелого ананаса',
      price: '190 THB',
      image: '/images/menu/other/juice-dish.jpg',
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },
    {
      id: 84,
      name: 'Сок морковный',
      description: 'Свежевыжатый морковный сок',
      price: '160 THB',
      image: '/images/menu/other/juice-dish.jpg',
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 85,
      name: 'Фреш "Детокс"',
      description: 'Смесь свежевыжатых соков из яблока, сельдерея, шпината и огурца',
      price: '220 THB',
      image: '/images/menu/other/juice-dish.jpg',
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },
    
    // КОКТЕЙЛИ
    {
      id: 86,
      name: 'Мохито',
      description: 'Классический кубинский коктейль с белым ромом, лаймом, мятой и тростниковым сахаром',
      price: '290 THB',
      image: '/images/menu/other/juice-dish.jpg',
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 87,
      name: 'Пина Колада',
      description: 'Экзотический коктейль с белым ромом, кокосовым молоком и ананасовым соком',
      price: '320 THB',
      image: '/images/menu/cocktail/cocktail-dish.jpg',
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 88,
      name: 'Маргарита',
      description: 'Мексиканский коктейль с текилой, апельсиновым ликером и соком лайма',
      price: '290 THB',
      image: '/images/menu/cocktail/cocktail-dish.jpg',
      tags: ['cocktail', 'alcohol'],
      popular: false,
      category: 'cocktail'
    },
    {
      id: 89,
      name: 'Май Тай',
      description: 'Тропический коктейль на основе рома с фруктовыми соками',
      price: '280 THB',
      image: '/images/menu/cocktail/cocktail-dish.jpg',
      tags: ['cocktail', 'alcohol'],
      popular: false,
      category: 'cocktail'
    },
    {
      id: 90,
      name: 'Блу Хавай',
      description: 'Яркий голубой коктейль с текилой, голубым ликером и ананасовым соком',
      price: '320 THB',
      image: '/images/menu/cocktail/cocktail-dish.jpg',
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 91,
      name: 'Огуречный спритц',
      description: 'Освежающий коктейль из джина, свежего огурца и тоника',
      price: '290 THB',
      image: '/images/menu/cocktail/cocktail-dish.jpg',
      tags: ['cocktail', 'alcohol'],
      popular: false,
      category: 'cocktail'
    },
    
    // ВИНО
    {
      id: 92,
      name: 'Красное сухое вино Cabernet Sauvignon',
      description: 'Итальянское красное сухое вино',
      price: '350 THB / 1750 THB',
      image: '/images/menu/cocktail/cocktail-dish.jpg',
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    {
      id: 93,
      name: 'Белое сухое вино Chardonnay',
      description: 'Французское белое сухое вино',
      price: '350 THB / 1750 THB',
      image: '/images/menu/wine/wine-dish.jpg',
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    {
      id: 94,
      name: 'Розовое вино Pinot Noir',
      description: 'Легкое французское розовое вино',
      price: '350 THB / 1750 THB',
      image: '/images/menu/wine/wine-dish.jpg',
      tags: ['wine', 'alcohol'],
      popular: false,
      category: 'wine'
    },
    {
      id: 95,
      name: 'Игристое вино Prosecco',
      description: 'Итальянское игристое вино',
      price: '2500 THB',
      image: '/images/menu/wine/wine-dish.jpg',
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    
    // ПИВО
    {
      id: 96,
      name: 'Singha',
      description: 'Тайское светлое пиво',
      price: '150 THB',
      image: '/images/menu/wine/wine-dish.jpg',
      tags: ['beer', 'alcohol'],
      popular: true,
      category: 'beer'
    },
    {
      id: 97,
      name: 'Chang',
      description: 'Тайское светлое пиво',
      price: '140 THB',
      image: '/images/menu/wine/wine-dish.jpg',
      tags: ['beer', 'alcohol'],
      popular: false,
      category: 'beer'
    },
    {
      id: 98,
      name: 'Leo',
      description: 'Тайское светлое пиво',
      price: '140 THB',
      image: '/images/menu/beer/beer-dish.jpg',
      tags: ['beer', 'alcohol'],
      popular: false,
      category: 'beer'
    },
    {
      id: 99,
      name: 'Heineken',
      description: 'Импортное светлое пиво',
      price: '180 THB',
      image: '/images/menu/beer/beer-dish.jpg',
      tags: ['beer', 'alcohol'],
      popular: true,
      category: 'beer'
    },
    
    // КРЕПКИЙ АЛКОГОЛЬ
    {
      id: 100,
      name: 'Водка Absolut',
      description: 'Шведская водка (50 мл)',
      price: '240 THB',
      image: '/images/menu/beer/beer-dish.jpg',
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 101,
      name: 'Виски Jack Daniel\'s',
      description: 'Теннессийский виски (50 мл)',
      price: '290 THB',
      image: '/images/menu/strong/strong-dish.jpg',
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    },
    {
      id: 102,
      name: 'Ром Bacardi',
      description: 'Белый ром (50 мл)',
      price: '260 THB',
      image: '/images/menu/strong/strong-dish.jpg',
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 103,
      name: 'Текила Jose Cuervo',
      description: 'Мексиканская текила (50 мл)',
      price: '270 THB',
      image: '/images/menu/strong/strong-dish.jpg',
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    }
  ];
  
  // Данные для слайдера
  const slides = [
    {
      id: 1,
      image: '/images/menu/strong/strong-dish.jpg',
      title: t('restaurant.slider.slide1.title', 'Изысканная кухня'),
      description: t('restaurant.slider.slide1.description', 'Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане')
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide2.title', 'Атмосфера комфорта'),
      description: t('restaurant.slider.slide2.description', 'Наслаждайтесь едой в уютной атмосфере с видом на тропический сад')
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide3.title', 'Свежие ингредиенты'),
      description: t('restaurant.slider.slide3.description', 'Мы используем только свежие и качественные ингредиенты для приготовления наших блюд')
    }
  ];
  
  // Карта цветов для тегов
  const tagStyles = {
    vegetarian: 'bg-green-50 text-green-600',
    healthy: 'bg-primary bg-opacity-10 text-primary',
    seafood: 'bg-blue-50 text-blue-600',
    meat: 'bg-red-50 text-red-600',
    grill: 'bg-orange-50 text-orange-600',
    sweet: 'bg-pink-50 text-pink-600',
    breakfast: 'bg-indigo-50 text-indigo-600',
    dessert: 'bg-purple-50 text-purple-600',
    drink: 'bg-cyan-50 text-cyan-600',
    fruit: 'bg-lime-50 text-lime-600',
    soup: 'bg-amber-50 text-amber-600',
    cold: 'bg-sky-50 text-sky-600',
    hot: 'bg-orange-50 text-orange-600',
    salad: 'bg-emerald-50 text-emerald-600',
    appetizer: 'bg-violet-50 text-violet-600',
    grill: 'bg-orange-50 text-orange-600',
    bbq: 'bg-rose-50 text-rose-600',
    side: 'bg-gray-50 text-gray-600',
    sauce: 'bg-yellow-50 text-yellow-600',
    burger: 'bg-red-50 text-red-600',
    shawarma: 'bg-amber-50 text-amber-600',
    tea: 'bg-green-50 text-green-600',
    coffee: 'bg-brown-50 text-amber-800',
    cocktail: 'bg-purple-50 text-purple-600',
    alcohol: 'bg-rose-50 text-rose-600',
    wine: 'bg-purple-50 text-purple-600',
    beer: 'bg-yellow-50 text-yellow-600',
    popular: 'bg-primary text-white'
  };

  return { menuItems, slides, tagStyles };
};
