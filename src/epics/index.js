import { Observable } from "rxjs";
import * as actionType from "../actions/actionTypes";
import {fetchSaveOutline} from "../actions";
import {connect} from "react-redux";


const autosaveEpic = action$ => {
    return action$
      .filter(action => actionType.DIRTY_ACTIONS.includes(action.type))
      .debounce(() => Observable.timer(3000))
      .mapTo(fetchSaveOutline());
};

export { autosaveEpic };
