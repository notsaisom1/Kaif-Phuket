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
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'popular'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 2,
      name: 'Шакшука со шпинатом и лососем',
      description: 'Яичное блюдо с добавлением шпината и нежного лосося',
      price: '330 THB',
      image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'seafood'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 3,
      name: 'Шакшука с томатами и фетой',
      description: 'Традиционная шакшука с сочными томатами и сыром фета',
      price: '300 THB',
      image: 'https://images.unsplash.com/photo-1520218576172-c1a2df3fa5fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'vegetarian'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 4,
      name: 'Сырники со сметаной и соусом из маракуйи',
      description: 'Нежные домашние сырники с оригинальным соусом из маракуйи',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'sweet'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 5,
      name: 'Тост со сливочным сыром и ветчиной',
      description: 'Хрустящий тост с нежным сливочным сыром и качественной ветчиной',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'meat'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 6,
      name: 'Тост с соленым лососем и авокадо',
      description: 'Изысканное сочетание хрустящего тоста, нежного лосося и спелого авокадо',
      price: '330 THB',
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'seafood'],
      popular: true,
      category: 'breakfast'
    },
    {
      id: 7,
      name: 'Тост с авокадо и томатами',
      description: 'Легкий и полезный завтрак из хрустящего тоста с авокадо и сочными томатами',
      price: '270 THB',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'vegetarian', 'healthy'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 8,
      name: 'Мацони с абрикосовым вареньем',
      description: 'Традиционный кавказский йогурт с натуральным абрикосовым вареньем',
      price: '120 THB',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['breakfast', 'vegetarian'],
      popular: false,
      category: 'breakfast'
    },
    {
      id: 9,
      name: 'Гречневая каша с цыпленком, грибами и соусом Пармезан',
      description: 'Питательная гречневая каша с нежным цыпленком, ароматными грибами и сливочным соусом',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1555813456-77dd136e1407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['soup', 'cold'],
      popular: true,
      category: 'soup'
    },
    {
      id: 11,
      name: 'Окрошка на квасе',
      description: 'Классическая окрошка на квасе с отборными овощами, яйцом и свежей зеленью',
      price: '270 THB',
      image: 'https://images.unsplash.com/photo-1629634355805-0e1e89cf9010?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['soup', 'cold'],
      popular: false,
      category: 'soup'
    },
    {
      id: 12,
      name: 'Чихиртма с кукурузой',
      description: 'Традиционный грузинский суп с насыщенным вкусом, дополненный сладкой кукурузой',
      price: '190 THB',
      image: 'https://images.unsplash.com/photo-1613844237802-4beb8b23cf7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['soup', 'hot'],
      popular: false,
      category: 'soup'
    },
    {
      id: 13,
      name: 'Борщ классический',
      description: 'Традиционный славянский суп насыщенного рубинового цвета с говядиной и овощами',
      price: '270 THB',
      image: 'https://images.unsplash.com/photo-1550138616-c4d696fc4864?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['salad', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 15,
      name: 'Салат из свежих овощей с брынзой',
      description: 'Традиционный салат из свежих овощей с добавлением нежной брынзы',
      price: '320 THB',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['salad', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 16,
      name: 'Помидоры, огурцы, зелень',
      description: 'Свежие сочные помидоры и хрустящие огурцы с ароматной зеленью, заправленные по выбору сметаной или оливковым маслом',
      price: '190 THB',
      image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['salad', 'vegetarian', 'healthy'],
      popular: false,
      category: 'salad'
    },
    {
      id: 17,
      name: 'Хумус с печеным нутом',
      description: 'Нежный хумус с дополнительным печеным нутом для текстуры',
      price: '170 THB',
      image: 'https://images.unsplash.com/photo-1640719502926-b205fcbe99be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['appetizer', 'vegetarian'],
      popular: false,
      category: 'salad'
    },
    {
      id: 18,
      name: 'Хумус с авокадо и томатами',
      description: 'Оригинальный хумус с добавлением спелого авокадо и свежих томатов',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['appetizer', 'vegetarian', 'healthy'],
      popular: true,
      category: 'salad'
    },
    {
      id: 19,
      name: 'Хумус с креветками гриль',
      description: 'Классический хумус, дополненный сочными креветками с гриля',
      price: '390 THB',
      image: 'https://images.unsplash.com/photo-1559304822-9eb2813c9a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['appetizer', 'seafood'],
      popular: true,
      category: 'salad'
    },
    {
      id: 20,
      name: 'Хумус с куриным кебабом',
      description: 'Хумус, поданный с ароматными кусочками куриного кебаба',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['appetizer', 'meat'],
      popular: false,
      category: 'salad'
    },
    {
      id: 21,
      name: 'Дзадзыки с оливками и маринованным перцем',
      description: 'Освежающий йогуртовый соус с огурцами, чесноком и зеленью, дополненный оливками и маринованным перцем',
      price: '220 THB',
      image: 'https://images.unsplash.com/photo-1609771600140-a398eb699e87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 23,
      name: 'Кебаб из говядины',
      description: 'Сочный кебаб из отборной говядины, приготовленный на открытом огне',
      price: '490 THB',
      image: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 24,
      name: 'Кебаб из свиной шеи',
      description: 'Кебаб из маринованной свиной шеи с ароматными специями',
      price: '290 THB',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 25,
      name: 'Цыпленок в аджике с картофелем',
      description: 'Сочный цыпленок, маринованный в пикантном соусе аджика, с гарниром из молодого картофеля',
      price: '330 THB',
      image: 'https://images.unsplash.com/photo-1598103442080-4e95925f39f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 26,
      name: 'Люля-кебаб (курица)',
      description: 'Рубленый кебаб из куриного филе с добавлением ароматных специй',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1599161146648-0fe1bc2bf160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 27,
      name: 'Люля-кебаб (баранина)',
      description: 'Традиционный люля-кебаб из рубленой баранины с восточными специями',
      price: '390 THB',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'meat'],
      popular: true,
      category: 'grill'
    },
    {
      id: 28,
      name: 'Люля-кебаб (говядина и свинина)',
      description: 'Сочный люля-кебаб из смеси рубленой говядины и свинины',
      price: '370 THB',
      image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'meat'],
      popular: false,
      category: 'grill'
    },
    {
      id: 29,
      name: 'Лосось на мангале',
      description: 'Нежное филе лосося, приготовленное на открытом огне',
      price: '420 THB',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'seafood'],
      popular: true,
      category: 'grill'
    },
    {
      id: 30,
      name: 'Филе белого окуня',
      description: 'Нежное филе белого окуня, приготовленное на мангале',
      price: '390 THB',
      image: 'https://images.unsplash.com/photo-1619894991209-32b8fb2a8f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['grill', 'seafood'],
      popular: false,
      category: 'grill'
    },
    {
      id: 31,
      name: 'Креветки на мангале',
      description: 'Сочные тигровые креветки, приготовленные на мангале с добавлением трав и чесночного масла',
      price: '490 THB',
      image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['side', 'vegetarian'],
      popular: true,
      category: 'side'
    },
    {
      id: 33,
      name: 'Картофельное пюре',
      description: 'Нежное картофельное пюре с маслом и сливками',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1600175074395-5d7d3c511dd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 34,
      name: 'Овощи гриль',
      description: 'Ассорти из сезонных овощей, приготовленных на гриле',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1607352294091-3c7cec864da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['side', 'vegetarian', 'healthy'],
      popular: true,
      category: 'side'
    },
    {
      id: 35,
      name: 'Рис с шафраном',
      description: 'Ароматный рис длиннозерный с добавлением шафрана',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['side', 'vegetarian'],
      popular: false,
      category: 'side'
    },
    {
      id: 36,
      name: 'Зеленый салат с заправкой',
      description: 'Свежий микс зелени с легкой заправкой на основе оливкового масла',
      price: '120 THB',
      image: 'https://images.unsplash.com/photo-1588710277537-126980e8d44e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['sauce', 'vegetarian'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 38,
      name: 'Соус Тар-тар',
      description: 'Сливочный соус с добавлением корнишонов и зелени',
      price: '90 THB',
      image: 'https://images.unsplash.com/photo-1582871095047-a5b2c208e622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['sauce', 'vegetarian'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 39,
      name: 'Соус Чимичурри',
      description: 'Традиционный аргентинский соус из зелени, чеснока и оливкового масла',
      price: '90 THB',
      image: 'https://images.unsplash.com/photo-1631890004583-aca432c827e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['sauce', 'vegetarian'],
      popular: true,
      category: 'sauce'
    },
    {
      id: 40,
      name: 'Соус Сацебели',
      description: 'Острый грузинский соус из томатов, чеснока, перца и зелени',
      price: '90 THB',
      image: 'https://images.unsplash.com/photo-1580999196779-ca0ae386ec64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['sauce', 'vegetarian', 'spicy'],
      popular: false,
      category: 'sauce'
    },
    {
      id: 41,
      name: 'Фокачча с розмарином',
      description: 'Традиционный итальянский хлеб с розмарином и морской солью',
      price: '120 THB',
      image: 'https://images.unsplash.com/photo-1587137223122-9a1770e51d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['bread', 'vegetarian'],
      popular: true,
      category: 'bread'
    },
    {
      id: 42,
      name: 'Лепешка заатар',
      description: 'Тонкая лепешка с добавлением смеси восточных специй заатар',
      price: '90 THB',
      image: 'https://images.unsplash.com/photo-1619535860434-806c372572ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'burger'
    },
    {
      id: 44,
      name: 'Бургер с беконом и яйцом',
      description: 'Бургер с говяжьей котлетой, хрустящим беконом и жареным яйцом',
      price: '390 THB',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['burger', 'meat'],
      popular: true,
      category: 'burger'
    },
    {
      id: 45,
      name: 'Бургер с курицей и сыром',
      description: 'Нежная куриная котлета с плавленым сыром, салатом и специальным соусом',
      price: '320 THB',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['burger', 'meat'],
      popular: false,
      category: 'burger'
    },
    {
      id: 46,
      name: 'Бургер с рыбой',
      description: 'Котлета из филе окуня в хрустящей панировке с соусом тар-тар',
      price: '350 THB',
      image: 'https://images.unsplash.com/photo-1584947897558-e5bc29242a71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['burger', 'seafood'],
      popular: false,
      category: 'burger'
    },
    {
      id: 47,
      name: 'Бургер вегетарианский',
      description: 'Котлета из нута, чечевицы и овощей с свежими овощами и специальным соусом',
      price: '290 THB',
      image: 'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['burger', 'vegetarian', 'healthy'],
      popular: false,
      category: 'burger'
    },
    {
      id: 48,
      name: 'Шаурма с курицей',
      description: 'Традиционная шаурма с курицей, овощами и соусом',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['shawarma', 'meat'],
      popular: true,
      category: 'shawarma'
    },
    {
      id: 49,
      name: 'Шаурма с говядиной',
      description: 'Шаурма с сочной говядиной, свежими овощами и фирменным соусом',
      price: '290 THB',
      image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['shawarma', 'meat'],
      popular: false,
      category: 'shawarma'
    },
    {
      id: 50,
      name: 'Шаурма вегетарианская',
      description: 'Вегетарианская шаурма с фалафелем, хумусом и свежими овощами',
      price: '220 THB',
      image: 'https://images.unsplash.com/photo-1630445396366-8dea03c85ead?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1567171466-2c6f942c8cfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 52,
      name: 'Тирамису',
      description: 'Традиционный итальянский десерт с маскарпоне, пропитанный кофе и ликером',
      price: '250 THB',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 53,
      name: 'Яблочный штрудель',
      description: 'Теплый яблочный штрудель с корицей и ванильным мороженым',
      price: '220 THB',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d8e223e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 54,
      name: 'Шоколадный фондан',
      description: 'Теплый шоколадный кекс с жидкой шоколадной начинкой и шариком ванильного мороженого',
      price: '290 THB',
      image: 'https://images.unsplash.com/photo-1541783245831-57d6f0d6f9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['dessert', 'sweet'],
      popular: true,
      category: 'dessert'
    },
    {
      id: 55,
      name: 'Панна-котта с ягодным соусом',
      description: 'Нежный сливочный десерт с ванилью и свежим ягодным соусом',
      price: '190 THB',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['dessert', 'sweet'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 56,
      name: 'Фруктовый салат',
      description: 'Ассорти из свежих сезонных фруктов с медом и мятой',
      price: '190 THB',
      image: 'https://images.unsplash.com/photo-1493807742375-fbc46d996e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['dessert', 'sweet', 'healthy'],
      popular: false,
      category: 'dessert'
    },
    {
      id: 57,
      name: 'Мороженое ассорти (3 шарика)',
      description: 'Три шарика мороженого на выбор: ванильное, шоколадное, клубничное, фисташковое или манговое',
      price: '170 THB',
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 59,
      name: 'Чай черный',
      description: 'Крепкий черный чай',
      price: '120 THB',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 60,
      name: 'Чай с имбирем и медом',
      description: 'Согревающий чай со свежим имбирем, лимоном и медом',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['tea', 'hot'],
      popular: true,
      category: 'tea'
    },
    {
      id: 61,
      name: 'Чай с мятой',
      description: 'Освежающий чай со свежей мятой',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b92e73b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 62,
      name: 'Чай ясминовый',
      description: 'Деликатный зеленый чай с ясмином',
      price: '120 THB',
      image: 'https://images.unsplash.com/photo-1546648898-b1a3dd82cf32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 63,
      name: 'Чай фруктовый',
      description: 'Чай с ассорти из сушеных фруктов и ягод',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['tea', 'hot'],
      popular: false,
      category: 'tea'
    },
    {
      id: 64,
      name: 'Тайский чай со льдом и молоком',
      description: 'Традиционный тайский чай со сгущенным молоком и льдом',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1563503136947-cc262d2b48ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1596952953998-ac5212a0c6c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 66,
      name: 'Американо',
      description: 'Эспрессо с добавлением горячей воды',
      price: '140 THB',
      image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 67,
      name: 'Капучино',
      description: 'Эспрессо с добавлением взбитого молока',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['coffee', 'hot'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 68,
      name: 'Латте',
      description: 'Эспрессо с добавлением стеамед молока',
      price: '160 THB',
      image: 'https://images.unsplash.com/photo-1592318730259-6c7c6178e6c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['coffee', 'hot'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 69,
      name: 'Мокко',
      description: 'Эспрессо с добавлением горячего шоколада и взбитого молока',
      price: '180 THB',
      image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['coffee', 'hot'],
      popular: false,
      category: 'coffee'
    },
    {
      id: 70,
      name: 'Айс латте',
      description: 'Охлажденный кофе с молоком и льдом',
      price: '170 THB',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['coffee', 'cold'],
      popular: true,
      category: 'coffee'
    },
    {
      id: 71,
      name: 'Фраппе',
      description: 'Холодный кофейный напиток с молочной пенкой',
      price: '170 THB',
      image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: true,
      category: 'smoothie'
    },
    {
      id: 73,
      name: 'Смузи клубника и банан',
      description: 'Нежный смузи из свежей клубники и спелых бананов',
      price: '180 THB',
      image: 'https://images.unsplash.com/photo-1638176067000-3e3935a51cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: true,
      category: 'smoothie'
    },
    {
      id: 74,
      name: 'Смузи авокадо и шпинат',
      description: 'Полезный смузи из спелого авокадо, шпината и зеленого яблока',
      price: '200 THB',
      image: 'https://images.unsplash.com/photo-1638439430466-b9f5b7a267e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: false,
      category: 'smoothie'
    },
    {
      id: 75,
      name: 'Смузи черника и ацаи',
      description: 'Смузи с насыщенным вкусом черники и ягод ацаи',
      price: '220 THB',
      image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['smoothie', 'cold', 'healthy'],
      popular: false,
      category: 'smoothie'
    },
    {
      id: 76,
      name: 'Лимонад классический',
      description: 'Освежающий напиток из свежих лимонов, мяты и тростникового сахара',
      price: '150 THB',
      image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['lemonade', 'cold'],
      popular: true,
      category: 'lemonade'
    },
    {
      id: 77,
      name: 'Лимонад малиновый',
      description: 'Лимонад с добавлением свежей малины и мяты',
      price: '160 THB',
      image: 'https://images.unsplash.com/photo-1560526860-1f0e56046c85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['lemonade', 'cold'],
      popular: false,
      category: 'lemonade'
    },
    {
      id: 78,
      name: 'Лимонад имбирный',
      description: 'Острый имбирный лимонад со свежим имбирем и медом',
      price: '160 THB',
      image: 'https://images.unsplash.com/photo-1556679343-c1ffd81309ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['lemonade', 'cold'],
      popular: false,
      category: 'lemonade'
    },
    {
      id: 79,
      name: 'Лимонад из маракуйи',
      description: 'Экзотический лимонад из свежей маракуйи',
      price: '170 THB',
      image: 'https://images.unsplash.com/photo-1587888637140-849b25d80ef9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },
    {
      id: 81,
      name: 'Сок яблочный',
      description: 'Свежевыжатый яблочный сок',
      price: '170 THB',
      image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 82,
      name: 'Сок грейпфрутовый',
      description: 'Свежевыжатый грейпфрутовый сок',
      price: '180 THB',
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 83,
      name: 'Сок ананасовый',
      description: 'Свежевыжатый сок из спелого ананаса',
      price: '190 THB',
      image: 'https://images.unsplash.com/photo-1587157708858-de748580439e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['juice', 'cold', 'healthy'],
      popular: true,
      category: 'juice'
    },
    {
      id: 84,
      name: 'Сок морковный',
      description: 'Свежевыжатый морковный сок',
      price: '160 THB',
      image: 'https://images.unsplash.com/photo-1622597468620-656aa1327fcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['juice', 'cold', 'healthy'],
      popular: false,
      category: 'juice'
    },
    {
      id: 85,
      name: 'Фреш "Детокс"',
      description: 'Смесь свежевыжатых соков из яблока, сельдерея, шпината и огурца',
      price: '220 THB',
      image: 'https://images.unsplash.com/photo-1622597448366-b8e756fa58cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 87,
      name: 'Пина Колада',
      description: 'Экзотический коктейль с белым ромом, кокосовым молоком и ананасовым соком',
      price: '320 THB',
      image: 'https://images.unsplash.com/photo-1582400910504-897603b7be77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 88,
      name: 'Маргарита',
      description: 'Мексиканский коктейль с текилой, апельсиновым ликером и соком лайма',
      price: '290 THB',
      image: 'https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['cocktail', 'alcohol'],
      popular: false,
      category: 'cocktail'
    },
    {
      id: 89,
      name: 'Май Тай',
      description: 'Тропический коктейль на основе рома с фруктовыми соками',
      price: '280 THB',
      image: 'https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['cocktail', 'alcohol'],
      popular: false,
      category: 'cocktail'
    },
    {
      id: 90,
      name: 'Блу Хавай',
      description: 'Яркий голубой коктейль с текилой, голубым ликером и ананасовым соком',
      price: '320 THB',
      image: 'https://images.unsplash.com/photo-1558927339-be1a5249a865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['cocktail', 'alcohol'],
      popular: true,
      category: 'cocktail'
    },
    {
      id: 91,
      name: 'Огуречный спритц',
      description: 'Освежающий коктейль из джина, свежего огурца и тоника',
      price: '290 THB',
      image: 'https://images.unsplash.com/photo-1591952986314-aa4747f0daf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1553361371-9fe24f4c1a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    {
      id: 93,
      name: 'Белое сухое вино Chardonnay',
      description: 'Французское белое сухое вино',
      price: '350 THB / 1750 THB',
      image: 'https://images.unsplash.com/photo-1582031726307-827be0ef729e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['wine', 'alcohol'],
      popular: true,
      category: 'wine'
    },
    {
      id: 94,
      name: 'Розовое вино Pinot Noir',
      description: 'Легкое французское розовое вино',
      price: '350 THB / 1750 THB',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['wine', 'alcohol'],
      popular: false,
      category: 'wine'
    },
    {
      id: 95,
      name: 'Игристое вино Prosecco',
      description: 'Итальянское игристое вино',
      price: '2500 THB',
      image: 'https://images.unsplash.com/photo-1576676754872-52bee930c919?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1600213903598-25be92abde40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['beer', 'alcohol'],
      popular: true,
      category: 'beer'
    },
    {
      id: 97,
      name: 'Chang',
      description: 'Тайское светлое пиво',
      price: '140 THB',
      image: 'https://images.unsplash.com/photo-1600213903598-25be92abde40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['beer', 'alcohol'],
      popular: false,
      category: 'beer'
    },
    {
      id: 98,
      name: 'Leo',
      description: 'Тайское светлое пиво',
      price: '140 THB',
      image: 'https://images.unsplash.com/photo-1600213903598-25be92abde40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['beer', 'alcohol'],
      popular: false,
      category: 'beer'
    },
    {
      id: 99,
      name: 'Heineken',
      description: 'Импортное светлое пиво',
      price: '180 THB',
      image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
      image: 'https://images.unsplash.com/photo-1627736822334-544a9bff34d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 101,
      name: 'Виски Jack Daniel\'s',
      description: 'Теннессийский виски (50 мл)',
      price: '290 THB',
      image: 'https://images.unsplash.com/photo-1608293953848-715f452a57ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    },
    {
      id: 102,
      name: 'Ром Bacardi',
      description: 'Белый ром (50 мл)',
      price: '260 THB',
      image: 'https://images.unsplash.com/photo-1514218853559-cf44500f7e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['strong', 'alcohol'],
      popular: false,
      category: 'strong'
    },
    {
      id: 103,
      name: 'Текила Jose Cuervo',
      description: 'Мексиканская текила (50 мл)',
      price: '270 THB',
      image: 'https://images.unsplash.com/photo-1522128418537-a497c66414d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['strong', 'alcohol'],
      popular: true,
      category: 'strong'
    }
  ];
  
  // Данные для слайдера
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
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
