import { Express } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

export default function setup(app: Express) {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error('Missing Google OAuth configuration');
  }

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        passReqToCallback: true,
        scope: ['email', 'profile'],
      },
      async (request, accessToken, refreshToken, profile, done) => {
        try {
          let user = await Account.findOne({ googleId: profile.id });
  
          if (!user) {
            user = await Account.create({
              googleId: profile.id,
              name: profile.displayName,
              avatar: profile.photos?.[0].value,
            });
          }
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await Account.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
}
