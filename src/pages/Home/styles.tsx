import styled from 'styled-components';

export const Title = styled.div`
 font-size: 36px;
 font-family: Montserrat,sans-serif;
 margin-top: 10%;
 margin-left: 200px;
`;

export const Button = styled.div`
 border-radius: 20px;
 color: #F8F9FA;
 background-color: #565656;
 font-size: 24px;
 width: 228px;
 height: 50px;
 justify-content: center;
 align-items: center;
 display: flex;
 margin-left: 35%;
 float: right;
 margin-top: -90px;
 height: 70px; 
 cursor: pointer;     

 :hover{
     background-color: #a2a2a2;
 }
}`;

export const Imagem = styled.div`
 margin-left: 10%;
 margin-top: 200px;
}`;

export const Lista = styled.div`
 border-radius: 20px;
 width: 800px;
 height: 450px;
 margin-top: 150px;
 margin-left: 150px;
 background-color: #969696;
`;

export const Container = styled.div`
 display: flex;
}`;

export const Left = styled.div`
 float: left;
}`;

export const Right = styled.div`
 float: right;
}`;

export const HeaderSection = styled.header`
    width: 400px;
    height: 130px;
    background: rgba(255,255,255, .2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (max-width: 430px) {
        width: 300px;
    } 
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #E5E5E5;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`;

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: none;
        background: #FF7A00;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        transition: ease .3s;

        &:hover {
            transform: scale(1.05);
            transition: ease .3s;
            cursor: pointer;
        }
    }
`;

export const HeaderInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;

    &:focus {
        outline: none;
        width: 220px;
        transition: .4s ease;
    }
`;

export const ReturnRepositorio = styled.button`
    margin-left: 10%;
    z-index: 10;
    font-size: 70px;
`;

export const HeaderSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #FF7A00;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`;

export const Subtitle = styled.div`
  font-size: 16px;
  text-align: center;
  color: #F8F9FA;
  margin: 0;
  font-weight: 100px;
`;

export const NumberContainer = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: inline-block;
    margin-top: 80px;
    margin-left: 10px;
    
    h1 {
        font-size: 20px;
        text-align: center;
        color: #F8F9FA;
        margin: 0;
        font-weight: 500px;
    }

    h2 {
        font-size: 16px;
        text-align: center;
        color: #F8F9FA;
        margin: 0;
        font-weight: 100px;
    }

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.03);
        transition: .4s ease;
        border-radius: 10px;
    }
`;