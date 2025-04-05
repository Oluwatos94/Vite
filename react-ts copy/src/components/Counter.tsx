import { ReactNode, useReducer} from 'react'

const initialState = {count: 0};

const enum REDUCER_ACTIONS_TYPE {
    INCREMENT = 'increment',
    DECREMENT = 'decrement'
}

type ReducerActions = {
    type: REDUCER_ACTIONS_TYPE
}

const reducer = (state: typeof initialState, action: ReducerActions): typeof initialState => {
    switch (action.type) {
        case REDUCER_ACTIONS_TYPE.INCREMENT:
            return {...state, count: state.count + 1}
        case REDUCER_ACTIONS_TYPE.DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

type ChildrenType = {
    children: (num: number) => ReactNode
}

const Counter = ({children}: ChildrenType) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {dispatch({type: REDUCER_ACTIONS_TYPE.INCREMENT})}
    const decrement = () => {dispatch({type: REDUCER_ACTIONS_TYPE.DECREMENT})}

    return (
        <>
            <h1>{ children (state.count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default Counter