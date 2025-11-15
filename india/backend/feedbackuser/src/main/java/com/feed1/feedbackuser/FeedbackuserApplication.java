package com.feed1.feedbackuser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FeedbackuserApplication {

    public static void main(String[] args) {
        SpringApplication.run(FeedbackuserApplication.class, args);
        System.out.println("Feedback API running on http://localhost:8080");
    }
}