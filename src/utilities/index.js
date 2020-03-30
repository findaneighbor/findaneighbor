export const getLocalJSON = key => {
  try {
    const val = localStorage.getItem(key)

    return JSON.parse(val) || ''
  } catch (e) {
    return ''
  }
}

export const setLocalJSON = (key, value) => {
  try {
    const val = JSON.stringify(value)

    localStorage.setItem(key, val)

    return true
  } catch (e) {
    return false
  }
}