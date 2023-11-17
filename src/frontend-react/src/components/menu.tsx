import { Link } from 'react-router-dom'
import { Context } from '../context/context'
import { useContext } from 'react'

export function Menu() {
  const contextActual = useContext(Context)

  if (contextActual) {
    if (contextActual.menuStatus) {
      return (
        <div className="border-black/10 border-2 bg-primary text-white flex flex-col h-screen w-screen text-3xl p-5 rounded-xl">
          <div className="mb-10"></div>
          <div className=" p-3 MenuFont border-b-2 border-white mb-5">
            <Link className="" to="/">
              Perguntar
            </Link>
          </div>
          <div className=" p-3 MenuFont border-b-2 border-white mb-5">
            <Link to="/result">Resposta</Link>
          </div>
          <div className="p-3 MenuFont">
            <Link to="/faq">Suporte</Link>
          </div>
          <div className="absolute z-10 right-1 top-10  w-52 h-40 bg-whiteBall/50 blur-3xl"></div>
        </div>
      )
    }
  }
}
