import { getTypeApi } from "../utils/data";
import { useEffect, useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

const url = import.meta.env.VITE_POKEMON_API || "http://localhost:8080";

export const Form = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    typeId: "",
  });
  const [type, setfirst] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    getTypeApi().then((types) => setfirst(types));
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${url}/pokeapi/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name: </FormLabel>
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nombre"
        />
        <FormLabel>Type: </FormLabel>
        <Select onChange={onChange} value={form.typeId} name="typeId">
          {type.map((e) => (
            <option key={e.idTypes} value={e.idTypes}>
              {e.typeName}
            </option>
          ))}
        </Select>
        <Stack className="mt-4">
          <Button colorScheme="blue" type="submit" onClick={onClose}>
            Create
          </Button>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </Stack>
      </FormControl>
    </form>
  );
};
