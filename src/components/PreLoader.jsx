import React from 'react';
import { Loader } from './iconsvg'

const PreLoader = () => {
    return (
        <div className='fixed left-0 right-0 flex items-center justify-center min-h-screen bg-black'>
            <div className='max-w-[100px] w-full'>
                <Loader />
            </div>
        </div>
    )
}

export default PreLoader