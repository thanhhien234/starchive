package com.starchive.springapp.hashtag.repository;

import com.starchive.springapp.hashtag.domain.HashTag;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HashTagRepository extends JpaRepository<HashTag, Long> {
    public Optional<HashTag> findByName(String name);
}
