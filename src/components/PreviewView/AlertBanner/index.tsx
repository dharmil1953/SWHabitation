import { useSyncExternalStore } from "react";
import locales from "../../../../lib/locales";
import Link from "../../Commons/Link";

const subscribe = () => () => {};

export default function AlertBanner({
  preview,
  loading,
}: {
  preview?: boolean;
  loading?: boolean;
}) {
  const shouldShow = useSyncExternalStore(
    subscribe,
    () => window.top === window,
    () => false
  );

  if (!shouldShow || !preview) return null;

  return (
    <div
      className={`${loading ? "bg-[] animate-pulse" : ""
        } border-b border-accent-7 bg-accent-7 text-white`}
    >
      <div className="py-2 text-center text-sm text-[#232e52]">
        {"Previewing drafts. "}
        <Link
          to="/api/disable-draft"
          ariaLabel="Back to published"
          className="underline transition-colors duration-200 hover:text-cyan text-[#232e52]"
        >
          {locales.en.BACKTOPUBLISHED}
        </Link>
      </div>
    </div>
  );
}
