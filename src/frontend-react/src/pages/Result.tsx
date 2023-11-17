import { useContext } from 'react'
import likeImg from '../assets/like.png'
import notLikeImg from '../assets/notLike.png'

import { Context } from '../context/context'

import { CardPost } from '../components/card-posts'
import { SearchResult } from '../components/search-result'
import { CardLoading } from '../components/card-loading'
import { barDatas } from '../components/mocks/grapf1'
import { CardGraphPost1 } from '../components/card-graph-postx1'

export default function Result() {
  const contextActual = useContext(Context)

  return !contextActual?.loading ? (
    <div className="p-5 bg-primary h-full">
      <div className="flex justify-center mb-7 mt-5">
        <SearchResult />
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="ml-1 text-white">Resultado</h2>
        <div className="flex gap-2">
          <button>
            <img src={likeImg} alt="" />
          </button>
          <button>
            <img src={notLikeImg} alt="" />
          </button>
        </div>
      </div>
      {contextActual?.switchStatus && <CardGraphPost1 data={barDatas} />}
      {!contextActual?.switchStatus &&
        contextActual?.data.map((elem) => <CardPost key={elem} text={elem} />)}
      <div className="text-center mb-5">
        <h2 className="keplerFont ">K E P L E R</h2>
      </div>
    </div>
  ) : (
    <div className="p-5 bg-primary h-full">
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </div>
  )
}
