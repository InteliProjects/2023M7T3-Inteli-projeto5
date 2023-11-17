import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
)

export function CardGraphPost({ data }) {
  return (
    <div className="border-4 rounded-xl p-5 bg-white/70 text-black mb-5">
      <Doughnut data={data}></Doughnut>
    </div>
  )
}
