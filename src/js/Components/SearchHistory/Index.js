import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        history: store.cityReducers.history
    };
}
export default connect(mapStoreToProps)(SearchHistory);