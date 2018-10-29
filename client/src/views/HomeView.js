import React from 'react';
import {connect} from 'react-redux';
import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTileView from '../components/ApartmentTile';
import Loader from '../components/Loader';

class HomeView extends React.Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
  }

  render() {
    let {apartmentsList} = this.props;
    
    if (!Object.keys(apartmentsList).length) {
      return <Loader/>
    }

    return (
      <div className='container-list container-lg clearfix'>
        <div className='col-12 float-left'>
          <div className='view-apartment-list'>
            {apartmentsList.items.map((item, index) => (
              <ApartmentTileView key={index} apartment={item}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments
});

export default connect(mapStateToProps, {fetchApartmentsList})(HomeView)
