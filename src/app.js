
function counter (state, action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}
console.log('current: 0');
console.log("trgger: INCREASE");
console.log(counter(0, {
    type:'INCREASE'
}));



console.log('current: 2');
console.log("trgger: DECREASE");
console.log(counter(2, {
    type:'DECREASE'
}));
