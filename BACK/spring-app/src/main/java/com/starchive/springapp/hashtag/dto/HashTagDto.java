package com.starchive.springapp.hashtag.dto;

import com.starchive.springapp.hashtag.domain.HashTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class HashTagDto {
    private Long id;
    private String name;

    public static HashTagDto from(HashTag hashTag) {
        HashTagDto hashTagDto = new HashTagDto();
        hashTagDto.id = hashTag.getId();
        hashTagDto.name = hashTag.getName();
        return hashTagDto;
    }
}
