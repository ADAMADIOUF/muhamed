import { createSlice } from '@reduxjs/toolkit'
const savedTheme = localStorage.getItem('theme')

const initialState = {
  theme: savedTheme ? savedTheme : 'light',
}
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      state.theme = newTheme
      localStorage.setItem('theme', newTheme)
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
