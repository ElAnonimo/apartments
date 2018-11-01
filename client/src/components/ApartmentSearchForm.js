import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {lessThan, greaterThan, textOnly, clearZeroValue} from '../helpers/formNormalization';
import PropTypes from 'prop-types';

const ApartmentSearchForm = ({handleSubmit, onSubmit, reset, onReset, pristine, submitting}) => {
  const handleReset = (cb) => {
    return () => {
      reset();

      cb && cb();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='search-form'>
      <div className='search-form-row'>
        <div className='search-form-input-field'>
          <Field
            name='location'
            component='input'
            type='text'
            placeholder='Location'
            normalize={textOnly()}
            pattern='[^0-9]*'
          />
        </div>
        <div className='search-form-input-field'>
          <Field
            name='amenities'
            component='input'
            type='text'
            placeholder='Amenities'
            normalize={textOnly()}
            pattern='[^0-9]*'
          />
        </div>
      </div>
      <div className='search-form-row'>
        <div className='search-form-input-field'>
          <Field
            name='services'
            component='input'
            type='text'
            placeholder='Services'
            normalize={textOnly()}
            pattern='[^0-9]*'
          />
        </div>
      </div>
      <div className='search-form-row'>
        <div className='search-form-input-field'>
          <Field
            name='rooms'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Rooms'
            normalize={clearZeroValue()}
            min={0}
          />
        </div>
        <div className='search-form-input-field'>
          <Field
            name='bedrooms'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Bedrooms'
            normalize={clearZeroValue()}
            min={0}
          />
        </div>
        <div className='search-form-input-field'>
          <Field
            name='floor'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Floor'
            normalize={clearZeroValue()}
            min={0}
          />
        </div>
        <div className='search-form-input-field'>
          <Field
            name='bathrooms'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Bathrooms'
            normalize={clearZeroValue()}
            min={0}
          />
        </div>
      </div>
      <div className='search-form-row'>
        <div className='search-form-input-field'>
          <Field
            name='minPrice'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Min Price'
            normalize={lessThan('maxPrice')}
            min={0}
          />
        </div>
        <div className='search-form-input-field'>
          <Field
            name='maxPrice'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Max Price'
            normalize={greaterThan('minPrice')}
            min={0}
          />
        </div>
        <div className='search-form-input-field'>
          <Field
            name='minSize'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Min Size'
            normalize={lessThan('maxSize')}
            min={0}
          />
        </div>
        <div className='search-form-input-field'>
          <Field
            name='maxSize'
            parse={value => Number(value)}
            component='input'
            type='number'
            placeholder='Max Size'
            normalize={greaterThan('minSize')}
            min={0}
          />
        </div>
      </div>
      <div className='search-form-actions'>
        <button
          type='button'
          disabled={pristine || submitting}
          className='search-form-action'
          onClick={handleReset(onReset)}
        >
          Clear Values
        </button>
        <button
          disabled={submitting}
          className='search-form-action'
        >
          Search
        </button>
      </div>
    </form>
  );
};

ApartmentSearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'ApartmentSearchForm'
})(ApartmentSearchForm);