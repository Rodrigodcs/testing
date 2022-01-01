import styled from "styled-components"
//import { useNavigate } from "react-router-dom";

export default function Footer() {
    
    return (
        <><Wrapper>
            <Begin>
                <Logo>
                    <img src='https://i.ibb.co/h2SH8Mm/logop.png' alt="logo"></img>
                    <div class="hide"></div>
                </Logo>
            </Begin>
            <Container>
                <div className="first">
                    <p className="title">Sobre a TransMas</p>
                    <p className="content">A Transmas Encomendas e Transportes presta serviços de transporte rodoviário de cargas com ênfase na prestação de transporte de carga fechada com excelência e pontualidade nas entregas e coletas.</p>
                </div>
                <div>
                    <p className="title">Mapa do Site</p>
                    <p className="content">Início</p>
                    <p className="content">Quem Somos</p>
                    <p className="content">Coletas</p>
                    <p className="content">Documentos</p>
                    <p className="content">Contado</p>
                    <p className="content">Rastreio</p>
                </div>
                <div>
                    <p className="title">Siga a TransMas</p>
                    <p className="content">Facebook</p>
                    <p className="content">Instagram</p>
                    <p className="content">Linkedin</p>
                </div>
            </Container>
               
        </Wrapper>
        <Base>
            @ 2004-2022 • TransMas
        </Base>
        </>
    );
}

export const Wrapper = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    width:100%;
    padding: 20px 200px 5px 200px;
    background: #F7F8FC;
`;
export const Begin = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height: 50px;
    border-bottom: solid 1px #407B4B;
    background: #F7F8FC;
    position:relative;
    .hide{
        position:absolute;
        margin-top: -24px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        width: 200px;
        height: 8px;
        background: #F7F8FC;
    }
`;
export const Logo = styled.div`
    margin-top: 10px;
    background: #F7F8FC;
    img{
        width:150px;
        height:60px;
        margin-top: 30px;
    }
`;
export const Container = styled.div`
    display: flex;
    width:100%;
    height: 250px;
    background: #F7F8FC;
    div{
        height: 100%;
        width:27%;
        padding:25px 0;
        padding-right: 25px;
        background: #F7F8FC;
        .title{
            font-size:18px;
            margin-bottom: 15px;
        }
        .content{
            font-size:13px;
            margin-bottom: 5px;
            //text-align: justify;
        }
        
    }
    .first{
            width:46%;
            padding-right:50px;
        }
`;
export const Base = styled.div`
    width:100%;
    height: 30px;
    background: black;
    text-align:center;
    vertical-align: middle;
    line-height: 30px;
    color: white;
    font-size: 13px;
`;