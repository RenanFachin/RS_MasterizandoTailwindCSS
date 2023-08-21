import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

// Começo do input
type InputPrefixProps = ComponentProps<'div'>
function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

// O input, de fato
type InputControlProps = ComponentProps<'input'>
function InputControl(props: InputControlProps) {
  return (
    <input
      className="outline-non flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}

//  O elemento pai, vai ficar por volta dos 2 elementos(prefix e control)
type InputRoot = ComponentProps<'div'>
function InputRoot(props: InputRoot) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-b-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
