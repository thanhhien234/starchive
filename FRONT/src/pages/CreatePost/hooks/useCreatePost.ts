import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createPost } from '@_services/createPostApi';
import { useNavigate } from 'react-router-dom';
import { CreatePostParams } from '../../../types/post';

function useCreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState<CreatePostParams>({
    title: '',
    content: '',
    author: '',
    password: '',
    categoryId: 0,
    hashTagIds: [],
    imageIds: [],
  });

  const handlePostChange = (field: keyof CreatePostParams, value: string | number | number[]) => {
    setPost((prev) => ({ ...prev, [field]: value }));
  };

  const handleMarkdownChange = (markdown: string) => {
    handlePostChange('content', markdown);
  };

  const mutation = useMutation({
    mutationFn: (newPost: CreatePostParams) => createPost(newPost),
    onSuccess: () => navigate('/'),
    onError: () =>  alert("저장에 실패하였습니다.")
  });

  const validateRequiredFields = () => {
    const missingFields = [];

    if (!post['title']) missingFields.push('제목');
    if (!post['content']) missingFields.push('내용');
    if (!post['author']) missingFields.push('닉네임');
    if (!post['password']) missingFields.push('비밀번호');
    if (!post['categoryId']) missingFields.push('카테고리');

    if (missingFields.length > 0) {
      alert(`${missingFields.join(' ,')} 항목을 입력해주세요`);
      return false;
    }
    return true
  }

  const handleSaveButtonClick = () => {
    if (validateRequiredFields()) {
      mutation.mutate(post);
    }
  };

  return {
    post,
    handlePostChange,
    handleMarkdownChange,
    handleSaveButtonClick,
  };
};

export default useCreatePost;