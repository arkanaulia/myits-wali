import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface GraphProps {
  data: number[];
  labels: string[];
}

const LineGraph = ({ data, labels }: GraphProps) => {
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: 'Nilai Semester',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#0168FA', // Ubah warna garis menjadi biru
        pointHoverRadius: 5, // Atur radius hover pada bulatan
        pointHoverBackgroundColor: 'blue', // Ubah warna hover pada bulatan menjadi biru
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2, // Atur rasio aspek sesuai kebutuhan
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          font: {
            size: 16, // Perbesar ukuran font pada sumbu x
          },
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          max: 4,
          stepSize: 0.5,
          font: {
            size: 16, // Perbesar ukuran font pada sumbu y
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y}`, // Menampilkan nilai persis saat dihover pada bulatan
          title: () => 'Nilai Semester', // Menampilkan judul tooltip
        },
      },
    },
  };


  return (
    <Box  mx="auto" h='24vh' my={8}>
      <Line data={graphData} options={options} />
    </Box>
  );
};

export default LineGraph;
