import React, { useEffect, useState } from 'react'
import '../css/contact.css'
import { useNavigate } from 'react-router-dom'
import { AnyAction, unwrapResult } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { fetchEventsData } from '../redux/eventActions';
import { Button, Form, Input, Modal, message } from 'antd';
import { addNewcontact } from '../redux/contactAction';
import { Link } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';

function Contact() {
    const [form] = useForm();
    const navigate = useNavigate();

    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const [modelt, setModelt] = useState(false)

    const handleAddNewcontact = async (values: any) => {
        try {
            const actionResult = await dispatch(addNewcontact(values));
            const newtitketData = unwrapResult(actionResult);
            form.resetFields();

            setModelt(true)

        } catch (error) {
            message.error('Không được để trống')

        }
    };


    const haldeTrue = () => {
        setModelt(false)
    }

    return (
        <>
            <div className='bg-custom'>
                <Modal className='aa' style={{}}
                    visible={modelt}
                    onCancel={haldeTrue}
                    footer={[
                    ]}
                >
                    <p   >
                        Gửi liên hệ thành công.
                        Vui lòng kiên nhẫn đợi phản hồi từ
                        chúng tôi, bạn nhé!
                    </p>
                </Modal>


                <div className='container-custom' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='svg-custom' width="1220" height="147" viewBox="0 0 1920 147" fill="none">
                        <g filter="url(#filter0_d_16580_109)">
                            <path d="M1924.5 0V82.5C1383.5 115.5 459.5 117 0 82.5V0H1924.5Z" fill="#ED7200" />
                        </g>
                        <image href='/img/phone.png' x='1500' y='30' />
                        <image href="/img/logolittle.png" x="200" y="0" width="229" height="91" onClick={() => navigate("/")} />
                        <a >  <text x="860" y="62" fill="white" font-size="24" onClick={() => navigate("/")}>Trang chủ</text></a>

                        {/* <image href="/img/Tags.png" x="800" y="30" width="200" height="50" onClick={() => navigate("/")} /> */}
                        <image href="/img/lienhe.png" x="1240" y="30" width="200" height="50" onClick={() => navigate("/event")} />
                        <text onClick={() => navigate('/event')} x="1100" y="62" fill="white" font-size="24">Sự kiện</text>
                        <text x="1540" y="55" fill="white" font-size="24">033323232 </text>

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
                    <img src="/img/lienhe-pg.png" style={{ position: 'absolute', top: 100, left: 500, width: 200 }} alt="" />
                    <img src="/img/bg.png" alt="" className='bg' />
                    <img src="/img/Alex_AR_Lay_Do shadow 1.png" alt="" style={{ position: 'absolute', top: 220, left: 0, width: 180, zIndex: 1 }} />
                    <img src="/img/gr-lh.png" style={{ position: 'absolute', left: 170, top: 250, width: 500 }} />
                    <img src="/img/Group (1).png" style={{ position: 'absolute', top: 250, left: 800, width: 280 }} />
                    <img src="/img/Group (1).png" style={{ position: 'absolute', top: 365, left: 800, width: 280 }} />
                    <img src="/img/Group (1).png" style={{ position: 'absolute', top: 480, left: 800, width: 280 }} />
                    <Link to='https://goo.gl/maps/r9oKuFfRMV6zm6MK8' style={{ position: 'absolute', top: 280, left: 820, color: 'black' }}>
                        <img src='/img/adress1.png' style={{ width: 40 }} />
                        <strong style={{ position: 'absolute', left: 44, width: 100, top: -10 }}>Địa chỉ: </strong>
                        <p style={{ position: 'absolute', left: 44, width: 200, fontSize: 11, top: 15 }} > 86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                    </Link>
                    <div style={{ position: 'absolute', left: 820, top: 385 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="62" viewBox="0 0 62 62" fill="none">
                            <g clip-path="url(#clip0_158_125)">
                                <path d="M61.957 16.5193C51.243 13.9216 42.3499 14.1768 31 14.1768C19.6502 14.1768 10.757 13.9217 0.0429883 16.5194C0.0150156 16.7814 0 17.0473 0 17.3168V44.6832C0 48.7967 3.33468 52.1314 7.44811 52.1314H54.5518C58.6652 52.1314 61.9999 48.7967 61.9999 44.6832V17.3168C62 17.0473 61.985 16.7814 61.957 16.5193Z" fill="url(#paint0_linear_158_125)" />
                                <path d="M35.1203 37.577C34.7571 36.6299 33.7833 36.0539 32.7816 36.2132C29.8754 36.6751 26.828 36 24.3353 34.1869L21.5137 32.1349L18.3203 35.1575L21.6595 37.5861C24.3459 39.5399 27.5686 40.654 30.8903 40.6766C31.7534 40.6825 32.6067 40.6185 33.4444 40.4866C34.8004 40.2734 35.6115 38.8587 35.1203 37.577Z" fill="#04A5DE" />
                                <path d="M61.957 16.5193C50.471 17.0419 31 23.1565 31 23.1565L59.5644 50.1922C61.0608 48.8299 62 46.8662 62 44.6832V17.3168C62 17.0473 61.985 16.7814 61.957 16.5193Z" fill="url(#paint1_linear_158_125)" />
                                <path d="M0.0429883 16.5193C11.5291 17.0419 31 23.1565 31 23.1565L2.43556 50.1922C0.939203 48.8297 0 46.8662 0 44.6832V17.3168C0 17.0473 0.0150156 16.7814 0.0429883 16.5193Z" fill="url(#paint2_linear_158_125)" />
                                <path d="M10.9306 39.1942C11.753 40.0523 13.1137 40.0854 13.9768 39.2685L21.5139 32.1348L0.0433516 16.5195C0.0152578 16.7815 0 17.0475 0 17.3168V21.833L14.7645 32.5711L11.0055 36.1289C10.1347 36.9531 10.1012 38.3285 10.9306 39.1942Z" fill="#04A5DE" />
                                <path d="M54.5518 9.86867H7.44797C3.60397 9.86867 0.441004 12.781 0.0429688 16.5194L24.3355 34.1871C28.3087 37.0767 33.6913 37.0767 37.6645 34.1871L61.957 16.5194C61.5587 12.7809 58.3958 9.86867 54.5518 9.86867Z" fill="url(#paint3_linear_158_125)" />
                                <path d="M20.146 25.3274C21.1648 25.3274 21.9908 24.6637 21.9908 23.8449C21.9908 23.0262 21.1648 22.3625 20.146 22.3625C19.1272 22.3625 18.3013 23.0262 18.3013 23.8449C18.3013 24.6637 19.1272 25.3274 20.146 25.3274Z" fill="#EAADCD" />
                                <path d="M41.8545 25.3274C42.8733 25.3274 43.6993 24.6637 43.6993 23.8449C43.6993 23.0262 42.8733 22.3625 41.8545 22.3625C40.8357 22.3625 40.0098 23.0262 40.0098 23.8449C40.0098 24.6637 40.8357 25.3274 41.8545 25.3274Z" fill="#EAADCD" />
                                <path d="M23.3079 23.8449C25.3282 23.8449 26.9659 22.2072 26.9659 20.1869C26.9659 18.1667 25.3282 16.5289 23.3079 16.5289C21.2876 16.5289 19.6499 18.1667 19.6499 20.1869C19.6499 22.2072 21.2876 23.8449 23.3079 23.8449Z" fill="white" />
                                <path d="M38.6917 23.8449C40.7119 23.8449 42.3497 22.2072 42.3497 20.1869C42.3497 18.1667 40.7119 16.5289 38.6917 16.5289C36.6714 16.5289 35.0337 18.1667 35.0337 20.1869C35.0337 22.2072 36.6714 23.8449 38.6917 23.8449Z" fill="white" />
                                <path d="M23.3081 22.3671C24.5122 22.3671 25.4883 21.391 25.4883 20.187C25.4883 18.9829 24.5122 18.0068 23.3081 18.0068C22.104 18.0068 21.1279 18.9829 21.1279 20.187C21.1279 21.391 22.104 22.3671 23.3081 22.3671Z" fill="#3B3B44" />
                                <path d="M38.6919 22.3671C39.896 22.3671 40.8721 21.391 40.8721 20.187C40.8721 18.9829 39.896 18.0068 38.6919 18.0068C37.4878 18.0068 36.5117 18.9829 36.5117 20.187C36.5117 21.391 37.4878 22.3671 38.6919 22.3671Z" fill="#3B3B44" />
                                <path d="M31.0001 23.9613C30.3519 23.9613 29.7039 23.7162 29.1752 23.2259C28.9252 22.994 28.9103 22.6034 29.1423 22.3532C29.3742 22.1031 29.765 22.0882 30.015 22.3203C30.5952 22.8582 31.4053 22.8582 31.9854 22.3203C32.2354 22.0884 32.6262 22.1031 32.8582 22.3532C33.0899 22.6033 33.0753 22.9939 32.8252 23.2259C32.2963 23.7161 31.6483 23.9613 31.0001 23.9613Z" fill="#3B3B44" />
                                <path d="M47.6998 14.809H46.3307C45.6486 14.809 45.0957 14.2561 45.0957 13.574C45.0957 12.8919 45.6486 12.339 46.3307 12.339H47.6998C48.3819 12.339 48.9349 12.8919 48.9349 13.574C48.9349 14.2561 48.3819 14.809 47.6998 14.809Z" fill="#DFF7FA" />
                                <path d="M57.3099 16.0147C56.9767 16.0147 56.6445 15.8806 56.401 15.6161C55.9287 15.1032 55.2548 14.8089 54.5521 14.8089H52.7468C52.0646 14.8089 51.5117 14.256 51.5117 13.5739C51.5117 12.8918 52.0646 12.3389 52.7468 12.3389H54.5521C55.9434 12.3389 57.2798 12.9235 58.2183 13.9432C58.6803 14.445 58.648 15.2263 58.1461 15.6883C57.9087 15.9069 57.6089 16.0147 57.3099 16.0147Z" fill="#DFF7FA" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_158_125" x1="31.0024" y1="22.8784" x2="31.0024" y2="48.4118" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#53AAE6" />
                                    <stop offset="1" stop-color="#A4D2F0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_158_125" x1="45.9472" y1="33.3534" x2="68.2742" y2="33.3534" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#53AAE6" />
                                    <stop offset="1" stop-color="#A4D2F0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_158_125" x1="16.0499" y1="33.3534" x2="-6.27717" y2="33.3534" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#53AAE6" />
                                    <stop offset="1" stop-color="#A4D2F0" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_158_125" x1="31.0024" y1="-3.42056" x2="31.0024" y2="28.0795" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#74D2E8" />
                                    <stop offset="1" stop-color="#BAEAF5" />
                                </linearGradient>
                                <clipPath id="clip0_158_125">
                                    <rect width="62" height="62" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <strong style={{ position: 'absolute', left: 44, width: 100, top: 10 }}>Email:  </strong>
                        <p style={{ position: 'absolute', left: 44, width: 200, fontSize: 11, top: 30 }} > danghongquan.it@gmail.com</p>
                    </div>

                    <div style={{ position: 'absolute', left: 820, top: 500 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="62" viewBox="0 0 62 62" fill="none">
                            <g clip-path="url(#clip0_161_36)">
                                <path d="M54.143 54.7469C51.7268 50.0544 49.6836 47.6098 47.0018 44.928C44.3199 42.2463 41.8754 40.2029 37.183 37.7868L34.516 40.4538C32.0727 42.8971 27.2152 39.9341 24.6409 37.3596C22.0664 34.7852 19.1035 29.9276 21.5467 27.4844L24.2138 24.8174C21.7976 20.1249 19.7544 17.6804 17.0725 14.9987C14.3907 12.317 11.9462 10.2736 7.25382 7.85745L4.58659 10.5244C-6.04382 21.155 3.86506 38.9127 13.4764 48.524C23.0878 58.1354 40.8456 68.0443 51.476 57.4139L54.143 54.7469Z" fill="url(#paint0_linear_161_36)" />
                                <path d="M53.9869 51.4294C53.0239 50.4554 51.4523 50.451 50.4838 51.4195L47.9828 53.9206C45.8703 56.0329 43.3039 57.0598 40.1363 57.0598C36.7498 57.0598 33.0162 55.8889 29.3866 54.0676C28.2253 53.4849 26.811 53.9018 26.1504 55.0206C25.4233 56.2517 25.8862 57.846 27.1646 58.4864C35.5843 62.7041 44.8956 63.9942 51.476 57.4138L53.977 54.9129C54.9379 53.952 54.9422 52.3956 53.9869 51.4294Z" fill="#E20000" />
                                <path d="M25.7844 12.2924L19.7785 6.28658C16.7536 3.26167 11.8493 3.26167 8.82441 6.28658L7.25342 7.85745C9.02906 11.3027 11.7022 15.0052 14.3839 17.687C17.0656 20.3687 20.7682 23.0418 24.2135 24.8175L25.7844 23.2467C28.8093 20.2216 28.8093 15.3173 25.7844 12.2924Z" fill="#FFD000" />
                                <path d="M49.7081 36.216L55.7139 42.2219C58.7388 45.2468 58.7388 50.1511 55.7139 53.176L54.1431 54.7468C50.6979 52.9712 46.9953 50.298 44.3136 47.6164C41.6319 44.9347 38.9589 41.2321 37.1831 37.7869L38.754 36.216C41.7789 33.191 46.6832 33.1911 49.7081 36.216Z" fill="#FFD000" />
                                <path d="M50.4837 51.4195L49.7866 52.1166C51.2183 53.1037 52.697 54.0008 54.1322 54.7411C54.9342 53.7746 54.8873 52.34 53.9867 51.4294C53.0237 50.4554 51.4521 50.4511 50.4837 51.4195Z" fill="#EFC534" />
                                <path d="M56.5924 23.2856C56.5923 13.4277 48.5723 5.40783 38.7145 5.40771C37.2213 5.40759 36.0107 4.19698 36.0107 2.70379C36.0109 1.21061 37.2213 0 38.7147 0C51.554 0.000247012 61.9999 10.4459 62.0001 23.2854C62.0001 24.7788 60.7896 25.9894 59.2963 25.9892C57.8032 25.9894 56.5924 24.7789 56.5924 23.2856Z" fill="#FFD000" />
                                <path d="M46.319 23.2852C46.319 19.0923 42.908 15.6812 38.715 15.6812C37.2218 15.6812 36.0115 14.4707 36.0112 12.9773C36.0114 11.4841 37.2218 10.2735 38.7151 10.2735C45.8895 10.2736 51.7265 16.1106 51.7266 23.2849C51.7267 24.7783 50.5161 25.9889 49.0228 25.9887C47.5298 25.9891 46.319 24.7785 46.319 23.2852Z" fill="#FFD000" />
                                <path d="M11.5197 10.94C11.2036 10.94 10.8875 10.8195 10.6464 10.5783C10.1641 10.096 10.1641 9.31396 10.6464 8.83155L11.0081 8.4698C11.5627 7.91538 12.2501 7.50756 12.9962 7.29056C13.651 7.1 14.3365 7.47656 14.5269 8.13164C14.7175 8.78659 14.3409 9.47205 13.686 9.6625C13.333 9.76513 13.0198 9.9515 12.7548 10.2165L12.393 10.5783C12.1518 10.8195 11.8357 10.94 11.5197 10.94Z" fill="#FFFDE3" />
                                <path d="M4.93731 19.1091C4.80689 19.1091 4.67437 19.0882 4.54394 19.0445C3.89739 18.8274 3.5491 18.1272 3.76623 17.4805C4.36807 15.6883 5.35056 14.1271 6.76989 12.7077L7.0521 12.4254C7.53439 11.9431 8.31643 11.943 8.79872 12.4252C9.28114 12.9075 9.28114 13.6894 8.79897 14.1718L8.51664 14.4542C7.37322 15.5976 6.58537 16.8446 6.1079 18.2668C5.93462 18.783 5.45332 19.1091 4.93731 19.1091Z" fill="white" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_161_36" x1="27.0005" y1="65.5" x2="27.0717" y2="31.7809" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E61F1F" />
                                    <stop offset="1" stop-color="#FF6969" />
                                </linearGradient>
                                <clipPath id="clip0_161_36">
                                    <rect width="62" height="62" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <strong style={{ position: 'absolute', left: 44, width: 100, top: 10 }}>Điện thoại:  </strong>
                        <p style={{ position: 'absolute', left: 44, width: 200, fontSize: 11, top: 30 }} > +84334205811</p>
                    </div>
                    <Form form={form} onFinish={handleAddNewcontact}>


                        <p style={{ width: 450, position: 'absolute', left: 200, fontSize: 13, top: 270, height: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. </p>

                        <Form.Item name='name'>
                            <Input className='input-home' style={{ width: 130, position: 'absolute', left: 210, top: 220 }} placeholder='Tên' />
                        </Form.Item>

                        <Form.Item name='email'>
                            <Input className='input-home' style={{ width: 270, position: 'absolute', left: 360, top: 195 }} placeholder='Email' />
                        </Form.Item>

                        <Form.Item name='phone'>
                            <Input className='input-home' style={{ width: 130, position: 'absolute', left: 210, top: 215 }} placeholder='Số điện thoại' />
                        </Form.Item>

                        <Form.Item name='address'>
                            <Input className='input-home' style={{ width: 270, position: 'absolute', left: 360, top: 190 }} placeholder='Địa chỉ' />
                        </Form.Item>

                        <Form.Item name='reminder'>
                            <Input className='input-home input-loinhac' style={{ width: 420, position: 'absolute', left: 210, top: 210, height: 80 }} placeholder='Lời nhắc' />
                        </Form.Item>

                        <button style={{
                            backgroundColor: '#FFF6D4', outline: 'none', boxShadow: 'none', zIndex: 1,
                            position: 'absolute', width: 0, height: 0, borderColor: '#FFF6D4',
                            top: 520, left: 322, padding: 0, border: 0
                        }}>

                            <img src="/img/btn-lh.png" alt="" style={{ width: 195 }} />
                            <img src="/img/glh.png" alt="" style={{ position: "absolute", left: 45, width: 100, top: 10 }} />
                        </button>
                    </Form>
                </div>

            </div >

        </>
    )
}

export default Contact