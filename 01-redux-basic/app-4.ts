import { Store, createStore } from 'redux'
import { reducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

const store:Store = createStore( reducer )


store.subscribe( () => {
    console.log("Subs:", store.getState() )
});

store.dispatch( incrementadorAction )
