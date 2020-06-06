import { useEffect } from 'react'

export const useLogError = error => {
  useEffect(() => {
    if (error) console.error(error)
  }, [error])
}