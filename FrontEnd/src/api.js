import axios from 'axios'

const API = axios.create({
  // Local dev uses Vite proxy with empty base URL.
  // Docker/Azure can inject VITE_API_BASE_URL, for example: https://your-api-gateway.azurecontainerapps.io
  baseURL: import.meta.env.VITE_API_BASE_URL || ''
})

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user') || '{}')
  } catch {
    return {}
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.href = '/login'
}

export default API
