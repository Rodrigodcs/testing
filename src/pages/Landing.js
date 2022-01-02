import styled from "styled-components"
import Footer from '../components/Footer'
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

export default function Landing() {
    const style = {
        width: "30px",
        height: "30px",
        color: "#483D41"
    }
    return (
        <Wrapper>
            <div className="image">
                <div className="half">
                    <div className="title">
                        <p>
                            Agilidade e rapidez com segurança
                        </p>
                    </div>
                    <div className="floatings">
                        <div className="floating1 floating">
                            <div className="inside-text">
                                <p className="title">Consultar</p>
                                <p>
                                    Agilidade e rapidez com segurançasad asdasd asdas asd asd asd as  sdaasdasdasd asdasdasd sad asdsadasdas dsaa
                                </p>
                            </div>
                            <BsFillArrowUpRightSquareFill style={style}/>
                            
                        
                        </div>
                        <div className="floating2 floating">
                            <div className="inside-text">
                                <p className="title">Consultar</p>
                                <p>
                                    Agilidade e rapidez com segurançasad asdasd asdas asd asd asd as asdsadasdas dsaa
                                </p>
                            </div>
                            <BsFillArrowUpRightSquareFill style={style}/>
                        </div>
                    </div>
                    
                </div>
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
        background-image: url(https://wallpapercave.com/wp/wp2154322.jpg);
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
        .title p{
            font-size:50px;
            color: #483D41;
        }
        .half{
            display:flex;
            gap:50px;
            flex-direction:column;
            justify-content:end;
            padding:20px;
            padding-bottom: 120px;
            width: 60%;
            height: 100%;
            .floatings{
                display:flex;
                gap:5%;
                width: 100%;
                height: 150px;
                .floating{
                    .inside-text{
                        color:#483D41;
                        width:100%;
                        .title{
                            width: 90%;
                            font-size: 22px;
                            margin-bottom: 5px;
                        }
                        p{
                            width: 90%;
                        }
                    }
                    cursor:pointer;
                    display:flex;
                    padding:15px;
                    padding-right:25px;
                    height: 150px;
                    background: #F7F8FC;
                    box-shadow: 0 0 8px #8D8D8D;
                    border-radius: 10px;
                    transition: 0.4s;
                    :hover{
                        padding-left: 25px;
                        padding-right: 15px;
                    }
                }
                .floating1{
                    width: 55%;
                }
                .floating2{
                    width: 40%;
                }
            }
            .title{
                width: 100%;
                p{
                    width: 70%;
                }
            }
        }
        
    }
`;