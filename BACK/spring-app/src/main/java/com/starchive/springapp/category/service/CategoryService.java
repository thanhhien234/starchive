package com.starchive.springapp.category.service;

import com.starchive.springapp.category.domain.Category;
import com.starchive.springapp.category.dto.CategoryCreateRequest;
import com.starchive.springapp.category.dto.CategoryDto;
import com.starchive.springapp.category.dto.CategoryUpdateRequest;
import com.starchive.springapp.category.dto.CategoryUpdateResponse;
import com.starchive.springapp.category.exception.CategoryAlreadyExistsException;
import com.starchive.springapp.category.exception.CategoryNotFoundException;
import com.starchive.springapp.category.repository.CategoryRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<CategoryDto> findAll() {
        List<Category> rootCateGories = categoryRepository.findRootCategoriesWithChildren();
        return rootCateGories.stream().map(CategoryDto::from).toList();
    }

    public Category findOne(Long id) {
        return categoryRepository.findByIdWithParentAndChildren(id).orElseThrow(CategoryNotFoundException::new);
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
                .orElseThrow(() -> new CategoryNotFoundException("존재하지 않는 부모 카테고리입니다."));

        Category category = new Category(categoryCreateRequest.getName(), parentCategory);
        categoryRepository.save(category);

    }

    public CategoryUpdateResponse update(CategoryUpdateRequest categoryUpdateRequest) {
        Category category = categoryRepository.findByIdWithParent(categoryUpdateRequest.getCategoryId())
                .orElseThrow(CategoryNotFoundException::new);

        if (!category.getName().equals(categoryUpdateRequest.getName())) {
            categoryRepository.findByName(categoryUpdateRequest.getName()).ifPresent(findOne -> {
                throw new CategoryAlreadyExistsException(categoryUpdateRequest.getName() + " 은 이미 존재하는 카테고리 이름입니다.");
            });

            category.changeName(categoryUpdateRequest.getName());
        }

        updateParentCategory(categoryUpdateRequest, category);

        return CategoryUpdateResponse.from(category);
    }

    private Category updateParentCategory(CategoryUpdateRequest categoryUpdateRequest, Category category) {
        Long newParentId = categoryUpdateRequest.getParentId();
        if (category.getParent() != null && newParentId == null) {
            category.changeParent(null);
            return category;
        }

        if (category.getParent() != null && newParentId != null) {

            Category parentCategory = findParentCategoryById(newParentId);

            if (category.getParent().getId() != newParentId) {
                category.changeParent(parentCategory);
            }

            return category;
        }

        if (category.getParent() == null && newParentId != null) {

            Category parentCategory = findParentCategoryById(newParentId);

            category.changeParent(parentCategory);

            return category;
        }

        return category;
    }

    private Category findParentCategoryById(Long parentId) {
        return categoryRepository.findById(parentId)
                .orElseThrow(() -> new CategoryNotFoundException("존재하지 않는 부모 카테고리입니다."));
    }
}
