import {
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Fragment, useRef } from 'react';
import { FaImage } from 'react-icons/fa';

const HealthImagePreview = ({ image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef();

  return (
    <Fragment>
      <Button
        variant="ghost"
        colorScheme="blue"
        onClick={onOpen}
        isDisabled={!image.length}
      >
        <FaImage />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default HealthImagePreview;
