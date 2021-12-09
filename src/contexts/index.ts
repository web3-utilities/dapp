import { createContext } from "react";
import { ConfigContext } from "../models";

export const Context = createContext<ConfigContext>({ supportedChainIDs: [1] })
