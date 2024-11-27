package com.starchive.springapp.hashtag.controller;

import com.starchive.springapp.hashtag.domain.HashTag;
import com.starchive.springapp.hashtag.service.HashTagService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HashTagController {
    private final HashTagService hashTagService;

    @GetMapping("/hashtags")
    public List<HashTag> showAllHashTags() {
        return hashTagService.findAll();
    }

    @GetMapping("/hashtag")
    public HashTag checkHashTag(@RequestParam("name") String name) {
        return hashTagService.findOneOrSave(name);
    }
}
