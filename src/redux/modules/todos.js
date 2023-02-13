// action value
const CREATE = "CREATE";
const DELETE = "DELETE";

// action creator
export const create = (id, title, body) => {
    return {
        type: CREATE,
        payload: {
            id,
            title,
            body,
            isDone: false,
        },
    };
};

// 초기 상태값(state)
const initialState = [
    {
        id: 1,
        title: "리액트 강의보기",
        body: "챕터 1부터 챕터 12까지 학습",
        isDone: false,
    },
    {
        id: 2,
        title: "점심 먹기",
        body: "점심 뭐먹지..?",
        isDone: false,
    },
];

// 리듀서    : 'state에 변화를 일으키는' 함수
// input   : state와 action
const todos = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            const newTodo = [...state, action.payload];
            return newTodo;
        default:
            return state;
    }
};

export default todos;
