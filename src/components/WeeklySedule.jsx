import React from 'react';

const WeeklySedule = () => {

    const seduleData = [
        { monthName: "January", day: 15, week: "sunday", event: "Meeting" },
        { monthName: "January", day: 16, week: "monday", event: "Presentation" },
        { monthName: "January", day: 17, week: "tuesday", event: "Workshop" },
        { monthName: "January", day: 18, week: "wednesday", event: "Team Lunch" },
        { monthName: "January", day: 19, week: "thursday", event: "Presentation" },
        { monthName: "January", day: 20, week: "friday", event: "Meeting" },
        { monthName: "January", day: 21, week: "saturday", event: "Workshop" },
      ]



    return (
        <div className='lg:w-3/4 mx-auto'>
            <p className='font-bold'>February 15-21, 2023 week 14</p>
            <table>
                <tbody>
                    {
                        seduleData.map((data ,idx) => <tr key={idx} className='border-2 border-black'>
                        <td className='border-2 border-black'>
                            <div className='w-[120px] p-3'>
                                <p>{data.monthName}</p>
                                <h3 className='text-3xl font-bold'>{data.day}</h3>
                                <p>{data.week}</p>
                            </div>
                        </td>
                        <td className='w-full border-black border-2'>
                            <h1>{data.event}</h1>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default WeeklySedule;