package com.starchive.springapp.category.dto;

import com.starchive.springapp.category.domain.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryUpdateResponse {
    private Long categoryId;

    private String name;

    private Long parentId;

    public static CategoryUpdateResponse from(Category category) {
        CategoryUpdateResponse categoryUpdateResponse = new CategoryUpdateResponse();
        categoryUpdateResponse.categoryId = category.getId();
        categoryUpdateResponse.name = category.getName();
        if (category.getParent() == null) {
            categoryUpdateResponse.parentId = null;
        } else {
            categoryUpdateResponse.parentId = category.getParent().getId();
        }
        return categoryUpdateResponse;
    }
}
