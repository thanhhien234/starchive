package com.starchive.springapp.hashtag.controller;

import com.starchive.springapp.global.dto.ResponseDto;
import com.starchive.springapp.hashtag.dto.HashTagCheckRequest;
import com.starchive.springapp.hashtag.dto.HashTagDto;
import com.starchive.springapp.hashtag.dto.HashTagUpdateRequest;
import com.starchive.springapp.hashtag.service.HashTagService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "해쉬태그")
public class HashTagController {
    private final HashTagService hashTagService;

    @GetMapping("/hashtags")
    @Operation(summary = "해쉬태그 목록 전체 조회")
    public ResponseEntity<ResponseDto<List<HashTagDto>>> showAllHashTags() {
        List<HashTagDto> allHashTags = hashTagService.findAll();
        ResponseDto<List<HashTagDto>> listResponseDto = new ResponseDto<>(allHashTags);
        return ResponseEntity.ok(listResponseDto);
    }

    @PostMapping("/hashtag")
    @Operation(summary = "해쉬태그 조회 및 저장", description = "이름을 갖은 해쉬태그가 없으면 생성 및 저장 후 반환합니다.")
    public ResponseEntity<ResponseDto<HashTagDto>> checkHashTag(@Valid @RequestBody HashTagCheckRequest request) {
        HashTagDto hashTagDto = hashTagService.findOneOrSave(request.getName());
        return ResponseEntity.ok(new ResponseDto<>(hashTagDto));
    }

    @PutMapping("/hashtag")
    @Operation(summary = "해쉬태그 이름 수정")
    public ResponseEntity<ResponseDto<HashTagDto>> updateHashTag(@Valid @RequestBody HashTagUpdateRequest request) {
        HashTagDto hashTagDto = hashTagService.updateName(request.getId(), request.getName());
        return ResponseEntity.ok(new ResponseDto<>(hashTagDto));
    }

    @DeleteMapping("/hashtag")
    @Operation(summary = "해시태그 삭제")
    public ResponseEntity<ResponseDto<HashTagDto>> deleteHashTag(@RequestParam("hashTagId") Long hashTagId) {
        hashTagService.delete(hashTagId);
        return ResponseEntity.noContent().build();
    }
}
