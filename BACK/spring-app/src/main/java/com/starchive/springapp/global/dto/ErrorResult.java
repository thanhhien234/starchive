package com.starchive.springapp.global.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
public class ErrorResult {
    private HttpStatus code;
    private String message;
}
