import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
import { NEXT_PUBLIC_GTM_ID } from "../../constants";

const DEFAULT_GTAG_DELAY = 10000; // 10 seconds

export const useAnalytics = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const removeExistingScripts = () => {
    const existingGtmScript = document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${NEXT_PUBLIC_GTM_ID}"]`);
    const existingGtmIframe = document.querySelector(`iframe[src*="googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM_ID}"]`);
    const existingGaScript = document.querySelector(`script[src*="www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTM_ID}"]`);

    if (existingGtmScript) existingGtmScript.remove();
    if (existingGtmIframe) existingGtmIframe.remove();
    if (existingGaScript) existingGaScript.remove();

    // Remove associated noscript tags for Google Tag Manager
    const existingNoscripts = document.querySelectorAll(`noscript`);
    existingNoscripts.forEach((noscript) => {
      if (noscript.innerHTML.includes(`googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM_ID}`)) {
        noscript.remove();
      }
    });
  };

  // A helper function to retry script removal in case of dynamic additions
  const retryRemoveScripts = () => {
    removeExistingScripts();
    setTimeout(removeExistingScripts, 5000); // Retry after 1 second
  };

  const init = () => {
    if (isInitialized) return;

    retryRemoveScripts();

    TagManager.initialize({ gtmId: NEXT_PUBLIC_GTM_ID });
    ReactGA.initialize(NEXT_PUBLIC_GTM_ID);
    setIsInitialized(true);
    removeListeners();
  };

  const removeListeners = () => {
    document.removeEventListener("scroll", init);
    document.removeEventListener("touchstart", init);
    document.removeEventListener("click", init);
  };

  useEffect(() => {
    document.addEventListener("scroll", init);
    document.addEventListener("touchstart", init);
    document.addEventListener("click", init);

    timeout.current = setTimeout(init, DEFAULT_GTAG_DELAY);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
      removeListeners();
    };
  }, []); // Dependency array ensures this effect runs only when isInitialized changes

  return { ReactGA, isInitialized };
};
