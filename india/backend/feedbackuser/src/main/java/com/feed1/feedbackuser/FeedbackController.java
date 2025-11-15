package com.feed1.feedbackuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "*")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<Map<String, String>> submitFeedback(@RequestBody Feedback feedback) {
        Map<String, String> response = new HashMap<>();
        
        try {
            // Validate required fields
            if (feedback.getName() == null || feedback.getName().trim().isEmpty() ||
                feedback.getEmail() == null || feedback.getEmail().trim().isEmpty() ||
                feedback.getMessage() == null || feedback.getMessage().trim().isEmpty()) {
                
                response.put("status", "error");
                response.put("message", "All fields are required");
                return ResponseEntity.badRequest().body(response);
            }

            Feedback savedFeedback = feedbackService.saveFeedback(feedback);
            feedbackService.sendConfirmationEmail(savedFeedback);
            
            response.put("status", "success");
            response.put("message", "Feedback submitted successfully!");
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "error");
            response.put("message", "Failed to submit feedback: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    // Health check endpoint
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "up");
        response.put("message", "Feedback API is running");
        return ResponseEntity.ok(response);
    }
}
