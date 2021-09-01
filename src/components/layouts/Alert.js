import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

const defaultMsg = 'Something went wrong, please try again!';

export const AlertError = ({ error }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{error ? error.message : defaultMsg}</AlertTitle>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};
