'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  // capturando as informações do contexto
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    // Convertendo para um array a lista de files enviados pelo evento de onchange
    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      // sr-only é um hack para deixar invísível porém existente para os leitores de tela e com isso, podemos estilizar apenas a LABEL e não o input
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
