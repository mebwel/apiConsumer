import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';

import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchApi()
    }, [])



    const lineChart = (
        dailyData.length ?
            (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                        dataset: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'infected',
                            borderColor: '#3333ff',
                            filled: true

                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'deaths',
                            backgroundColor: 'red',
                            borderColor: 'rgba(255,0,0,0.5)',
                            filled: true

                        }]
                    }}
                />) : null
    );

    const barChart = (confirmed ?
        (
            <Bar
                data={{
                    labels: ['infected', 'recovered', 'death'],
                    datasets: [{
                        label: 'people',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]

                }}

                options={{
                    legend: { display: false },
                    title: { display: true, text: `current state in a ${country}` }

                }}

            />
        )

        : null);

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart