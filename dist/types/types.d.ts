/// <reference types="react" />
import { ThemeNameList } from "./themes";
declare type BackdropTheme = {
    color: string;
    opacity?: number | string;
    backdropFilter?: string;
    offset?: number | string;
};
declare type CommonTheme = {
    text: {
        color: string;
    };
    backdrop: BackdropTheme;
};
declare type PopupTheme = {
    maxWidth?: number;
    background: {
        color: string;
        backdropFilter?: string;
    };
    border: {
        width: number;
        color: string;
        borderRadius: number;
    };
    text: {
        color: string;
    };
    closeCross: {
        color: string;
        hoverColor?: string;
    };
    title?: {
        fontWeight?: string | number;
    };
    badgeColor: string;
    scroll: {
        color: string;
    };
};
declare type ItemTheme = {
    background: {
        color: string;
    };
    border: {
        width: number;
        borderWidth: number;
        borderHoverColor?: string;
        color: string;
        hoverColor?: string;
        pressedColor?: string;
    };
    text: {
        color: string;
    };
    warning: {
        background: {
            color: string;
        };
        text: {
            color: string;
        };
    };
    icon: {
        main: {
            color: string;
        };
        subTitle: {
            color: string;
        };
    };
};
export declare type Theme = {
    common: CommonTheme;
    popup: PopupTheme;
    item: ItemTheme;
    customItems?: {
        [item: string]: ItemTheme;
    };
};
export declare type ThemeConfig = {
    name: string;
    theme: Theme;
};
export declare type ThemesList = {
    [name: string]: ThemeConfig;
};
export declare type SimpleFunction = (input?: any) => void;
declare type Links = {
    extension: {
        browser: "chrome" | "firefox";
        link: string | null;
    }[];
    ios: string | null | {
        targetLink: string;
    };
    android: string | null;
    qr: string | null | {
        targetLink: string;
    };
};
declare type ProviderDisplay = {
    name: string;
    logo: string | JSX.Element | {
        [key: string]: string;
    };
    logoWhite?: string;
};
export declare type WalletDisplay = ProviderDisplay & {
    description?: string;
};
export declare type ConnectorType = "extension" | "qr" | "mobile" | "ios" | "android";
export declare type WayToConnect = {
    id: string;
    type: ConnectorType;
    options?: any;
};
/**
 * provider: ProviderRpcClient,
 * options?: any,
 * callbacks: Callbacks,
 */
export declare type ExtensionConnector = (provider: any, options: any | undefined, callbacks: Callbacks) => Promise<any>;
/**
 * provider: ProviderRpcClient,
 * options?: any,
 */
declare type Connector = (provider?: any, options?: any) => Promise<any>;
export declare type ProviderOptions = {
    id: string;
    walletWaysToConnect: (ProviderDisplay & WayToConnect)[];
};
export declare type ProviderOptionsWithConnector = {
    id: string;
    links?: Partial<Links>;
    walletWaysToConnect: (ProviderDisplay & WayToConnect & {
        connector: ExtensionConnector;
        authConnector?: Connector;
        standalone?: Connector;
        package: any;
        packageOptions?: {
            [id: string]: any;
        };
        packageOptionsStandalone?: {
            [id: string]: any;
        };
    })[];
};
export declare type ProviderOptionsList = (ProviderOptionsWithConnector & {
    id: string;
})[];
declare type ProviderOptionsWithOnClick = {
    id: string;
    links?: Partial<Links>;
    walletWaysToConnect: (ProviderDisplay & WayToConnect & {
        onClick: () => Promise<void>;
        package: any;
    })[];
};
export declare type ProviderOptionsListWithOnClick = (ProviderOptionsWithOnClick & {
    id: string;
})[];
export declare type ProviderOptionsWithConnectorOptional = {
    id: string;
    links?: Partial<Links>;
    walletWaysToConnect: (Partial<ProviderDisplay> & WayToConnect & {
        connector?: ExtensionConnector;
        authConnector?: Connector;
        standalone?: Connector;
        package: any;
        packageOptions?: {
            [id: string]: any;
        };
        packageOptionsStandalone?: {
            [id: string]: any;
        };
    })[];
    defaultWalletWaysToConnect?: ConnectorType[];
};
declare type UserProviderOptions = Omit<ProviderOptionsWithConnectorOptional, "id">;
export declare type UserProvidersOptions = {
    [id: string]: UserProviderOptions;
};
export declare type EventCallback = {
    event: string;
    callback: (result: any) => void;
};
export declare type VenomConnectOptions = {
    theme: ThemeNameList | ThemeConfig["theme"];
    providersOptions: UserProvidersOptions;
    checkNetworkId: number | number[];
    checkNetworkName?: string;
    nTries?: number;
};
export declare type ProviderControllerOptions = {
    providersOptions: UserProvidersOptions;
    checkNetworkId: number | number[];
    checkNetworkName: string;
    nTries?: number;
};
export declare type Callbacks = {
    authorizationCompleted: (provider: any) => void;
    extensionWindowClosed: () => void;
    extensionWindowError: (error: any) => void;
};
export {};
//# sourceMappingURL=types.d.ts.map