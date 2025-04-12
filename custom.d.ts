import type React from 'react';

declare module '*.png' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.webp' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.jpg' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.gif' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.avif' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.mp4' {
  export const ReactComponent: React.FC<React.VideoHTMLAttributes<HTMLVideoElement>>;
  const src: string;
  export default src;
}

declare module '*.webm' {
  export const ReactComponent: React.FC<React.VideoHTMLAttributes<HTMLVideoElement>>;
  const src: string;
  export default src;
}

declare module '*.mp3' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.ogg' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.wav' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.aac' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.json' {
  const content: unknown;
  export default content;
}

declare module '*.ts' {
  const content: unknown;
  export default content;
}

declare module '*.js' {
  const content: unknown;
  export default content;
}

declare module '*.txt' {
  const content: string;
  export default content;
}

declare class EdenFetchError<
  Status extends number = number,
  Value = unknown
> extends Error {
  constructor(public status: Status, public value: Value) {
    super(`${value}`);
  }
}

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.sass' {
  const content: { [className: string]: string };
  export default content;
}

// The following appears to be file system paths and should be removed or commented
// /bin /boot /dev /etc /home /lib /lib64 /lost+found /mnt /opt /proc /root /run /sbin /srv /sys /tmp /usr /var
// app app.config.ts bun.lockb components.json config custom.d.ts cypress.config.ts docker-compose.yml drizzle.config.ts env.d.ts eslint.config.js global-setup.ts lib node_modules package.json playwright.config.ts public README.md tsconfig.json

// @note: This is a global declaration for the Document and AppRouterInstance interfaces.
// app/ config/ lib/ node_modules/ public/

declare global {
  interface Document {
    startViewTransition: (callback: () => void) => void;
  }

  interface AppRouterInstance {
    push(
      href: Parameters<typeof import('next/link')['default']>[0]['href'],
      options?: { scroll?: boolean }
    ): void;
  }

  interface Window {
    location: Location;
    startViewTransition: (callback: () => void) => void;
    currentYear: number;
    timeZone: string;
    googleSiteVerification: string;
    googleAdsenseAccount: string;
    mobileWebAppCapable: boolean;
    themeColor: string;
    manifest: string;
    metadataBase: string;
    other: {
      currentYear: number;
      timeZone: string;
    };
    gtag: (
      command: string,
      eventName: string,
      eventParams: {
        value?: number;
        event_label?: string;
        non_interaction?: boolean;
      }
    ) => void;
  }
}
