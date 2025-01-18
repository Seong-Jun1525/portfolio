import { combineReducers } from "redux";
import { sideContentReducer } from "./sideContentReducer";

// 모든 리듀서 결합
const rootReducer = combineReducers({
    sideContent: sideContentReducer,
});

export default rootReducer;