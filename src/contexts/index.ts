import { createContext } from 'react'
import { GlobalContextInterface } from '../models'
import { DEFAULT_GLOBAL_CONTEXT } from '../constants/default'

export const GlobalContext = createContext<GlobalContextInterface>(DEFAULT_GLOBAL_CONTEXT)
