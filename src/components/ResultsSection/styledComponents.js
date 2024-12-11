import styled from 'styled-components'

export const ResultsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`
export const RandomItemsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
     @media all and (max-width:767px){
        width:350px;
     }
    @media all and (min-width:768px){
        width:500px;
    }
`
export const RandomItemContainer = styled(ResultsContainer)`
    justify-content:center;
`
export const GameOwner = styled.p`
    color:#ffffff;
    
      @media all and (max-width:767px){
        font-size:25px;
        font-weight:bold;
     }
    @media all and (min-width:768px){
        font-size:25px;
        font-weight:bold;
    }
`
export const ResultImg = styled.img`
     @media all and (max-width:767px){
       height:100px;
       width:100px;
     }
    @media all and (min-width:768px){
         height:200px;
       width:200px;
    }
`
export const GameResult = styled.p`
    color:#ffffff;
    
`
export const PlayAgainBtn = styled.button`
    height:50px;
    width:130px;
    border-radius:5px;
    color: #223a5f;
    font-family:Bree Serif;
    background-color:#ffffff;
    border-width:0px;
    font-weight:bold;
    cursor:pointer;
`
