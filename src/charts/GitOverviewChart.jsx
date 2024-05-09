import { useState } from 'react';
import Chart from 'react-apexcharts';

const GitOverviewChart = () => {
const [options] = useState({
    chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
            show: false, // disable the toolbar
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#E7126B",],
    title: {
        text: '',
    },
    xaxis: {
        labels: {
            show: false, // hide x-axis labels
        },
    },
    yaxis: {
        labels: {
            show: false, // hide y-axis labels
        },
    },
});

  const seriesData = [
    {
      name: 'Metric1',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric2',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric3',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric4',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric5',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric6',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric7',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric8',
      data: generateData(38, { min: 0, max: 90 }),
    },
    {
      name: 'Metric9',
      data: generateData(38, { min: 0, max: 90 }),
    },
  ];

  return (
    <Chart options={options} series={seriesData} type="heatmap"  height={300} />
  );
};

export default GitOverviewChart;
const generateData = (count, range) => {
    const data = [];
    for (let i = 0; i < count; i++) {
        const x = `X${i + 1}`;
        const y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        data.push({ x, y });
    }
    return data;
};