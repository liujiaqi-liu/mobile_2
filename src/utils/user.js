const KEY = 'user'

export const setUser = (user) => {
  window.localStorage.setItem(KEY, JSON.stringify(user))
}

export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(KEY) || '{}')
}

export const removeUser = () => {
  return window.localStorage.removeItem(KEY)
}
