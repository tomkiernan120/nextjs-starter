import * as Retraced from "@retracedhq/retraced";

// Initialize the client with your information.
const retraced = new Retraced.Client({
  apiKey: process.env.AUTH_RETRACED_API_KEY,
  projectId: process.env.AUTH_RETRACED_PROJECT_ID,
});

export default retraced;
