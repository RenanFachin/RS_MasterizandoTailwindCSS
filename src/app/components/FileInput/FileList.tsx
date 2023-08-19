'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'
import { useFileStatus } from '@/app/hooks/useFileStatus'

export function FileList() {
  const { status } = useFileStatus()
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  console.log(status)

  return (
    <div ref={parent} className="mt-4 flex flex-col gap-3">
      {/* Percorrendo os arquivos selecionados */}
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state={status}
          />
        )
      })}
    </div>
  )
}
