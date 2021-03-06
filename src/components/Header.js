import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import logo from "../assets/LOGOhd.png"


export default function Header() {
    const [page, setPage] = useState([0,0,0,0,0])
    const navigate = useNavigate()

    function relocate(location){
        if(location === "/") setPage([1,0,0,0,0,0])
        if(location === "/sobre") setPage([0,1,0,0,0,0])
        if(location === "/coletas") setPage([0,0,1,0,0,0])
        if(location === "/documentos") setPage([0,0,0,1,0,0])
        if(location === "/contato") setPage([0,0,0,0,1,0])
        if(location === "/rastrear") setPage([0,0,0,0,0,1])
        navigate(location)
    }
    console.log(page)
    return (
      <Wrapper>
            <Logo>
                <img onClick={() => relocate(`/`)} src={logo} alt="logo"></img>
            </Logo>
            <Menu>
                <MenuOptions>
                    <Option selected={page[0]} onClick={() => relocate(`/`)}>
                        Início
                    </Option>
                    <Option selected={page[1]} onClick={() => relocate(`/sobre`)}>
                        Quem Somos
                    </Option>
                    <Option selected={page[2]} onClick={() => relocate(`/coletas`)}>
                        Coletas
                    </Option>
                    <Option selected={page[3]} onClick={() => relocate(`/documentos`)}>
                        Documentos
                    </Option>
                    <Option selected={page[4]} onClick={() => relocate(`/contato`)}>
                        Contato
                    </Option>
                </MenuOptions>
                <Button onClick={() => relocate(`/rastrear`)} className="button" variant="contained">
                    Rastrear
                </Button>
            </Menu>
      </Wrapper>
    );
}

export const Wrapper = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position: fixed;
    z-index:100;
    top: 0;
    left:0;
    width:100%;
    height: 70px;
    padding:0 20px;
    box-shadow: 0 0 8px #8D8D8D;
    background: #F7F8FC;
    .button{
        background-color:#B63232;
        color:white;
        box-shadow: none;
        margin-right: -20px;
        border-radius: 0;
        height: 100%;
        width: 120px;
        font-size: 15px;
        transition: 0.3s;
    }
    .button:hover{
        background-color:#A41003;
        color:white;
        box-shadow: none;
        border-radius: 0;
    }
`;

export const Logo = styled.h1`
    color: white;
    font-size: 50px;
    img{
        
        margin-left: -20px;
        width:250px;
        height:100px;
        margin-top: 15px;
        cursor: pointer;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 100%;
    gap: 30px;
`;

export const MenuOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`;

export const Option = styled.p`
    color: ${({selected}) => selected ? `Black` : `#8D8D8D`};
    font-size: 15px;
    cursor: pointer;
    :hover{
        color: black;
    }
`;
