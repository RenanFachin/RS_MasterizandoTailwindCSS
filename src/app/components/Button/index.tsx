import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

// criando as variantes
// propriedade base = estilo que todos os botões possuem
const button = tv({
  base: 'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 active:opacity-80',
})

export type ButtonProps = ComponentProps<'button'>

export function Button(props: ButtonProps) {
  return (
    <button className={button()} {...props}>
      {props.children}
    </button>
  )
}
