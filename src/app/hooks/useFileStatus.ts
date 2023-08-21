import { FileStatusContext } from '../context/fileStatus'
import { useContext } from 'react'

export const useFileStatus = () => {
  return useContext(FileStatusContext)
}
