"use client";
import React, { useState } from "react";
import { Box, Image, Textarea, Button, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface Comment {
  id: number;
  text: string;
}

interface PhotoWithCommentsProps {
  photoUrl: string;
}

const PhotoWithComments: React.FC<PhotoWithCommentsProps> = ({ photoUrl }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = { id: Date.now(), text: newComment };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment("");

      const photoCommentsKey = `photo_comments_${photoUrl}`;
      const existingComments = JSON.parse(
        localStorage.getItem(photoCommentsKey) || "[]"
      );
      localStorage.setItem(
        photoCommentsKey,
        JSON.stringify([...existingComments, newCommentObj])
      );
    }
  };

  return (
    <Box textAlign="center">
      <Box maxW="100%" p={4} overflow="hidden" boxShadow="md">
        <Image
          src={photoUrl}
          alt="Uploaded"
          maxH="400px"
          w="100%"
          objectFit="contain"
        />
      </Box>
      <Stack mt={4} spacing={4} p={4}>
        {comments.map((comment) => (
          <Box
            key={comment.id}
            p={2}
            background="gray"
            borderRadius="5px"
            style={{ maxWidth: "50" }}
          >
            {comment.text}
          </Box>
        ))}
        <Textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
        />
        <Button
          onClick={handleAddComment}
          leftIcon={<AddIcon />}
          style={{ marginBottom: "2%" }}
        >
          Add Comment
        </Button>
      </Stack>
    </Box>
  );
};

export default PhotoWithComments;
