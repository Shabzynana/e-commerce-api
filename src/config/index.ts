import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.BASE_URL,
  ADMIN_SECRET_KEY: process.env.ADMIN_SECRET_KEY,
  "api-prefix": "api/v1",
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_URL: process.env.POSTGRES_URL,
  TOKEN_SECRET: process.env.AUTH_SECRET,
  TOKEN_EXPIRY: process.env.AUTH_EXPIRY,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_SERVICE: process.env.SMTP_SERVICE,
  SMTP_PORT: process.env.SMTP_PORT,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  BULL_PASSKEY: process.env.BULL_PASSKEY || "bull_passkey",
  TWILIO_SID: process.env.TWILIO_SID || "ACXXXXXXXXXXXXXXXX",
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || "twilo_auth_token",
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_AUTH_CALLBACK_URL: process.env.GOOGLE_AUTH_CALLBACK_URL,
  FLW_PUBLIC_KEY: process.env.FLW_PUBLIC_KEY,
  FLW_SECRET_KEY: process.env.FLW_SECRET_KEY,
  FLW_ENCRYPTION_KEY: process.env.FLW_ENCRYPTION_KEY,
  LEMONSQUEEZY_SIGNING_KEY: process.env.LEMONSQUEEZY_SIGNING_KEY,
  PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
  OPENROUTER_BASE_URL: process.env.OPENROUTER_BASE_URL,
  SITE_URL: process.env.SITE_URL,
  SITE_NAME: process.env.SITE_NAME,
  CARD_ENCRYPTION_KEY: process.env.CARD_ENCRYPTION_KEY,
  FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL,
  SWAGGER_JSON_URL: process.env.SWAGGER_JSON_URL,
};

export default config;
