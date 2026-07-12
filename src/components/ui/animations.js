// Общие анимационные варианты для всего проекта - оптимизированы для мобильных устройств
export const fadeInUp = {
  hidden: { 
    y: 30, // Уменьшаем дистанцию анимации для лучшей производительности
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "tween", // Используем tween вместо spring для лучшей производительности
      ease: [0.25, 0.46, 0.45, 0.94], // Кубический easing
      duration: 0.4 // Уменьшаем продолжительность
    } 
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const fadeInDown = {
  hidden: { 
    y: -30, // Уменьшаем дистанцию
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.4
    } 
  }
};

export const fadeInLeft = {
  hidden: { 
    x: -50, // Уменьшаем дистанцию
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.4
    }
  }
};

export const fadeInRight = {
  hidden: { 
    x: 50, // Уменьшаем дистанцию  
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.4
    }
  }
};

export const scaleIn = {
  hidden: { 
    scale: 0.95, // Уменьшаем scale для более плавного эффекта
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3
    }
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const bounceIn = {
  hidden: { 
    scale: 0.95, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween", // Заменяем spring на tween для мобильных
      ease: [0.175, 0.885, 0.32, 1.275],
      duration: 0.4
    }
  }
};

export const textFadeIn = {
  hidden: { 
    opacity: 0, 
    y: 15 // Уменьшаем смещение
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1, // Уменьшаем задержку 
      staggerChildren: 0.08 // Уменьшаем stagger для более плавного эффекта
    }
  }
};

export const staggerItems = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08
    }
  }
};

export const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.2
    }
  }
};

export const buttonAnimation = {
  hidden: { 
    scale: 0.95, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
      delay: 0.2
    }
  },
  hover: {
    scale: 1.02, // Уменьшаем hover эффект для мобильных
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.2
    }
  },
  tap: {
    scale: 0.98
  }
};

export const heroTextAnimation = {
  hidden: { 
    y: 30, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.5,
      delay: 0.1
    }
  }
};

export const slideInRight = {
  hidden: { 
    x: 50, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.4
    }
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { 
      duration: 0.3 
    }
  }
};

export const slideInLeft = {
  hidden: { 
    x: -50, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.4
    }
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: { 
      duration: 0.3 
    }
  }
};

// Специальные варианты для мобильных устройств
export const mobileOptimized = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut", 
        duration: 0.3
      }
    }
  },
  scaleIn: {
    hidden: { scale: 0.98, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.25
      }
    }
  }
};

// Утилита для определения мобильного устройства
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Функция для получения оптимизированных анимаций
export const getOptimizedAnimation = (desktopAnimation, mobileAnimation = null) => {
  if (isMobile()) {
    return mobileAnimation || mobileOptimized.fadeIn;
  }
  return desktopAnimation;
}; 