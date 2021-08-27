import { useState } from 'react';
import { useToast } from '@chakra-ui/toast';

const useFormEvent = ({ refresh, onClose }) => {
  const [typed, setTyped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toast = useToast();

  const leaveConfirm = () => {
    if (typed) {
      const check = window.confirm(
        'Your data still up there, you will lose it after the leaving. Are you sure and leave?'
      );
      if (!check) return;
    }
    setTyped(false);
    onClose();
  };

  const eventHandler = {
    typing: () => {
      setTyped(true);
    },

    pending: () => {
      setLoading(true);
    },

    success: () => {
      setLoading(false);
      setTyped(false);
      refresh(true);
      onClose();
      toast({
        title: 'Success',
        description: 'A Record has added',
        status: 'success',
        duration: 6000,
        position: 'bottom-right',
        isClosable: true,
      });
    },

    fail: () => {
      setLoading(false);
      setError(true);
    },
  };

  return {
    eventHandler,
    leaveConfirm,
    loading,
    error,
  };
};

export default useFormEvent;
