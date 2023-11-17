import { Outlet } from 'react-router-dom'
import { NavbarResult } from '../components/navbar-result'
import { Menu } from '../components/menu'

export default function Context() {
  return (
    <div className="bg-primary relative z-40">
      <div className="">
        <div className="mt-5">
          <NavbarResult />
        </div>
        <div className="fixed top-1/2 z-40">
          <div className="">
            <Menu />
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
      <div className="absolute left-2 bottom-32 w-52 h-40 bg-whiteBall/25 blur-3xl"></div>
      <div className="absolute right-1 top-24  w-52 h-40 bg-whiteBall/50 blur-3xl"></div>
    </div>
  )
}
