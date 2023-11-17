import menuPng from '../assets/menu.png'
import soundOnPng from '../assets/soundOn.png'
import soundOffPng from '../assets/soundOff.png'
import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Switch } from '@material-tailwind/react'
import { Context } from '../context/context'

export function NavbarResult() {
  const [soundStatus, setSoundStatus] = useState(false)
  const contextActual = useContext(Context)

  const router = useLocation().pathname

  const toggleSound = () => {
    setSoundStatus(!soundStatus)
  }

  if (router === '/' || router === '/faq') {
    return (
      <div className="flex justify-start ml-5 items-center">
        <div>
          <img
            onClick={contextActual?.toggleMenu}
            className=""
            src={menuPng}
            alt=""
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex justify-center gap-28 items-center">
        <div>
          <img
            onClick={contextActual?.toggleMenu}
            className=""
            src={menuPng}
            alt=""
          />
        </div>
        <div className="bg-white/20 rounded-full p-2">
          {soundStatus && (
            <img
              className="w-10"
              onClick={toggleSound}
              src={soundOnPng}
              alt=""
            />
          )}
          {!soundStatus && (
            <img
              className="w-10"
              onClick={toggleSound}
              src={soundOffPng}
              alt=""
            />
          )}
        </div>
        <div className="mt-5 text-white">
          <div>
            <Switch
              id="custom-switch-component"
              ripple={false}
              className="h-full w-full bg-white checked:bg-white"
              containerProps={{
                className: 'w-11 h-6',
              }}
              circleProps={{
                className:
                  'bg-primary-light before:hidden left-0.5 border-none',
              }}
              onChange={contextActual?.toggleSwitch}
              checked={contextActual?.switchStatus}
              crossOrigin={undefined}
            />
          </div>
          <div className="flex gap-6 text-sm">
            <h3>M</h3>
            <h3>V</h3>
          </div>
        </div>
      </div>
    )
  }
}
