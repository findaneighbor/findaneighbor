import { useMemo } from 'react'
import { isDigitRegex } from '../utilities'

export const useValidPhone = phone => {
  return useMemo(() => {
    const number = phone.split('').filter(c => isDigitRegex.test(c))

    return number.length === 10 && number[0] !== '1'
  }, [phone])
}
