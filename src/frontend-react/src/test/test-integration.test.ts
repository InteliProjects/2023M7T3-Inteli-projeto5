import axios from 'axios'
import { expect, test } from 'vitest'

async function reqAxios() {
  const result = await axios.post('http://localhost:3000/upload/text', {
    text: 'Qual á estratégia de vendas da ibm',
  })

  return result.data
}

export type TError = {
  response: {
    status: string
  }
}

async function reqAxiosBlock() {
  const dataRequest = new FormData()
  dataRequest.append('contentType', 'audio/webm')

  try {
    const result = await axios.post('http://localhost:3000/upload', dataRequest)
    return result
  } catch (error: TError | unknown) {
    if (error) {
      console.log(error.response.status)
      return error.response.status
    }
  }
}

async function reqAxiosHealth() {
  const result = await axios.get('http://localhost:3000')
  return result
}

test('Send a /health for api and get response OK !', async () => {
  const result = await reqAxiosHealth()
  expect(result.status).toBe(200)
})

test("Verify block if don't have audio for send for api", async () => {
  const result = await reqAxiosBlock()

  expect(result).toBe(400)
})

test('Send a message for api and return response', async () => {
  const expectValue = [
    'Com um profundo compromisso com a pesquisa e o desenvolvimento, a IBM continua a ser pioneira na criação de tecnologias emergentes, utilizando-se de insights data-driven para alimentar inovações que desafiam os limites do possível.',
    'O compromisso da IBM com a sustentabilidade é evidenciado por suas iniciativas ecológicas e desenvolvimento de tecnologias verdes, buscando um impacto ambiental mínimo.',
    'Através da colaboração e parcerias estratégicas, a IBM expande seu ecossistema, promovendo a integração de tecnologias e a co-criação de soluções inovadoras.',
  ]
  const result = await reqAxios()

  expect(result).toStrictEqual(expectValue)
})
