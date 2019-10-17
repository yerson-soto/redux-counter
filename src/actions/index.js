export const increment = (multiply) => {
    return {
        type: 'INCREMENT',
        payload: multiply
    }
}

export const decrement = (multiply) => {
    return {
        type: 'DECREMENT',
        payload: multiply
    }
}

