const store = require('./app/store');
const cakeActions = require('./features/cake/cake-slice').cakeActions

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
});


store.dispatch(cakeActions.ordered(3));
store.dispatch(cakeActions.restocked(3));

unsubscribe();

