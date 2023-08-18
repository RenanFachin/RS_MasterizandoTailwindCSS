'use client'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export function SelectInput() {
  return (
    <Select.Root>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placegholder]:text-zinc-600">
        <Select.Value
          className="text-black"
          placeholder="Select a country..."
        />
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
          className="z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-300 bg-white"
        >
          <Select.Viewport>
            {/* data-[highlighted]:bg-zinc-50 é um data attribute do componente do radix para mostrar qual item o usuário está fazendo um hover */}
            <Select.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText className="text-black">Brasil</Select.ItemText>

              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText className="text-black">
                United States
              </Select.ItemText>

              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
