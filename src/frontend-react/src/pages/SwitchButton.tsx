import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Switch } from '@material-tailwind/react'
import { BsSendFill } from 'react-icons/bs'

import { Context } from '../context/context'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'
import { addAudioElement } from '../scripts/addAudio'
import { requestBackEnd } from '../scripts/requestBack'

const SwitchButton: React.FC = () => {
  const [blob, setBlob] = useState<string | Blob>('')
  const contextActual = useContext(Context)
  const [showErro, setShowErro] = useState(false)
  const navigate = useNavigate()
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err),
  )

  useEffect(() => {
    if (contextActual?.statusErro) {
      setShowErro(true)

      const timer = setTimeout(() => {
        setShowErro(false)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [contextActual?.statusErro])

  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      {showErro && (
        <h1 className="text-red-500 text-xl mb-5">Erro ao enviar o audio</h1>
      )}

      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob, setBlob)}
        recorderControls={recorderControls}
        showVisualizer={true}
      />

      <div className="p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Press to record
        </h1>

        <div className="flex justify-center items-center space-x-2 z-30 mt-10 mb-10">
          <span className="text-sm text-gray-700">Marketing</span>
          <Switch
            id="custom-switch-component"
            ripple={false}
            className="h-full w-full bg-white checked:bg-white "
            containerProps={{
              className: 'w-11 h-6 ',
            }}
            circleProps={{
              className: 'bg-primary-light before:hidden left-0.5 border-none ',
            }}
            onChange={contextActual?.toggleSwitch}
            checked={contextActual?.switchStatus}
            crossOrigin={undefined}
          />
          <span className="text-sm text-gray-700">Sales</span>
        </div>

        <div className="flex items-center justify-end mt-4">
          <button
            onClick={() => {
              requestBackEnd(blob, navigate, contextActual)
            }}
            className="rounded-full bg-gray-300/30 px-12 py-1.5 flex items-center justify-center"
          >
            <span className="text-white mr-2">Send</span>

            <BsSendFill className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SwitchButton
