import { Stack, Skeleton } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default Loading;
