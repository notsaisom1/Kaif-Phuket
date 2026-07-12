import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import BookingModal from '../../booking/BookingModal';

const BookingSection = () => {
  const { t } = useTranslation();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-40 left-20 w-32 h-32 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 30, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              {t('restaurant.booking.label', 'Бронирование')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              {t('restaurant.booking.title', 'Забронируйте стол в нашем ресторане')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('restaurant.booking.description', 'Заранее зарезервируйте столик для особого события или просто для гарантированного места в нашем ресторане.')}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-base md:text-base text-lg">{t('restaurant.booking.open_hours', 'Часы работы')}</p>
                  <p className="text-gray-500 text-base md:text-sm">07:00 - 21:00</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-base md:text-base text-lg">{t('restaurant.booking.reservation', 'Резервация')}</p>
                  <p className="text-gray-500 text-base md:text-sm">+66 62 480 5877</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsBookingModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 35px',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '50px',
                transition: 'all 0.3s ease-out',
                position: 'relative',
                overflow: 'hidden',
                minWidth: '220px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(144, 179, 167, 0.3)',
                willChange: 'transform, box-shadow',
                transform: 'translateZ(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) translateZ(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(144, 179, 167, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateZ(0)';
                e.target.style.boxShadow = '0 6px 20px rgba(144, 179, 167, 0.3)';
              }}
            >
              <CalendarDaysIcon style={{ width: '16px', height: '16px' }} />
              {t('restaurant.booking.book_online', 'ЗАБРОНИРОВАТЬ СТОЛИК')}
            </button>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

          </motion.div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={t('restaurant.booking.service', 'Бронирование столика')}
        source="Restaurant page - booking section"
      />
    </section>
  );
};

export default BookingSection;
