import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuOpen: false, 
}

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen 
    },
  },
})

export const { toggleMenu } = toggleSlice.actions
export default toggleSlice.reducer
