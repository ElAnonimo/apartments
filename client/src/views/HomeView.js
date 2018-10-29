import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTile from '../components/ApartmentTile';
import Loader from '../components/Loader';

class HomeView extends React.Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
  }

  render() {
    let {apartmentsList, isApartmentsListLoading} = this.props;
    
    if (isApartmentsListLoading) {
      return <Loader/>
    }

    return (
      <div className='container-list container-lg clearfix'>
        <div className='col-12 float-left'>
          <div className='view-apartment-list'>
            {apartmentsList.map((item, index) => (
              <ApartmentTile key={index} apartment={item}/>
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
