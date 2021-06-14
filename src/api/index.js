import axios from 'axios'

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        // const { data } = await axios(url);

        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate
        // }

        // return modifiedData;

        //other syntax
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios(url)

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}