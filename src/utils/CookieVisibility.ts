import { useState, useEffect, Dispatch, SetStateAction } from "react";

const useCookieVisibility = (
  storageKey: string
): [boolean, Dispatch<SetStateAction<boolean>>, () => void] => {
  // Initialize state based on the presence of the storage key
  const [showCookie, setShowCookie] = useState(() => {
    return !localStorage.getItem(storageKey);
  });

  useEffect(() => {
    // Check localStorage whenever the storageKey changes
    const handleStorageChange = () => {
      setShowCookie(!localStorage.getItem(storageKey));
    };

    handleStorageChange(); // Initial check

    // Optional: You could add a storage event listener if you want to handle changes across tabs
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageKey]);

  const dismissCookie = () => {
    setShowCookie(false);
    localStorage.setItem(storageKey, "true"); // Mark the cookie notice as dismissed
  };

  return [showCookie, dismissCookie, setShowCookie];
};

export default useCookieVisibility;
