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
            data: [3593, 3750, 3990, 4200, 4333],
            borderColor: 'rgb(232, 251, 42)',
            backgroundColor: 'rgba(228, 135, 0, 1)',
        },
        {
            label: '15',
            data: [3700, 3900, 4178, 4400, 4506],
            borderColor: 'rgb(9, 175, 14)',
            backgroundColor: 'rgba(58, 244, 230, 1)',
        },
        {
            label: '20',
            data: [4035, 4300, 4698, 4900, 5113],
            borderColor: 'rgb(243, 27, 6)',
            backgroundColor: 'rgba(229, 149, 222, 1)',
        },
    ],
};

function JarvisMarchAnalysisChart() {
    return <Line options={options} data={data} />
}

export default JarvisMarchAnalysisChart;
