import { CardPostProps } from '../types/card'


export function CardPost({ text }: CardPostProps) {
  return (
    <div className=" border-4 rounded-xl p-5 bg-white/20 text-white mb-5">

      <p className="mb-5">{text}</p>

      <a
        className="text-xs text-secondary"
        href="https://www.ibm.com/products/speech-to-text"
        target="_blank"
        rel="noreferrer"
      >
        https://www.ibm.com/products/speech-to-text
      </a>
    </div>
  )
}
