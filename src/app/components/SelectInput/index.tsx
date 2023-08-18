'use client'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectInputProps extends Select.SelectProps {
  children: ReactNode
  placeholder: string
}

export function SelectInput({
  children,
  placeholder,
  ...props
}: SelectInputProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placegholder]:text-zinc-600">
        <Select.Value className="text-black" placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      {/* O portal é forma de renderizar algo em outro lugar */}
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={10}
          // w-[--radix-select-trigger-width] faz com que a width seja exatamente do tamanho do trigger, ou seja, do input
          className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm"
        >
          <Select.Viewport>
            {/* data-[highlighted]:bg-zinc-50 é um data attribute do componente do radix para mostrar qual item o usuário está fazendo um hover */}
            {children}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
