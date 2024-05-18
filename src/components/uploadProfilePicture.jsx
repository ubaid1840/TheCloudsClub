import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

const UploadProfilePicture = () => {
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId);
    formData.append('user_email', userEmail);

    try {
      const response = await fetch('http://your-php-backend-url/upload.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Profile picture uploaded successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Error',
          description: result.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="userId" isRequired>
          <FormLabel>User ID</FormLabel>
          <Input
            type="text"
            value={userId}
            onChange={handleUserIdChange}
          />
        </FormControl>
        <FormControl id="userEmail" isRequired>
          <FormLabel>User Email</FormLabel>
          <Input
            type="email"
            value={userEmail}
            onChange={handleUserEmailChange}
          />
        </FormControl>
        <FormControl id="file" isRequired>
          <FormLabel>Upload Profile Picture</FormLabel>
          <Input
            type="file"
            onChange={handleFileChange}
          />
        </FormControl>
        <Button type="submit" mt={4}>
          Upload
        </Button>
      </form>
    </Box>
  );
};

export default UploadProfilePicture;
