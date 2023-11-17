export type responseJsonTest = {
  categories: string[]
  keywords: string[]
  text: string
}

export type ContextProps = {
  menuStatus: boolean
  switchStatus: boolean
  loading: boolean
  data: responseJsonTest | unknown
  statusErro: boolean
  toggleStatusErro: () => void
  setDataAxios: (data: unknown) => void
  toggleStateLoading: () => void
  toggleMenu: () => void
  toggleSwitch: () => void
  toggleStatusLoadingSelect: (ele: boolean) => void
}

export type ContextType = ContextProps | null
