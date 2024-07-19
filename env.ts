import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    AUTH_SECRET: z.string(),
    AUTH_RETRACED_API_KEY: z.string(),
    AUTH_RETRACED_PROJECT_ID: z.string(),
    AUTH_RESEND_API_KEY: z.string()
  }
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});

