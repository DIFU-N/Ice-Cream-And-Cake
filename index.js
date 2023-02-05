const store = require('./app/store');
const cakeActions = require('./features/cake/cake-slice').cakeActions;
const iceCreamActions = require('./features/ice cream/icecream-slice').iceCreamActions;
const fetchUsers = require('./features/user/user-slice').fetchUsers;

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(iceCreamActions.ordered(15));
// store.dispatch(cakeActions.ordered(3));
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.restocked(15));

// removing unsubscribe because fetchUsers is an async action
// unsubscribe();

