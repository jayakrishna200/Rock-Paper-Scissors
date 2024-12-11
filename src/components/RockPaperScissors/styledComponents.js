import styled from 'styled-components'

export const MainContainer = styled.div`
    height:100vh;
    background-color:#223a5f;
    @media all and (max-width:767px){}
    @media all and (min-width:768px){
        padding:40px;
    }
`
export const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border:5px solid  #ffffff;
    border-radius:10px;
`
export const ItemsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    margin-left:20px;
    padding:10px;
`
export const ItemType = styled.h1`
    font-family:"Bree Serif";
    color:#ffffff;
    padding-bottom:0px;
    margin-bottom:0px;
    margin-top:0px;
    padding-top:0px;
    @media all and (max-width:767px){}
    @media all and (min-width:768px){
        font-size:25px;
    }

`
export const ScoreContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    margin-right:10px;
    border-radius:10px;
    height:100px;
    width:120px;
    
`
export const Score = styled.p`
    color:#223a5f;
    font-size:25px;
    margin-bottom:0px;
    padding-bottom:0px;
    
`
export const TotalScore = styled.p`
    margin-top:0px;
    padding-top:0px;
    font-size:35px;
    font-family:Roboto;
`
