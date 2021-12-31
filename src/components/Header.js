import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Header() {
    const [page, setPage] = useState([0,0,0])
    const navigate = useNavigate()

    function relocate(location){
        if(location === "/") setPage([1,0,0])
        if(location === "/about") setPage([0,1,0])
        if(location === "/contact") setPage([0,0,1])
        navigate(location)
    }
    console.log(page)
    return (
      <Wrapper>
            <Logo>
                TransMas
            </Logo>
            <Menu>
                <MenuOptions>
                    <Option selected={page[0]} onClick={() => relocate(`/`)}>
                        Inicio
                    </Option>
                    <Option selected={page[1]} onClick={() => relocate(`/about`)}>
                        Quem Somos
                    </Option>
                    <Option selected={page[2]} onClick={() => relocate(`/contact`)}>
                        Contato
                    </Option>
                </MenuOptions>
                <Button className="button" variant="contained">
                    Consultar
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
    top: 0;
    left:0;
    width:100%;
    height: 80px;
    padding:0 20px;
    background-color: #7A2E25;
    box-shadow: 0 0 15px black;
    .button{
        background-color:#337EDD ;
        color:white;
        box-shadow: none;
        margin-right: -20px;
        border-radius: 0;
        height: 100%;
        width: 150px;
        font-size: 20px;
    }
    .button:hover{
        color:white;
        box-shadow: none;
        border-radius: 0;
    }
`;

export const Logo = styled.h1`
    color: white;
    font-size: 50px;
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
    width: 300px;
`;

export const Option = styled.p`
    color: ${({selected}) => selected ? `white` : `lightgrey`};
    font-size: 20px;
    cursor: pointer;
    :hover{
        color:white;
    }
`;
