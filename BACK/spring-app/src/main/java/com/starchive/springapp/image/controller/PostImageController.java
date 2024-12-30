package com.starchive.springapp.image.controller;

import com.starchive.springapp.image.service.PostImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class PostImageController {
    private final PostImageService postImageService;

    @PostMapping("/postImage")
    public ResponseEntity<?> imageUpload(@RequestParam("image") MultipartFile image) {
        String imagePath = postImageService.uploadImage(image);

        return ResponseEntity.ok(imagePath);

    }
}
