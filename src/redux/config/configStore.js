// “중앙 state 관리소" 인 Store를 만드는 설정 코드들이 있는 파일 입니다.

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// const rootReducer = combineReducers({
//     todos,
// });
// const store = createStore(rootReducer);

//TO_BE 기존에는 두개의 api를 사용했지만, 이제는 하나의 api(configureStore)만 사용해도 된다.
const store = configureStore({
    reducer:{
        todos,
    }
})

export default store;