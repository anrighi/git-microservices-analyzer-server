import React, {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";
import ChordChart from "./charts/ChordChart";
import BarChart from "./charts/BarChart";
import SplashScreen from "./SplashScreen";

export default function App() {

    const [keys, setKeys] = useState([]);
    const [matrix, setMatrix] = useState([]);
    const [chart, setChart] = useState("null");

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        const idParam = queryParams.get('id');
        const chartParam = queryParams.get('chart');

        setChart(chartParam);

        if (chartParam === 'chord') {
            axios.get(`/json/${idParam}-chordData.json`).then((response) => {
                setKeys(response.data.keys);
                setMatrix(response.data.data);
            });
        }

        if (chartParam === 'bar') {
            axios.get(`/json/${idParam}-barData.json`).then((response) => {
                setKeys(response.data.keys);
                setMatrix(response.data.data);
            });
        }


    }, [])

    const returnSwitch = (chartInput) => {
        switch (chartInput) {
            case 'chord':
                return <ChordChart matrix={matrix} keys={keys}/>;
            case 'bar':
                return <BarChart matrix={matrix} keys={keys}/>;
            default:
                return <SplashScreen/>
        }
    }

    return returnSwitch(chart);
}