import { useMemo } from 'react'
import { isZipRegex } from '../utilities'

export const useValidZip = zip => {
  return useMemo(() => isZipRegex.test(zip), [zip])
}
