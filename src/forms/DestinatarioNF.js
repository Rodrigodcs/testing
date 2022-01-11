import styled from "styled-components"
import Button from '@mui/material/Button';
import {useState} from "react"

export default function DestinatarioNF() {
    const [nf,setNf] = useState("")
    const [cnpj,setCnpj] = useState("")

    function clear(){
        setCnpj("")
        setNf("")
    }

    return (
        <Wrapper>
            <Title>Buscar por destinatário</Title>
            <form name="form1" action="https://ssw.inf.br/2/ssw_resultSSW_dest_nro" method="POST">
                <Field>
                    <p>
                        Notas Fiscais:
                    </p>
                    <Text name="NR" onChange={(e) => setNf(e.target.value)} value={nf}>
                    
                    </Text>
                </Field>
                <Field>
                    <p>
                        CNPJ do destinatario:
                    </p>
                    <Input name="cnpjdest" onChange={(e) => setCnpj(e.target.value)} value={cnpj}>
                    
                    </Input>
                </Field>
                <Field className="last">
                    <Button onClick={() => clear()} className="button clean" variant="contained">
                        Limpar
                    </Button>
                    <a href="javascript:Vai1()">
                        <Button onClick={() => console.log("test")} className="button go" variant="contained">
                            Buscar
                        </Button>
                    </a>
                    
                </Field>
            </form>
      </Wrapper>
    );
}

export const Wrapper = styled.section`
    margin-left:20px;
    padding: 20px;
    padding-top: 50px;
    width:100%;
    height:300px;
    display:flex;
    flex-direction:column;
    gap:20px;
    form{
        background: none;
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-left: 10px;
        max-width: 500px;
        .last{
            margin-top:15px;
            display:flex;
            width:100%;
            justify-content: end;
            gap: 10px;
        }
    }
`;

export const Title = styled.p`
    color: #B63232;
    font-family: Oswald;
    font-size:30px;
`;

export const Field = styled.div`
    color: black;
    p{
        font-size: 18px;
        font-family: Oswald;
    }
    .clean{
        background: black;
        :hover{
            background-color:grey;
        }
    }
    .go{
        background: green;
        :hover{
            background-color:lightgreen;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    background: #FFFFFF;
    border-radius: 6px;
    border:none;
    outline-color:black;
    padding-left: 10px;
    font-family: Oswald;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    color: black;
    ::placeholder{
        color: #9F9F9F;
    }
    /* @media (max-width: 1000px) {
        width: 330px;
    } */
`;

export const Text = styled.textarea`
    width: 100%;
    background: #FFFFFF;
    border-radius: 6px;
    border:none;
    outline-color:black;
    padding-left: 10px;
    font-family: Oswald;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    color: black;
    ::placeholder{
        color: #9F9F9F;
    }
    /* @media (max-width: 1000px) {
        width: 330px;
    } */
`;


