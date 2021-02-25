import React from 'react';

const RatingLable = props => (
    <div className="btn btn-sm"
                        style={{
                        color: 'white',
                        backgroundColor: `#${props.labelColor}`,
                        borderColor: `#${props.labelColor}`,
                        }}
                    >
                        {props.text}
                    </div>
);

export default RatingLable;