import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/Userslices";
import {AiFillDelete} from "react-icons/ai"

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.Users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  //   console.log(data);
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete icon" onClick={() => deleteUser(id)}>
              <AiFillDelete/>
            </button>

            <hr />
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  li {
    font-size: 24px;
    line-height: 36px;
    color: green;
    text-align: left;
    text-overflow: clip;
    text-transform: capitalize;
    cursor: pointer;
  }

  /* li:hover {
    color: #fb4b4b8d;
    font-size: 30px;
    background: #eeececa4;
    transition: all 0.5s ease-in-out;
  } */
  button {
    width: 20%;
  }
  .btn-delete {
    background: transparent;
    color: #fc0303;
    padding: 8px;
    border-radius: 5px;
    margin: 1rem;
    border: none;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    
  }
  /* .btn-delete:hover {
    background: #c8c8c893;
    color: black;
    transition: all 0.5s ease-in;
    font-size: 24px;
    padding: 12px;
    width: 25%;
  } */
`;

export default DisplayUsers;
