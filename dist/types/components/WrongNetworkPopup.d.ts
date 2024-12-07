import { ThemeConfig } from "../types";
export type WrongNetworkPopupProps = {
    textColor: ThemeConfig["theme"]["common"]["text"]["color"];
    networkName: string;
    changeWallet: () => void;
    disconnect?: () => void;
};
export declare const WrongNetworkPopup: ({ textColor, networkName, changeWallet, disconnect, }: WrongNetworkPopupProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=WrongNetworkPopup.d.ts.map