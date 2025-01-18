package com.starchive.springapp.category.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import com.starchive.springapp.category.domain.Category;
import com.starchive.springapp.category.dto.CategoryCreateRequest;
import com.starchive.springapp.category.dto.CategoryDto;
import com.starchive.springapp.category.exception.CategoryAlreadyExistsException;
import com.starchive.springapp.category.repository.CategoryRepository;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class CategoryServiceTest {
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    CategoryService categoryService;

    @Test
    void 전체_목록_조회_테스트() {
        //given
        Category parent1 = new Category("알고리즘", null);
        Category child1 = new Category("자료구조", parent1);
        Category child2 = new Category("다이나믹프로그래밍", parent1);
        Category parent2 = new Category("프로젝트", null);
        Category child3 = new Category("요구사항", parent2);
        Category parent3 = new Category("회고", null);
        categoryRepository.save(parent1);
        categoryRepository.save(child1);
        categoryRepository.save(child2);
        categoryRepository.save(parent2);
        categoryRepository.save(child3);
        categoryRepository.save(parent3);
        // when
        List<CategoryDto> response = categoryService.findAll();

        // then
        assertThat(response).hasSize(3);
        assertThat(response.get(0).getName()).isEqualTo("알고리즘");
        assertThat(response.get(0).getChildren()).hasSize(2);
        assertThat(response.get(0).getChildren().get(0).getName()).isEqualTo("자료구조");
        assertThat(response.get(0).getChildren().get(1).getName()).isEqualTo("다이나믹프로그래밍");
        assertThat(response.get(1).getName()).isEqualTo("프로젝트");
        assertThat(response.get(1).getChildren().get(0).getName()).isEqualTo("요구사항");
    }

    @Test
    public void 루트_카테고리_생성_테스트() throws Exception {
        //given
        CategoryCreateRequest request = new CategoryCreateRequest("알고리즘", null);

        //when
        categoryService.create(request);
        List<Category> categories = categoryRepository.findAll();
        Category category = categories.get(0);

        //then
        assertThat(categoryRepository.findAll().size()).isEqualTo(1);
        assertThat(category.getName()).isEqualTo("알고리즘");
    }

    @Test
    public void 하위_카테고리_생성_테스트() throws Exception {
        //given
        CategoryCreateRequest request1 = new CategoryCreateRequest("알고리즘", null);
        categoryService.create(request1);

        Category category = categoryRepository.findByName("알고리즘").get();

        CategoryCreateRequest request2 = new CategoryCreateRequest("DP", category.getId());
        categoryService.create(request2);
        //when
        Category findOne = categoryRepository.findByName("DP").get();
        //then
        assertThat(categoryRepository.findAll().size()).isEqualTo(2);
        assertThat(findOne.getName()).isEqualTo("DP");
        assertThat(findOne.getParent().getName()).isEqualTo("알고리즘");

    }

    @Test
    public void 이미_존재하는_카테고리_이름_생성_테스트() throws Exception {
        //given
        CategoryCreateRequest request1 = new CategoryCreateRequest("알고리즘", null);
        categoryService.create(request1);
        CategoryCreateRequest request2 = new CategoryCreateRequest("알고리즘", null);
        //when
        //then

        assertThatThrownBy(() -> categoryService.create(request2)).isInstanceOf(CategoryAlreadyExistsException.class)
                .hasMessage("이미 존재하는 카테고리 이름입니다.");
    }


}