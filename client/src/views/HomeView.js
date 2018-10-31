import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTile from '../components/ApartmentTile';
import Loader from '../components/Loader';
import ApartmentListPlaceholder from '../components/ApartmentListPlaceholder.js';

class HomeView extends React.Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
  }

  render() {
    let {apartmentsList, isApartmentsListLoading} = this.props;
    
    if (isApartmentsListLoading) {
      return <Loader/>
    }

    if (!apartmentsList.length) {
      return <ApartmentListPlaceholder/>
    }

    return (
      <div className='container-list container-lg clearfix'>
        <div className='col-12 float-left'>
          <div className='view-apartment-list'>
            {apartmentsList.map((item) => (
              <ApartmentTile key={item._id} apartment={item}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.items,
  isApartmentsListLoading: state.apartmentsList.loading,
});

HomeView.propTypes = {
  fetchApartmentsList: PropTypes.func.isRequired,
  apartmentsList: PropTypes.array.isRequired,
  isApartmentsListLoading: PropTypes.bool.isRequired
};

HomeView.defaultProps = {
  apartmentsList: []
};

export default connect(mapStateToProps, {fetchApartmentsList})(HomeView)
