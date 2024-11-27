package com.starchive.springapp.hashtag.controller;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.starchive.springapp.hashtag.domain.HashTag;
import com.starchive.springapp.hashtag.service.HashTagService;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(HashTagController.class)
class HashTagControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private HashTagService hashTagService;

    @Test
    public void 전체_해쉬태그_목록_반환_테스트() throws Exception {
        //given
        List<HashTag> mockTags = Arrays.asList(
                new HashTag(1L, "Spring"),
                new HashTag(2L, "Java")
        );
        when(hashTagService.findAll()).thenReturn(mockTags);
        //when
        //then
        mockMvc.perform(get("/hashtags"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(mockTags.size()))
                .andExpect(jsonPath("$[0].name").value("Spring"))
                .andExpect(jsonPath("$[1].name").value("Java"));
    }

    @Test
    public void 태그조회_없으면_저장_후_반환_테스트() throws Exception {
        //given
        HashTag mockTag = new HashTag(1L, "Spring");
        when(hashTagService.findOneOrSave(anyString())).thenReturn(mockTag);
        //when
        //then
        mockMvc.perform(get("/hashtag").param("name", "spring"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Spring"));
    }
}