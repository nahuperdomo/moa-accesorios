import { cn } from '@/lib/utils';

interface BadgeProps {
  variant: 'sold-out' | 'new';
  className?: string;
}

export default function Badge({ variant, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-[10px] font-medium px-2 py-0.5 rounded-full text-white uppercase tracking-wider',
        variant === 'sold-out' && 'bg-red-400/90',
        variant === 'new' && 'bg-mint',
        className
      )}
    >
      {variant === 'sold-out' ? 'Agotado' : 'Nuevo'}
    </span>
  );
}
