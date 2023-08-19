import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

// criando as variantes
// propriedade base = estilo que todos os botões possuem
const button = tv({
  base: 'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 active:opacity-80',
  // Variantes vão ser as customizações para as diferenças variantes de botões
  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500',
      testCustomVariant:
        'rounded-md px-2 hover:bg-error-100 shadow-none text-error-600',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
    },
  },

  // Definindo uma estilização de variante como padrão
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button className={button({ variant, className })} {...props}>
      {props.children}
    </button>
  )
}
