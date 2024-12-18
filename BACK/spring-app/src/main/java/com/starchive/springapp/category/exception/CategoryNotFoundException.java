package com.starchive.springapp.category.exception;

public class CategoryNotFoundException extends RuntimeException {
    public CategoryNotFoundException() {
        super("카테고리가 존재하지 않습니다.");
    }

    public CategoryNotFoundException(String message) {
        super(message);
    }
}
