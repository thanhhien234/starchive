package com.starchive.springapp.hashtag.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HashTagUpdateRequest {
    @Schema(description = "해시태그 식별 id", example = "1")
    @NotNull(message = "ID는 필수입니다.") // Long 타입에는 @NotNull 사용
    private long id;

    @Schema(description = "해시태그 이름", example = "Spring", maxLength = 32)
    @NotEmpty(message = "해쉬태그이름은 1글자 이상이어야 합니다.")
    @Size(max = 32, message = "해쉬태그이름은 32자 보다 작거나 같아야 합니다.")
    private String name;
}
