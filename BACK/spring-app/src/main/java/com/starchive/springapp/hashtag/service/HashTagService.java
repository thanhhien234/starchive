package com.starchive.springapp.hashtag.service;

import com.starchive.springapp.hashtag.domain.HashTag;
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

    public List<HashTag> findAll() {
        return hashTagRepository.findAll();
    }

    public HashTag findOneOrSave(String name) {
        HashTag hashTag = null;
        try {
            hashTag = findOne(name);
        } catch (HashTagNotFoundException e) {
            hashTag = save(name);
        }
        return hashTag;
    }

}
