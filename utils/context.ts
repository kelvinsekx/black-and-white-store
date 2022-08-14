import {createContext, useContext} from 'react'

export const context = createContext<any>({})
export const Provider = context.Provider
export const getContext = () => useContext(context)