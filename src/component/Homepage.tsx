import React, { useState } from 'react'
import '../css/homePage.css'
import { useNavigate } from 'react-router-dom'
import { addNewtitket } from '../redux/ticketAction';
import { AnyAction, unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { RootState } from '../redux/store';
import { Button, DatePicker, Form, Input, message } from 'antd';

function Homepage() {
    const navigate = useNavigate();

    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

    const handleAddNewtitket = async (values: any) => {

        const actionResult = await dispatch(addNewtitket(values));
        const newtitketData = unwrapResult(actionResult);



        navigate(`/titket/${values.email}`);
    };




    return (
        <>
            <div className='bg-custom'>
                <div className='container-custom' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='svg-custom' width="1220" height="147" viewBox="0 0 1920 147" fill="none">
                        <g filter="url(#filter0_d_16580_109)">
                            <path d="M1924.5 0V82.5C1383.5 115.5 459.5 117 0 82.5V0H1924.5Z" fill="#ED7200" />
                        </g>
                        <image href='/img/phone.png' x='1500' y='30' />
                        <image href="/img/logolittle.png" x="200" y="0" width="229" height="91" onClick={() => navigate("/")} />
                        <image href="/img/Tags.png" x="800" y="30" width="200" height="50" onClick={() => navigate("/")} />
                        <text x="1100" y="62" fill="white" font-size="24" onClick={() => navigate("/event")}>Sự kiện</text>
                        <text x="1300" y="62" fill="white" font-size="24">Liên hệ</text>
                        <text x="1540" y="55" fill="white" font-size="24">033323232</text>
                        <defs>
                            <filter id="filter0_d_16580_109" x="-35" y="-31" width="1994.5" height="177.816" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="17.5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.633333 0 0 0 0 0.228 0 0 0 0 0 0 0 0 0.75 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16580_109" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16580_109" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <img src="/img/bg.png" alt="" className='bg' />
                    <div className='row'>
                        <div className='col-6' style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/img/logods.png" width={120} style={{ marginLeft: 150, marginTop: -10 }} />
                            <div className='text-right' style={{ marginLeft: '10px' }}>
                                <p style={{ marginBottom: '0' }}>ĐẦM SEN</p>
                                <p style={{ marginTop: '0' }}>PARK</p>
                            </div>
                        </div>
                    </div>
                    <img src="/img/18451.png" className='balloon-1' />
                    <img src="/img/185411.png" className='balloon-2' />
                    <img src="/img/Lisa_Arnold_Lay_Do_F2 3.png" className='balloon-3' />
                    <img src="/img/1587.png" className='balloon-4' />
                    <img src="/img/8888.png" className='balloon-5' />
                    <img src="/img/1587.png" className='balloon-6' />
                    <img src="/img/18451 [Converted]-04 1.png" className='balloon-7' />
                    <img src="/img/a.png" className='balloon-8' />
                    <img src="/img/1587.png" className='balloon-9' />

                    <div style={{ position: 'absolute', left: 810, top: 220 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="77" viewBox="0 0 284 77" fill="none">
                            <path d="M269.864 59.3984C269.864 59.3984 197.292 76.3383 142 76.3383C81.054 76.3383 14.136 59.3984 14.136 59.3984C6.32603 59.3984 0 53.0765 0 45.2818V16.4187C0 8.6195 6.33057 2.30216 14.136 2.30216L142 0L269.864 2.30216C277.674 2.30216 284 8.62403 284 16.4187V45.2818C284.005 53.0811 277.674 59.3984 269.864 59.3984Z" fill="url(#paint0_linear_194_405)" />
                            <defs>
                                <linearGradient id="paint0_linear_194_405" x1="142" y1="-13" x2="143.734" y2="79.8365" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF000A" />
                                    <stop offset="1" stop-color="#C2000B" />
                                </linearGradient>
                            </defs>
                            <text x="43" y="50" style={{ fontSize: 45, fontFamily: 'iCiel Koni' }} fill="white">Vé của bạn</text>
                        </svg>
                    </div>

                    <div>
                        <img src='/img/Group-left.png' width={550} style={{ marginLeft: 180, marginTop: 20 }} />
                        <div style={{ position: 'absolute', top: 280, left: 240, color: 'black', fontSize: 12, fontWeight: 100 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscin elit. Suspendisse ac mollis justo.
                            <p>   Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
                            Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus,
                            <p>lobortis molestie lectus consequat a.</p>
                        </div>
                        <div style={{ position: 'absolute', top: 420, left: 265, opacity: 0.800000011920929 }}>

                            <img src="/img/ngoiSao.png" width={20} />
                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>
                        </div>
                        <div style={{ position: 'absolute', top: 460, left: 265, opacity: 0.800000011920929 }}>

                            <img src="/img/ngoiSao.png" width={20} />
                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>
                        </div>
                        <div style={{ position: 'absolute', top: 500, left: 265, opacity: 0.800000011920929 }}>

                            <img src="/img/ngoiSao.png" width={20} />
                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>
                        </div>
                        <div style={{ position: 'absolute', top: 540, left: 265, opacity: 0.800000011920929 }}>

                            <img src="/img/ngoiSao.png" width={20} />
                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </strong>
                        </div>
                    </div>
                    <div>
                        <img src="/img/Vector.png" width={81} style={{ marginLeft: 707, marginTop: -390 }} />
                    </div>

                    <Form onFinish={handleAddNewtitket}>
                        <div>
                            {/* value={ticketType} onChange={handleInputChange} */}
                            <img src="img/Group-right.png" width={310} style={{ marginLeft: 750, marginTop: -428 }} />
                            <div style={{ position: 'absolute', top: 290, left: 780, color: 'white', fontSize: 24 }} >
                                <Form.Item name='titketType' initialValue="Gói gia đình" >
                                    <Input className='input-home' type="text" style={{ width: 210 }}
                                        placeholder='Gói gia đình' />
                                </Form.Item>
                                <img style={{ position: 'absolute', top: 0, left: 225, zIndex: 1, width: 30 }} src="/img/arrow Down.png" alt="" />
                            </div>
                            <div style={{ position: 'absolute', top: 280, left: 1000, }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="56" viewBox="0 0 53 56" fill="none">
                                    <path d="M42.603 56.2154H10.3249C4.46644 56.2154 -0.288452 51.4406 -0.288452 45.5576V19.9237C-0.288452 14.0407 4.46644 9.26593 10.3249 9.26593H42.603C48.4614 9.26593 53.2163 14.0407 53.2163 19.9237V45.5576C53.2163 51.4406 48.4614 56.2154 42.603 56.2154Z" fill="#F9B842" />
                                    <path d="M42.603 56.2154H10.3249C4.46644 56.2154 -0.288452 51.4406 -0.288452 45.5576V19.9237C-0.288452 14.0407 4.46644 9.26593 10.3249 9.26593H42.603C48.4614 9.26593 53.2163 14.0407 53.2163 19.9237V45.5576C53.2163 51.4406 48.4614 56.2154 42.603 56.2154Z" fill="#FFD27B" />
                                    <path d="M43.9824 4.94742C49.0781 4.94742 53.2163 9.49407 53.2163 15.1163V46.0465C53.2163 51.6524 48.0882 56.2154 42.9763 56.2154H31.584V4.94742H43.9824Z" fill="url(#paint0_linear_194_315)" />
                                    <path d="M8.94544 4.94742C3.84975 4.94742 -0.288473 9.49407 -0.288473 15.1163V46.0465C-0.288473 51.6524 4.83968 56.2154 9.9516 56.2154H21.3439V4.94742H8.94544Z" fill="url(#paint1_linear_194_315)" />
                                    <path d="M42.603 46.8613H10.3249C4.46644 46.8613 -0.288452 42.0865 -0.288452 36.2036V10.5859C-0.288452 4.70299 4.46644 -0.0718079 10.3249 -0.0718079H42.603C48.4614 -0.0718079 53.2163 4.70299 53.2163 10.5859V36.2199C53.2163 42.0865 48.4614 46.8613 42.603 46.8613Z" fill="#FFDE32" />
                                    <defs>
                                        <linearGradient id="paint0_linear_194_315" x1="60.2829" y1="30.5824" x2="31.5874" y2="30.5824" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFBE5C" />
                                            <stop offset="0.84375" stop-color="#FFA90B" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_194_315" x1="-7.35509" y1="30.5824" x2="21.3405" y2="30.5824" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFBE5C" />
                                            <stop offset="0.84375" stop-color="#FFA90B" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div style={{ position: 'absolute', top: 340, left: 780, color: 'white', fontSize: 24 }}>
                                <Form.Item name='quantity'>
                                    <Input className='input-homee' type="text" style={{ width: 60 }} placeholder='số lượng vé' />
                                </Form.Item>
                            </div>
                            <div style={{ position: 'absolute', top: 340, left: 880, color: 'white', fontSize: 24 }}>
                                <Form.Item name="data" style={{ marginLeft: -20 }}>
                                    <Input
                                        className="input-homee"
                                        type='date'
                                        style={{ width: 130 }}
                                        placeholder="Ngày sử dụng"
                                    />
                                </Form.Item>
                                <div style={{ position: 'absolute', top: -10, left: 120, }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="56" viewBox="0 0 53 56" fill="none">
                                        <path d="M42.603 56.2154H10.3249C4.46644 56.2154 -0.288452 51.4406 -0.288452 45.5576V19.9237C-0.288452 14.0407 4.46644 9.26593 10.3249 9.26593H42.603C48.4614 9.26593 53.2163 14.0407 53.2163 19.9237V45.5576C53.2163 51.4406 48.4614 56.2154 42.603 56.2154Z" fill="#F9B842" />
                                        <path d="M42.603 56.2154H10.3249C4.46644 56.2154 -0.288452 51.4406 -0.288452 45.5576V19.9237C-0.288452 14.0407 4.46644 9.26593 10.3249 9.26593H42.603C48.4614 9.26593 53.2163 14.0407 53.2163 19.9237V45.5576C53.2163 51.4406 48.4614 56.2154 42.603 56.2154Z" fill="#FFD27B" />
                                        <path d="M43.9824 4.94742C49.0781 4.94742 53.2163 9.49407 53.2163 15.1163V46.0465C53.2163 51.6524 48.0882 56.2154 42.9763 56.2154H31.584V4.94742H43.9824Z" fill="url(#paint0_linear_194_315)" />
                                        <path d="M8.94544 4.94742C3.84975 4.94742 -0.288473 9.49407 -0.288473 15.1163V46.0465C-0.288473 51.6524 4.83968 56.2154 9.9516 56.2154H21.3439V4.94742H8.94544Z" fill="url(#paint1_linear_194_315)" />
                                        <path d="M42.603 46.8613H10.3249C4.46644 46.8613 -0.288452 42.0865 -0.288452 36.2036V10.5859C-0.288452 4.70299 4.46644 -0.0718079 10.3249 -0.0718079H42.603C48.4614 -0.0718079 53.2163 4.70299 53.2163 10.5859V36.2199C53.2163 42.0865 48.4614 46.8613 42.603 46.8613Z" fill="#FFDE32" />
                                        <defs>
                                            <linearGradient id="paint0_linear_194_315" x1="60.2829" y1="30.5824" x2="31.5874" y2="30.5824" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFBE5C" />
                                                <stop offset="0.84375" stop-color="#FFA90B" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_194_315" x1="-7.35509" y1="30.5824" x2="21.3405" y2="30.5824" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFBE5C" />
                                                <stop offset="0.84375" stop-color="#FFA90B" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div style={{ position: 'absolute', top: -8, left: 123, width: 100, zIndex: 1 }}  >
                                    <img src="/img/calendar.png" alt="aaaa" />
                                </div>
                                <div style={{ position: 'absolute', top: 50, left: -100, color: 'white' }}>
                                    <Form.Item name='name'>
                                        <Input className='input-home' type="text" style={{ width: 260 }} placeholder='Họ và tên' />
                                    </Form.Item>
                                </div>
                                <div style={{ position: 'absolute', top: 100, left: -100, color: 'white' }}>
                                    <Form.Item name='phone'>
                                        <Input className='input-home' type="text" style={{ width: 260 }} placeholder='Số điện thoại' />

                                    </Form.Item>
                                </div>
                                <div style={{ position: 'absolute', top: 150, left: -100, color: 'white' }} >
                                    <Form.Item className='input-260' name='email'>
                                        <Input className='input-home' type="text" style={{ width: 260 }} placeholder='Địa chỉ mail ' />

                                    </Form.Item>
                                </div>
                            </div>
                            <button style={{ boxShadow: 'none', outline: 0, width: 0, height: 0, position: 'absolute', top: 533, left: 793, zIndex: 1, backgroundColor: '#fff6d4', borderColor: '#fff6d4' }}  >

                                <img src="/img/red.png" style={{ width: 220 }} />
                                <img src="/img/datve.png" style={{ width: 100, position: 'absolute', top: 5, left: 60 }} />

                            </button>
                            <div style={{ position: 'absolute', top: 532, left: 800, color: 'white' }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="56" viewBox="0 0 368 56" fill="none">
                                    <path d="M356.287 55.9999H11.7127C5.24742 55.9999 0 50.3047 0 43.2877V12.7122C0 5.69518 5.24742 -6.10352e-05 11.7127 -6.10352e-05H356.287C362.753 -6.10352e-05 368 5.69518 368 12.7122V43.2877C367.982 50.3047 362.753 55.9999 356.287 55.9999Z" fill="#BD000B" />
                                </svg>

                            </div>


                        </div>

                    </Form>

                </div>

            </div >

        </>
    )
}

export default Homepage