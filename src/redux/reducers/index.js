import greetings from './greetings';
import {combineReducers} from 'redux';
import peopleReducer from './people';



module.exports = {
  ...greetings,
    peopleReducer
};

const rootReducer = combineReducers({
    greetings,
    peopleReducer
});

export default rootReducer;
