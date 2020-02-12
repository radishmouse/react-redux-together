// Actions best practice #2: constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const ADD_COUNT = 'ADD_COUNT';
export const DEL_COUNT = 'DEL_COUNT';


// Actions best practice #1: action creator functions
export function actionIncrement(id) {
    return ({
      type: INCREMENT,
      payload: {
        id        
      }
    });
}

export function actionDecrement(id) {
    return ({
      type: DECREMENT,
      payload: {
        id        
      }
    });
}

export function actionReset(id) {
    return ({
      type: RESET,
      payload: {
        id        
      }
    });
}

export function actionAddCount() {
    return ({
        type: ADD_COUNT
    });
}

export function actionDelCount(id) {
    return ({
      type: DEL_COUNT,
      payload: {
        id        
      }
    });
}

