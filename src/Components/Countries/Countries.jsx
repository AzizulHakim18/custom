import { useEffect, useState } from "react";
import Country from "./Country";
import { list } from "postcss";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(' https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    console.log(visitedCountries);
    return (
        <div className="w-5/6 mx-auto my-10">
            <h1 className="text-2xl font-semibold my-4 text-red-600">Totall countries : {countries.length}</h1>
            <h1 className="text-2xl font-semibold my-4 text-red-600">Visiting country : {visitedCountries.length}</h1>
            <ol>
                {visitedCountries.map(x => <li key={x.cca3}>{x?.name?.common}</li>)}
            </ol>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries?.map(country => <Country
                        country={country}
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;