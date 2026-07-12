import React from 'react';
import { motion } from 'framer-motion';

// Безопасная утилита для определения мобильного устройства
export const useSafeMobileDetection = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobileDevice(window.innerWidth <= 768);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobileDevice;
};

// Безопасные варианты анимаций
export const safeAnimations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },

  mobileSlideUp: {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
};

// Безопасный компонент для карточек
export const SafeAnimatedCard = ({ 
  children, 
  delay = 0, 
  className,
  whileHover,
  as: Component = 'div',
  ...restProps 
}) => {
  const isMobile = useSafeMobileDetection();
  
  const animation = isMobile ? safeAnimations.mobileSlideUp : safeAnimations.slideUp;
  const safeHover = !isMobile && whileHover ? whileHover : undefined;
  
  // Если as указан как styled-component или другой React компонент
  if (Component !== 'div') {
    return (
      <Component className={className} {...restProps}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: true, 
            margin: isMobile ? "0px 0px -30px 0px" : "0px 0px -50px 0px",
            amount: 0.1
          }}
          variants={{
            hidden: animation.hidden,
            visible: {
              ...animation.visible,
              transition: {
                ...animation.visible.transition,
                delay: isMobile ? delay * 0.7 : delay
              }
            }
          }}
          whileHover={safeHover}
        >
          {children}
        </motion.div>
      </Component>
    );
  }
  
  // Для обычного div используем motion.div
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: isMobile ? "0px 0px -30px 0px" : "0px 0px -50px 0px",
        amount: 0.1
      }}
      variants={{
        hidden: animation.hidden,
        visible: {
          ...animation.visible,
          transition: {
            ...animation.visible.transition,
            delay: isMobile ? delay * 0.7 : delay
          }
        }
      }}
      whileHover={safeHover}
      {...restProps}
    >
      {children}
    </motion.div>
  );
};

// Безопасный компонент для заголовков
export const SafeAnimatedTitle = ({ 
  children, 
  delay = 0, 
  className,
  as: Component = 'div',
  ...restProps 
}) => {
  const isMobile = useSafeMobileDetection();
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: isMobile ? 0.3 : 0.4,
            delay: isMobile ? delay * 0.5 : delay,
            ease: "easeOut"
          }
        }
      }}
      {...restProps}
    >
      <Component className={className}>
        {children}
      </Component>
    </motion.div>
  );
};

export default SafeAnimatedCard; 