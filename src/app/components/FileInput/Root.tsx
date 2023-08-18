// Contextos são client-side
'use client'

import { ComponentProps, createContext, useContext, useId } from 'react'

type RootProps = ComponentProps<'div'>

// Utilizando a contextAPI para fornecer informações para o componente.
// É necessário que cada FileInput tenha um  htmlfor e um id diferentes
type FileInputContextType = {
  // Id único gerado para cada fileInput utilizado na aplicação
  id: string
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  // é possível fazer a criação deste id único utilizando a crypto.randomUUID() porém existe um problema, será gerado um novo randomUUID para cada nova renderização do componente

  // Agora existe o hook useId() que é um ID único com persistÊncia entre renderizações
  const id = useId()

  return (
    <FileInputContext.Provider value={{ id }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
