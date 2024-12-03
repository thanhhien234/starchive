package com.starchive.springapp.posthashtag.repository;

import com.starchive.springapp.posthashtag.domain.PostHashTag;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PostHashTagRepository extends JpaRepository<PostHashTag, Long> {
    @Modifying
    @Query("DELETE FROM PostHashTag p WHERE p.hashTag.id = :hashTagId")
    void deleteAllByHashTagId(@Param("hashTagId") Long hasTagId);

    @Query("select p from PostHashTag p WHERE p.hashTag.id = :hashTagId")
    List<PostHashTag> findAllByHashTagId(@Param("hashTagId") Long hasTagId);
}
