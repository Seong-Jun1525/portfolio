import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

// 스토어 정의
const store = createStore(rootReducer);

export default store;