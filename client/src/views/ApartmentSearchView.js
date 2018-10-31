import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchApartmentsSearch} from './../actions/apartmentsSearchActions';
import ApartmentTile from '../components/ApartmentTile';
import ApartmentSearchForm from '../components/ApartmentSearchForm';
import Loader from '../components/Loader';
import ApartmentListPlaceholder from '../components/ApartmentListPlaceholder.js';

class ApartmentSearchView extends React.Component {
  constructor() {
    super();

    this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
    this.onSearchFormReset = this.onSearchFormReset.bind(this);
  }

  componentDidMount() {
    this.props.fetchApartmentsSearch();
  }

  onSearchFormSubmit(formData) {
    this.props.fetchApartmentsSearch(formData);
  }

  onSearchFormReset() {
    this.props.fetchApartmentsSearch();
  }

  render() {
    const {apartmentsList, isApartmentsListLoading} = this.props;

    const ApartmentListItems = isApartmentsListLoading
      ? <Loader/>
      : (
        <div className='view-apartment-list'>
          {apartmentsList.map((item) => (
            <ApartmentTile key={item._id} apartment={item}/>
          ))}
        </div>
      );

    return (
      <div className='container-list container-lg clearfix'>
        <div className='col-12 float-left'>
          <ApartmentSearchForm onSubmit={this.onSearchFormSubmit} onReset={this.onSearchFormReset}/>
        </div>
        <div className='col-12 float-left'>
          {(isApartmentsListLoading || apartmentsList.length)
            ? ApartmentListItems
            : <ApartmentListPlaceholder/>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsSearch.items,
  isApartmentsListLoading: state.apartmentsSearch.loading,
});

ApartmentSearchView.propTypes = {
  fetchApartmentsSearch: PropTypes.func.isRequired,
  apartmentsList: PropTypes.array.isRequired,
  isApartmentsListLoading: PropTypes.bool.isRequired
};

ApartmentSearchView.defaultProps = {
  apartmentsList: []
};

export default connect(mapStateToProps, {fetchApartmentsSearch})(ApartmentSearchView)
