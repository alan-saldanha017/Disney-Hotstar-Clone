import {createSlice} from '@reduxjs/toolkit';

const initialState = {   //step one create a state // here we make a movie array
    movies: []
}
const movieSlice = createSlice({   //step 2 create a slice
    name:"movie",  //name of slice
    initialState,  // initial state
    reducers: {   //reducer
        setMovies: (state,action) =>{   //reducer takes action and changes state so we need both params  //(curentstate,action)
           console.log('Action :'+action);
            state.movies = action.payload;   // payload is movies details coming from db
        }
    }
})

export const {setMovies}= movieSlice.actions;  //export action to recieve action from home.js

export const selectMovies = (state)=> state.movie.movies;  //export movie state  //slice.statename  // return state to movie.js

export default movieSlice.reducer; //export reducer
// redux -> 1)Actions (Add a Movie,Remove Movie,Login and Logout) 2)Reducers (Changes the state based on action) 3) State