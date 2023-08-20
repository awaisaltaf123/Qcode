"use client";
import React, { useState } from "react";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import PhotoUploader from "./components/PhotoUploader";
import PhotoWithComments from "./components/PhotoWithComments";

const HomePage: React.FC = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  const handlePhotoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedPhotos((prevPhotos) => [
        ...prevPhotos,
        e.target?.result as string,
      ]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box margin="2%">
      <Center>
        <Heading as="h1" mb={4}>
          Qode Assessment
        </Heading>
      </Center>
      <Center>
        <PhotoUploader onUpload={handlePhotoUpload} />
      </Center>
      <VStack mt={4} align="center" spacing={4}>
        {uploadedPhotos.map((photoUrl, index) => (
          <PhotoWithComments key={index} photoUrl={photoUrl} />
        ))}
      </VStack>
    </Box>
  );
};

export default HomePage;
