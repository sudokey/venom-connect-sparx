import { ProviderOptions } from "../../types";
export * from "./everwallet";
export * from "./oxychatwallet";
export * from "./oneartwallet";
export * from "./venomwallet";
export * from "./sparxwallet";
type linkCreator = (links: {
    ios: string | null | undefined | {
        targetLink: string;
    };
    android: string | null | undefined | {
        targetLink: string;
    };
    qr: string | null | undefined | {
        targetLink: string;
    };
    extension: {
        browser: string;
        link: string | null;
    }[];
} | undefined) => string | null | {
    browser: string;
    link: string | null;
}[];
declare const defaultLinks: {
    venomwallet: {
        ios: undefined;
        android: undefined;
        qr: undefined;
        extension: {
            browser: string;
            link: string | null;
        }[];
    };
    everwallet: {
        ios: string;
        android: string;
        qr: undefined;
        extension: {
            browser: string;
            link: string | null;
        }[];
    };
    sparxwallet: {
        ios: string;
        android: string;
        qr: undefined;
        extension: {
            browser: string;
            link: string | null;
        }[];
    };
    oxychatwallet: {
        ios: undefined;
        android: undefined;
        qr: undefined;
        extension: {
            browser: string;
            link: string | null;
        }[];
    };
    oneartwallet: {
        ios: undefined;
        android: undefined;
        qr: undefined;
        extension: {
            browser: string;
            link: string | null;
        }[];
    };
};
export declare const getValueByKey: (id: keyof typeof defaultLinks, key: keyof typeof defaultLinks["venomwallet"]) => linkCreator;
export declare const DEFAULT: ProviderOptions;
//# sourceMappingURL=index.d.ts.map