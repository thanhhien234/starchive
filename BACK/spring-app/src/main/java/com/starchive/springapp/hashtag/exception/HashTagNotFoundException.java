package com.starchive.springapp.hashtag.exception;

public class HashTagNotFoundException extends RuntimeException {
    public HashTagNotFoundException() {
        super("해쉬 태그가 존재 하지 않습니다.");
    }

    public HashTagNotFoundException(String message) {
        super(message);
    }
}
