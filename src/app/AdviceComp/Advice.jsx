import React from 'react'


async function getData() {
    const response = await fetch(
        'https://api.adviceslip.com/advice',
        { cache: 'no-store' }  // dynamic fetching
    );

    if (!response.ok) {
        throw new Error('failed to fetch data')
    }

    return response.json();
}


const Advice = async () => {
    const data = await getData();

    return (
        <div 
            className='advice_section border py-20 px-10 text-center rounded-lg bg-gradient-to-r from-purple-700 to-red-400 shadow-pink-300'
        >
            <p 
                className='text-4xl font-bold'
            >
                Advice no. - {data.slip.id}
            </p>

            <h1
                className='text-2xl my-10'
            >
                {data.slip.advice}
            </h1>

            <p>
                (Please reload for getting ather quotes)
            </p>
        </div>
    )
}

export default Advice


// 	https://api.adviceslip.com/advice