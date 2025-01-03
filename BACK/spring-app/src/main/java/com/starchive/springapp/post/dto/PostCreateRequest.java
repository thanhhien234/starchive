package com.starchive.springapp.post.dto;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostCreateRequest {
    @NotEmpty
    @Size(max = 64)
    private String title;
    @NotEmpty
    private String content;
    @NotEmpty
    @Size(max = 32)
    private String author;
    @NotEmpty
    @Size(max = 128)
    private String password;
    @NotNull
    private Long categoryId;
    @Nullable
    private List<Long> hashTagIds;
    @Nullable
    private List<Long> imageIds;
}
