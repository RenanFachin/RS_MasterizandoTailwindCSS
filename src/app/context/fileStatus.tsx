'use client'

import { createContext, ReactNode, useState } from 'react'

type FileStatusContextType = {
  status: 'progress' | 'complete' | 'error'
  handleChangeStatus: () => void
}

export const FileStatusContext = createContext({} as FileStatusContextType)

interface FileStatusProviderProps {
  children: ReactNode
}

export function FileStatusProvider({ children }: FileStatusProviderProps) {
  const [status, setStatus] = useState<'progress' | 'complete' | 'error'>(
    'complete',
  )

  function generateRandomStatus() {
    const statuses = ['progress', 'complete', 'error']
    const randomIndex = Math.floor(Math.random() * statuses.length)
    return statuses[randomIndex] as 'progress' | 'complete' | 'error'
  }

  function handleChangeStatus() {
    const randomStatus = generateRandomStatus()
    setStatus(randomStatus)
  }

  return (
    <FileStatusContext.Provider value={{ status, handleChangeStatus }}>
      {children}
    </FileStatusContext.Provider>
  )
}
