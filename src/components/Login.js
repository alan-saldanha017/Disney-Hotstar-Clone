import React from 'react';
import styled from 'styled-components';
function Login() {
    return (
        <div>
            <Container>
                <CTA>
                    <CTALogoOne src="https://lumiere-a.akamaihd.net/v1/images/b_disneyplus_header_mobile_18281_cf9000ab.png" />
                    <SignUp>
                        SIGN UP NOW
                    </SignUp>
                    <Discription>
                    Disney+ Hotstar is available on the Google Play Store and Apple App Store for mobile and tablet applications and can be accessed at <a href="/login" style={{color:'#0063ef'}}>www.hotstar.com</a>.
                    </Discription>
                </CTA>
            </Container>
        </div>
    )
}

export default Login
const Container = styled.div`
position:relative;
height:calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;

&:before {
background-position:top;
background-size:cover;
background-repeat: no-repeat;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
content:"";
background-image:url("/images/login-background.jpg");
z-index:-1;
opacity:0.7;
}
`
const CTA = styled.div`
width:90%;
max-width: 650px;
padding: 80px 40px;
display: flex;
flex-direction: column; // make top to bottom
align-items:center; // because we did flex direction column align items become horizontal and jutify content becomes vertical
`
const CTALogoOne = styled.img`

`
const SignUp= styled.a`
padding:17px 0;
text-align:center;
color:#f9f9f9;
cursor: pointer;
width:100%;
background: #0063ef;
border-radius: 4px;
transition: all 250ms;
letter-spacing: 1.5px;

&:hover {
    background: #0483ee;
}
`
const Discription= styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`