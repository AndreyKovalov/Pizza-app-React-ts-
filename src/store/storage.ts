export function saveState<T>(state: T, key: string) {
  const stingState = JSON.stringify(state)
  localStorage.setItem(key, stingState)
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
