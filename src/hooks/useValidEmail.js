import { useMemo } from 'react'
import { isEmailRegex } from '../utilities'

export const useValidEmail = email => {
  return useMemo(() => isEmailRegex.test(email), [email])
}
