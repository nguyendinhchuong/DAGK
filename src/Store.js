import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import rootReducer from './rootReducers'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import { config as fbConfig, reduxFirebase as rrfConfig } from './firebaseConfig'



export default (initialState = {}) => {
  // ======================================================
  // Window Vars Config
  // ======================================================

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    thunk.withExtraArgument(getFirebase)
    // This is where you add other middleware like redux-observable
  ]

  firebase.initializeApp(fbConfig)

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      reactReduxFirebase(firebase, rrfConfig),
    )
  )
  store.asyncReducers = {}

  return store
}