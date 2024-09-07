import React, {useState} from 'react';
import {assets} from "../assets/assets_frontend/assets.js";

const MyProfile = () => {
    const [userDate, setUserData] = useState({
        name : "Dao Phan Quoc Hoai",
        image : assets.profile_pic,
        email : 'dpquochoai@gmail.com',
        phone : '0779127667',
        address : {
            line1 : 'Thu Duc',
            line2 : 'Go Vap'
        },
        gen : 'Male',
        dob : '2003-03-10'
    })

    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className={'max-w-lg flex flex-col gap-2 text-sm'}>
            <img src={userDate.image} alt={''} className={'w-36 rounded'}/>
            {
                isEdit ?
                    <input type={'text'} onChange={ e => setUserData({ ...e, name : e.target.name})} value={userDate.name} className={'bg-gray-50 text-3xl font-medium max-w-50 mt-4'}/>
                    :
                    <p className={'font-medium text-3xl text-neutral-800 mt-4'}>{userDate.name}</p>
            }
            <hr className={'bg-zinc-400 h-[1px] border-none'}/>
            <div>
                <p className={'text-neutral-500 underline mt-3'}>CONTACT INFORMATION</p>
                <div className={'grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'}>
                    <p className={'font-medium'}>Email id:</p>
                    <p className={'text-blue-500'}>{userDate.email}</p>
                    <p className={'font-medium'}>Phone :</p>
                    {
                        isEdit ?
                            <input type={'text'} onChange={ e => setUserData({ ...e, phone : e.target.name})} value={userDate.phone} className={'bg-gray-100 max-w-52'}/>
                            :
                            <p className={'text-blue-400'}>{userDate.phone}</p>
                    }
                    <p>Address :</p>
                    {
                        isEdit ?
                            <p>
                                <input type={'text'} onChange={ e => setUserData({ ...e, address : {...e, line1 : e.target.name}})} value={userDate.address.line1} className={'bg-gray-50'}/>
                                <br/>
                                <input type={'text'} onChange={ e => setUserData({ ...e, address : {...e, line2 : e.target.name}})} value={userDate.address.line2} className={'bg-gray-50'}/>
                            </p>
                            :
                            <p className={'text-gray-500'}>
                                {userDate.address.line1}
                                <br/>
                                {userDate.address.line2}
                            </p>
                    }
                </div>
            </div>
            <div>
                <p className={'text-neutral-500 underline mt-3'}>BASIC INFORMATION</p>
                <div className={'grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'}>
                    <p className={'font-medium'}>Gender :</p>
                    {
                        isEdit ?
                            <select onChange={ e => setUserData({...e, gen: e.target.name})} value={userDate.gen} className={'max-w-20 bg-gray-100'}>
                                <option value={'Male'}>Male</option>
                                <option value={'Female'}>Female</option>
                            </select>
                            :
                            <p className={'text-gray-400'}>{userDate.gen}</p>
                    }
                    <p className={'font-medium'}>Birthday :</p>
                    {
                        isEdit ?
                            <input type={'date'} onChange={ e => setUserData({ ...e, dob : e.target.name})} value={userDate.dob} className={'msx-w-28 bg-gray-100'}/>
                            :
                            <p className={'text-gray-400'}>{userDate.dob}</p>
                    }
                </div>
            </div>
            <div className={'mt-10'}>
                {
                    isEdit ?
                        <button className={'border border-primary px-8 py-2 rounded-full'} onClick={() => setIsEdit(false)}>Save Information</button>
                        :
                        <button className={'border border-primary px-8 py-2 rounded-full'}  onClick={() =>setIsEdit(true)}>Edit</button>
                }
            </div>
        </div>
    );
};

export default MyProfile;