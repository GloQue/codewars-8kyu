// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    //#Happy Coding! ^_^
    let hours = 60000 * 60 * h
    let min = 60000 * m
    let sec = 1000 * s
    return hours + min + sec
}  