package com.feed1.feedbackuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;
    
    @Autowired
    private JavaMailSender mailSender;

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public void sendConfirmationEmail(Feedback feedback) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(feedback.getEmail());
            message.setSubject("Thank you for your feedback!");
            message.setText("Dear " + feedback.getName() + ",\n\n" +
                    "Thank you for submitting your feedback. We appreciate you taking the time to share your thoughts with us.\n\n" +
                    "Your message: " + feedback.getMessage() + "\n\n" +
                    "Best regards,\nFeedback Team");
            
            mailSender.send(message);
            System.out.println("Confirmation email sent to: " + feedback.getEmail());
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
        }
    }
}