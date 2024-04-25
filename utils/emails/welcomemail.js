// Import the necessary modules here
import { sendEmail } from "./emailService.js";

export const sendWelcomeEmail = async (user) => {
  // Write your code here
  try {
    // Write your code here for sending a welcome email to the user
    
    // Example: Composing the email message
    const emailContent = `Dear ${user.name},\n\nWelcome to our platform! We're excited to have you on board.\n\nBest regards,\nThe Platform Team`;
    
    // Sending the email
    await sendEmail(user.email, "Welcome to Our Platform", emailContent);
    
    // You can add any additional logic here, such as logging or error handling
    
  } catch (error) {
    // If an error occurs, throw it to be caught by the calling function
    throw error;
  }
};
