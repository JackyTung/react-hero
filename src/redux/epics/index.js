import { combineEpics } from 'redux-observable';

import * as hero from '@/features/hero';
import { getEpicsFromSlices } from '@/utils/redux.js';

export default combineEpics(...getEpicsFromSlices([hero]));
