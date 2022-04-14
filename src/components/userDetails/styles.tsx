import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
`

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #F8F9FA;
    margin: 0;
    font-weight: 500px;
    margin-top: 20px;
`;

export const Username = styled.div`
    width: 100%;
    font-weight: 400;
    text-align: center;
    font-size: 16px;
    color: #F8F9FA;
    margin: 0;
    padding: 5px;
`

export const Description = styled.p`
   width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #F8F9FA;
    text-shadow: black 0em 0.2em 0.4em;
    margin: 0;

    @media (max-width: 430px) {
        width: 250px;
    } 
`