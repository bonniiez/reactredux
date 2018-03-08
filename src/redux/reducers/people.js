import {FETCH_PEOPLE} from "../actions/people";

const INITIAL_STATE={};
export default function peopleReducer (state =INITIAL_STATE, action){
    switch(action.type){
        case FETCH_PEOPLE:
            console.log('in reducers, ',action.payload);
            console.log(action);
            return {
                ...state,
                name: action.payload
            }

    }
    return state;
}
