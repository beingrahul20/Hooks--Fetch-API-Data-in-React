
import React, { useEffect, useState } from 'react';

const APIData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);
    }

    useEffect(() => {
        getCovidData();

    }, []);

    return (
        <>
            <h1>India Covid 19 Dashboard</h1>

            <table>
                <thead>
                    <tr>
                        <th>Daily Confirmed</th>
                        <th>Daily Deceased</th>
                        <th>Dailyrecovered</th>
                        <th>Date</th>
                        <th>Total Confirmed</th>
                        <th>Total Deceased</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.dailyconfirmed}</td>
                                    <td>{curElem.dailydeceased}</td>
                                    <td>{curElem.dailyrecovered}</td>
                                    <td>{curElem.date}</td>
                                    <td>{curElem.totalconfirmed}</td>
                                    <td>{curElem.totaldeceased}</td>
                                </tr>
                            );
                        })
                    }

                    
                </tbody>
            </table>
        </>
    );

}

export default APIData;
