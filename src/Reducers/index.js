export default (state = 0, action) => {
    switch (action.type) {
        case 'MARCAR-GOL':
           console.log(`GOOOOOOOOOL!`)
            return state + 1
        default:
            return state
    }
}