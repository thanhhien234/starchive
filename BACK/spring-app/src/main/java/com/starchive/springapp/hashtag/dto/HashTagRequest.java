package com.starchive.springapp.hashtag.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class HashTagRequest {
    @NotEmpty(message = "해쉬태그이름은 1글자 이상이어야 합니다.")
    @Size(max = 32, message = "해쉬태그이름은 32자 보다 작거나 같아야 합니다.")
    private String name;
}
