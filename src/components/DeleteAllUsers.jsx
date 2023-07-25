import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { removeAllUser } from "../store/actions";

export const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const deleteAllUser = ()=>{
    dispatch(removeAllUser());
  }
  return <Wrapper>
    <button className="btn-delete" onClick={deleteAllUser}>Delete All User</button>
  </Wrapper>;
};


const Wrapper = styled.div`
  button {
    padding: 10px;
    margin-top: 1rem;
  }

  .btn-delete {
    background: transparent;
    background: linear-gradient(to right, #ff0000 55%, #0066cc 100%);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 1rem;
    border: none;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
  }
`;