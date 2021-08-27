import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

export const AlertError = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Something went wrong, please try again!</AlertTitle>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};
