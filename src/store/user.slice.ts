import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loadState } from './storage'
import axios, { AxiosError } from 'axios'
import { PREFIX } from '../helpers/API'
import { LoginResponse } from '../interfaces/auth.interfaces'

export const JWT_PERSISTENT_STATE = 'userData'

export interface UserPersistentState {
  jwt: string | null
}

export interface UserState {
  jwt: string | null
  errMassage?: string
}

const initialState: UserState = {
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
  errMassage: undefined,
}

export const login = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email: params.email,
        password: params.password,
      })
      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.jwt = null
    },
    resetErrMassage: (state) => {
      state.errMassage = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload) {
        return
      }
      state.jwt = action.payload.access_token
    })
    builder.addCase(login.rejected, (state, action) => {
      state.errMassage = action.error.message
    })
  },
})

export default userSlice.reducer
export const userActions = userSlice.actions
