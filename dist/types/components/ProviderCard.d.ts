import { ConnectorType, Theme, WalletDisplay, WayToConnect } from "../types";
export type ProviderCardProps = WalletDisplay & {
    isProviderExist: boolean;
    isCurrentBrowser: boolean;
    themeObject: Theme;
    themeName: string;
    onClick?: () => void;
    connectorType?: ConnectorType;
    browser?: string;
    options?: WayToConnect["options"];
    isFirst?: boolean;
    isBadBrowser?: boolean;
    allBrowsersNames?: string[];
    browsersNames?: string[];
};
export declare const ProviderCard: ({ name: nameRaw, logo, logoWhite, description, isProviderExist, isCurrentBrowser, themeObject, themeName, onClick, connectorType, browser: browserNameRaw, options, isFirst, isBadBrowser, allBrowsersNames, browsersNames, }: ProviderCardProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ProviderCard.d.ts.map