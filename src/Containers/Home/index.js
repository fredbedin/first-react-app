import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import {
  Container,
  H1,
  Input,
  InputLabel,
  Button,
  ContainerItens,
  Image,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users/", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/users")
  }

  return (
    <Container>
      <Image alt="people-img" src={People} />
      <ContainerItens>
        <H1> Hello! </H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          Sign Up <img alt="point-right-arrow" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
