import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #002 0%, #003 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const ContainerList = styled.div`
    background-color: 	#008B8B;
    padding: 30px 20px;
    border-radius: 5px;
    

    ul{
        padding:0;
        margin-top: 60px;
    }
    @media (max-width: 750px) {
    width: 80%;
    
    }
`;

export const Input = styled.input`
        border: 1px solid rgba(209, 211, 212, 0.6);
    border-radius: 5px;
    height: 40px;
    margin-right: 40px;
    width: 342px;
    outline: none;

    @media (max-width: 750px) {
    width: 70%;
    margin-bottom:10px;
    }
    

`;
export const Button = styled.button`
    color:#fff;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    background: #001;
    border-radius: 5px;
    height: 40px;
    border:none;
    width: 130px;
    cursor: pointer;

    &:hover{
        opacity:0.7;
    }
    &:active{
        opacity:0.4;

    }
    
`;

export const ListItem = styled.div`
    background: ${props => props.isFinished ? '#7FFF00' : '#ccc'};
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    border-radius:5px;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width:500px;

    li{
        list-style:none;
    }

    @media (max-width: 750px) {
    width: 70%;
    
    }



`;

export const ImageRocket = styled.img`
    width: 40px;
    cursor: pointer;
    
`

export const ImageTrash = styled.img`
    width: 40px;
    cursor: pointer;
    
`
export const H3 = styled.h3`
    color: #fff;
    text-align:center;

    img{
        width:35px;
    }
`;