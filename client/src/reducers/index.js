import {combineReducers} from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import apartmentsSearchReducer from './apartmentsSearchReducer';
import apartmentReducer from './apartmentReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  apartmentsList: apartmentsListReducer,
  apartmentsSearch: apartmentsSearchReducer,
  apartmentItem: apartmentReducer,
  form: reduxFormReducer
})
