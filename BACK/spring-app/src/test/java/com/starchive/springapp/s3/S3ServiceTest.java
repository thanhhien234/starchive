package com.starchive.springapp.s3;

import static org.assertj.core.api.Assertions.assertThat;

import com.amazonaws.services.s3.AmazonS3;
import java.lang.reflect.Field;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.mock.web.MockMultipartFile;

@SpringBootTest(properties = "spring.profiles.active=test")
@Import(S3MockConfig.class)
class S3ServiceTest {

    @Autowired
    private AmazonS3 amazonS3;

    @Autowired
    private S3Service s3Service;

    @Test
    public void 이미지_업로드_테스트() throws Exception {
        //given
        String path = "test.png";
        String contentType = "image/png";
        String bucket = "testbucket-in-config";

        MockMultipartFile file = new MockMultipartFile("test", path, contentType, "test".getBytes());
        //when
        Field field = s3Service.getClass().getDeclaredField("bucket");
        field.setAccessible(true);
        field.set(s3Service, bucket);

        String urlPath = s3Service.saveFile(file);

        //then
        assertThat(urlPath).contains(bucket);

        amazonS3.listBuckets().forEach(System.out::println);
        amazonS3.listObjects(bucket).getObjectSummaries().forEach(System.out::println);

        assertThat(amazonS3.listObjects(bucket).getObjectSummaries().size()).isEqualTo(1);

        String key = urlPath.substring(urlPath.lastIndexOf("/") + 1);

        assertThat(amazonS3.listObjects(bucket).getObjectSummaries().get(0).getKey())
                .isEqualTo(key);

    }

}