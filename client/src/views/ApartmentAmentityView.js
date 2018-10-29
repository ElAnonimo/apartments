import React from 'react';

export default class ApartmentAmentityView extends React.Component {
  render() {
    let {apartment, limit = 3} = this.props;

    if (!apartment || !apartment.amenities || !apartment.amenities.length) {
      return null;
    }

    return apartment.amenities.slice(0, limit).map((item) => {
      return (
        <span className="_1h9l4w0vvX6d56ZnJ3NLod" key={item}>
          <i></i><span>{item}</span>
        </span>
      );
    });
  }
}
