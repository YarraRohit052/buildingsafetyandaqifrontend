import { Card, Input } from "react-rainbow-components";
import "./Containers.css";
import { useEffect, useState } from "react";
import alertSound from "./alert.mp3";
const alertAudio = new Audio(alertSound);


const Containers = () => {
    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [aqi, setAQI] = useState();
    const [gasdetector, setGasdetector] = useState();
    const [firedetector, setFiredetector] = useState();
    const alertIsTrue1 = firedetector === 1;
    const alertIsTrue2 = gasdetector === 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5006/api/sensordata");
                const data = await response.json();
                setTemperature(data.temperature);
                setHumidity(data.humidity);
                setAQI(data.aqi);
                setGasdetector(data.gasdetector);
                setFiredetector(data.firedetector);
            } catch (error) {
                console.error(error);
            }
        };

        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        let playingAlert = false;
        let alertIntervalId;

        if (alertIsTrue1 || alertIsTrue2) {
            alertAudio.loop = true;
            alertAudio.play();
            playingAlert = true;
            alertIntervalId = setInterval(() => {
                alertAudio.play();
            }, alertAudio.duration * 1000);
        }

        return () => {
            alertAudio.pause();
            alertAudio.currentTime = 0;
            clearInterval(alertIntervalId);
            playingAlert = false;
        };
    }, [alertIsTrue1, alertIsTrue2]);
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
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
                            <div className="row">
                                <div className="col-2 col-md-4"></div>
                                <div className="col-8 col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="rainbow-p-around_medium alert__button fire__detector__button"
                                            style={{
                                                width: '30px', height: '30px', borderRadius: '50%', backgroundColor: alertIsTrue2 ? 'red' : 'green'
                                            }} />
                                    </div>
                                </div>
                                <div className="col-2 col-md-4"></div>
                            </div>
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
                            <p className="col__text fire__extinguisher">STATUS OF FIRE EXTINGUISHER MOTOR</p>
                        </div>
                        <div className="col-6 card-container">
                            <Input label="" value={alertIsTrue1 ? "ON" : "OFF"} className="rainbow-p-around_medium input__text box fire__extinguisher fire__extinguisher__input" disabled />
                        </div>
                    </div>
                </Card>
            </Card>
        </div>
    );
};
export default Containers;