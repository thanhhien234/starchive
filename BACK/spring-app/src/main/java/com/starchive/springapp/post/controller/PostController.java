package com.starchive.springapp.post.controller;

import com.starchive.springapp.post.dto.PostCreateRequest;
import com.starchive.springapp.post.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class PostController {
    private final PostService postService;

    @PostMapping("/post")
    public ResponseEntity<?> post(@Valid @RequestBody PostCreateRequest request) {

        postService.createPost(request);

        return ResponseEntity.status(201).build();
    }
}
