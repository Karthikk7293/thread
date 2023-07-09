import Image from 'next/image';
import React from 'react'

function Post({name,message,time,likes,replies,image}) {
    return (
        <div className="  w-full grid grid-cols-7  px-3 border-b pb-8 pt-5 border-neutral-900">
            <div className='  col-span-1 h-full w-full flex flex-col  items-center '>
                <Image
                    className=" rounded-full mb-2"
                    src="/images/dp3.jpg"
                    alt="Logo"
                    width={50}
                    height={50}
                    priority
                />
                <span className='  w-0.5 h-full bg-neutral-800 '></span>
                <div className='relative  '>
                    <Image
                        className=" rounded-full mt-2"
                        src="/images/dp1.jpg"
                        alt="Logo"
                        width={20}
                        height={20}
                    />
                    <Image
                        className=" rounded-full mt-2 absolute -left-5 top-2"
                        src="/images/dp2.jpg"
                        alt="Logo"
                        width={15}
                        height={15}
                    />
                    <Image
                        className=" rounded-full mt-2 absolute -left-1 -bottom-3"
                        src="/images/dp1.jpg"
                        alt="Logo"
                        width={10}
                        height={10}
                    />
                </div>
            </div>
            <div className='col-span-6  ps-2  '>
                <div className="mb-1 flex justify-between items-center ">
                    <p>{name} <span></span></p>
                    <div className='flex justify-center items-center pe-1' >
                        <p className='pe-3 text-stone-600'>{time} m </p>
                        <div className='flex justify-center items-center gap-1 '>
                            <span className='w-1 h-1 bg-white  rounded-full'> </span>
                            <span className='w-1 h-1 bg-white  rounded-full'> </span>
                            <span className='w-1 h-1 bg-white  rounded-full'> </span>
                        </div>
                    </div>
                </div>
                <div className=" message">
                    <p>{message}
                    </p>
                    <img src={image}
                        alt="post" className='rounded-2xl w-[90%] my-2 border border-neutral-700 ' />
                </div>
                <div className="pt-4 text-white text-2xl flex justify-start items-center  gap-2">
                    <ion-icon name="heart-outline"></ion-icon>
                    {/* <ion-icon name="heart"></ion-icon> */}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <Image className=" dark:invert rotate-90 "
                        src="/images/repeat1.jpg"
                        alt="Logo"
                        width={24}
                        height={24} />
                    <Image className=" dark:invert  "
                        src="/images/send.png"
                        alt="Logo"
                        width={17}
                        height={17} />
                </div>
                <div className=" likes and comments flex justify-start items-center text-stone-600 mt-3">
                    <p> <span>{replies}</span> replies </p> <span className='-mt-3 mx-2'> . </span>
                    <p><span>{likes}</span> likes</p>
                </div>
            </div>
        </div>
    )
}

export default Post;