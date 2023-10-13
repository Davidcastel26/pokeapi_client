import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTypeByIdApi } from "../../utils/data";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Type = () => {
  const [types, setTypes] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    getTypeByIdApi(id).then((data) => setTypes(data));
    return () => {};
  }, []);

  const paginatedPokemon = types.pokemon?.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4 mb-8">

      
      <Text fontSize='4xl'>
        Type: {types.typeName}
        </Text>
        <Text fontSize={'2xl'}>
        
        </Text>
        <Stack spacing={3} pt={4} direction="row" align="center">
        <Button
          colorScheme="teal"
          size="xs"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          colorScheme="teal"
          size="xs"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === types.pokemon?.length / 5}
        >
          Next
        </Button>
        </Stack>
        </div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {paginatedPokemon?.map((e) => (

          <Card key={e.idPokemon}>
            <CardHeader>
              <Heading size="md">{e.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Id: {e.idPokemon}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

     
    </div>
  );
};