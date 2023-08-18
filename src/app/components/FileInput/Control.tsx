'use client'
import { ComponentProps } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  // capturando as informações do contexto
  const { id } = useFileInput()

  return (
    <input
      type="file"
      // sr-only é um hack para deixar invísível porém existente para os leitores de tela e com isso, podemos estilizar apenas a LABEL e não o input
      className="sr-only"
      id={id}
      {...props}
    />
  )
}
