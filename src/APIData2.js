
import React, { useEffect, useState } from 'react';

const APIData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.tested);
        setData(actualData.tested);
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
                        <th>Dailyrtpcr Samples</th>
                        <th>First Dose</th>
                        <th>frontlineworkersvaccinated1stdose</th>
                        <th>frontlineworkersvaccinated2nddose</th>
                        <th>totalvaccineconsumptionincludingwastage</th>
                        <th>Total Deceased</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.dailyrtpcrsamplescollectedicmrapplication}</td>
                                    <td>{curElem.firstdoseadministered}</td>
                                    <td>{curElem.frontlineworkersvaccinated1stdose}</td>
                                    <td>{curElem.frontlineworkersvaccinated2nddose}</td>
                                    <td>{curElem.totalvaccineconsumptionincludingwastage}</td>
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
