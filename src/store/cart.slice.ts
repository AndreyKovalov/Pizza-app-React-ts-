import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loadState } from './storage'

export interface item {
  id: number
  count: number
}

export interface itemsState {
  items: item[]
}

export const CART_PERSISTENT_STATE = 'cartData'

const initialState: itemsState = {
  items: loadState<itemsState>(CART_PERSISTENT_STATE)?.items || [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    deleteCartItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    increaseItemCount: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )

      if (existingItem) {
        existingItem.count++
      }
    },
    decreaseItemCount: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )
      if (!existingItem) {
        return
      }
      if (existingItem) {
        existingItem.count--
      }
      if (existingItem.count === 0) {
        state.items = state.items.filter((item) => item.id !== action.payload)
      }
    },
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

export const cartActions = itemsSlice.actions

export default itemsSlice.reducer
