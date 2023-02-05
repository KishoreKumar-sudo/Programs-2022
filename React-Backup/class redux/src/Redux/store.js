import { createStore } from 'redux'
import { messageReducer } from './Message/message.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
let store = createStore(messageReducer, composeWithDevTools())

export { store }

/* wt is store/store contains?
group/collection of states

how to create store? 
reducer is going to up-date/create new store basedon action type  

wt basis we need to create store?
based on reducer 
useSelector hook is used for reading the global-level store data

how to debug store?
let store = createStore (reducer, using-composeWithDevTools())

 how to pass store to React App?
 In App.js
 import {store} from 'react-redux'

 how to read store state in component?
 <Provider store = {store}> 
 (is used to read the store state in component)
 component
 </Provider>
*/