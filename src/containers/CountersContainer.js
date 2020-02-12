import {
  connect
} from 'react-redux';

import {
  actionAddCount,
  actionDelCount
} from '../actions';

import Counters from '../components/Counters';

function mapStateToProps(state) {
  return {
    counts: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => {
      dispatch(actionAddCount());
    },
    handleDel: (i) => {
      dispatch(actionDelCount(i));
    },
  };
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Counters);
