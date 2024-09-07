import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";
import {assets} from "../assets/assets_frontend/assets.js";
import RelateDoctors from "../components/RelateDoctors.jsx";

const Appointment = () => {
    const {docId} =  useParams();
    const {doctors, currencySymbol} = useContext(AppContext);
    const [docInfo, setDocInfo] =  useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');
    const dayOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    const fetchDocInfo = async ()  => {
        const docInfo = doctors.find( doc => doc._id === docId);
        setDocInfo(docInfo);
    }
    const getAvailableSlots = async () => {
        setDocSlots([])
        let today = new Date();
        for( let i = 0 ; i < 7 ; i++ ){
            let currentDay = new Date(today);
            currentDay.setDate(today.getDate() + i);
            let endTime = new Date();
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21,0,0,0)

            if( today.getDate() === currentDay.getDate() ){
                currentDay.setHours(currentDay.getHours() > 10 ? currentDay.getHours() + 1 : 10)
                currentDay.setMinutes(currentDay.getMinutes() > 30 ? 30 : 0)
            }else {
                currentDay.setHours(10)
                currentDay.setMinutes(0)
            }
            let timeSlots = []
            while( currentDay < endTime ){
                let formattedTime = currentDay.toLocaleTimeString([], { hour : '2-digit', minute : '2-digit'})
                timeSlots.push({
                    datetime : new Date(currentDay),
                    time : formattedTime
                })
                currentDay.setMinutes(currentDay.getMinutes() + 30)
            }
            if( timeSlots.length )
                setDocSlots( prev => ([...prev, timeSlots]))
        }
    }
    useEffect(() => {
        fetchDocInfo();
    }, [docId, doctors]);
    useEffect(() => {
        getAvailableSlots();
    }, [docInfo]);
    useEffect( () => {
        console.log(docSlots)
    }, [docSlots])
    return docInfo && (
        <div>
            {/* doctor detail */}
            <div className={'flex flex-col sm:flex-row gap-4'}>
                <div>
                    <img src={docInfo.image} alt={'image'} className={'bg-primary w-full sm:max-w-72 rounded-lg'}/>
                </div>
                {/* doctor infor*/}
                <div className={'flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2'}>
                    <p className={'flex items-center gap-2 text-2xl font-medium text-gray-900'}>
                        {docInfo.name}
                    </p>
                    <img alt={'icon'} src={assets.verified_icon} className={'w-5'}/>
                    <div className={'flex items-center gap-2 text-sm mt-1 text-gray-600'}>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className={'py-0.5 px-2 border text-xs rounded-full'}>{docInfo.experience}</button>
                    </div>

                {/*  doctor about  */}
                    <div>
                        <p className={'flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'}>About <img src={assets.info_icon} alt={'icon'}/></p>
                        <p className={'text-sm text-gray-500 max-w-[700px] mt-1'}>{docInfo.about}</p>
                    </div>
                    <p className={'text-gray-500 font-medium mt-4'}>
                        Appointment fee :
                        <span className={'text-gray-600 '}>
                            {currencySymbol}{docInfo.fees}
                        </span>
                    </p>
                </div>
            </div>
            {/*  Bookings Slot  */}
            <div className={'sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'}>
                <p>Booking slots</p>
                <div className={'flex gap-3 items-center w-full overflow-x-scroll mt-4'}>
                    {
                        docSlots.length && docSlots.map( (item,index) => (
                            <div key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}>
                                <p>{item[0] && dayOfWeeks[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={'flex items-center gap-3 w-full overflow-x-scroll mt-4'}>
                    { docSlots.length && docSlots[slotIndex].map( (item, index) => (
                        <p onClick={ () => setSlotTime(item.time)} className={`border text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button className={`bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6`}>Book an appointment</button>
            </div>
            {/*  Listing Related Doctors  */}
            <RelateDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
    );
};

export default Appointment;