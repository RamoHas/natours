    //   import jwt from "jsonwebtoken";
    //   import { UserModel } from "../models/user.js";
    //   import { googleOAuthMiddleware } from "../middlewares/oauth.js";
      import passport from 'passport';

    //   import { Strategy } from "passport-google-oauth20";
    //   import { googleOAuthMiddleware } from "../middlewares/oauth.js";

      
      
      //First try at google Oauth
      // Google OAuth Callback Logic
    //   export const googleOAuthCallback = async (req, res) => {
    //     try {
    //         // 1. Destructure user data from Passport
    //     const { user: passportUser, token: googleToken } = req.user; // Passport adds the authenticated user and token
      
    //         // Check if user exists in the database (this is already handled by passport but we'll ensure it)
    //         const user = await UserModel.findOne({ googleId: user.googleId });
    //         if (!existingUser) {
    //             // Create a new user if not found
    //             existingUser = new UserModel({
    //                 googleId: user.googleId,
    //                 email: user.email,
    //                 username: user.username,
    //             });
    //             await existingUser.save();
    //         }
      
    //         // Generate a JWT token for the user
    //         const jwtToken = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
      
    //         // Redirect the user with the token to the frontend
    //         // res.redirect(`http://localhost:3000/social-login-success?token=${jwtToken}`);
    //          // Return the token in the response (no redirect)
    //          return res.status(200).json({
    //           message: 'Google authentication successful',
    //           token: jwtToken,
    //           user: {
    //               email: existingUser.email,
    //               username: existingUser.username,
    //               role: existingUser.role,
    //           }
    //       });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json('Error during Google authentication');
    //     }
    //   };
      
      
      
    export const googleOAuthCallback = (req, res) => {
        passport.authenticate('google', { failureRedirect: '/auth/google/failure' }, (err, userData) => {
          if (err || !userData) {
            return res.status(400).json({ error: 'Authentication failed' });
          }
      
          const { user, token } = userData;
      
          return res.status(200).json({
            status: 'success',
            token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email,
              googleId: user.googleId
            },
          });
        })(req, res);  // Pass req and res, no need to pass next if it's not used
      };
      

    
    // export const facebookOAuthCallback = async (req, res) => {
    //     passport.authenticate('facebook', { failureRedirect: '/auth/facebook/failure' }, async (err, userData) => {
    //       if (err || !userData) {
    //         return res.status(400).json({ error: 'Authentication failed' });
    //       }
      
    //       const { user, token } = userData;
      
    //       return res.status(200).json({
    //         status: 'success',
    //         token,
    //         user: {
    //           id: user._id,
    //           username: user.username,
    //           email: user.email,
    //         },
    //       });
    //     })(req, res);
    //   };
      