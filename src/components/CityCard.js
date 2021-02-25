import React from 'react';
import {Link} from 'react-router-dom';

const CityCard = props => (
    <>
    <div className="col">
          <div className="card">
            <div className="card-header">
              <h4>{props.city.name}</h4>
            </div>
            <div className="card-body">
              <div className="card-title">{props.city.country_name}</div>
              <div className="card-text"> <Link to={`/city/${props.city.id}`}> See Restaurant in {props.city.name}</Link> </div>
            </div>
          </div>
      </div>
      </>
)
export default CityCard;