import { useReducer } from "react";

// reducer : 변환기
// 상태를 변환시키는 변환기 역할
function reducer (state, action) {
    console.log(state, action);

    switch (action.type) {
        case "INCREASE" : return state + action.data;
        case "DECREASE" : return state - action.data;
    }

    // if (action.type === "INCREASE") {
    //     return state + action.data;
    // } else if (action.type === "DECREASE") {
    //     return state - action.data;
    // }
};

const Exam = () => {
    // dispatch : 발송하다, 급송하다
    // 상태변화가 있다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수 : 상태가 어떻게 변하길 원하는지
        // 액션 객체 : 인수로 전달된 요청의 내용을 담고 있는 객체, dispatch 안의 내용을 액션 객체라 함
        // 여기서는 type 속 내용, data 속 내용을 뜻함
        dispatch({
            type: "INCREASE", // INCREASE : 증가시키다
            data: 1, // 1만큼 증가
        })
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        })
    };
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
};

export default Exam;