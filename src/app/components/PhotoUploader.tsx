"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text } from "@chakra-ui/react";

const PhotoUploader = ({ onUpload }: { onUpload: (file: File) => void }) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const allowedExtensions = [".jpeg", ".jpg", ".png"];

      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension && allowedExtensions.includes("." + fileExtension)) {
        onUpload(file);
      } else {
        console.log("Invalid file type");
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Box
      {...getRootProps()}
      border="2px dashed #ccc"
      borderRadius="8px"
      padding="20px"
      textAlign="center"
      cursor="pointer"
      margin="2%"
      width="100%"
    >
      <input {...getInputProps()} />
      <Text>Drag and drop an image or click to choose</Text>
    </Box>
  );
};

export default PhotoUploader;
