package com.starchive.springapp.hashtag.controller;

import com.starchive.springapp.global.dto.ResponseDto;
import com.starchive.springapp.hashtag.dto.HashTagDto;
import com.starchive.springapp.hashtag.dto.HashTagRequest;
import com.starchive.springapp.hashtag.service.HashTagService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HashTagController {
    private final HashTagService hashTagService;

    @GetMapping("/hashtags")
    public ResponseEntity<ResponseDto<List<HashTagDto>>> showAllHashTags() {
        List<HashTagDto> allHashTags = hashTagService.findAll();
        ResponseDto<List<HashTagDto>> listResponseDto = new ResponseDto<>(allHashTags);
        return ResponseEntity.ok(listResponseDto);
    }

    @PostMapping("/hashtag")
    public ResponseEntity<ResponseDto<HashTagDto>> checkHashTag(@Valid @RequestBody HashTagRequest request) {
        HashTagDto hashTagDto = hashTagService.findOneOrSave(request.getName());
        return ResponseEntity.ok(new ResponseDto<>(hashTagDto));
    }
}
