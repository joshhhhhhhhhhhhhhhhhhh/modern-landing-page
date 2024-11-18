import { useState, useEffect, Dispatch, SetStateAction, useCallback } from "react";

// Custom hook to manage visibility of cookie consent message based on local storage
const useCookieVisibility = (
  storageKey: string,
  expiryDays?: number, // Optionally specify expiry in days for the cookie
  onVisibilityChange?: (isVisible: boolean) => void // Optional callback for visibility changes
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [showCookie, setShowCookie] = useState(false);

  const hasCookieConsent = useCallback(() => {
    return localStorage.getItem(storageKey) !== null;
  }, [storageKey]);

  useEffect(() => {
    // Check for existing consent on initial mount
    if (!hasCookieConsent()) {
      setShowCookie(true);
    } else {
      setShowCookie(false);
    }
  }, [hasCookieConsent]);

  // Handler to accept cookies and set local storage
  const acceptCookies = () => {
    // Set the consent in local storage
    localStorage.setItem(storageKey, "true");

    // Optionally set an expiration
    if (expiryDays) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
      localStorage.setItem(`${storageKey}_expiry`, expirationDate.toISOString());
    }

    // Update visibility state
    setShowCookie(false);

    // Call the optional callback
    if (onVisibilityChange) {
      onVisibilityChange(false);
    }
  };

  return [showCookie, acceptCookies]; // Return visibility state and the method to accept cookies
};

export default useCookieVisibility;
