/// <reference types="react" />
import { ProviderOptionsListWithOnClick, SimpleFunction, ThemeConfig } from "../types";
declare global {
    interface Window {
        __hasEverscaleProvider?: boolean;
        __ever?: any;
        __hasVenomProvider?: boolean;
        __venom?: any;
        __oxy?: any;
        updateVenomModal: any;
        venomNetworkIntervalId?: number;
    }
}
declare type ModalProps = {
    error?: string;
    networkName: string;
    themeConfig: ThemeConfig;
    options: ProviderOptionsListWithOnClick;
    onClose: SimpleFunction;
    changeWallet: SimpleFunction;
    disconnect?: SimpleFunction;
    clearError?: () => void;
};
export declare type ModalState = {
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
export declare const Modal: ({ error, clearError, networkName, themeConfig, options, onClose, changeWallet, disconnect, }: ModalProps) => JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map