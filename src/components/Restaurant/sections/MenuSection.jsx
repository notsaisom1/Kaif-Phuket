import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, DocumentArrowDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { getRestaurantData } from '../data/restaurantData';
import OptimizedImage from '../../common/OptimizedImage';

const MenuSection = ({ menuSectionRef }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const { menuItems, tagStyles } = getRestaurantData(t);

  // Filtered and sorted menu items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    // Sort items
    switch (sortBy) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'popular':
        filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return 0;
        });
        break;
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [menuItems, activeCategory, searchTerm, sortBy]);

  const handleDownloadPDF = () => {
    window.open('/documents/menu.pdf', '_blank');
  };

  return (
    <section ref={menuSectionRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="menu-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-opacity-10 bg-primary text-primary text-sm font-medium mb-4">
          {t('restaurant.menu.tag', 'Изысканные блюда')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
          {t('restaurant.menu.title', 'Наше меню')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          {t('restaurant.menu.description', 'Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами')}
        </p>
        <motion.button
          onClick={handleDownloadPDF}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D29B84] text-white hover:bg-[#C08B74] transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DocumentArrowDownIcon className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium leading-none">{t('restaurant.menu.download_pdf', 'Скачать PDF')}</span>
        </motion.button>
      </motion.div>

      {/* Modern Search & Filter Bar */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Enhanced Search & Controls */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex gap-3">
            {/* Enhanced Search Bar */}
            <div className="flex-1 relative group">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#D29B84] transition-colors" />
              <input
                type="text"
                placeholder={t('restaurant.menu.search_placeholder', 'Найти блюдо...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#D29B84] focus:outline-none transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:shadow-lg"
              />
              {searchTerm && (
                <motion.button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-4 h-4 text-gray-500" />
                </motion.button>
              )}
            </div>

            {/* Modern Mobile Filter Toggle */}
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className={`lg:hidden flex items-center gap-2 px-5 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
                showFilters
                  ? 'bg-[#D29B84] text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D29B84]'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Категории</span>
            </motion.button>

            {/* Sleek PDF Download */}
            <motion.button
              onClick={handleDownloadPDF}
              className="hidden sm:flex items-center gap-2 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#D29B84] to-[#E6A691] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span className="hidden md:inline">Меню PDF</span>
            </motion.button>
          </div>

          {/* Results & Sort Bar */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold text-gray-900">
                <span className="text-[#D29B84]">{filteredAndSortedItems.length}</span> блюд найдено
              </div>
              {(activeCategory !== 'all' || searchTerm) && (
                <motion.button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                  }}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XMarkIcon className="w-3 h-3" />
                  Очистить фильтры
                </motion.button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">Сортировка:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-[#D29B84] focus:outline-none bg-white font-medium text-gray-700 cursor-pointer hover:border-[#D29B84]/50 transition-colors"
              >
                <option value="default">По умолчанию</option>
                <option value="name-asc">Название А-Я</option>
                <option value="name-desc">Название Я-А</option>
                <option value="popular">⭐ Популярное</option>
              </select>
            </div>
          </div>
        </div>

        {/* Modern Category Navigation */}
        <AnimatePresence>
          <motion.div
            className={`${showFilters ? 'block' : 'hidden'} lg:block`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Grid - Modern Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { key: 'all', icon: '🍽️', color: '#D29B84', label: 'Все' },
                { key: 'breakfast', icon: '🌅', color: '#F59E0B', label: 'Завтраки' },
                { key: 'soup', icon: '🍲', color: '#3B82F6', label: 'Супы' },
                { key: 'salad', icon: '🥗', color: '#10B981', label: 'Салаты' },
                { key: 'grill', icon: '🔥', color: '#EF4444', label: 'Гриль' },
                { key: 'main', icon: '🍖', color: '#F97316', label: 'Горячие' },
                { key: 'side', icon: '🥔', color: '#6B7280', label: 'Гарниры' },
                { key: 'dessert', icon: '🍰', color: '#EC4899', label: 'Десерты' }
              ].map((category) => {
                const itemCount = menuItems.filter(item =>
                  category.key === 'all' ? true : item.category === category.key
                ).length;

                const isActive = activeCategory === category.key;

                return (
                  <motion.button
                    key={category.key}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setShowFilters(false);
                    }}
                    className={`relative flex flex-col items-center p-4 rounded-2xl font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-white shadow-xl'
                        : 'text-gray-700 bg-white border border-gray-200 hover:border-[#D29B84]/30 hover:shadow-lg'
                    }`}
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}E6 100%)`
                        : undefined,
                      transform: isActive ? 'translateY(-2px)' : undefined
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Icon Container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20'
                        : 'bg-gray-50 group-hover:bg-gray-100'
                    }`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>

                    {/* Label */}
                    <span className={`text-xs font-semibold text-center leading-tight ${
                      isActive ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {t(`restaurant.menu.categories.${category.key}`, category.label)}
                    </span>

                    {/* Count Badge */}
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-gray-800 shadow-lg'
                        : 'bg-[#D29B84] text-white group-hover:scale-110'
                    }`}>
                      {itemCount}
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-white/30"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Menu Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {filteredAndSortedItems
          .map((item, index) => {
            const categoryData = [
              { key: 'all', icon: '🍽️', color: '#8B5CF6' },
              { key: 'breakfast', icon: '🌅', color: '#F59E0B' },
              { key: 'soup', icon: '🍲', color: '#3B82F6' },
              { key: 'salad', icon: '🥗', color: '#10B981' },
              { key: 'grill', icon: '🔥', color: '#EF4444' },
              { key: 'main', icon: '🍖', color: '#F97316' },
              { key: 'side', icon: '🥔', color: '#6B7280' },
              { key: 'dessert', icon: '🍰', color: '#EC4899' }
            ].find(cat => cat.key === item.category);

            return (
              <motion.div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#D29B84] transition-all duration-500 group"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: 0.05 * (index % 12),
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(210, 155, 132, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Для блюд без изображения - красивая иконка */}
                {!item.image || item.image === null ? (
                  <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* Иконка категории */}
                    {categoryData && (
                      <motion.div
                        className="flex items-center justify-center w-24 h-24 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${categoryData?.color || '#90B3A7'} 0%, ${categoryData?.color || '#90B3A7'}CC 100%)`,
                          boxShadow: `0 8px 24px ${categoryData?.color || '#90B3A7'}40`
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-4xl">{categoryData.icon}</span>
                      </motion.div>
                    )}

                    {/* Популярный значок */}
                    {item.popular && (
                      <motion.div
                        className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10"
                        style={{
                          background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
                        }}
                        whileHover={{ scale: 1.1 }}
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                      >
                        ⭐ {t('restaurant.menu.popular', 'Популярное')}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  /* Для еды с изображением - улучшенное фото */
                  <div className="h-56 overflow-hidden relative group">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      priority={index < 6}
                      className="w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      objectFit="cover"
                      withPlaceholder={true}
                      withLoadingIndicator={true}
                      disableWebP={item.name.includes('яблоко') || item.name.includes('apple')}
                      onLoad={() => console.log(`✅ Loaded: ${item.name} - ${item.image}`)}
                      onError={() => console.log(`❌ Error: ${item.name} - ${item.image}`)}
                    />

                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {item.popular && (
                      <motion.div
                        className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20"
                        style={{
                          background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
                          boxShadow: '0 8px 20px rgba(239, 68, 68, 0.3)'
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2 + (index * 0.05), type: "spring", stiffness: 500 }}
                      >
                        ⭐ {t('restaurant.menu.popular', 'Популярное')}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Улучшенный контент карточки */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#D29B84] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <motion.span
                      className="text-xl font-bold ml-3 flex-shrink-0 px-3 py-1 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, #D29B84 0%, #E6A691 100%)',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(210, 155, 132, 0.3)'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.price}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">{item.description}</p>

                  {/* Улучшенные теги */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-all duration-200 ${tagStyles[tag] || 'bg-gray-100 text-gray-600 border-gray-200'}`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + (tagIndex * 0.05) }}
                      >
                        {t(`restaurant.menu.tags.${tag}`, tag)}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
      </motion.div>

      {/* Mobile PDF Download Button */}
      <motion.div
        className="sm:hidden flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={handleDownloadPDF}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#D29B84] to-[#E6A691] text-white font-medium shadow-lg w-full max-w-sm justify-center"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <DocumentArrowDownIcon className="w-5 h-5" />
          <span>Скачать полное меню PDF</span>
        </motion.button>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#D29B84] to-[#E6A691] text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">Не нашли то, что искали?</h3>
        <p className="text-lg mb-6 opacity-90">Наши шеф-повара будут рады приготовить что-то особенное специально для вас</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#D29B84] font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ShoppingBagIcon className="w-6 h-6" />
            <span className="text-base font-bold">Заказать столик</span>
          </motion.button>
               
          <motion.button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-[#D29B84] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="w-6 h-6" />
            <span className="text-base font-bold">Полное меню PDF</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;