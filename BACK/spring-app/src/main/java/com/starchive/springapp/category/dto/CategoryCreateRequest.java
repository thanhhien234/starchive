package com.starchive.springapp.category.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CategoryCreateRequest {
    @Size(max = 100)
    @NotNull
    private String name;

    @NotNull
    private Long parentId;
}
