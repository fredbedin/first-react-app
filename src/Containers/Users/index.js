import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import { Container, H1, Button, ContainerItens, Image, User } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid}`);
    const newUsers = users.filter((user) => user.id !== userid);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="people-img" src={Avatar} />
      <ContainerItens>
        <H1> Users! </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="trash-icon" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt="point-right-arrow" src={Arrow} /> Return
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
