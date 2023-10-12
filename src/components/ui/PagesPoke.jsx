import { Button, Stack } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export const PagesPoke = ({ currentPage, onPageChange }) => {
  const handleBackClick = () => onPageChange(currentPage - 1);

  const handleNextClick = () => onPageChange(currentPage + 1);

  return (
    <Stack spacing={3} pt={4} direction="row" align="center">
      <Button colorScheme="teal" size="xs" onClick={handleBackClick}>
        <ArrowLeftIcon /> <span className="ml-2">back</span>
      </Button>

      <Button colorScheme="teal" size="xs" onClick={handleNextClick}>
        <span className="mr-2">next</span> <ArrowRightIcon />
      </Button>
    </Stack>
  );
};