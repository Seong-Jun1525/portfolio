import { SIDE_CONTENT_FIRST_PROJECT } from "../actions/actions"

const initialState = {
    sideContentState: false,
    sideContentName: ""
}

export function sideContentReducer(state = initialState, action) {
    switch(action.type) {
        case SIDE_CONTENT_FIRST_PROJECT:
            return {
                ...state,
                sideContentState: !state.sideContentState,
                sideContentName: "유한대학교홍보웹"
            };
        default:
            return state;
    }
}