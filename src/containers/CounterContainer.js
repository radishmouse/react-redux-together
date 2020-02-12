import {
    connect
} from 'react-redux';

import Counter from '../components/Counter';
import { actionIncrement, actionDecrement, actionReset } from '../actions';

// Describe how to translate redux state
// into react props
// function mapStateToProps(state) {
//     console.table(state);
//     return {
//         count: state
//     }
// }

// Describe how to transate redux dispatch
// into react props.
function mapDispatchToProps(dispatch) {
    return {
        handleIncrement: (id) => {
            dispatch(actionIncrement(id))
        },
        handleDecrement: (id) => {
            dispatch(actionDecrement(id))
        },
        handleReset: (id) => {
            dispatch(actionReset(id))
        }
    };
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(Counter);

// Popular with some tutorials:
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
