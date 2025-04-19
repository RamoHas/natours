import { Schema, model } from "mongoose";

const PaymentSchema = new Schema(
    {
        bookingId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Booking', // Reference to the booking associated with the payment
          required: true,
        },
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the student who made the payment
          required: true,
        },
        teacherId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the teacher who will receive the payment
          required: true,
        },
        paymentStatus: {
          type: String,
          enum: ['pending', 'completed', 'failed', 'refunded'],
          default: 'pending',
        },
        flutterwaveTxRef: {type:String}, // Flutterwave transaction reference
        flutterwaveTransferId: {type:String}, // For payouts
        paymentDate: {
          type: Date,
          default: Date.now,
        },
      },
      { timestamps: true }
    );
  
  export const PaymentModel = model('Payment', PaymentSchema);
  
  