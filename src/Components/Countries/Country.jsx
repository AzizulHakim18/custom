import React, { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {

    // console.log(country);
    const [done, setDone] = useState(false)
    const handleDone = () => {
        setDone(!done)
    }



    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={country.flags.png} alt="country" /></figure>
            <div className="card-body">
                <h2 className="card-title">{country.name.common}</h2>
                <p>{country?.flags?.alt}</p>
                <div className="card-actions justify-end items-center">
                    <button className="btn btn-primary" onClick={handleDone}>{done ? "Visited" : "Going"}</button>
                    {done ? <p>I am going to this country</p> : <p>Want to go this country</p>}
                </div>
                <div className='card-actions'><button className='btn btn-primary' onClick={() => handleVisitedCountries(country)}>Click to Visit</button></div>
            </div>
        </div>
    );
};

export default Country;