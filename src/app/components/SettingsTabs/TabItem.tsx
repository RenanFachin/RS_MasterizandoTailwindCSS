'use client'

// o react tabs precisa do use-client
import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

// O radix, por padrão, define diversas propriedades extras aos componentes. Uma delas é a prop data-state que varia de active para inactive, utilizaremos ela para fazer a customização para qnd estiver selecionado.
// Maneira para customizar isto diretamente data-[state=active]:text-violet-700

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      // Value é um parâmetro obrigatório do radix, ele relaciona o botão com o conteúdo
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {/* Para quando a tab estiver selecionada */}
      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"></div>
      )}
    </Tabs.Trigger>
  )
}
