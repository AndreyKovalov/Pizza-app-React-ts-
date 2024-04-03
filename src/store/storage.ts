export function saveState<T>(state: T, key: string) {
  const stringState = JSON.stringify(state)
  localStorage.setItem(key, stringState)
}

export function loadState<T>(key: string): T | undefined {
  try {
    const jsonState = localStorage.getItem(key)
    if (!jsonState) {
      return undefined
    }
    return JSON.parse(jsonState)
  } catch (error) {
    console.error(error)
    return undefined
  }
}
