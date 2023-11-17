import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
)

export function CardGraphPost1({ data }) {
  return (
    <div className="border-4 rounded-xl p-5 bg-white/70 text-black mb-5">
      <Bar data={data}></Bar>
    </div>
  )
}
