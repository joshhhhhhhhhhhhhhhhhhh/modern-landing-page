import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface UseBannerVisibilityOptions {
  expiration?: number; // Expiration time in milliseconds
}

interface StoredBannerData {
  timestamp: number; // Timestamp when the banner was hidden
}

const useBannerVisibility = (
  storageKey: string,
  options: UseBannerVisibilityOptions = {}
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const getStoredBannerData = (): StoredBannerData | null => {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  const isBannerExpired = (timestamp: number): boolean => {
    return options.expiration ? Date.now() > timestamp + options.expiration : false;
  };

  const [showBanner, setShowBanner] = useState<boolean>(() => {
    const storedData = getStoredBannerData();
    if (storedData) {
      if (isBannerExpired(storedData.timestamp)) {
        localStorage.removeItem(storageKey);
        return true; // Show the banner if expired
      }
      return false; // Don't show if it still exists
    }
    return true; // Show the banner if not previously set
  });

  const updateBannerVisibility = () => {
    const storedData = getStoredBannerData();
    if (!storedData) {
      setShowBanner(true);
    } else if (isBannerExpired(storedData.timestamp)) {
      localStorage.removeItem(storageKey);
      setShowBanner(true); // Show if expired
    } else {
      setShowBanner(false); // Don't show if still valid
    }
  };

  useEffect(() => {
    // Initial check
    updateBannerVisibility();

    // Update banner visibility when local storage changes
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKey) {
        updateBannerVisibility();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageKey, options.expiration]);

  const handleHideBanner = () => {
    setShowBanner(false);
    localStorage.setItem(storageKey, JSON.stringify({ timestamp: Date.now() }));
  };

  return [showBanner, handleHideBanner];
};

export default useBannerVisibility;
