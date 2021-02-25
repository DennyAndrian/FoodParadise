import React from 'react';

const SearchCity = (props) => (
<div className="container mb-5">
  <div className="row mb-4">
    <div className="col">
      <h3> Search City</h3>
    </div>
  </div>
<div className="row">
<div className="col-11">
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Type your keyword here" value={props.value} onChange={props.onChange}/> 
  </div>
</div>
<div className="col-1">
  <button className="btn btn-primary" type="button" onClick={props.onClickSearch} >Submit</button>
</div>
</div>
</div>
)

export default SearchCity;