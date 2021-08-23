import { Box, Skeleton, GridItem, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';

const LoadingSkeleton = () => {
  return (
    <Box
      d="grid"
      gridTemplateColumns="1fr 2fr"
      pos={[null, 'relative', null, 'static']}
      my={[3, 5, null, 0]}
      p={['none', 1, null, 0]}
      w={[null, '90%', '700px', '100%']}
      h={[null, '150px', '200px', '100%']}
    >
      <Skeleton
        startColor="pink.500"
        endColor="orange.500"
        pos={[null, 'absolute', null, 'static']}
        bottom={[null, '20px', null]}
        left={[null, '-20px', null]}
        boxSize={['120px', '150px']}
      />
      <GridItem colStart={2} pos="relative">
        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          w="100%"
          h="100%"
          display={['none', 'block']}
        />
      </GridItem>
    </Box>
  );
};

const PetCardLoading = () => {
  return (
    <Fragment>
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
    </Fragment>
  );
};

export default PetCardLoading;
