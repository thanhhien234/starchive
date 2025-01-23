package com.starchive.springapp.category.exception;

import static com.starchive.springapp.global.ErrorMessage.ALREADY_EXISTS_CATEGORY;

public class CategoryAlreadyExistsException extends RuntimeException {
    public CategoryAlreadyExistsException() {
        super(ALREADY_EXISTS_CATEGORY);
    }

    public CategoryAlreadyExistsException(String message) {
        super(message);
    }

    public CategoryAlreadyExistsException(String message, Throwable cause) {
        super(message, cause);
    }

    public CategoryAlreadyExistsException(Throwable cause) {
        super(cause);
    }

    protected CategoryAlreadyExistsException(String message, Throwable cause, boolean enableSuppression,
                                             boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
