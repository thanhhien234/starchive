package com.starchive.springapp.hashtag.service;

import com.starchive.springapp.hashtag.domain.HashTag;
import com.starchive.springapp.hashtag.dto.HashTagDto;
import com.starchive.springapp.hashtag.exception.HashTagNotFoundException;
import com.starchive.springapp.hashtag.repository.HashTagRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class HashTagService {
    private final HashTagRepository hashTagRepository;

    public HashTag save(String name) {
        HashTag hashTag = new HashTag(name);
        return hashTagRepository.save(hashTag);
    }

    public HashTag findOne(String name) {
        return hashTagRepository.findByName(name).orElseThrow(HashTagNotFoundException::new);
    }

    public List<HashTagDto> findAll() {
        return hashTagRepository.findAll().stream().map(HashTagDto::from).toList();
    }

    public HashTagDto findOneOrSave(String name) {
        HashTag hashTag = null;
        try {
            hashTag = findOne(name);
        } catch (HashTagNotFoundException e) {
            hashTag = save(name);
        }
        return HashTagDto.from(hashTag);
    }

}
