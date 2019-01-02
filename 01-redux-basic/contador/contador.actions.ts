import { Action } from '../ngrx-fake/ngrx'

export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

export const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

export const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    palyload: 2
}

export const dividirAction: Action = {
    type: 'DIVIDIR',
    palyload: 2
}