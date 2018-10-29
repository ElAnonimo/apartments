import React from 'react';
import PropTypes from 'prop-types';

const ApartmentAmentity = ({apartment, limit}) => {
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

ApartmentAmentity.propTypes = {
  apartment: PropTypes.object.isRequired,
  limit: PropTypes.number.isRequired
};

ApartmentAmentity.defaultProps = {
  limit: 3
};

export default ApartmentAmentity;
