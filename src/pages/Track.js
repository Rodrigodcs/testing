import styled from "styled-components"
import Footer from '../components/Footer'
import {useState} from "react"
import Button from '@mui/material/Button';
import DestinatarioNF from "../forms/DestinatarioNF";
const url = "http://localhost:3005"

export default function Track() {
    // const [cnpj,setCnpj] = useState("")
    // const [password,setPassword] = useState("")
    const [option, setOption] = useState(<DestinatarioNF/>)

    console.log(option)
    return (
        <Wrapper>
            <Info>
                <div className="middle">
                    <div className="options-selector">
                        <Button onClick={() => setOption(<DestinatarioNF/>)} className="button" variant="contained">
                            Rastreamennto online
                        </Button>
                        <Button onClick={() => setOption(1)} className="button" variant="contained">
                            Remetente com senha
                        </Button>
                        <Button onClick={() => setOption(2)} className="button" variant="contained">
                            Destinatário com NF
                        </Button>
                        <Button onClick={() => setOption(3)} className="button" variant="contained">
                            Destinatário com senha
                        </Button>
                        <Button onClick={() => setOption(4)} className="button" variant="contained">
                            Pagador com NF
                        </Button>
                        <Button onClick={() => setOption(5)} className="button" variant="contained">
                            Pagador com senha
                        </Button>
                    </div>
                    {option}
                    {/* {option===1?
                        <DestinatarioNF/>:
                        <form name="form2" action="https://ssw.inf.br/2/ssw_resultSSW_rem" method="POST">
                        <table width="100%" border-radius="0" cellpadding="2" cellspacing="2">
                            <tr>
                                <td width="200">CNPJ do Remetente:</td>
                                <td width="1136">
                                    <input type="text" maxlength="14" name="cnpj" value={cnpj} onChange={(e)=>setCnpj(e.target.value)}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Senha:</td>
                                <td>
                                    <input type="password" maxlength="8" name="senha" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                </td>
                            </tr>
                            <tr> 
                                <td></td>
                                <td> 
                                    <a href="javascript:Vai2()"><img src="http://jjsul.com.br/ssw-jjsul/enviar.gif" alt="ass" border-radius="0"></img></a>
                                    <a href="javascript:Limpar2()"><img src="http://jjsul.com.br/ssw-jjsul/limpar.gif" alt="ass" border-radius="0"></img></a>
                                </td>
                            </tr>
                        </table>
                        <input type="hidden" name="urlori" value={`${url}/sobre`}></input>
                    </form>
                        } */}
                    
                </div>
                
            </Info>
            <Footer/>
        </Wrapper>
    );
}

export const Wrapper = styled.section`

    display:flex;
    flex-direction: column;
    align-items:center;
    width:100%;
`;

const Info = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:60px;
    width:100%;
    height: calc(100vh - 60px);
    background-image: url(https://wallpapercave.com/wp/wp2476281.jpg);  
        
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
    .middle{
        max-width:800px;
        border-radius:15px;
        background: lightgrey;
        display:flex;
        padding-right:80px;

        .options-selector{
            border-top-left-radius:15px;
            border-bottom-left-radius:15px;

            padding: 30px 10px;
            width: 400px;
            background: grey;
            display:flex;
            flex-direction:column;
            align-items: center;
            gap: 40px;
            .button{
                background-color:#B63232;
                color:white;
                box-shadow: none;
                border-radius: 5px;
                width: 100%;
                font-size: 15px;
                transition: 0.3s;
                font-family: Oswald;
            }
            .button:hover{
                background-color:#A41003;
                color:white;
                box-shadow: none;
                border-radius: 0;
            }
        }
    }
    
`;