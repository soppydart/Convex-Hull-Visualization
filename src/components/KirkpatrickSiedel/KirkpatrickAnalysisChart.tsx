import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Time taken(us) vs Number of edges',
    },
  },
};

const labels = ['4', '5', '6', '7', '8'];

export const data = {
  labels,
  datasets: [
    {
      label: '10',
      data: [120, 140, 160, 180, 200],
      borderColor: 'rgb(232, 251, 42)',
      backgroundColor: 'rgba(228, 135, 0, 1)',
    },
    {
      label: '15',
      data: [195, 220, 240, 275, 295],
      borderColor: 'rgb(9, 175, 14)',
      backgroundColor: 'rgba(58, 244, 230, 1)',
    },
    {
      label: '20',
      data: [250, 280, 310, 370, 410],
      borderColor: 'rgb(243, 27, 6)',
      backgroundColor: 'rgba(229, 149, 222, 1)',
    },
  ],
};

function KirkpatrickAnalysisChart() {
  return <Line options={options} data={data} />
}

export default KirkpatrickAnalysisChart;
