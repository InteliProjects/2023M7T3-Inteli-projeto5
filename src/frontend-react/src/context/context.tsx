import { ReactNode, createContext, useState } from 'react'
import { ContextType, ContextProps } from '../types/context'
export const Context = createContext<ContextType>(null)


export default function ContextProvider({ children }: { children: ReactNode }) {
  const [menuStatus, setMenuStatus] = useState(false)
  const [switchStatus, setSwitchStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<string[]>([])
  const [statusErro, setStatusErro] = useState(false)

  const toggleMenu = () => {
    setMenuStatus(!menuStatus)
  }

  const toggleSwitch = () => {
    setSwitchStatus(!switchStatus)
  }

  const toggleStateLoading = () => {
    setLoading(!loading)
  }

  const toggleStatusLoadingSelect = (ele: boolean) => {
    setLoading(ele)
  }

  const setDataAxios = (data: unknown) => {
    setData(data as string[])
  }

  const toggleStatusErro = () => {
    setStatusErro(!statusErro)
  }

  const contextValue: ContextProps = {
    menuStatus,
    switchStatus,
    loading,
    data,
    statusErro,
    toggleMenu,
    toggleSwitch,
    toggleStateLoading,
    setDataAxios,
    toggleStatusErro,
    toggleStatusLoadingSelect,
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
