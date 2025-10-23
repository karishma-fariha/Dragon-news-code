import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={50}>
                <p className='font-bold'>Bangladesh's Export Earnings Show Strong Growth in Q1 2025</p>
                <p className='font-bold'>Central Bank Announces New Monetary Policy to Control Inflation</p>
                <p className='font-bold'>Foreign Investment in Bangladesh Reaches Record High in Fiscal Year 2024-25"</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;