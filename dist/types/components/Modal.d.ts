import { ProviderOptionsListWithOnClick, SimpleFunction, ThemeConfig } from "../types";
declare global {
    interface Window {
        __hasEverscaleProvider?: boolean;
        __ever?: any;
        __sparx?: any;
        __hasVenomProvider?: boolean;
        __venom?: any;
        __oxy?: any;
        updateVenomModal: any;
        venomNetworkIntervalId?: number;
    }
}
type ModalProps = {
    error?: string;
    networkName: string;
    themeConfig: ThemeConfig;
    options: ProviderOptionsListWithOnClick;
    onClose: SimpleFunction;
    changeWallet: SimpleFunction;
    disconnect?: SimpleFunction;
    clearError?: () => void;
};
export type ModalState = {
    show: boolean;
    themeConfig?: ThemeConfig;
    wrongNetwork?: boolean;
    isFullProvider?: boolean;
    isExtensionWindowOpen?: boolean;
    popUpText: {
        title: string;
        text?: string;
    };
};
export declare const Modal: ({ error, clearError, networkName, themeConfig: initThemeConfig, options, onClose, changeWallet, disconnect, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map