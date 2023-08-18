// Contextos são client-side
'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

// Utilizando a contextAPI para fornecer informações para o componente.
// É necessário que cada FileInput tenha um  htmlfor e um id diferentes
type FileInputContextType = {
  // Id único gerado para cada fileInput utilizado na aplicação
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  // é possível fazer a criação deste id único utilizando a crypto.randomUUID() porém existe um problema, será gerado um novo randomUUID para cada nova renderização do componente

  // Agora existe o hook useId() que é um ID único com persistÊncia entre renderizações
  const id = useId()

  // criando um state para armazenar os arquivos enviado pelo usuário
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
