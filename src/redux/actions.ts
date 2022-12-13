import { dataSlice } from './reducers/data';
import * as thunks from './thunks';

export default {
	...dataSlice.actions,
	...thunks
};
