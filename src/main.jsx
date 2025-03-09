import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://04df2865c1bb0bf93e5a6fd745549625@o4508949755920384.ingest.us.sentry.io/4508949760245760",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: useEffect, 
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
