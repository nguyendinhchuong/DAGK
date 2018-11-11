export const config = {
    apiKey: "AIzaSyDgqNMUNf57BGwoI-dXXoJMA_hgX6Pk8tU",
    authDomain: "dagk-1512044.firebaseapp.com",
    databaseURL: "https://dagk-1512044.firebaseio.com",
    projectId: "dagk-1512044",
    storageBucket: "dagk-1512044.appspot.com",
    messagingSenderId: "929784223686"
};

// react-redux-firebase options
export const reduxFirebase = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
}

export default { config, reduxFirebase }