import { useEffect, useState } from "react";

const AUTH_STORAGE_KEY = "megamart-auth";
const AUTH_EVENT_NAME = "auth-change";

const safeParseSession = (value) => {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export const getStoredSession = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return safeParseSession(window.localStorage.getItem(AUTH_STORAGE_KEY));
};

const broadcastAuthChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_EVENT_NAME));
  }
};

export const saveSession = (session) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  broadcastAuthChange();
};

export const clearSession = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  broadcastAuthChange();
};

export const isAuthenticated = () => Boolean(getStoredSession()?.accessToken);

export const useAuthSession = () => {
  const [session, setSession] = useState(() => getStoredSession());

  useEffect(() => {
    const syncSession = () => {
      setSession(getStoredSession());
    };

    window.addEventListener("storage", syncSession);
    window.addEventListener(AUTH_EVENT_NAME, syncSession);

    return () => {
      window.removeEventListener("storage", syncSession);
      window.removeEventListener(AUTH_EVENT_NAME, syncSession);
    };
  }, []);

  return session;
};
