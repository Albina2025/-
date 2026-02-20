type key = 'token' | 'refreshToken' | 'userInn' | 'i18nextLng' | 'accessToken' | 'allData' | 'colorScheme'

export const useLocalStorage = (name?: key | string) => {

  const setStorage = (data: string | object) => {
    if(!name) return console.error('useLocalStorage: name is required')
    if(typeof data === 'string') {
      return localStorage.setItem(name, data)
    } else {
      return localStorage.setItem(name, JSON.stringify(data))
    }
  }

  const getStorage = () => {
    if(!name) return console.error('useLocalStorage: name is required')
    const data = localStorage.getItem(name)
    if(data) {
      try {
        return JSON.parse(data)
      } catch {
        return data
      }
    }
    return null
  }

  const removeStorage = () => {
    if(!name) return console.error('useLocalStorage: name is required')
    localStorage.removeItem(name)
  }

  const removeStorageAll = () => localStorage.clear()

  return {
    setStorage,
    getStorage,
    removeStorage,
    removeStorageAll
  }
}
