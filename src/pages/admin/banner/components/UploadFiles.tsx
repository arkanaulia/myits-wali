import { useState, useRef } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Image, Stack } from '@chakra-ui/react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dragCounter = useRef(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current++;

    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      event.dataTransfer.dropEffect = 'copy';
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter.current--;

    if (dragCounter.current === 0) {
      // Drag leaves the drop area
      // You can reset the styles of the drop area here if needed
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      handleFileUpload(file);
    }

    dragCounter.current = 0;
  };

  return (
    <Stack spacing={4} direction="row">
      <Flex
        border="2px dashed"
        borderColor='biru.500'
        rounded="md"
        direction='column'
        p={4}
        onClick={handleUploadClick}
        cursor="pointer"
        textAlign="center"
        alignItems='center'
        justifyContent='center'
        justify='center'
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FormControl >
          <FormLabel htmlFor="file-upload">Upload File Disini</FormLabel>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </FormControl>
        <Box fontSize="sm" color="gray.500">
          Drag and drop file di sini atau klik untuk memilih file.
        </Box>
      </Flex>
      {selectedFile && previewImage && (
        <Box>
          {selectedFile.type.includes('image') ? (
            <Image src={previewImage} alt="Preview" maxH="200px" objectFit="contain" />
          ) : (
            <Box textAlign="center" p={4} border="2px dashed gray" rounded="md">
              <Box as="span" display="block" mb={2}>
                Nama File: {selectedFile.name}
              </Box>
              <Box as="span" display="block">
                Tipe File: {selectedFile.type}
              </Box>
            </Box>
          )}
          <Button colorScheme="red" mt={2} onClick={handleRemoveFile}>
            Remove File
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default FileUpload;
