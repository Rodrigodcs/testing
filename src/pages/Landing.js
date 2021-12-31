import styled from "styled-components"

export default function Landing() {
    return (
        <Wrapper>
            <img src={"https://ak.picdn.net/shutterstock/videos/3633878/thumb/1.jpg"} alt={"caminhão"}/>
        </Wrapper>
    );
}

export const Wrapper = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:80px;
    width:100%;
    img{
        width:100%;
        height: calc{100vh - 80px};
    }
`;