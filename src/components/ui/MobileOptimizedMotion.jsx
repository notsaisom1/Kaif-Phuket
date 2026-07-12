import React from 'react';
import { motion } from 'framer-motion';
import { isMobile, mobileOptimized } from './animations';

// Компонент для оптимизированных анимаций на мобильных устройствах
const MobileOptimizedMotion = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0,
  duration,
  className,
  ...motionProps 
}) => {
  // Проверяем, мобильное ли устройство
  const mobile = isMobile();
  
  // Получаем оптимизированные настройки анимации
  const getAnimationSettings = () => {
    if (mobile) {
      const mobileAnimation = mobileOptimized[animation] || mobileOptimized.fadeIn;
      return {
        ...mobileAnimation,
        visible: {
          ...mobileAnimation.visible,
          transition: {
            ...mobileAnimation.visible.transition,
            delay: delay * 0.5, // Уменьшаем задержку на мобильных
            duration: duration || mobileAnimation.visible.transition.duration
          }
        }
      };
    }
    
    // Для десктопа используем обычные анимации, но с оптимизацией
    return {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
          ease: [0.25, 0.46, 0.45, 0.94],
          duration: duration || 0.5,
          delay
        }
      }
    };
  };

  // Оптимизированные настроки viewport для мобильных
  const getViewportSettings = () => {
    if (mobile) {
      return {
        once: true,
        margin: "0px 0px -50px 0px", // Уменьшаем область срабатывания
        amount: 0.1 // Уменьшаем процент видимости для срабатывания
      };
    }
    
    return {
      once: true,
      margin: "0px 0px -100px 0px",
      amount: 0.2
    };
  };

  const animationSettings = getAnimationSettings();
  const viewportSettings = getViewportSettings();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={animationSettings}
      style={{
        // Оптимизация для мобильных устройств
        ...(mobile && {
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        })
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

// Хук для определения мобильного устройства с кешированием
export const useMobileDetection = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(isMobile());
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobileDevice;
};

// Компонент для анимации карточек с оптимизацией
export const OptimizedCard = ({ 
  children, 
  delay = 0, 
  className,
  whileHover,
  ...props 
}) => {
  const mobile = useMobileDetection();
  
  const cardAnimation = {
    hidden: { opacity: 0, y: mobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: mobile ? 0.3 : 0.5,
        delay: mobile ? delay * 0.5 : delay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: mobile ? "0px 0px -30px 0px" : "0px 0px -50px 0px",
        amount: mobile ? 0.1 : 0.2 
      }}
      variants={cardAnimation}
      whileHover={!mobile ? (whileHover || { scale: 1.02 }) : undefined}
      style={{
        ...(mobile && {
          willChange: 'auto',
          transform: 'translateZ(0)'
        })
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Компонент для заголовков с оптимизацией
export const OptimizedTitle = ({ 
  children, 
  delay = 0, 
  className,
  as: Component = 'h2',
  ...props 
}) => {
  const mobile = useMobileDetection();
  
  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: mobile ? 0.3 : 0.5,
        delay: mobile ? delay * 0.3 : delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={titleAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        margin: mobile ? "0px" : "0px 0px -50px 0px"
      }}
      style={{
        ...(mobile && {
          willChange: 'auto'
        })
      }}
      {...props}
    >
      <Component className={className}>
        {children}
      </Component>
    </motion.div>
  );
};

export default MobileOptimizedMotion; 