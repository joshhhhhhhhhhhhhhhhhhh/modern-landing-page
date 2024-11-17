import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface UseBannerVisibilityOptions {
  expiration?: number; // Expiration time in milliseconds
}

const useBannerVisibility = (
  storageKey: string,
  options: UseBannerVisibilityOptions = {}
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [showBanner, setShowBanner] = useState<boolean>(() => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue) {
      const { timestamp } = JSON.parse(storedValue);
      // Check if the item has expired
      if (options.expiration && Date.now() > timestamp + options.expiration) {
        localStorage.removeItem(storageKey);
        return true; // Show the banner if expired
      }
      return false; // Don't show if it still exists
    }
    return true; // Show the banner if not previously set
  });

  const updateBannerVisibility = () => {
    const storedValue = localStorage.getItem(storageKey);
    if (!storedValue) {
      setShowBanner(true);
    } else {
      const { timestamp } = JSON.parse(storedValue);
      if (options.expiration && Date.now() > timestamp + options.expiration) {
        localStorage.removeItem(storageKey);
        setShowBanner(true); // Show if expired
      } else {
        setShowBanner(false); // Don't show if still valid
      }
    }
  };

  useEffect(() => {
    // Update banner visibility when local storage changes
    window.addEventListener("storage", updateBannerVisibility);

    // Initial check
    updateBannerVisibility();

    return () => {
      window.removeEventListener("storage", updateBannerVisibility);
    };
  }, [storageKey, options.expiration]);

  const handleHideBanner = () => {
    setShowBanner(false);
    localStorage.setItem(storageKey, JSON.stringify({ timestamp: Date.now() }));
  };

  return [showBanner, handleHideBanner]; // Return a function to hide the banner
};

export default useBannerVisibility;
