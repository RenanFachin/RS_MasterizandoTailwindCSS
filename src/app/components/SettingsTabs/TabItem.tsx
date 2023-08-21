'use client'

// o react tabs precisa do use-client
import * as Tabs from '@radix-ui/react-tabs'

import { motion } from 'framer-motion'

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
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
    >
      {/* whitespace-nowrap faz não quebrar a linha */}
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-2">
        {title}
      </span>

      {/* Para quando a tab estiver selecionada */}
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  )
}
