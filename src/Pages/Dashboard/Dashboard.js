import React from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Navbar from '../Shared/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';


const array = [
    {
        "_id": 1,
        "month": "Mar",
        "uv": 200000,
        "amt": 241,
        "pv": 10401,
    },
    {
        "_id": 2,
        "month": "Apr",
        "uv": 700000,
        "amt": 423,
        "pv": 24500
    },
    {
        "_id": 3,
        "month": "May",
        "uv": 45000,
        "amt": 726,
        "pv": 67010
    },
    {
        "_id": 4,
        "month": "Jun",
        "uv": 550000,
        "amt": 529,
        "pv": 40405
    },
    {
        "_id": 5,
        "month": "Jul",
        "uv": 200000,
        "amt": 601,
        "pv": 50900
    },
    {
        "_id": 6,
        "month": "Aug",
        "uv": 700000,
        "amt": 670,
        "pv": 61000
    }
]


const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='flex'>
                <div className='border border-slate-900' >
                    <h1 className='text-3xl font-bold text-center my-20'>ResponsiveContainer</h1>
                    <ResponsiveContainer width={530} aspect={3}>
                        <LineChart data={array} width={530} height={300} margin={{ top: 5, right: 30, left: 20, Bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                            <XAxis dataKey='month'></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <Line type='monotone' dataKey={'uv'} activeDot={{ r: 10 }} stroke='red'></Line>
                            <Line type='monotone' dataKey={'pv'} activeDot={{ r: 10 }} stroke='green'></Line>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='border border-slate-900'>
                    <h1 className='text-3xl font-bold text-center my-20'>AreaChart</h1>
                    <AreaChart width={440} height={250} data={array} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />

                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey='month'></XAxis>
                        <YAxis></YAxis>
                        <CartesianGrid strokeDasharray="3 3" ></CartesianGrid>
                        <Area type="monotone" dataKey="Pv" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)"></Area>
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"></Area>
                    </AreaChart>

                </div>
                <div className='border border-slate-900'>
                    <h1 className='text-3xl font-bold text-center my-20'>ComposedChart</h1>
                    <ComposedChart width={440} height={250} data={array}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
            <h1 className='text-3xl font-bold text-center uppercase  my-20'>Deaile rechat</h1>
            <h4 className='m-20 '>ResponsiveContainer is a component in the React-based charting library, Recharts. It provides a convenient way to create a responsive chart that can automatically adjust its size based on the dimensions of its parent container.

                Here are some details about ResponsiveContainer:

                ResponsiveContainer is a wrapper component that takes up the full width and height of its parent container.
                It provides a way to specify the aspect ratio of the chart, which can be used to control the size and shape of the chart.
                The width and height props of the ResponsiveContainer are used as the minimum dimensions for the chart. When the size of the parent container changes, the chart will automatically adjust its size to fit within those minimum dimensions while maintaining the aspect ratio.
                ResponsiveContainer works with any type of chart in Recharts, including line charts, bar charts, pie charts, and more.
                The ResponsiveContainer component can be used in conjunction with other Recharts components to create more complex chart layouts.
                By default, ResponsiveContainer uses the window object to determine the size of the parent container. However, you can also specify a custom container element using the container prop.
                Overall, ResponsiveContainer provides a simple way to create charts that can adapt to different screen sizes and devices, making it a useful tool for creating responsive data visualizations.
                <h1 className='text-3xl font-bold text-center uppercase  my-20'><Link to='/' className='btn btn-primary'>Go Home</Link>
                </h1>
            </h4>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;