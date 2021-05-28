import React, {useEffect} from 'react';
import styled from 'styled-components'
import { selectUserName , selectUserPhoto, setUserLogin , setSignOut} from '../features/user/userSlice';
import {useSelector , useDispatch} from 'react-redux';
import {auth , provider} from "../firebase"; 
import {useHistory} from "react-router-dom"
function Header() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    useEffect(()=>{
         auth.onAuthStateChanged(async (user)=>{   //firebase checks cookies if user was logged in
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    photo: user.photoURL,
                    email: user.email
                }));
                history.push("/");
            }
        })
     },[])

    const signIn = () =>{
            auth.signInWithPopup(provider)
                .then((result)=>{
                    let user = result.user;
                    dispatch(setUserLogin({
                        name:user.displayName,
                        photo: user.photoURL,
                        email: user.email
                    }));
                    history.push("/");
                })
    }
    const signOut =() => {
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            history.push("/");
        })
    }
    return (
            <Nav>
                  <Logo src="/images/logo.svg" />
                {
                    !userName ? (
                        <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                        </LoginContainer>
                
                    ) : 
                    <>
                <NavMenu>
                    <a href="/home"><img src="/images/home-icon.svg"/>
                    <span>Home</span>
                    </a>
                    <a> <img src="/images/search-icon.svg"/>
                    <span>Search</span>
                    </a>
                    <a> <img src="/images/watchlist-icon.svg"/>
                    <span>Watchlist</span>
                    </a>
                    <a> <img src="/images/original-icon.svg"/>
                    <span>Originals</span>
                    </a>
                    <a> <img src="/images/movie-icon.svg"/>
                    <span>Movies</span>
                    </a>
                    <a> <img src="/images/series-icon.svg"/>
                    <span>Series</span>
                    </a>
                </NavMenu>
                <UserImg src={userPhoto} onClick={signOut}/>
                    </>
                    
                }
               
            </Nav>
    )
}

export default Header

const Nav = styled.nav`
height: 70px;
background: #090b13;
display:flex; // easily structure code
align-items:center;
padding: 0 36px;
overflow-x: hidden;
`
const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`

const Login = styled.div`
border: 1px solid #f9f9f9;
border-radius: 4px;
padding: 8px 16px;
letter-spacing:1.5px;
text-transform: uppercase;
background: rgba(0,0,0,0.6);
transition: all 0.2s ease 0s;
cursor: pointer;

&:hover {
    background:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`

const Logo = styled.img`
width:80px;
`
const NavMenu = styled.div`
display:flex; // easily structure code
flex:1; // priority 1
margin-left:25px;
align-items:center;
a {  // in styled components we can target components like a tree
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor:pointer;
    text-decoration:inherit ;
    color:inherit;


img {
height: 20px;
}
span {
    font-size:13px;
    letter-spacing: 1.42px;
    position: relative; // so that child can link on to
    &:after {
       content:"";
       height: 2px;
       background:white; 
       position:absolute;
       left:0;
       right:0;
       bottom:-6px; // push down 6 pixels
       opacity:0;
       transform-origin: left center;  // start transformation from left to center;
       transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; // transform all attributes at 250ms
       transformm:scaleX(0); // make x axis 0
    }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}
}
`
const UserImg = styled.img`
width:48px;
height:48px;
border-radius: 50%;
cursor:pointer;
`
