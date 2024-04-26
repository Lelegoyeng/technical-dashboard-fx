import React from "react";
import { Navbar } from "../components/Navbar";
import GaugeComponent from 'react-gauge-component'
import { Card } from "../components/Card";

export const Dashboard = () => {
    return (
        <div className="h-screen overflow-y-auto">
            <Navbar />
            <div className='flex justify-center bg-custom-purple-600 '>
                <div className="flex-row">
                    <div className="text-indigo-100 font-semibold pt-2  text-lg">EUR/USD - Euro Dolar AS</div>
                    <div className="text-indigo-100 font-semibold flex pb-2  text-lg">
                        <div>1,7032</div>
                        <div className="ml-9 text-green-600"> +0,0002
                            (+0,02%)</div>
                    </div>

                    <div className=" flex space-x-10">
                        <Card>
                            <GaugeComponent
                                value={100}
                                type="radial"
                                labels={{
                                    valueLabel: {
                                        formatTextValue: (value: any) => 'Sangat Beli'
                                    },
                                    tickLabels: {
                                        hideMinMax: true
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
                        <Card>
                            <GaugeComponent
                                value={100}
                                type="radial"
                                labels={{
                                    valueLabel: {
                                        formatTextValue: (value: any) => 'Sangat Beli'
                                    },
                                    tickLabels: {
                                        hideMinMax: true
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

                        <Card>
                            <GaugeComponent
                                value={100}
                                type="radial"
                                labels={{
                                    valueLabel: {
                                        formatTextValue: (value: any) => 'Sangat Beli'
                                    },
                                    tickLabels: {
                                        hideMinMax: true
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

                    <div className="mt-5">
                        <div className="text-indigo-100 font-semibold pt-2 text-lg">Moving Average</div>
                        <table className="table-fixed">
                            <thead>
                                <tr className="font-extrabold text-indigo-100">
                                    <th className="w-96">Name</th>
                                    <th className="w-32">Value</th>
                                    <th className="w-32">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="font-semibold text-gray-200">
                                    <td>MA5</td>
                                    <td className="text-center">1,7033</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>MA10</td>
                                    <td className="text-center">1,6011</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>MA20</td>
                                    <td className="text-center">1,5833</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>MA50</td>
                                    <td className="text-center">1,4003</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>MA100</td>
                                    <td className="text-center">1,3503</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>MA200</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5">
                        <div className="text-indigo-100 font-semibold pt-2 text-lg">Indikator Teknikal</div>
                        <table className="table-fixed">
                            <thead>
                                <tr className="font-extrabold text-indigo-100">
                                    <th className="w-96">Name</th>
                                    <th className="w-32">Value</th>
                                    <th className="w-32">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="font-semibold text-gray-200">
                                    <td>RSI(14)</td>
                                    <td className="text-center">62.59</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>STOCH(9,6)</td>
                                    <td className="text-center">1,6011</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>STOCHRSI(14)</td>
                                    <td className="text-center">1,5833</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>MACD(12,26)</td>
                                    <td className="text-center">1,4003</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>ADX(14)</td>
                                    <td className="text-center">1,3503</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>Williams</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>Williams</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>ATR(14)	</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>Highs/Lows(14)	</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>Ultimate Oscillator	</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>

                                <tr className="font-semibold text-gray-200">
                                    <td>ROC</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                                <tr className="font-semibold text-gray-200">
                                    <td>Bull/Bear Power(13)</td>
                                    <td className="text-center">1,2173</td>
                                    <td className="text-center text-green-500">Buy</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    )
};