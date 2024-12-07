import { Theme } from "../types";
export declare enum Browsers {
    isChrome = "Google Chrome",
    isFirefox = "Mozilla Firefox"
}
export declare const filterNameArr: (nameArr: string[]) => any[];
type BrowserBadgeProps = {
    browserName: Browsers | string;
    themeObject: Theme;
    isVisualHide?: boolean;
};
type BrowserTextProps = {
    browserName: Browsers | string;
};
type ProviderBadgeProps = {
    providerName: Browsers | string;
    themeObject: Theme;
    isVisualHide?: boolean;
};
type ProviderTextProps = {
    providerName: Browsers | string;
};
export declare const notSupported: {
    browser: {
        Badge: ({ browserName, themeObject, isVisualHide, }: BrowserBadgeProps) => import("react/jsx-runtime").JSX.Element;
        Text: ({ browserName }: BrowserTextProps) => import("react/jsx-runtime").JSX.Element;
    };
    provider: {
        Badge: ({ providerName, themeObject, isVisualHide, }: ProviderBadgeProps) => import("react/jsx-runtime").JSX.Element;
        Text: ({ providerName }: ProviderTextProps) => import("react/jsx-runtime").JSX.Element;
    };
};
export {};
//# sourceMappingURL=NotSupported.d.ts.map