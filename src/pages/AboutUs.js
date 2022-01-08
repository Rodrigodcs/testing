import styled from "styled-components"
import { useState } from "react"

const url = "http://localhost:3005"

export default function AboutUs() {
    const [cnpj,setCnpj] = useState("")
    const [password,setPassword] = useState("")
    return (
      <Wrapper>
          
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
      </Wrapper>
    );
}

export const Wrapper = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:80px;
    width:100%;
    height:600px;
`;