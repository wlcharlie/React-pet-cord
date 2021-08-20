import { Container } from '@chakra-ui/react';

const Pets = props => {
  return (
    <Container
      maxW={['container.sm', null, null, 'container.xl']}
      py={2}
      d={['grid', 'flex', null, 'grid']}
      gridTemplateColumns={[null, null, null, '1fr 1fr']}
      flexDirection={[null, 'column', null]}
      alignItems="center"
      gridGap={4}
    >
      {props.children}
    </Container>
  );
};

export default Pets;
