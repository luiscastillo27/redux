//acciones
interface Action{
    type:String,
    palyload?:any
}

function reducer( state = 10, action:Action ){

    switch( action.type ){
        case 'INCREMENTAR':
            return state += 1
        case 'DECREMENTAR':
            return state -= 1
        case 'MULTIPLICAR':
            return state * action.palyload
        case 'DIVIDIR':
            return state * action.palyload
        default:
            return state
    }

}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    palyload: 2
}

console.log( reducer(10, multiplicadorAction) )