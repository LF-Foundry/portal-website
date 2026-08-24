import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const sharedProps = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.75,
  viewBox: "0 0 24 24",
};

export function ArrowIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

export function DownloadIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" /></svg>;
}

export function WindowsIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M3.5 5.5 10.5 4v7H3.5zM13.5 3.5l7-1v8.5h-7zM3.5 13h7v7l-7-1zM13.5 13h7v8.5l-7-1z" /></svg>;
}

export function DesktopIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>;
}

export function WindowStackIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><rect x="3" y="7" width="14" height="12" rx="2" /><path d="M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M3 11h14" /></svg>;
}

export function LockIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></svg>;
}

export function ExternalLinkIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M14 5h5v5m0-5-9 9" /><path d="M19 14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" /></svg>;
}

