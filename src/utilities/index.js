export const getSubmissionStatus = key => {
  const val = localStorage.getItem(key)

  if (!val) {
    return false
  }

  const expired = Number(localStorage.getItem(`${key}.ttl`))

  if (expired > Date.now()) {
    return true
  }

  localStorage.removeItem(key)
  localStorage.removeItem(`${key}.ttl`)

  return false
}

export const setSubmissionStatus = (key, value) => {
  if (value) {
    localStorage.setItem(key, value)
    localStorage.setItem(`${key}.ttl`, Date.now() + (1000 * 60 * 30))
  } else {
    localStorage.removeItem(key)
    localStorage.removeItem(`${key}.ttl`)
  }
}