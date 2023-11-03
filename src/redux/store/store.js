import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default configureStore({
  // untuk penamaan rootReducer bebas asalakan path benar
  reducer: rootReducer,
  middleware : (getMiddleware) => getMiddleware().concat(thunk)
})