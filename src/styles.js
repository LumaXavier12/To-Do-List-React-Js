import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import backgroundImage from "./assets/list.png"

export const Container = styled.div`
  background-image: url(${backgroundImage});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ToDoList = styled.div`
   background: #3c3c3c;
   padding: 30px 20px;
   border-radius: 5px;

   ul {
    padding: 0;
    margin-top: 30px;
   }
`

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  width: 350px;
  margin-right: 40px;
`

export const Button = styled.button`
   height: 40px;
   border-radius: 5px;
   background: #8052EC;
   border: none;
   color: #fff;
   font-size: 17px;
   line-height: 2px;
   width: 130px;
   cursor: pointer;

   &:hover {
      opacity: .8;
   }

   &:active{
      opacity: .6;
   }
`

export const ListItem = styled.div`
   background: ${(props) => (props.isFinished ? '#02C02B' : '#E4E4E4')};
   box-shadow: 1px 4px 10px rgb(0, 0, 0, 0.2);
   border-radius: 5px;
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 30px;
   padding: 0 10px;
   width: 500px;

   li {
    list-style: none;
   }
`

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`

export const Mensage = styled.h3`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`