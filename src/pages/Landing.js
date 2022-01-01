import styled from "styled-components"
import Footer from '../components/Footer'

export default function Landing() {
    return (
        <Wrapper>
            <div className="image">
                
            </div>
            <Footer/>
        </Wrapper>
    );
}

export const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    margin-top:60px;
    width:100%;
    .image{
        background-image: url(https://c4.wallpaperflare.com/wallpaper/214/252/849/scania-truck-vehicle-wallpaper-preview.jpg);
        width:100%;
        height: calc(100vh - 60px);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @media(max-width: 800px) {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
`;