import React, { useState, forwardRef, useCallback, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
  Bell,
  ExternalLink,
  ChevronRight,
  Loader2
} from 'lucide-react';

// Enhanced animation variants with scale and custom timing
const defaultAlertVariants = {
  hidden: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 0.2, 1],
      scale: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: { 
      duration: 0.2, 
      ease: 'easeIn' 
    }
  }
};

// Alert type configurations
const ALERT_TYPES = {
  success: {
    icon: CheckCircle,
    baseClass: 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200',
    borderClass: 'border-green-200 dark:border-green-800',
    iconClass: 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200',
    progressClass: 'bg-green-500',
    hoverClass: 'hover:bg-green-100 dark:hover:bg-green-900/40',
    pulseClass: 'animate-pulse-green'
  },
  error: {
    icon: XCircle,
    baseClass: 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200',
    borderClass: 'border-red-200 dark:border-red-800',
    iconClass: 'bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200',
    progressClass: 'bg-red-500',
    hoverClass: 'hover:bg-red-100 dark:hover:bg-red-900/40',
    pulseClass: 'animate-pulse-red'
  },
  warning: {
    icon: AlertTriangle,
    baseClass: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200',
    borderClass: 'border-yellow-200 dark:border-yellow-800',
    iconClass: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-200',
    progressClass: 'bg-yellow-500',
    hoverClass: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/40',
    pulseClass: 'animate-pulse-yellow'
  },
  info: {
    icon: Info,
    baseClass: 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
    borderClass: 'border-blue-200 dark:border-blue-800',
    iconClass: 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200',
    progressClass: 'bg-blue-500',
    hoverClass: 'hover:bg-blue-100 dark:hover:bg-blue-900/40',
    pulseClass: 'animate-pulse-blue'
  },
  notification: {
    icon: Bell,
    baseClass: 'bg-purple-50 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200',
    borderClass: 'border-purple-200 dark:border-purple-800',
    iconClass: 'bg-purple-100 text-purple-600 dark:bg-purple-800 dark:text-purple-200',
    progressClass: 'bg-purple-500',
    hoverClass: 'hover:bg-purple-100 dark:hover:bg-purple-900/40',
    pulseClass: 'animate-pulse-purple'
  }
};

