import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CakeIcon, FireIcon, BeakerIcon } from '@heroicons/react/24/outline';
// Импортируем изображение
// import barImage from '../../../assets/images/restaurant/bar.jpg';

const BarSection = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      width: '100%',
      padding: '80px 0',
      backgroundColor: '#FAFAFA',
      borderTop: '1px solid #EAEAEA',
      borderBottom: '1px solid #EAEAEA'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Заголовок секции */}
        <div style={{
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <div style={{
            color: '#90B3A7',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '10px'
          }}>
            {t('restaurant.bar.label', 'Бар')}
          </div>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '20px',
            fontFamily: 'Playfair Display, serif'
          }}>
            {t('restaurant.bar.title', 'Наш бар')}
          </h2>
          <p style={{
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto',
            color: '#4B5563',
            lineHeight: '1.6'
          }}>
            {t('restaurant.bar.description', 'У нас есть всё, чтобы утолить жажду — от спортивных протеиновых шейков до расслабляющих коктейлей.')}
          </p>
        </div>

        {/* Контейнер с контентом */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Верхний ряд с функциями и изображением */}
          <div style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '30px'
          }}>
            {/* Левая колонка с функциями */}
            <div style={{
              flex: '1',
              minWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}>
              {/* Функция 1 */}
              <div style={{
                display: 'flex',
                gap: '15px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(144, 179, 167, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <BeakerIcon style={{width: '20px', height: '20px', color: '#90B3A7'}} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827'
                  }}>
                    {t('restaurant.bar.feature1.title', 'Авторские напитки')}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}>
                    {t('restaurant.bar.feature1.description', 'Уникальные коктейли, созданные нашими миксологами')}
                  </p>
                </div>
              </div>

              {/* Функция 2 */}
              <div style={{
                display: 'flex',
                gap: '15px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(144, 179, 167, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CakeIcon style={{width: '20px', height: '20px', color: '#90B3A7'}} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827'
                  }}>
                    {t('restaurant.bar.feature2.title', 'Освежающие миксы')}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}>
                    {t('restaurant.bar.feature2.description', 'Свежевыжатые соки и фруктовые комбинации')}
                  </p>
                </div>
              </div>

              {/* Функция 3 */}
              <div style={{
                display: 'flex',
                gap: '15px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(144, 179, 167, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FireIcon style={{width: '20px', height: '20px', color: '#90B3A7'}} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827'
                  }}>
                    {t('restaurant.bar.feature3.title', 'Напитки для восстановления после тренировки')}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.5'
                  }}>
                    {t('restaurant.bar.feature3.description', 'Протеиновые коктейли и спортивное питание')}
                  </p>
                </div>
              </div>
            </div>

            {/* Правая колонка с изображением */}
            <div style={{
              flex: '1',
              minWidth: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '4/3',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}>
                <picture>
                  <source
                    srcSet="/src/assets/images/optimized/webp/bar.webp"
                    type="image/webp"
                  />
                  <img
                    src="/src/assets/images/optimized/bar.jpg"
                    alt="Our Bar"
                    style={{
                      width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                </picture>
              </div>
            </div>
          </div>

          {/* Кнопка внизу */}
          <div style={{
            marginTop: '20px'
          }}>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '15px 30px',
                fontSize: '14px',
                fontWeight: '500',
                backgroundColor: '#90B3A7',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => {
                document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = '';
                e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
              }}
            >
              {t('restaurant.bar.menu_button', 'Открыть меню напитков')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarSection; 