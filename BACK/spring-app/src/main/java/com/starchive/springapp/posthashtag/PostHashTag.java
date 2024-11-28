package com.starchive.springapp.posthashtag;

import static jakarta.persistence.FetchType.LAZY;

import com.starchive.springapp.hashtag.domain.HashTag;
import com.starchive.springapp.post.Post;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "PostHashTag")
public class PostHashTag {
    @Id
    @GeneratedValue
    @Column(name = "postHashTagId")
    private Long id;

    @ManyToOne(fetch = LAZY)
    private Post post;

    @ManyToOne(fetch = LAZY)
    private HashTag hashTag;


}
