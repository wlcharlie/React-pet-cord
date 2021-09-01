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
      setError(false);
      setLoading(true);
    },

    success: successMsg => {
      setLoading(false);
      setTyped(false);
      refresh(prev => !prev);
      onClose();
      toast({
        title: 'Success',
        description: successMsg || 'Your actions has succeeded',
        status: 'success',
        duration: 5000,
        position: 'bottom-right',
        isClosable: true,
      });
    },

    fail: errorMsg => {
      setLoading(false);
      setError(errorMsg || true);
    },
  };

  return {
    eventHandler,
    leaveConfirm,
    loading,
    error,
    setError,
  };
};

export default useFormEvent;
