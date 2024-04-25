// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    // Assuming req.body contains necessary order information
    const orderData = req.body;
    
    // Create a new order using the repository function
    const newOrder = await createNewOrderRepo(orderData);
    
    // Send a success response with the newly created order
    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(new ErrorHandler(500, error.message || "Internal Server Error"));
  }
};
