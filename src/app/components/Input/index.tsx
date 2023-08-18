import { ComponentProps } from 'react'

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
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

//  O elemento pai, vai ficar por volta dos 2 elementos(prefix e control)
type InputRoot = ComponentProps<'div'>
function InputRoot(props: InputRoot) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
