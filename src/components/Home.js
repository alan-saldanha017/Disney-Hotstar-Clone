import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImageSlider from './Slider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import {setMovies} from "../features/movie/movieSlice";
import {useDispatch} from 'react-redux';  //dispatch action
function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
        let TempMovies = snapshot.docs.map((doc)=> {
            return { id: doc.id, ...doc.data()}  //give id as doc id and return everything else ... spread operator (unpack)
        })   
        dispatch(setMovies(TempMovies));
    })
    }, [])
    return (
       <Container>
           <ImageSlider/>
           <Viewers/>
           <Movies/>
       </Container>
    )
}

export default Home

const Container = styled.main`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px); //left and right padding
position:relative;
overflow-x: hidden;
&:before{
    background:url("/images/home-background.png") center center / cover no-repeat fixed; 
    content: "";
    position: absolute;
    top:0; // streching
    bottom:0; // streching
    left:0; // streching
    right:0;  // streching
    z-index: -1;  // to put in background
}
`
