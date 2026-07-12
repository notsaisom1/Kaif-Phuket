// Данные услуг SPA и Салона красоты KAIF
// Обновлено: Январь 2025 - Актуальные услуги и цены

export const getSpaData = (t) => {
  // МАССАЖ
  const massageServices = [
    {
      id: 'thai-massage',
      name: t('spa.services.items.thai_massage.name', 'Традиционный тайский массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [600, 750, 1000],
      description: t('spa.services.items.thai_massage.description', 'Классический тайский массаж на коврике'),
      popular: true,
      image: '/images/spa/services/massage-thai.jpg'
    },
    {
      id: 'oil-massage',
      name: t('spa.services.items.oil_massage.name', 'Масляный массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [650, 800, 950],
      description: t('spa.services.items.oil_massage.description', 'Расслабляющий массаж с натуральными маслами для глубокого восстановления'),
      popular: true,
      image: '/images/spa/services/massage-oil.jpg'
    },
    {
      id: 'foot-massage',
      name: t('spa.services.items.foot_massage.name', 'Массаж стоп'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [450, 700, 850],
      description: t('spa.services.items.foot_massage.description', 'Традиционный тайский массаж стоп для снятия усталости'),
      popular: true,
      image: '/images/spa/services/massage-foot.jpg'
    },
    {
      id: 'oil-scrub',
      name: t('spa.services.items.oil_scrub.name', 'Масляный массаж + скраб'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [800, 950, 1100],
      description: t('spa.services.items.oil_scrub.description', 'Комплексная процедура с пилингом и массажем'),
      popular: true,
      image: '/images/spa/services/massage-scrub.jpg'
    },
    {
      id: 'shoulders-legs',
      name: t('spa.services.items.shoulders_legs.name', 'Массаж плеч и ног'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [500, 750, 900],
      description: t('spa.services.items.shoulders_legs.description', 'Специализированный массаж для снятия напряжения'),
      popular: false,
      image: '/images/spa/services/massage-shoulders.jpg'
    },
    {
      id: 'face-massage',
      name: t('spa.services.items.face_massage.name', 'Массаж лица'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [500, 650, 800],
      description: t('spa.services.items.face_massage.description', 'Расслабляющий массаж лица для улучшения кровообращения'),
      popular: false,
      image: '/images/spa/services/massage-face.jpg'
    },
    {
      id: 'deep-thai',
      name: t('spa.services.items.deep_thai.name', 'Глубокий тайский массаж'),
      category: 'massage',
      durations: [60, 90, 120],
      prices: [800, 950, 1100],
      description: t('spa.services.items.deep_thai.description', 'Интенсивный тайский массаж с глубокой проработкой мышц'),
      popular: true,
      image: '/images/spa/services/massage-deep.jpg'
    },
    {
      id: 'sport-massage',
      name: t('spa.services.items.sport_massage.name', 'Спортивный массаж'),
      category: 'massage',
      durations: [60, 120],
      prices: [800, 1300],
      description: t('spa.services.items.sport_massage.description', 'Интенсивный массаж для восстановления после тренировок'),
      popular: true,
      image: '/images/spa/services/massage-sport.jpg'
    },
    {
      id: 'body-scrub',
      name: t('spa.services.items.body_scrub.name', 'Скрабирование тела'),
      category: 'massage',
      durations: [30],
      prices: [500],
      description: t('spa.services.items.body_scrub.description', 'Отшелушивающая процедура для всего тела'),
      popular: false,
      image: '/images/spa/services/scrub-body.jpg'
    }
  ];

  // ЭНДОСФЕРА-ТЕРАПИЯ
  const endosphereServices = [
    {
      id: 'endosphere-full-body',
      name: t('spa.services.items.endosphere_full_body.name', 'Эндосфера-терапия всего тела (1 процедура)'),
      category: 'endosphere',
      price: 2000,
      description: t('spa.services.items.endosphere_full_body.description', 'Эндосфера-терапия всего тела для коррекции фигуры'),
      popular: true,
      image: '/images/beauty/services/endosphere-body.jpg'
    },
    {
      id: 'endosphere-rf-lifting',
      name: t('spa.services.items.endosphere_rf_lifting.name', 'Эндосфера RF лифтинг'),
      category: 'endosphere',
      price: 1500,
      description: t('spa.services.items.endosphere_rf_lifting.description', 'Омолаживающий аппаратный массаж лица'),
      popular: true,
      image: '/images/beauty/services/endosphere-face.jpg'
    },
    {
      id: 'endosphere-6-procedures',
      name: t('spa.services.items.endosphere_6_procedures.name', 'Эндосфера-терапия (6 процедур)'),
      category: 'endosphere',
      price: 10000,
      description: t('spa.services.items.endosphere_6_procedures.description', 'Выгодный пакет из 6 процедур'),
      popular: true,
      image: '/images/beauty/services/endosphere-subscription.jpg'
    },
    {
      id: 'endosphere-12-procedures',
      name: t('spa.services.items.endosphere_12_procedures.name', 'Эндосфера-терапия (12 процедур)'),
      category: 'endosphere',
      price: 18000,
      description: t('spa.services.items.endosphere_12_procedures.description', 'Максимальный пакет из 12 процедур'),
      popular: true,
      image: '/images/beauty/services/endosphere-subscription-max.jpg'
    }
  ];

  // ЛАЗЕРНАЯ ЭПИЛЯЦИЯ
  const laserServices = [
    {
      id: 'laser-armpits',
      name: t('spa.services.items.laser_armpits.name', 'Лазерная эпиляция подмышек'),
      category: 'laser',
      price: 1000,
      description: t('spa.services.items.laser_armpits.description', 'Эпиляция подмышечных впадин'),
      popular: true,
      image: '/images/beauty/services/laser-armpits.jpg'
    },
    {
      id: 'laser-bikini',
      name: t('spa.services.items.laser_bikini.name', 'Лазерная эпиляция бикини'),
      category: 'laser',
      price: 1500,
      description: t('spa.services.items.laser_bikini.description', 'Эпиляция зоны бикини'),
      popular: true,
      image: '/images/beauty/services/laser-bikini.jpg'
    },
    {
      id: 'laser-deep-bikini',
      name: t('spa.services.items.laser_deep_bikini.name', 'Лазерная эпиляция глубокого бикини'),
      category: 'laser',
      price: 1800,
      description: t('spa.services.items.laser_deep_bikini.description', 'Эпиляция интимной зоны'),
      popular: true,
      image: '/images/beauty/services/laser-deep-bikini.jpg'
    },
    {
      id: 'laser-shins',
      name: t('spa.services.items.laser_shins.name', 'Лазерная эпиляция голеней'),
      category: 'laser',
      price: 1600,
      description: t('spa.services.items.laser_shins.description', 'Эпиляция голеней'),
      popular: true,
      image: '/images/beauty/services/laser-shins.jpg'
    },
    {
      id: 'laser-legs-full',
      name: t('spa.services.items.laser_legs_full.name', 'Лазерная эпиляция ног полностью'),
      category: 'laser',
      price: 2200,
      description: t('spa.services.items.laser_legs_full.description', 'Полная эпиляция ног'),
      popular: true,
      image: '/images/beauty/services/laser-legs-full.jpg'
    },
    {
      id: 'laser-small-area',
      name: t('spa.services.items.laser_small_area.name', 'Лазерная эпиляция малой зоны'),
      category: 'laser',
      price: 500,
      description: t('spa.services.items.laser_small_area.description', 'Эпиляция малых зон (линия живота, ареола, пальцы)'),
      popular: false,
      image: '/images/beauty/services/laser-small.jpg'
    },
    {
      id: 'laser-arms-full',
      name: t('spa.services.items.laser_arms_full.name', 'Лазерная эпиляция рук полностью'),
      category: 'laser',
      price: 1600,
      description: t('spa.services.items.laser_arms_full.description', 'Полная эпиляция рук'),
      popular: false,
      image: '/images/beauty/services/laser-arms.jpg'
    },
    {
      id: 'laser-lower-face',
      name: t('spa.services.items.laser_lower_face.name', 'Лазерная эпиляция нижней части лица'),
      category: 'laser',
      price: 500,
      description: t('spa.services.items.laser_lower_face.description', 'Эпиляция области подбородка'),
      popular: false,
      image: '/images/beauty/services/laser-face.jpg'
    }
  ];

  // ЛАЗЕРНЫЕ КОМПЛЕКСЫ (3 процедуры)
  const laserComplex3Services = [
    {
      id: 'complex-3-bikini-belly',
      name: t('spa.services.items.complex_3_bikini_belly.name', 'Комплекс: глубокий бикини + линия живота (3 процедуры)'),
      category: 'laser-complex-3',
      price: 5400,
      description: t('spa.services.items.complex_3_bikini_belly.description', 'Комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-1.jpg'
    },
    {
      id: 'complex-3-bikini-armpits',
      name: t('spa.services.items.complex_3_bikini_armpits.name', 'Комплекс: глубокий бикини + подмышки (3 процедуры)'),
      category: 'laser-complex-3',
      price: 6300,
      description: t('spa.services.items.complex_3_bikini_armpits.description', 'Популярный комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-2.jpg'
    },
    {
      id: 'complex-3-legs-armpits-bikini',
      name: t('spa.services.items.complex_3_legs_armpits_bikini.name', 'Комплекс: ноги полностью + подмышки + глубокий бикини (3 процедуры)'),
      category: 'laser-complex-3',
      price: 7200,
      description: t('spa.services.items.complex_3_legs_armpits_bikini.description', 'Максимальный комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-3.jpg'
    },
    {
      id: 'complex-3-armpits-bikini-shins',
      name: t('spa.services.items.complex_3_armpits_bikini_shins.name', 'Комплекс: подмышки + глубокий бикини + голени (3 процедуры)'),
      category: 'laser-complex-3',
      price: 6800,
      description: t('spa.services.items.complex_3_armpits_bikini_shins.description', 'Базовый комплекс из 3 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-4.jpg'
    }
  ];

  // ЛАЗЕРНЫЕ КОМПЛЕКСЫ (5 процедур)
  const laserComplex5Services = [
    {
      id: 'complex-5-bikini-belly',
      name: t('spa.services.items.complex_5_bikini_belly.name', 'Комплекс: глубокий бикини + линия живота (5 процедур)'),
      category: 'laser-complex-5',
      price: 8000,
      description: t('spa.services.items.complex_5_bikini_belly.description', 'Комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-1.jpg'
    },
    {
      id: 'complex-5-bikini-armpits',
      name: t('spa.services.items.complex_5_bikini_armpits.name', 'Комплекс: глубокий бикини + подмышки (5 процедур)'),
      category: 'laser-complex-5',
      price: 9200,
      description: t('spa.services.items.complex_5_bikini_armpits.description', 'Популярный комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-2.jpg'
    },
    {
      id: 'complex-5-legs-armpits-bikini',
      name: t('spa.services.items.complex_5_legs_armpits_bikini.name', 'Комплекс: ноги полностью + подмышки + глубокий бикини (5 процедур)'),
      category: 'laser-complex-5',
      price: 13700,
      description: t('spa.services.items.complex_5_legs_armpits_bikini.description', 'Максимальный комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-3.jpg'
    },
    {
      id: 'complex-5-armpits-bikini-shins',
      name: t('spa.services.items.complex_5_armpits_bikini_shins.name', 'Комплекс: подмышки + глубокий бикини + голени (5 процедур)'),
      category: 'laser-complex-5',
      price: 6800,
      description: t('spa.services.items.complex_5_armpits_bikini_shins.description', 'Базовый комплекс из 5 процедур'),
      popular: true,
      image: '/images/beauty/services/laser-complex-4.jpg'
    },
    {
      id: 'complex-5-all-body',
      name: t('spa.services.items.complex_5_all_body.name', 'Комплекс: все тело (5 процедур)'),
      category: 'laser-complex-5',
      price: 13500,
      description: t('spa.services.items.complex_5_all_body.description', 'Полный комплекс эпиляции всего тела'),
      popular: true,
      image: '/images/beauty/services/laser-all-body.jpg'
    }
  ];

  // УХОД ЗА ВОЛОСАМИ
  const hairServices = [
    {
      id: 'haircut',
      name: t('spa.services.items.womens_haircut.name', 'Стрижка'),
      category: 'hair-care',
      price: 1000,
      description: t('spa.services.items.womens_haircut.description', 'Профессиональная стрижка'),
      popular: true,
      image: '/images/beauty/services/haircut.jpg'
    },
    {
      id: 'bang-trim',
      name: t('spa.services.items.bangs_haircut.name', 'Стрижка челки'),
      category: 'hair-care',
      price: 500,
      description: t('spa.services.items.bangs_haircut.description', 'Коррекция и стрижка челки'),
      popular: false,
      image: '/images/beauty/services/bangs-cut.jpg'
    },
    {
      id: 'root-coloring',
      name: t('spa.services.items.coloring_roots.name', 'Окрашивание корней (1 тон)'),
      category: 'hair-care',
      price: 2000,
      description: t('spa.services.items.coloring_roots.description', 'Окрашивание отросших корней'),
      popular: true,
      image: '/images/beauty/services/hair-roots.jpg'
    },
    {
      id: 'root-coloring-stretch',
      name: t('spa.services.items.coloring_stretching.name', 'Окрашивание корней + растяжка цвета по длине'),
      category: 'hair-care',
      priceFrom: 3500,
      description: t('spa.services.items.coloring_stretching.description', 'Сложное окрашивание с растяжкой цвета'),
      popular: true,
      image: '/images/beauty/services/hair-stretching.jpg'
    },
    {
      id: 'coloring-short',
      name: t('spa.services.items.coloring_short.name', 'Окрашивание в 1 тон (короткие волосы)'),
      category: 'hair-care',
      priceFrom: 2500,
      description: t('spa.services.items.coloring_short.description', 'Полное окрашивание коротких волос'),
      popular: false,
      image: '/images/beauty/services/coloring-short.jpg'
    },
    {
      id: 'coloring-medium',
      name: t('spa.services.items.coloring_medium.name', 'Окрашивание в 1 тон (средние волосы)'),
      category: 'hair-care',
      priceFrom: 3000,
      description: t('spa.services.items.coloring_medium.description', 'Полное окрашивание волос средней длины'),
      popular: true,
      image: '/images/beauty/services/coloring-medium.jpg'
    },
    {
      id: 'coloring-long',
      name: t('spa.services.items.coloring_long.name', 'Окрашивание в 1 тон (длинные волосы)'),
      category: 'hair-care',
      priceFrom: 2500,
      description: t('spa.services.items.coloring_long.description', 'Полное окрашивание длинных волос'),
      popular: true,
      image: '/images/beauty/services/coloring-long.jpg'
    },
    {
      id: 'total-blond-short',
      name: t('spa.services.items.total_blond_short.name', 'Тотальный блонд (короткие волосы)'),
      category: 'hair-care',
      price: 5000,
      description: t('spa.services.items.total_blond_short.description', 'Осветление коротких волос до блонда'),
      popular: false,
      image: '/images/beauty/services/blond-short.jpg'
    },
    {
      id: 'total-blond-medium',
      name: t('spa.services.items.total_blond_medium.name', 'Тотальный блонд (средние волосы)'),
      category: 'hair-care',
      price: 7000,
      description: t('spa.services.items.total_blond_medium.description', 'Осветление волос средней длины до блонда'),
      popular: true,
      image: '/images/beauty/services/blond-medium.jpg'
    },
    {
      id: 'total-blond-long',
      name: t('spa.services.items.total_blond_long.name', 'Тотальный блонд (длинные волосы)'),
      category: 'hair-care',
      price: 8000,
      description: t('spa.services.items.total_blond_long.description', 'Осветление длинных волос до блонда'),
      popular: true,
      image: '/images/beauty/services/blond-long.jpg'
    },
    {
      id: 'happiness-short',
      name: t('spa.services.items.happiness_short.name', 'Счастье для волос - Lebel (короткие волосы)'),
      category: 'hair-care',
      price: 2500,
      description: t('spa.services.items.happiness_short.description', 'Восстанавливающая процедура для коротких волос'),
      popular: false,
      image: '/images/beauty/services/happiness-short.jpg'
    },
    {
      id: 'happiness-medium',
      name: t('spa.services.items.happiness_medium.name', 'Счастье для волос - Lebel (средние волосы)'),
      category: 'hair-care',
      price: 3000,
      description: t('spa.services.items.happiness_medium.description', 'Восстанавливающая процедура для волос средней длины'),
      popular: true,
      image: '/images/beauty/services/happiness-medium.jpg'
    },
    {
      id: 'happiness-long',
      name: t('spa.services.items.happiness_long.name', 'Счастье для волос - Lebel (длинные волосы)'),
      category: 'hair-care',
      price: 3500,
      description: t('spa.services.items.happiness_long.description', 'Восстанавливающая процедура для длинных волос'),
      popular: true,
      image: '/images/beauty/services/happiness-long.jpg'
    },
    {
       id: 'express-hair-care',
       name: t('spa.services.items.hair_express_care.name', 'Экспресс-уход за волосами'),
       category: 'hair-care',
       price: 500,
       description: t('spa.services.items.hair_express_care.description', 'Быстрая восстанавливающая процедура'),
       popular: false,
       image: '/images/beauty/services/hair-express.jpg'
     },
     {
       id: 'vietnamese-head-massage',
       name: t('spa.services.items.indian_head_massage.name', 'Вьетнамский массаж головы'),
       category: 'hair-care',
       price: 1600,
       description: t('spa.services.items.indian_head_massage.description', 'Традиционный вьетнамский массаж для роста волос'),
       popular: true,
       image: '/images/beauty/services/vietnamese-massage.jpg'
     }
  ];

  // МАНИКЮР
  const manicureServices = [
    {
      id: 'manicure-no-coating',
      name: t('spa.services.items.manicure_no_coating.name', 'Маникюр без покрытия'),
      category: 'manicure',
      price: 600,
      description: t('spa.services.items.manicure_no_coating.description', 'Классический маникюр без покрытия'),
      popular: true,
      image: '/images/beauty/services/manicure-classic.jpg'
    },
    {
      id: 'manicure-base-coating',
      name: t('spa.services.items.manicure_base_coating.name', 'Маникюр с базовым покрытием'),
      category: 'manicure',
      price: 800,
      description: t('spa.services.items.manicure_base_coating.description', 'Маникюр с защитным базовым покрытием'),
      popular: true,
      image: '/images/beauty/services/manicure-base.jpg'
    },
    {
      id: 'manicure-gel-strengthening',
      name: t('spa.services.items.gel_strengthening_polish.name', 'Маникюр с гелевым укреплением'),
      category: 'manicure',
      price: 1500,
      description: t('spa.services.items.gel_strengthening_polish.description', 'Маникюр с укрепляющим гелевым покрытием'),
      popular: true,
      image: '/images/beauty/services/manicure-gel.jpg'
    },
    {
      id: 'nail-removal',
      name: t('spa.services.items.nail_removal.name', 'Снятие покрытия'),
      category: 'manicure',
      price: 200,
      description: t('spa.services.items.nail_removal.description', 'Безопасное снятие гелевого покрытия'),
      popular: false,
      image: '/images/beauty/services/nail-removal.jpg'
    },
    {
      id: 'nail-repair',
      name: t('spa.services.items.nail_repair.name', 'Ремонт ногтя'),
      category: 'manicure',
      price: 200,
      description: t('spa.services.items.nail_repair.description', 'Восстановление поврежденного ногтя'),
      popular: false,
      image: '/images/beauty/services/nail-repair.jpg'
    },
    {
      id: 'nail-design',
      name: t('spa.services.items.nail_design.name', 'Дизайн ногтей'),
      category: 'manicure',
      priceFrom: 50,
      description: t('spa.services.items.nail_design.description', 'Художественный дизайн ногтей'),
      popular: true,
      image: '/images/beauty/services/nail-design.jpg'
    },
    {
      id: 'french-manicure',
      name: t('spa.services.items.french_manicure.name', 'Французский маникюр'),
      category: 'manicure',
      price: 300,
      description: t('spa.services.items.french_manicure.description', 'Классический французский маникюр (доплата)'),
      popular: true,
      image: '/images/beauty/services/french-manicure.jpg'
    }
  ];

  // ПЕДИКЮР
  const pedicureServices = [
    {
      id: 'pedicure-no-coating',
      name: t('spa.services.items.pedicure_no_coating.name', 'Педикюр без покрытия'),
      category: 'pedicure',
      price: 600,
      description: t('spa.services.items.pedicure_no_coating.description', 'Классический педикюр без покрытия'),
      popular: true,
      image: '/images/beauty/services/pedicure-classic.jpg'
    },
    {
      id: 'pedicure-base-coating',
      name: t('spa.services.items.pedicure_base_coating.name', 'Педикюр с базовым покрытием'),
      category: 'pedicure',
      price: 800,
      description: t('spa.services.items.pedicure_base_coating.description', 'Педикюр с защитным покрытием'),
      popular: true,
      image: '/images/beauty/services/pedicure-base.jpg'
    },
    {
      id: 'pedicure-gel-strengthening',
      name: t('spa.services.items.gel_strengthening.name', 'Педикюр с гелевым укреплением'),
      category: 'pedicure',
      price: 1000,
      description: t('spa.services.items.gel_strengthening.description', 'Педикюр с укрепляющим покрытием'),
      popular: true,
      image: '/images/beauty/services/pedicure-gel.jpg'
    },
    {
      id: 'full-pedicure-no-coating',
      name: t('spa.services.items.pedicure_full_no_coating.name', 'Полный педикюр без покрытия'),
      category: 'pedicure',
      price: 1200,
      description: t('spa.services.items.pedicure_full_no_coating.description', 'Комплексный уход за стопами'),
      popular: true,
      image: '/images/beauty/services/pedicure-full.jpg'
    },
    {
      id: 'full-pedicure-coating',
      name: t('spa.services.items.pedicure_full_coating.name', 'Полный педикюр с покрытием'),
      category: 'pedicure',
      price: 1500,
      description: t('spa.services.items.pedicure_full_coating.description', 'Комплексный уход с покрытием'),
      popular: true,
      image: '/images/beauty/services/pedicure-full-coating.jpg'
    },
    {
      id: 'callus-removal',
      name: t('spa.services.items.callus_removal.name', 'Удаление мозолей'),
      category: 'pedicure',
      price: 300,
      description: t('spa.services.items.callus_removal.description', 'Профессиональное удаление мозолей'),
      popular: false,
      image: '/images/beauty/services/callus-removal.jpg'
    },
    {
      id: 'pedicure-coating-removal',
      name: t('spa.services.items.pedicure_coating_removal.name', 'Снятие покрытия'),
      category: 'pedicure',
      price: 200,
      description: t('spa.services.items.pedicure_coating_removal.description', 'Снятие старого покрытия'),
      popular: false,
      image: '/images/beauty/services/pedicure-removal.jpg'
    }
  ];

  // PRO МАСТЕР ПЕДИКЮР
  const proMasterPedicureServices = [
    {
      id: 'pro-pedicure-no-coating',
      name: t('spa.services.items.pro_pedicure_no_coating.name', 'PRO мастер педикюр без покрытия'),
      category: 'pro-pedicure',
      price: 1000,
      description: t('spa.services.items.pro_pedicure_no_coating.description', 'Профессиональный педикюр от мастера высокого класса'),
      popular: true,
      image: '/images/beauty/services/pro-pedicure-classic.jpg'
    },
    {
      id: 'pro-pedicure-base-coating',
      name: t('spa.services.items.pro_pedicure_base_coating.name', 'PRO мастер педикюр с базовым покрытием'),
      category: 'pro-pedicure',
      price: 1200,
      description: t('spa.services.items.pro_pedicure_base_coating.description', 'Профессиональный педикюр с покрытием'),
      popular: true,
      image: '/images/beauty/services/pro-pedicure-base.jpg'
    },
    {
      id: 'pro-pedicure-gel-strengthening',
      name: t('spa.services.items.pro_pedicure_gel_strengthening.name', 'PRO мастер педикюр с гелевым укреплением'),
      category: 'pro-pedicure',
      price: 1400,
      description: t('spa.services.items.pro_pedicure_gel_strengthening.description', 'Профессиональный педикюр с укреплением'),
      popular: true,
      image: '/images/beauty/services/pro-pedicure-gel.jpg'
    },
    {
      id: 'pro-full-pedicure-no-coating',
      name: t('spa.services.items.pro_full_pedicure_no_coating.name', 'PRO мастер полный педикюр без покрытия'),
      category: 'pro-pedicure',
      price: 1500,
      description: t('spa.services.items.pro_full_pedicure_no_coating.description', 'Комплексный профессиональный уход'),
      popular: true,
      image: '/images/beauty/services/pro-pedicure-full.jpg'
    },
    {
      id: 'pro-full-pedicure-coating',
      name: t('spa.services.items.pro_full_pedicure_coating.name', 'PRO мастер полный педикюр с покрытием'),
      category: 'pro-pedicure',
      price: 1800,
      description: t('spa.services.items.pro_full_pedicure_coating.description', 'Максимальный уход от профессионала'),
      popular: true,
      image: '/images/beauty/services/pro-pedicure-full-coating.jpg'
    },
    {
      id: 'pro-callus-removal',
      name: t('spa.services.items.pro_callus_removal.name', 'PRO мастер удаление мозолей'),
      category: 'pro-pedicure',
      price: 300,
      description: t('spa.services.items.pro_callus_removal.description', 'Профессиональное удаление мозолей'),
      popular: false,
      image: '/images/beauty/services/pro-callus-removal.jpg'
    },
    {
      id: 'pro-coating-removal',
      name: t('spa.services.items.pro_coating_removal.name', 'PRO мастер снятие покрытия'),
      category: 'pro-pedicure',
      price: 300,
      description: t('spa.services.items.pro_coating_removal.description', 'Профессиональное снятие покрытия'),
      popular: false,
      image: '/images/beauty/services/pro-coating-removal.jpg'
    },
    {
      id: 'pro-medical-pedicure',
      name: t('spa.services.items.pro_medical_pedicure.name', 'PRO мастер медицинский педикюр'),
      category: 'pro-pedicure',
      price: 2000,
      description: t('spa.services.items.pro_medical_pedicure.description', 'Медицинский педикюр для проблемных стоп'),
      popular: true,
      image: '/images/beauty/services/pro-medical-pedicure.jpg'
    }
  ];

  // РЕСНИЦЫ
  const eyelashServices = [
    {
      id: 'classic-eyelashes',
      name: t('spa.services.items.classic_eyelashes.name', 'Классическое наращивание ресниц'),
      category: 'eyelashes',
      price: 2200,
      description: t('spa.services.items.classic_eyelashes.description', 'Классическое наращивание ресниц 1:1'),
      popular: true,
      image: '/images/beauty/services/eyelashes-classic.jpg'
    },
    {
      id: 'volume-1-5d',
      name: t('spa.services.items.volume_1_5d.name', '1.5D объем'),
      category: 'eyelashes',
      price: 2300,
      description: t('spa.services.items.volume_1_5d.description', 'Легкий объем для натурального эффекта'),
      popular: true,
      image: '/images/beauty/services/eyelashes-1-5d.jpg'
    },
    {
      id: 'volume-2d',
      name: t('spa.services.items.volume_2d.name', '2D объем'),
      category: 'eyelashes',
      price: 2400,
      description: t('spa.services.items.volume_2d.description', 'Средний объем для выразительного взгляда'),
      popular: true,
      image: '/images/beauty/services/eyelashes-2d.jpg'
    },
    {
      id: 'volume-3d',
      name: t('spa.services.items.volume_3d.name', '3D объем'),
      category: 'eyelashes',
      price: 2600,
      description: t('spa.services.items.volume_3d.description', 'Насыщенный объем для яркого образа'),
      popular: true,
      image: '/images/beauty/services/eyelashes-3d.jpg'
    },
    {
      id: 'hollywood-volume',
      name: t('spa.services.items.hollywood_volume.name', 'Голливудский объем'),
      category: 'eyelashes',
      price: 2900,
      description: t('spa.services.items.hollywood_volume.description', 'Максимальный объем для драматического эффекта'),
      popular: true,
      image: '/images/beauty/services/eyelashes-hollywood.jpg'
    },
    {
      id: 'eyelash-removal',
      name: t('spa.services.items.eyelash_removal.name', 'Снятие ресниц'),
      category: 'eyelashes',
      price: 300,
      description: t('spa.services.items.eyelash_removal.description', 'Безопасное снятие наращенных ресниц'),
      popular: false,
      image: '/images/beauty/services/eyelash-removal.jpg'
    }
  ];

  // БРОВИ
  const browServices = [
    {
      id: 'brow-correction',
      name: t('spa.services.items.brow_correction.name', 'Коррекция бровей'),
      category: 'brows',
      price: 600,
      description: t('spa.services.items.brow_correction.description', 'Профессиональная коррекция формы бровей'),
      popular: true,
      image: '/images/beauty/services/brow-correction.jpg'
    },
    {
      id: 'brow-tinting',
      name: t('spa.services.items.brow_tinting.name', 'Окрашивание бровей'),
      category: 'brows',
      price: 600,
      description: t('spa.services.items.brow_tinting.description', 'Окрашивание бровей стойкой краской'),
      popular: true,
      image: '/images/beauty/services/brow-tinting.jpg'
    },
    {
      id: 'brow-correction-tinting',
      name: t('spa.services.items.brow_correction_tinting.name', 'Коррекция и окрашивание бровей'),
      category: 'brows',
      price: 1000,
      description: t('spa.services.items.brow_correction_tinting.description', 'Комплексный уход за бровями'),
      popular: true,
      image: '/images/beauty/services/brow-correction-tinting.jpg'
    },
    {
      id: 'brow-lamination-complex',
      name: t('spa.services.items.brow_lamination_complex.name', 'Ламинирование + коррекция + окрашивание бровей'),
      category: 'brows',
      price: 1600,
      description: t('spa.services.items.brow_lamination_complex.description', 'Полный комплекс для идеальных бровей'),
      popular: true,
      image: '/images/beauty/services/brow-lamination.jpg'
    },
    {
      id: 'eyelash-lamination-tinting',
      name: t('spa.services.items.eyelash_lamination_tinting.name', 'Ламинирование + окрашивание ресниц'),
      category: 'brows',
      price: 1800,
      description: t('spa.services.items.eyelash_lamination_tinting.description', 'Ламинирование и окрашивание ресниц'),
      popular: true,
      image: '/images/beauty/services/eyelash-lamination.jpg'
    },
    {
      id: 'full-lamination-complex',
      name: t('spa.services.items.full_lamination_complex.name', 'Полный комплекс ламинирования'),
      category: 'brows',
      price: 3000,
      description: t('spa.services.items.full_lamination_complex.description', 'Коррекция + окрашивание бровей + ламинирование + окрашивание ресниц'),
      popular: true,
      image: '/images/beauty/services/full-lamination-complex.jpg'
    }
  ];

  // Объединяем все услуги
  const allServices = [
    ...massageServices,
    ...endosphereServices,
    ...laserServices,
    ...laserComplex3Services,
    ...laserComplex5Services,
    ...hairServices,
    ...manicureServices,
    ...pedicureServices,
    ...proMasterPedicureServices,
    ...eyelashServices,
    ...browServices
  ];

  // Категории услуг
  const serviceCategories = [
    {
      id: 'massage',
      name: t('spa.services.categories.massage', 'Массаж'),
      description: 'Расслабляющие и лечебные массажи',
      icon: '',
      color: 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'
    },
    {
      id: 'endosphere',
      name: t('spa.services.categories.endosphere', 'Эндосфера-терапия'),
      description: 'Аппаратная коррекция фигуры',
      icon: '',
      color: 'linear-gradient(135deg, #8B5A8C 0%, #9B6A9C 100%)'
    },
    {
      id: 'laser',
      name: t('spa.services.categories.laser', 'Лазерная эпиляция'),
      description: 'Современные технологии эпиляции',
      icon: '',
      color: 'linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%)'
    },
    {
      id: 'laser-complex-3',
      name: t('spa.services.categories.laser-complex-3', 'Лазерные комплексы (3 процедуры)'),
      description: 'Выгодные пакеты из 3 процедур',
      icon: '',
      color: 'linear-gradient(135deg, #4A90B8 0%, #5AA0C8 100%)'
    },
    {
      id: 'laser-complex-5',
      name: t('spa.services.categories.laser-complex-5', 'Лазерные комплексы (5 процедур)'),
      description: 'Выгодные пакеты из 5 процедур',
      icon: '',
      color: 'linear-gradient(135deg, #2D5B69 0%, #3D6B79 100%)'
    },
    {
      id: 'hair-care',
      name: t('spa.services.categories.hair-care', 'Уход за волосами'),
      description: 'Стрижки, окрашивание и уход',
      icon: '',
      color: 'linear-gradient(135deg, #A8B8A8 0%, #B8C8B8 100%)'
    },
    {
      id: 'manicure',
      name: t('spa.services.categories.manicure', 'Маникюр'),
      description: 'Профессиональный уход за руками и ногтями',
      icon: '',
      color: 'linear-gradient(135deg, #F8A8C8 0%, #F8B8D8 100%)'
    },
    {
      id: 'pedicure',
      name: t('spa.services.categories.pedicure', 'Педикюр'),
      description: 'Классический уход за стопами и ногтями',
      icon: '',
      color: 'linear-gradient(135deg, #A8D8F8 0%, #B8E8FF 100%)'
    },
    {
      id: 'pro-pedicure',
      name: t('spa.services.categories.pro-pedicure', 'PRO мастер педикюр'),
      description: 'Профессиональный и медицинский педикюр',
      icon: '',
      color: 'linear-gradient(135deg, #88C8E8 0%, #98D8F8 100%)'
    },
    {
      id: 'eyelashes',
      name: t('spa.services.categories.eyelashes', 'Ресницы'),
      description: 'Наращивание и уход за ресницами',
      icon: '',
      color: 'linear-gradient(135deg, #D8A8F8 0%, #E8B8FF 100%)'
    },
    {
      id: 'brows',
      name: t('spa.services.categories.brows', 'Брови и ресницы'),
      description: 'Коррекция, окрашивание и ламинирование',
      icon: '',
      color: 'linear-gradient(135deg, #C8D8A8 0%, #D8E8B8 100%)'
    }
  ];

  return { allServices, serviceCategories };
}; 