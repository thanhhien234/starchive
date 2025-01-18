package com.starchive.springapp.category.service;

import com.starchive.springapp.category.domain.Category;
import com.starchive.springapp.category.dto.CategoryCreateRequest;
import com.starchive.springapp.category.dto.CategoryDto;
import com.starchive.springapp.category.exception.CategoryAlreadyExistsException;
import com.starchive.springapp.category.exception.CategoryNotFoundException;
import com.starchive.springapp.category.repository.CategoryRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<CategoryDto> findAll() {
        List<Category> rootCateGories = categoryRepository.findRootCategoriesWithChildren();
        return rootCateGories.stream().map(CategoryDto::from).toList();
    }

    public Category findOne(Long id) {
        return categoryRepository.findByIdWithChildren(id).orElseThrow(CategoryNotFoundException::new);
    }


    public void create(CategoryCreateRequest categoryCreateRequest) {
        categoryRepository.findByName(categoryCreateRequest.getName()).ifPresent(category -> {
            throw new CategoryAlreadyExistsException();
        });

        if (categoryCreateRequest.getParentId() == null) {
            Category category = new Category(categoryCreateRequest.getName(), null);
            categoryRepository.save(category);
            return;
        }

        Category parentCategory = categoryRepository.findById(categoryCreateRequest.getParentId())
                .orElseThrow(() -> new CategoryNotFoundException("존재하지 않는 부모 카테고리"));

        Category category = new Category(categoryCreateRequest.getName(), parentCategory);
        categoryRepository.save(category);

    }
}