const Alert = memo(forwardRef((
  {
    type = 'info',
    title,
    message,
    children,
    action,
    dismissible = false,
    autoClose = false,
    autoCloseDelay = 5000,
    onDismiss,
    onAction,
    className,
    iconClassName,
    contentClassName,
    actionClassName,
    animate = true,
    variants = defaultAlertVariants,
    loading = false,
    bordered = true,
    elevated = false,
    interactive = false,
    expandable = false,
    accent = false,
    customIcon,
    description,
    progress,
    ...props
  },
  ref
) => {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [autoCloseProgress, setAutoCloseProgress] = useState(100);

  // Handle auto-close functionality
  useEffect(() => {
    if (!visible || !autoClose) return;

    const startTime = Date.now();
    const endTime = startTime + autoCloseDelay;
    
    const updateProgress = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const progress = (remaining / autoCloseDelay) * 100;
      setAutoCloseProgress(progress);

      if (remaining > 0) {
        requestAnimationFrame(updateProgress);
      }
    };

    const timer = setTimeout(() => {
      handleDismiss();
    }, autoCloseDelay);

    requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(timer);
    };
  }, [visible, autoClose, autoCloseDelay]);

  // Handle keyboard interactions
  useEffect(() => {
    if (!visible || !interactive) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && dismissible) {
        handleDismiss();
      } else if (e.key === 'Enter' && interactive) {
        handleAction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, dismissible, interactive]);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    if (onDismiss) onDismiss();
  }, [onDismiss]);

  const handleAction = useCallback(() => {
    if (onAction) onAction();
  }, [onAction]);

  const handleToggleExpand = useCallback(() => {
    if (expandable) {
      setExpanded(!expanded);
    }
  }, [expandable, expanded]);

  const AlertIcon = customIcon || ALERT_TYPES[type]?.icon || Info;

  const baseClassName = cn(
    'relative rounded-lg transition-all duration-200',
    {
      'shadow-md': elevated,
      'border': bordered,
      [ALERT_TYPES[type]?.baseClass]: true,
      [ALERT_TYPES[type]?.borderClass]: bordered,
      [ALERT_TYPES[type]?.hoverClass]: interactive,
      'cursor-pointer': interactive || expandable,
    },
    className
  );

  const IconWrapper = () => (
    <div
      className={cn(
        'flex-shrink-0 p-1 rounded-full transition-all duration-200',
        ALERT_TYPES[type]?.iconClass,
        {
          'animate-pulse': loading,
        },
        iconClassName
      )}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <AlertIcon className="w-5 h-5" aria-hidden="true" />
      )}
    </div>
  );

  const renderContent = () => (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          ref={ref}
          variants={animate ? variants : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          exit={animate ? 'exit' : undefined}
          className={baseClassName}
          role="alert"
          aria-live="polite"
          tabIndex={interactive || expandable ? 0 : undefined}
          onClick={interactive ? handleAction : expandable ? handleToggleExpand : undefined}
          onKeyPress={interactive ? handleAction : expandable ? handleToggleExpand : undefined}
          {...props}
        >
          {/* Accent Bar */}
          {accent && (
            <div 
              className={cn(
                'absolute left-0 top-0 bottom-0 w-1 rounded-l-lg',
                ALERT_TYPES[type]?.progressClass
              )} 
            />
          )}

          {/* Main Content */}
          <div className="flex items-start space-x-3 p-4">
            <IconWrapper />
            
            <div className={cn('flex-1', contentClassName)}>
              {title && (
                <h3 className="text-sm font-medium">
                  {title}
                </h3>
              )}
              
              {message && (
                <p className={cn(
                  'mt-1 text-sm',
                  {
                    'line-clamp-2': expandable && !expanded
                  }
                )}>
                  {message}
                </p>
              )}

              {description && (
                <p className="mt-2 text-sm opacity-80">
                  {description}
                </p>
              )}

              {children && (
                <div className={cn(
                  'mt-2',
                  {
                    'hidden': expandable && !expanded,
                  }
                )}>
                  {children}
                </div>
              )}

              {action && (
                <div className={cn('mt-3', actionClassName)}>
                  {typeof action === 'string' ? (
                    <button
                      type="button"
                      onClick={handleAction}
                      className={cn(
                        'inline-flex items-center text-sm font-medium',
                        ALERT_TYPES[type]?.iconClass.replace('bg-', 'text-')
                      )}
                    >
                      {action}
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  ) : (
                    action
                  )}
                </div>
              )}
            </div>

            {/* Dismiss Button */}
            {dismissible && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDismiss();
                }}
                aria-label="Dismiss alert"
                className={cn(
                  'flex-shrink-0 ml-4 text-gray-400 rounded-lg p-1',
                  'hover:text-gray-600 dark:hover:text-gray-300',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2',
                  ALERT_TYPES[type]?.borderClass.replace('border-', 'focus:ring-')
                )}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            )}

            {/* Expand Button */}
            {expandable && (
              <button
                type="button"
                onClick={handleToggleExpand}
                aria-label={expanded ? 'Show less' : 'Show more'}
                className={cn(
                  'flex-shrink-0 ml-4 text-gray-400 rounded-lg p-1',
                  'hover:text-gray-600 dark:hover:text-gray-300',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2',
                  ALERT_TYPES[type]?.borderClass.replace('border-', 'focus:ring-')
                )}
              >
                <ChevronRight 
                  className={cn(
                    'w-5 h-5 transform transition-transform duration-200',
                    { 'rotate-90': expanded }
                  )} 
                  aria-hidden="true" 
                />
              </button>
            )}
          </div>

          {/* Progress Bar */}
          {(autoClose || progress !== undefined) && (
            <div className="overflow-hidden rounded-b-lg">
              <div
                className={cn(
                  'h-1 transition-all duration-200',
                  ALERT_TYPES[type]?.progressClass
                )}
                style={{ 
                  width: `${progress ?? autoCloseProgress}%`,
                  transition: 'width linear'
                }}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return renderContent();
}));

Alert.displayName = 'Alert';

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(ALERT_TYPES)),
  title: PropTypes.node,
  message: PropTypes.node,
  children: PropTypes.node,
  action: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  dismissible: PropTypes.bool,
  autoClose: PropTypes.bool,
  autoCloseDelay: PropTypes.number,
  onDismiss: PropTypes.func,
  onAction: PropTypes.func,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  actionClassName: PropTypes.string,
  animate: PropTypes.bool,
  variants: PropTypes.object,
  loading: PropTypes.bool,
  bordered: PropTypes.bool,
  elevated: PropTypes.bool,
  interactive: PropTypes.bool,
  expandable: PropTypes.bool,
  accent: PropTypes.bool,
  customIcon: PropTypes.elementType,
  description: PropTypes.node,
  progress: PropTypes.number,
};

export default Alert;