import React from "react";
import Table from "../Table";
import thinkingEmoji from '../../../Assets/images/thinking_face.svg'

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap font-rubik">
                <div className="w-full px-6">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-sm font-semibold uppercase px-5 py-3 shadow-sm border rounded-xs block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Upcoming
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
                            <a
                                className={
                                    "text-sm font-semibold uppercase px-5 py-3 shadow-sm border rounded-xs block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                cancelled
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-sm font-semibold uppercase px-5 py-3 shadow-sm border rounded-xs block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                completed
                            </a>
                        </li>
                    </ul>
                    <div>
                      {/*<Table></Table>*/}
                        <div className=''>
                            <img src={thinkingEmoji} alt='smiley emoji' className='w-20 h-20 mx-auto my-2 '></img>
                            <h2 className='text-lg font-semibold uppercase text-center text-gray-800'>Looks empty, you've no upcoming bookings.</h2>
                            <h3 className='text-md text-center '>When you book a trip, you will see your itinerary here.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

function Trips() {
    return (
        <div>
            <Tabs color="blue" />
        </div>
    )
}

export default Trips

