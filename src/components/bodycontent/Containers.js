import { Card, Input } from "react-rainbow-components";
import "./Containers.css";
import { useEffect, useState } from "react";
const Containers = () => {
    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [aqi, setAQI] = useState();
    const [gasdetector, setGasdetector] = useState();
    const [firedetector, setFiredetector] = useState();
    const alertIsTrue = (temperature >= 50 || gasdetector >= 30 || firedetector === 1);
    const alertIsTrue1 = (firedetector === 1);
    // useEffect(() => {
    //     const requestOptions = {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }

    //     fetch("http://localhost:5006/api/hello", requestOptions).then((result) => {
    //         console.log(result);
    //     })
    // }, []);
    useEffect(() => {
        setInterval(() => {
            fetch("https://buildingsafetyandaqibackend.onrender.com/api/sensordata")
                .then(async result => {
                    const data = await result.json();
                    setTemperature(data.temperature);
                    setHumidity(data.humidity);
                    setAQI(data.aqi);
                    setGasdetector(data.gasdetector);
                    setFiredetector(data.firedetector);
                    //console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 2000);
    }, []);

    return (
        <div>
            <Card className="parent__card">
                <p className="head1">GROUND FLOOR</p>
                <Card className="child__card1">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            LIFT LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="child__card2">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            HALL LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                             <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="child__card3">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            PANTRY LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                             <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Card>
            <Card className="parent__card">
                <p className="head1">FIRST FLOOR</p>
                <Card className="child__card1">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            LIFT LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                             <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="child__card2">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            HALL LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                             <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="child__card3">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            PANTRY LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                             <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Card>
            <Card className="parent__card">
                <p className="head1">SECOND FLOOR</p>
                <Card className="child__card1">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            LIFT LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                             <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="child__card2">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            HALL LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                             <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="child__card3">
                    <div className="row row__main__card">
                        <div className="col-12 col__twelve__text">
                            PANTRY LOCATION
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">TEMPERATURE</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={temperature} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">HUMIDITY</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={humidity} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">AQI</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={aqi} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">GAS DETECTOR</p>
                        </div>
                        <div className="col-6">
                            <Input label="" value={gasdetector} className="rainbow-p-around_medium  input__text box" disabled />
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text fire__detector">FIRE DETECTOR</p>
                        </div>
                        <div className="col-6 card-container">
                        <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue1 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__card">
                        <div className="col-6">
                            <p className="col__text">FIRE EXTINGUSHER MOTOR</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Card>
        </div>
    );
};
export default Containers;