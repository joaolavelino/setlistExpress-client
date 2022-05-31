import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  a{
    text-decoration: none;
    color: inherit;
  }

  *{
    font-family: 'Roboto', sans-serif;
  }
  body{
    width: 100%;
    min-height: 100vh;
    background: rgb(43,43,43);
    background: linear-gradient(41deg, rgba(43,43,43,1) 0%, rgba(82,82,82,1) 100%);
    color: white;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Jost', sans-serif;
  }

  h1{
    color: darkorange;
  }

  h2{
    font-weight: 300;
  }

 
 nav ul{
   display: flex;
   gap: 1rem;
   li {
      list-style: none;
    }
 }

 header{
   position: fixed;
   top:0;
   left: 0;
   height: 50px;
   width: 100%;
   background-color: rgba(0,0,0,0.3);
   backdrop-filter: blur(10px);
   box-shadow: 0 05px 10px rgba(0,0,0,0.2);
   color: white;
   padding: 0 2rem;
   z-index: 20;

   h1, svg{
     font-size: 1.5rem;
   }
 }

 main{
   padding: 60px 2rem 2rem;
 }

 form{
   display: flex;
   flex-direction: column;
   
 }
 input{
     margin-bottom: 1rem;
     font-size: 1rem;
     padding: 0.5rem 1rem;
     border: none;
     height: 39px;
   }

 button{
   border: 0;
   padding: 0.5rem 1rem;
   border-radius: 5px;
   font-size: 1rem;
   font-family: 'Jost', sans-serif;
   text-transform: uppercase;
   background-color:darkorange;
   color: white;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
    transition: 0.2s;
    cursor: pointer;

    svg {
    font-size: 1rem;
    }

    &:hover{
      background-color:orange;
    }

   &.outlined{
    border: 2px solid darkorange;
     color: darkorange;
     background-color: transparent;
     &:hover{
      background-color:orange;
      border: none;
      box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
      color: white;
     }
   }

   &.small{
     font-size: 12px;
     padding: 5px 10px;
   }

   &.gray{
     background-color: gray;
     color: white;
     &:hover{
       background-color: darkgray;
       color: white;
     }
   }

   &.full{
     width: 100%;
   }

   &.input{
     border-radius: 0 5px 5px 0;
   }
 }

`;

export default GlobalStyle;
