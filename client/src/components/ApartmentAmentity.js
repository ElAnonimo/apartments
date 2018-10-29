import React from 'react';

const ApartmentAmentity = ({apartment, limit = 3}) => {
  if (!apartment || !apartment.amenities || !apartment.amenities.length) {
    return null;
  }

  return apartment.amenities.slice(0, limit).map((item) => {
    return (
      <span className='_1h9l4w0vvX6d56ZnJ3NLod' key={item}>
          <i></i><span>{item}</span>
        </span>
    );
  });
};

export default ApartmentAmentity;
