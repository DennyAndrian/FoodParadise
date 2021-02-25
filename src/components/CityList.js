import React from 'react';
import CityCard from './CityCard';

const CityList = (props) => (
<div className="container mb-5">
      <div className="row mb-4">
      <div className="col">
        <h3>{props.title}</h3>
        { props.showSubtitle === true && props.subtitle !== "" && (
    <h6 className="text-muted">Search result for keyword '{props.subtitle}' </h6>)}
      </div>
      </div>
      <div className="row"> 
        {props.citiesdummy == null ? (
          <div className="col">
          <p>Loading . . .</p>  
          </div>
        ): (
          _renderCityList(props.citiesdummy)
        )}
      </div>
    </div>
);

const _renderCityList = citiesdummy => {
  if (citiesdummy.length > 0) {
    return citiesdummy.map(city => 
      <CityCard key={city.id} city={city} />
      )
  } else {
    return (
      <div className="col">
        <p className="text-danger">Data not found!</p>
      </div>
    )
  }
};

export default CityList;