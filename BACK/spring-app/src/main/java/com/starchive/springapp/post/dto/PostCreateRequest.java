package com.starchive.springapp.post.dto;

import jakarta.annotation.Nullable;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostCreateRequest {
    @NotEmpty
    @Column(length = 64)
    private String title;
    @NotEmpty
    private String content;
    @NotEmpty
    @Column(length = 32)
    private String author;
    @NotEmpty
    @Column(length = 128)
    private String password;
    @NotNull
    private Long categoryId;
    @Nullable
    private List<Long> hashTagIds;
    @Nullable
    private List<Long> imageIds;
}
