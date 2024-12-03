package com.starchive.springapp.hashtag.service;


import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import com.starchive.springapp.hashtag.domain.HashTag;
import com.starchive.springapp.hashtag.dto.HashTagDto;
import com.starchive.springapp.hashtag.exception.HashTagNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class HashTagServiceTest {
    @Autowired
    HashTagService hashTagService;

    @Test
    public void 해쉬태그_저장_테스트() throws Exception {
        //given
        //when
        hashTagService.save("DP");
        HashTag findOne = hashTagService.findOne("DP");

        //then
        assertThat(findOne.getName()).isEqualTo("DP");
    }

    @Test
    public void 존재하지_않는_해쉬태그_조회_예외_테스트() throws Exception {
        assertThatThrownBy(() -> hashTagService.findOne("DP"))
                .isInstanceOf(HashTagNotFoundException.class);
    }

    @Test
    public void 해쉬태그_존재_여부_확인_없으면_저장_테스트() {
        HashTagDto hashTagDto = hashTagService.findOneOrSave("DP");
        assertThat(hashTagDto.getName()).isEqualTo("DP");
    }
}