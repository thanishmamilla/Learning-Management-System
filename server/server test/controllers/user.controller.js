// import {User} from "../models/user.model.js";
// import bcrypt from "bcryptjs";
// import { generateToken } from "../utils/generateToken.js";
// import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";

// export const register = async (req,res) => {
//     try {
       
//         const {name, email, password} = req.body; // patel214
//         if(!name || !email || !password){
//             return res.status(400).json({
//                 success:false,
//                 message:"All fields are required."
//             })
//         }
//         const user = await User.findOne({email});
//         if(user){
//             return res.status(400).json({
//                 success:false,
//                 message:"User already exist with this email."
//             })
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await User.create({
//             name,
//             email,
//             password:hashedPassword
//         });
//         return res.status(201).json({
//             success:true,
//             message:"Account created successfully."
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"Failed to register"
//         })
//     }
// }
// export const login = async (req,res) => {
//     try {
//         const {email, password} = req.body;
//         if(!email || !password){
//             return res.status(400).json({
//                 success:false,
//                 message:"All fields are required."
//             })
//         }
//         const user = await User.findOne({email});
//         if(!user){
//             return res.status(400).json({
//                 success:false,
//                 message:"Incorrect email or password"
//             })
//         }
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if(!isPasswordMatch){
//             return res.status(400).json({
//                 success:false,
//                 message:"Incorrect email or password"
//             });
//         }
//         generateToken(res, user, `Welcome back ${user.name}`);

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"Failed to login"
//         })
//     }
// }
// export const logout = async (_,res) => {
//     try {
//         return res.status(200).cookie("token", "", {maxAge:0}).json({
//             message:"Logged out successfully.",
//             success:true
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"Failed to logout"
//         }) 
//     }
// }
export const getUserProfile = async (req,res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).select("-password").populate("enrolledCourses");
        if(!user){
            return res.status(404).json({
                message:"Profile not found",
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to load user"
        })
    }
}
export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find().select("-password");
      return res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch users.",
      });
    }
  };
// export const updateProfile = async (req,res) => {
//     try {
//         const userId = req.id;
//         const {name} = req.body;
//         const profilePhoto = req.file;

//         const user = await User.findById(userId);
//         if(!user){
//             return res.status(404).json({
//                 message:"User not found",
//                 success:false
//             }) 
//         }
//         // extract public id of the old image from the url is it exists;
//         if(user.photoUrl){
//             const publicId = user.photoUrl.split("/").pop().split(".")[0]; // extract public id
//             deleteMediaFromCloudinary(publicId);
//         }

//         // upload new photo
//         const cloudResponse = await uploadMedia(profilePhoto.path);
//         const photoUrl = cloudResponse.secure_url;

//         const updatedData = {name, photoUrl};
//         const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {new:true}).select("-password");

//         return res.status(200).json({
//             success:true,
//             user:updatedUser,
//             message:"Profile updated successfully."
//         })

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"Failed to update profile"
//         })
//     }
// }

import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";
import { logUserAction } from "../utils/logUserAction.js"; // Import the logging utility

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            await logUserAction('Attempted Registration with Existing Email', req);
            return res.status(400).json({
                success: false,
                message: "User already exists with this email."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        await logUserAction('User Registered', req, newUser._id);

        return res.status(201).json({
            success: true,
            message: "Account created successfully."
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to register"
        });
    }
};

export const login = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            await logUserAction('Failed Login Attempt (Email not found)', req);
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            await logUserAction('Failed Login Attempt (Incorrect password)', req, user._id);
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            });
        }

        generateToken(res, user, `Welcome back ${user.name}`);

        await logUserAction('User Logged In', req, user._id);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to login"
        });
    }
};

export const logout = async (req, res) => {
    try {
        await logUserAction('User Logged Out', req, req.id);
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to logout"
        });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;  // Assuming the user ID is passed as a URL parameter
        const user = await User.findById(userId);

        if (!user) {
            await logUserAction('Attempted Deletion of Non-existing User', req, userId);
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        // Delete user profile photo from Cloudinary if it exists
        if (user.photoUrl) {
            const publicId = user.photoUrl.split("/").pop().split(".")[0];
            await deleteMediaFromCloudinary(publicId);
        }

        // Delete user from the database
        await User.findByIdAndDelete(userId);

        await logUserAction('User Deleted', req, userId);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully."
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete user."
        });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const userId = req.id;
        const { name } = req.body;
        const profilePhoto = req.file;

        const user = await User.findById(userId);
        if (!user) {
            await logUserAction('Profile Update Attempt for Non-existing User', req, userId);
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        if (user.photoUrl) {
            const publicId = user.photoUrl.split("/").pop().split(".")[0];
            deleteMediaFromCloudinary(publicId);
        }

        const cloudResponse = await uploadMedia(profilePhoto.path);
        const photoUrl = cloudResponse.secure_url;

        const updatedData = { name, photoUrl };
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select("-password");

        await logUserAction('User Profile Updated', req, userId);

        return res.status(200).json({
            success: true,
            user: updatedUser,
            message: "Profile updated successfully."
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to update profile"
        });
    }
};
