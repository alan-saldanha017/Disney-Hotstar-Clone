import React, {useEffect , useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import db from '../firebase';
function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    useEffect(()=>{
        //grab the movies
        db.collection("movies").doc(id).get()
        .then((doc)=>{
            if(doc.exists){
                //save the movie data in state
                setMovie(doc.data());
            } else{
                //redirect to home page
            }
            }
        )
    },[])
    console.log(movie);
    return (
        <Container>
            {movie && (
                <>
            <Background>
                <img src={movie.BackgroundImage} alt={movie.Name}/>
                </Background>

            <ImageTitle>
                <img src={movie.ImageTile} alt="" />
            </ImageTitle>
           <Controls>
                <PlayButton>
                <img src="/images/play-icon-black.png" alt=""/>
                <span>Play</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" alt=""/>
                <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                <span>+</span>         
               </AddButton>
                <GroupWatchButton>
                <img src="/images/group-icon.png" alt=""/>
                </GroupWatchButton>
           </Controls>
           <Content>
           <SubTitle>
           {movie.SubTitle}          
             </SubTitle>
           <Description>
           {movie.Description}
           </Description>
           </Content>
           </>
           )
        }
        </Container>
    )
}

export default Detail
const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);  //left right padding
position:relative;
`
const Background = styled.div`
position: fixed;
top:0;
left:0;
bottom:0;
right:0;
opacity:0.8;
z-index:-1;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const ImageTitle = styled.div`  // make parent container
height:30vh;           // set height and width 
width:35vw;
min-height: 170px;   // minimums for small devices
min-width: 200px;
img {
    height:100%;    //strech
    width:100%;
    object-fit:contain; //cover here crops it so contain
}

`
const Controls = styled.div`
display:flex;
align-items: center;
`
const PlayButton = styled.button`
height:56px;
background: rgb(249,249,249);
padding: 0px 24px;
margin-right: 22px;
display:flex;
align-items:center;
border-radius:4px;
font-size:15px;
border:none;
letter-spacing: 1.8px;
cursor:pointer;

&:hover{
    background:rgb(198, 198, 198);
}
`
const TrailerButton= styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`
const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
span {
    font-size: 30px;
    color: white;
}

&:hover{   // this concatination is done to parent
    background:rgb(198, 198, 198);
    
}
`
const GroupWatchButton= styled(AddButton)`
background: rgb(0, 0, 0);
`
const Content= styled.div`
background: rgba(0,0,0,0.2);
padding:36px;
margin-top:26px;
`

const SubTitle= styled.div`
color: rgb(249,249,249);
font-size:20px;
min-height:20px;

`

const Description= styled.div`
line-height:1.4;
color: rgb(249,249,249);
font-size:15px;
margin-top:16px;

`