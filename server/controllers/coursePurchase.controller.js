// import Stripe from "stripe";
// import { Course } from "../models/course.model.js";
// import { CoursePurchase } from "../models/coursePurchase.model.js";
// import { Lecture } from "../models/lecture.model.js";
// import { User } from "../models/user.model.js";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const createCheckoutSession = async (req, res) => {
//   try {
//     const userId = req.id;
//     const { courseId } = req.body;

//     const course = await Course.findById(courseId);
//     if (!course) return res.status(404).json({ message: "Course not found!" });

//     // Create a new course purchase record
//     const newPurchase = new CoursePurchase({
//       courseId,
//       userId,
//       amount: course.coursePrice,
//       status: "pending",
//     });

//     // Create a Stripe checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: course.courseTitle,
//               images: [course.courseThumbnail],
//             },
//             unit_amount: course.coursePrice * 100, // Amount in paise (lowest denomination)
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `http://localhost:5173/course-progress/${courseId}`, // once payment successful redirect to course progress page
//       cancel_url: `http://localhost:5173/course-detail/${courseId}`,
//       metadata: {
//         courseId: courseId,
//         userId: userId,
//       },
//       shipping_address_collection: {
//         allowed_countries: ["IN"], // Optionally restrict allowed countries
//       },
//     });

//     if (!session.url) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Error while creating session" });
//     }

//     // Save the purchase record
//     newPurchase.paymentId = session.id;
//     await newPurchase.save();

//     return res.status(200).json({
//       success: true,
//       url: session.url, // Return the Stripe checkout URL
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const stripeWebhook = async (req, res) => {
//   let event;

//   try {
//     const payloadString = JSON.stringify(req.body, null, 2);
//     const secret = process.env.WEBHOOK_ENDPOINT_SECRET;

//     const header = stripe.webhooks.generateTestHeaderString({
//       payload: payloadString,
//       secret,
//     });

//     event = stripe.webhooks.constructEvent(payloadString, header, secret);
//   } catch (error) {
//     console.error("Webhook error:", error.message);
//     return res.status(400).send(`Webhook error: ${error.message}`);
//   }

//   // Handle the checkout session completed event
//   if (event.type === "checkout.session.completed") {
//     console.log("check session complete is called");

//     try {
//       const session = event.data.object;

//       const purchase = await CoursePurchase.findOne({
//         paymentId: session.id,
//       }).populate({ path: "courseId" });

//       if (!purchase) {
//         return res.status(404).json({ message: "Purchase not found" });
//       }

//       if (session.amount_total) {
//         purchase.amount = session.amount_total / 100;
//       }
//       purchase.status = "completed";

//       // Make all lectures visible by setting `isPreviewFree` to true
//       if (purchase.courseId && purchase.courseId.lectures.length > 0) {
//         await Lecture.updateMany(
//           { _id: { $in: purchase.courseId.lectures } },
//           { $set: { isPreviewFree: true } }
//         );
//       }

//       await purchase.save();

//       // Update user's enrolledCourses
//       await User.findByIdAndUpdate(
//         purchase.userId,
//         { $addToSet: { enrolledCourses: purchase.courseId._id } }, // Add course ID to enrolledCourses
//         { new: true }
//       );

//       // Update course to add user ID to enrolledStudents
//       await Course.findByIdAndUpdate(
//         purchase.courseId._id,
//         { $addToSet: { enrolledStudents: purchase.userId } }, // Add user ID to enrolledStudents
//         { new: true }
//       );
//     } catch (error) {
//       console.error("Error handling event:", error);
//       return res.status(500).json({ message: "Internal Server Error" });
//     }
//   }
//   res.status(200).send();
// };
// export const getCourseDetailWithPurchaseStatus = async (req, res) => {
//   try {
//     const { courseId } = req.params;
//     const userId = req.id;
//     console.log(courseId,userId);
//     console.log("jaisriram");

//     const course = await Course.findById(courseId)
//       .populate({ path: "creator" })
//       .populate({ path: "lectures" });

//     const purchased = await CoursePurchase.findOne({ userId, courseId });
//     console.log(purchased);

//     if (!course) {
//       return res.status(404).json({ message: "course not found!" });
//     }

//     return res.status(200).json({
//       course,
//       purchased: !!purchased, // true if purchased, false otherwise
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getAllPurchasedCourse = async (_, res) => {
//   try {
//     const purchasedCourse = await CoursePurchase.find({
//       status: "completed",
//     }).populate("courseId");
//     if (!purchasedCourse) {
//       return res.status(404).json({
//         purchasedCourse: [],
//       });
//     }
//     return res.status(200).json({
//       purchasedCourse,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };


import Razorpay from 'razorpay';
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";
import { Lecture } from "../models/lecture.model.js";
import { User } from "../models/user.model.js";
import crypto from 'crypto';

// Razorpay instance setup
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,  // Replace with your Razorpay key_id
  key_secret: process.env.RAZORPAY_KEY_SECRET  // Replace with your Razorpay key_secret
});

