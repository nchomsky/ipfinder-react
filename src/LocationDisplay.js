import React from 'react';
import './LocationDisplay.css';

const countryToLowercase = (country) => {
    return country.toLowerCase();
}

const LocationDisplay = (props) => {
    const icon = countryToLowercase(props.country);

    return (
        <div className={`location-display`}>
            <div className={"content"}>
                <h1>Location:</h1>
                <div className={'info'}>
                    <p className={"country"}>Country:
                        <span className={"country-id"}> {props.country} </span>
                        <i className={`${icon} flag`} ></i>
                    </p>
                    <p className={"region"}>State:
                        <span className={"state-id"}> {props.state}</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default LocationDisplay;