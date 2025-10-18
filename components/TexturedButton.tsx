import * as Toggle from '@radix-ui/react-toggle';
import clsx from 'clsx';
import * as React from 'react';

type Props = React.ComponentPropsWithoutRef<'button'> & {
  variant?: 'sage' | 'rust';
  asToggle?: boolean;
  pressed?: boolean;
  onPressedChange?: (v: boolean) => void;
};

export function TexturedButton({
  variant = 'sage',
  asToggle,
  pressed,
  onPressedChange,
  className,
  children,
  ...rest
}: Props) {
  const classes = clsx(
    'btn',
    variant === 'rust' ? 'btn--rust' : 'btn--sage',
    className
  );

  if (asToggle) {
    return (
      <Toggle.Root
        pressed={pressed}
        onPressedChange={onPressedChange}
        className={classes}
        {...rest}
      >
        {children}
      </Toggle.Root>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
