package com.starchive.springapp.post.service;

import static org.assertj.core.api.Assertions.assertThat;

import com.starchive.springapp.category.domain.Category;
import com.starchive.springapp.category.repository.CategoryRepository;
import com.starchive.springapp.hashtag.domain.HashTag;
import com.starchive.springapp.hashtag.repository.HashTagRepository;
import com.starchive.springapp.image.domain.PostImage;
import com.starchive.springapp.image.repository.PostImageRepository;
import com.starchive.springapp.post.domain.Post;
import com.starchive.springapp.post.dto.PostCreateRequest;
import com.starchive.springapp.post.repository.PostRepository;
import com.starchive.springapp.posthashtag.domain.PostHashTag;
import com.starchive.springapp.posthashtag.repository.PostHashTagRepository;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PostServiceTest {
    @Autowired
    HashTagRepository hashTagRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    PostImageRepository postImageRepository;

    @Autowired
    PostHashTagRepository postHashTagRepository;

    @Autowired
    PostRepository postRepository;

    @Autowired
    PostService postService;

    @Test
    public void 게시글_작성_통합_테스트() throws Exception {
        System.out.println(categoryRepository);
        //given
        HashTag hashTag = new HashTag(1L, "tag1");
        hashTagRepository.save(hashTag);
        HashTag hashTag2 = new HashTag(2L, "tag2");
        hashTagRepository.save(hashTag2);

        PostImage postImage = new PostImage(1L, "imagePath", null, null);
        postImageRepository.save(postImage);

        Category category = new Category(1L, null, "예시카테고리", null);
        categoryRepository.save(category);

        PostCreateRequest postCreateRequest =
                new PostCreateRequest("title", "content", "author", "password", 1L
                        , new ArrayList<>(List.of(1L, 2L)), new ArrayList<>(List.of(1L)));

        //when
        System.out.println(categoryRepository.findById(1L).get().getName());

        postService.createPost(postCreateRequest);

        List<Post> posts = postRepository.findAll();
        PostImage findPostImage = postImageRepository.findById(1L).get();
        List<PostHashTag> postHashTags = postHashTagRepository.findAll();

        //then
        assertThat(posts.size()).isEqualTo(1);
        assertThat(posts.get(0).getCategory().getId()).isEqualTo(1L);
        assertThat(findPostImage.getPost().getId()).isEqualTo(1L);
        assertThat(postHashTags.size()).isEqualTo(2);

    }

}