export const createCheckoutSession = async (req, res) => {
  try {
    const userId = req.id;
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    // Create a new course purchase record
    const newPurchase = new CoursePurchase({
      courseId,
      userId,
      amount: course.coursePrice,
      status: "pending",
    });

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: course.coursePrice * 100, // Amount in paise (1 INR = 100 paise)
      currency: 'INR',
      receipt: `order_rcptid_${Math.random().toString(36).substr(2, 9)}`,
      payment_capture: 1, // Automatically capture payment
    });

    if (!order || !order.id) {
      return res.status(400).json({ success: false, message: "Error while creating Razorpay order" });
    }

    // Save the purchase record with the Razorpay order ID
    newPurchase.paymentId = order.id;
    await newPurchase.save();

    return res.status(200).json({
      success: true,
      orderId: order.id,
      amount: course.coursePrice,
      currency: 'INR', // Return Razorpay order ID to initiate payment
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Webhook to handle Razorpay payment status updates
export const razorpayWebhook = async (req, res) => {
  const crypto = require('crypto');

  const secret = process.env.RAZORPAY_WEBHOOK_SECRET; // Replace with your Razorpay webhook secret
  const payload = JSON.stringify(req.body);
  const signature = req.headers['x-razorpay-signature'];

  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(400).send("Invalid webhook signature");
  }

  const event = req.body;

  // Handle the payment.capture event
  if (event.event === 'payment.captured') {
    try {
      const payment = event.payload.payment.entity;
      const orderId = payment.order_id;

      const purchase = await CoursePurchase.findOne({ paymentId: orderId }).populate("courseId");
      if (!purchase) {
        return res.status(404).json({ message: "Purchase not found" });
      }

      // Update purchase status to "completed" and amount
      purchase.status = 'completed';
      purchase.amount = payment.amount / 100; // Amount in INR

      // Make all lectures visible by setting `isPreviewFree` to true
      if (purchase.courseId && purchase.courseId.lectures.length > 0) {
        await Lecture.updateMany(
          { _id: { $in: purchase.courseId.lectures } },
          { $set: { isPreviewFree: true } }
        );
      }

      await purchase.save();

      // Update user's enrolledCourses
      await User.findByIdAndUpdate(
        purchase.userId,
        { $addToSet: { enrolledCourses: purchase.courseId._id } },
        { new: true }
      );

      // Update course to add user ID to enrolledStudents
      await Course.findByIdAndUpdate(
        purchase.courseId._id,
        { $addToSet: { enrolledStudents: purchase.userId } },
        { new: true }
      );

      return res.status(200).json({ message: 'Payment successful' });
    } catch (error) {
      console.error("Error handling event:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  res.status(200).send();
};

// export const getCourseDetailWithPurchaseStatus = async (req, res) => {
//   try {
//     const { courseId } = req.params;
//     const userId = req.id;

//     const course = await Course.findById(courseId)
//       .populate({ path: "creator" })
//       .populate({ path: "lectures" });

//     const purchased = await CoursePurchase.findOne({ userId, courseId });

//     if (!course) {
//       return res.status(404).json({ message: "Course not found!" });
//     }

//     return res.status(200).json({
//       course,
//       purchased: !!purchased, // true if purchased, false otherwise
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };




export const verifyPayment = async (req, res) => {
  try {
    const { paymentId, orderId, signature, courseId } = req.body;
    const userId = req.id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(orderId + '|' + paymentId)
      .digest('hex');

    if (expectedSignature !== signature) {
      return res.status(400).json({ success: false, message: "Invalid payment signature" });
    }

    const purchase = await CoursePurchase.findOne({ paymentId: orderId });
    if (!purchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }

    purchase.status = 'completed';
    purchase.amount = purchase.amount;
    await purchase.save();

    await User.findByIdAndUpdate(userId, { $addToSet: { enrolledCourses: courseId } });
    await Course.findByIdAndUpdate(courseId, { $addToSet: { enrolledStudents: userId } });

    return res.status(200).json({ success: true, message: "Payment verified and course unlocked" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getCourseDetailWithPurchaseStatus = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.id;

    const course = await Course.findById(courseId)
      .populate({ path: "creator" })
      .populate({ path: "lectures" });

    if (!course) {
      return res.status(404).json({ message: "Course not found!" });
    }

    // Only consider completed purchases
    const purchase = await CoursePurchase.findOne({ userId, courseId, status: "completed" });

    return res.status(200).json({
      course,
      purchased: !!purchase, // true only if purchase exists and is completed
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getAllPurchasedCourse = async (_, res) => {
  try {
    const purchasedCourse = await CoursePurchase.find({
      status: "completed",
    }).populate("courseId");

    if (!purchasedCourse) {
      return res.status(404).json({
        purchasedCourse: [],
      });
    }
    return res.status(200).json({
      purchasedCourse,
    });
  } catch (error) {
    console.log(error);
  }
}