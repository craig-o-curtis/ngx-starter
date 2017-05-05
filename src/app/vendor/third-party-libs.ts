import * as $ from 'jquery';
import 'hammerjs';
// lodash and moment libs are not globals, as jq is
  // must import _ or moment into components
import * as LO from 'lodash';
import * as Moment from 'moment';

export const _ = LO;
export const moment = Moment;
