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

  // Slice the types.pokemon array into pages, with 5 items per page.
  const paginatedPokemon = types.pokemon?.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  return (
    <div>
      <p className="text-xl md:text-2xl text-black font-semibold py-5 capitalize">
        Type: {types.typeName}
      </p>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {paginatedPokemon?.map((e) => (
          // <ListItem key={e.idPokemon}>id: {e.idPokemon}, name: {e.name}</ListItem>

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

      {/* Pagination buttons */}
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
  );
};