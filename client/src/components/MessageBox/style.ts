import styled from 'styled-components';

export const Container = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    

    strong {
        
        margin-left: 1rem;
    }
    
    span {

        margin-left: 0.5rem;
    }
    strong, span{
        font-size: 1rem;
        color: #969CB3;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    ul {
        list-style: none;
        
    }


    li {

        padding: 0.5rem 0.5rem 0.5rem;
        margin-bottom: 1rem;
        background-color: #FFF;
        border-radius: 24px;

        display: flex;
        align-items: center;

    }
`
