<template>
    <Line
        id="line-chart"
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export default {
    name: 'LineChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Monthly Stats',
                    data: [10, 30, 22, 68, 51, 84],
                    fill: true,
                    borderColor: '#F0EEED',
                    backgroundColor: '#f0eeed31',
                    pointRadius: 5,
                    tension: 0.3
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || ''
                                if (label) {
                                    label += ': '
                                }
                                label += context.parsed.y
                                return label + ' points'
                            }
                        },
                        displayColors: false,
                        backgroundColor: '#F0EEED',
                        titleColor: '#333',
                        bodyColor: '#333',
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false,
                        }
                    },
                    y: {
                        max: 90,
                        min: 5,
                        display: false,
                        grid: {
                            display: false,
                        }
                    }
                },
            }
        }
    }
}
</script>
