import styled from "styled-components"
import Footer from '../components/Footer'

export default function Landing() {
    return (
        <Wrapper>
            <div>
                
            </div>
            <Footer/>
        </Wrapper>
    );
}

export const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    margin-top:70px;
    width:100%;
    height: 1500px;
    div{
        background-image: url(https://fotos-estradao.estadao.com.br/wp-content/uploads/2020/11/26095225/Novo-DAF-XF-Brasil-Externa-1-1160x773.jpg);
        width:100%;
        height: calc(100vh - 70px);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @media(max-width: 800px) {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    img{
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
`;