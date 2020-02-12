import uuidv4 from 'uuid/v4';
import { 
  INCREMENT, 
  DECREMENT, 
  RESET,
  ADD_COUNT,
  DEL_COUNT,
} from "./actions";

// Our ideal/default state is just a number:
// 0
// state is your "bank balance"
// action is your "transaction slip"

export function counts(state=[], action) {
  let newState = [ ...state ];
  switch (action.type) {
  case ADD_COUNT:
    newState.push(count(undefined, action));
    break;
  case DEL_COUNT:
    newState = newState.filter(c => c.id !== action.payload.id);
    break;
  case INCREMENT:
  case DECREMENT:
  case RESET:
    newState = state.map((c, i) => {
      if (c.id === action.payload.id) {
        return count(c, action);
      } else {
        return c;
      }
    });
    break;
  default:
    break;
  }
  return newState;
}


export function count(state={ count: 0 }, action) {
  let newState = {
    id: state.id || uuidv4(),
    ...state
  };
  switch (action.type) {
  case INCREMENT:
    // increment!
    newState.count += 1;
    break;
  case DECREMENT:
    // decrement
    newState.count -= 1;
    break;
  case RESET:
    // reset to 0
    newState.count = 0;
    break;
  default:
    break;        
  }
  return newState;
}
