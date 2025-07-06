// components/LuxuryButton.js
import { motion } from 'framer-motion';

export default function LuxuryButton({ 
  href, 
  onClick, 
  children, 
  className = '', 
  icon, 
  variant = 'primary', // primary, secondary, outline
  size = 'medium', // small, medium, large
  fullWidth = false,
  disabled = false,
  type = 'button'
}) {
  // Theme colors based on variant
  const getVariantStyles = () => {
    switch(variant) {
      case 'secondary':
        return {
          background: 'bg-gradient-to-r from-[#bf9e4b] to-[#e2c87d]',
          hoverGradient: 'from-[#e2c87d] to-[#bf9e4b]',
          textColor: 'text-[#0d3b66]',
          hoverTextColor: 'group-hover:text-[#0d3b66]',
          shadowColor: 'focus:ring-yellow-300',
          borderStyle: 'border-b-[2px] border-[#0d3b66]'
        };
      case 'outline':
        return {
          background: 'bg-white',
          hoverGradient: 'from-gray-100 to-white',
          textColor: 'text-primary-blue',
          hoverTextColor: 'group-hover:text-primary-blue',
          shadowColor: 'focus:ring-blue-300',
          borderStyle: 'border-b-[3px] border-primary-gold'
        };
      case 'primary':
      default:
        return {
          background: 'bg-gradient-to-r from-[#0d3b66] to-[#1e5f8b]',
          hoverGradient: 'from-[#1e5f8b] to-[#0d3b66]',
          textColor: 'text-white',
          hoverTextColor: 'group-hover:text-white',
          shadowColor: 'focus:ring-blue-300',
          borderStyle: 'border-b-[2px] border-primary-gold'
        };
    }
  };

  // Size styles
  const getSizeStyles = () => {
    switch(size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'large':
        return 'px-10 py-5 text-lg';
      case 'medium':
      default:
        return 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base';
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();
  
  const ButtonContent = () => (
    <>
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${variantStyles.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        initial={false}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Icon */}
      {icon && (
        <motion.span 
          className="relative z-10 mr-3"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      
      {/* Button text */}
      <span className={`relative z-10 ${variantStyles.hoverTextColor} transition-colors duration-300`}>
        {children}
      </span>
      
      {/* Arrow animation removed */}
    </>
  );

  const baseClasses = `group inline-flex items-center ${variantStyles.background} ${variantStyles.textColor} rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 ${variantStyles.shadowColor} focus:ring-opacity-50 relative overflow-hidden ${sizeStyles} ${variantStyles.borderStyle} ${fullWidth ? 'w-full justify-center' : ''} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;

  // Render as button or link based on props
  if (href) {
    return (
      <motion.a 
        href={href}
        className={baseClasses}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: disabled ? 1 : 1.02, 
          y: disabled ? 0 : -2,
          boxShadow: "0 25px 50px -12px rgba(13, 59, 102, 0.4)"
        }}
        whileTap={{ 
          scale: disabled ? 1 : 0.98 
        }}
        transition={{ 
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <ButtonContent />
      </motion.a>
    );
  }
  
  return (
    <motion.button 
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: disabled ? 1 : 1.02, 
        y: disabled ? 0 : -2,
        boxShadow: "0 25px 50px -12px rgba(13, 59, 102, 0.4)"
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98 
      }}
      transition={{ 
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <ButtonContent />
    </motion.button>
  );
}
