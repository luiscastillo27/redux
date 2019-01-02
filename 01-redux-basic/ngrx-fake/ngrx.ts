

export interface Action{
    type:String,
    palyload?:any
}

export interface Reducer<T> {
    ( state:T, action:Action ):T
}