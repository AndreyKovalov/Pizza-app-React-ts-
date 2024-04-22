import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface itemsitem {
  id: number
  count: number
}

export interface itemsState {
  items: itemsitem[]
}

const initialState: itemsState = {
  items: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )
      if (!existingItem) {
        state.items.push({ id: action.payload, count: 1 })
      }
      if (existingItem) {
        existingItem.count++
      }
    },
  },
})

export const { addCartItem } = itemsSlice.actions

export default itemsSlice.reducer
