import axios from 'axios'

export function requestBackEnd(
  data: string | Blob,
  navigate: (path: string) => void,
  contextActual: {
    toggleStatusLoadingSelect: (status: boolean) => void
    toggleStateLoading: () => void
    setDataAxios: (data: unknown) => void
    toggleStatusErro: () => void
  } | null,
) {
  const dataRequest = new FormData()
  dataRequest.append('file', data)
  dataRequest.append('contentType', 'audio/webm')

  contextActual?.toggleStatusLoadingSelect(true)

  navigate('/result')

  axios
    .post('http://localhost:3000/upload', dataRequest)
    .then((response) => {
      console.log(response.data)
      contextActual?.toggleStateLoading()
      contextActual?.setDataAxios(response.data)
    })
    .catch((item) => {
      navigate('/')

      contextActual?.toggleStatusErro()

      console.log(item.response.data.message)
    })
}
