import React from "react";
import { Navbar } from "../components/Navbar";
import GaugeComponent from 'react-gauge-component'
import { Card } from "../components/Card";

export const Dashboard = () => {
    return (
        <div className="h-screen overflow-y-auto">
            <Navbar />
            <div className='justify-center px-10 py-10 bg-custom-purple-600 '>
                <Card>
                    <GaugeComponent
                        value={100}
                        type="radial"
                        labels={{
                            valueLabel: {
                                formatTextValue: (value: any) => 'Sangat Beli'
                            },
                            tickLabels: {
                                type: "inner",
                                ticks: [
                                    { value: 10 },
                                    { value: 20 },
                                    { value: 30 },
                                    { value: 50 },
                                    { value: 70 },
                                    { value: 80 },
                                    { value: 100 },


                                ]
                            }
                        }}
                        arc={{
                            colorArray: ['#5BE12C', '#EA4228'],
                            subArcs: [{ limit: 30 }, { limit: 70 }, { limit: 100 },],
                            padding: 0.02,
                            width: 0.3
                        }}
                        pointer={{
                            elastic: true,
                            animationDelay: 0
                        }}
                    />
                </Card>
            </div>
        </div >
    )
};