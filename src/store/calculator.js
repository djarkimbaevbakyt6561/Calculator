
export const calculatorReducer = (state = { operator: "+", inputOne: "", inputTwo: "", result: 0 }, action) => {
    switch (action.type) {
        case "Update_Input_One":
            return {
                ...state,
                inputOne: action.payload
            }
        case "Update_Input_Two":
            return {
                ...state,
                inputTwo: action.payload
            }
        case "Update_Select":
            return {
                ...state,
                operator: action.payload
            }
        case "-":
            return {
                ...state,
                result: state.inputOne - state.inputTwo
            }
        case "x":
            return {
                ...state,
                result: state.inputOne * state.inputTwo
            }
        case "/":
            return {
                ...state,
                result: state.inputOne / state.inputTwo
            }
        default:
            return {
                ...state,
                result: state.inputOne + state.inputTwo
            }
    }
}
export function getValueInputOneAction(value) {
    return {
        type: "Update_Input_One",
        payload: value
    }
}
export function getValueInputTwoAction(value) {
    return {
        type: "Update_Input_Two",
        payload: value
    }
}
export function getSelectValueAction(value) {
    return {
        type: "Update_Select",
        payload: value
    }
}