import React, { useState } from 'react'
import DashboardCard from '../DashboardCard'
import WelcomeBanner from '../WelcomeBanner'
import Table from '../Table'


export default function Dashboard() {
    const [cardData, setcardData] = useState([{
        heading: 'Cities Visited',
        subHeading: 'total number of cities travelled',
        value: 2
    },
    {
        heading: 'Distance travelled',
        subHeading: 'total distance of covered travelling',
        value: 2
    },
    {
        heading: 'Amount Spent',
        subHeading: 'total amount spent travelling',
        value: '25,000'
    },
    ])


    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {/* Welcome banner */}
                <WelcomeBanner />

                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">
                    {cardData.map((data)=>(
                    <DashboardCard  heading={data.heading} subHeading={data.subHeading} value={data.value}></DashboardCard>
                    ))}
                </div>
                 <div className='my-8'>
                     <Table></Table>
                 </div>
            </div>
        </div>
    )
}
