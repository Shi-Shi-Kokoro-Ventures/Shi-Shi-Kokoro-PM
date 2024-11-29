import React, { forwardRef, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';
import {
  ChevronRight,
  ExternalLink,
  MoreVertical,
  Loader2
} from 'lucide-react';

// Default animation variants
const defaultCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

/**
 * Card Component - A versatile card component with various features
 * 
 * @component
 * @example
 * <Card
 *   title="Example Card"
 *   subtitle="Card subtitle"
 *   hoverable
 *   onClick={() => console.log('Card clicked')}
 * >
 *   Card content
 * </Card>
 */
const Card = forwardRef(({
  // Basic props
  className,
  headerClassName,
  footerClassName,
  contentClassName,
  title,
  subtitle,
  children,
  footer,

  // State props
  loading = false,
  error = false,
  disabled = false,

  // Interaction props
  hoverable = false,
  clickable = false,
  elevated = false,
  bordered = true,

  // Visual props
  headerAction,
  image,
  imageAlt,
  imagePosition = 'top',
  imageClassName,
  badge,
  badgeClassName,
  tag,
  tagClassName,

  // Animation props
  animate = true,
  variants = defaultCardVariants,
  motionProps = {},

  // Loading props
  loadingIcon,
  loadingIconClass,
  loadingText = 'Loading...',

  // Event handlers
  onClick,
  onKeyDown,

  // Other props
  ...props
}, ref) => {
  // Error boundary for rendering user-provided content
  const safeRender = useCallback((callback) => {
    try {
      return callback();
    } catch (error) {
      console.error('Error rendering card content:', error);
      return null;
    }
  }, []);

  const baseClassName = cn(
    'overflow-hidden rounded-lg transition-all duration-200',
    {
      'cursor-pointer': clickable || onClick,
      'hover:shadow-lg': hoverable || clickable || onClick,
      'border border-gray-200 dark:border-gray-700': bordered,
      'shadow-md': elevated,
      'bg-white dark:bg-gray-800': !error,
      'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800': error,
      'relative': loading || disabled,
      'opacity-60 pointer-events-none': disabled
    },
    className
  );

  const isInteractive = clickable || onClick;
  const CardWrapper = animate ? motion.div : 'div';
  const animationProps = animate ? {
    variants,
    initial: "hidden",
    animate: "visible",
    whileHover: hoverable && !disabled ? "hover" : undefined,
    layout: true,
    ...motionProps
  } : {};

  const handleClick = useCallback((e) => {
    if (loading || disabled) return;
    if (onClick) onClick(e);
  }, [loading, disabled, onClick]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && isInteractive) {
      handleClick(e);
    }
    if (onKeyDown) onKeyDown(e);
  }, [isInteractive, handleClick, onKeyDown]);

  const renderHeader = () => {
    if (!title && !subtitle && !headerAction) return null;

    return safeRender(() => (
      <div className={cn(
        'flex items-start justify-between p-4 pb-0',
        headerClassName
      )}>
        <div className="flex-1">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
        {headerAction && (
          <div className="ml-4">
            {typeof headerAction === 'function' ? headerAction() : headerAction}
          </div>
        )}
      </div>
    ));
  };

  const renderImage = () => {
    if (!image) return null;

    return safeRender(() => (
      <div className={cn(
        'relative overflow-hidden',
        {
          'aspect-video': !imagePosition || imagePosition === 'top',
          'h-full w-1/3': imagePosition === 'left',
          'h-full w-1/3 order-last': imagePosition === 'right'
        },
        imageClassName
      )}>
        <img
          src={image}
          alt={imageAlt || title || 'Card image'}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.src = 'fallback-image-url'; // Add your fallback image
            console.error('Error loading image:', e);
          }}
        />
      </div>
    ));
  };

  const renderBadge = () => {
    if (!badge) return null;

    return safeRender(() => (
      <div className={cn(
        'absolute top-3 right-3',
        badgeClassName
      )}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {badge}
        </span>
      </div>
    ));
  };

  const renderTag = () => {
    if (!tag) return null;

    return safeRender(() => (
      <div className={cn(
        'absolute top-3 left-3',
        tagClassName
      )}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {tag}
        </span>
      </div>
    ));
  };

  const renderFooter = () => {
    if (!footer) return null;

    return safeRender(() => (
      <div className={cn(
        'px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700',
        footerClassName
      )}>
        {typeof footer === 'function' ? footer() : footer}
      </div>
    ));
  };

  const renderLoadingOverlay = () => {
    if (!loading) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          {loadingIcon || (
            <Loader2 
              className={cn(
                'w-6 h-6 animate-spin',
                loadingIconClass || 'text-blue-500'
              )} 
            />
          )}
          {loadingText && (
            <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {loadingText}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };

  const renderErrorMessage = () => {
    if (!error) return null;

    return (
      <div className="p-4 text-sm text-red-600 dark:text-red-400">
        {typeof error === 'string' ? error : 'An error occurred'}
      </div>
    );
  };

  const content = (
    <CardWrapper
      ref={ref}
      className={baseClassName}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={title || 'Card'}
      aria-disabled={disabled}
      aria-busy={loading}
      {...animationProps}
      {...props}
    >
      {renderBadge()}
      {renderTag()}
      <div className={cn(
        'flex',
        {
          'flex-col': !imagePosition || imagePosition === 'top',
          'flex-row': imagePosition === 'left' || imagePosition === 'right'
        }
      )}>
        {imagePosition === 'left' && renderImage()}
        <div className="flex-1">
          {renderHeader()}
          <div className={cn('p-4', contentClassName)}>
            {children}
            {renderErrorMessage()}
          </div>
          {renderFooter()}
        </div>
        {imagePosition === 'right' && renderImage()}
      </div>
      {renderLoadingOverlay()}
    </CardWrapper>
  );

  return content;
});

Card.displayName = 'Card';

Card.propTypes = {
  // Basic props
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  // State props
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  disabled: PropTypes.bool,

  // Interaction props
  hoverable: PropTypes.bool,
  clickable: PropTypes.bool,
  elevated: PropTypes.bool,
  bordered: PropTypes.bool,

  // Visual props
  headerAction: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePosition: PropTypes.oneOf(['top', 'left', 'right']),
  imageClassName: PropTypes.string,
  badge: PropTypes.node,
  badgeClassName: PropTypes.string,
  tag: PropTypes.node,
  tagClassName: PropTypes.string,

  // Animation props
  animate: PropTypes.bool,
  variants: PropTypes.object,
  motionProps: PropTypes.object,

  // Loading props
  loadingIcon: PropTypes.node,
  loadingIconClass: PropTypes.string,
  loadingText: PropTypes.string,

  // Event handlers
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

/**
 * CardActions Component - A container for card action buttons
 */
export const CardActions = memo(forwardRef(({ 
  className,
  children,
  align = 'right',
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-2 mt-4',
        {
          'justify-end': align === 'right',
          'justify-start': align === 'left',
          'justify-center': align === 'center'
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}));

CardActions.displayName = 'CardActions';

CardActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right'])
};

export default memo(Card);