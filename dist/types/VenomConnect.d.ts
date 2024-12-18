import { ToggleExtensionWindow } from "./helpers/backdrop";
import { Events } from "./helpers/events";
import { ThemeNameList } from "./themes";
import { SimpleFunction, ThemeConfig, VenomConnectOptions } from "./types";
export declare const libName = "VenomConnect";
export declare const VENOM_CONNECT_MODAL_ID = "VENOM_CONNECT_MODAL_ID";
declare class VenomConnect {
    private show;
    private checkNetworkId;
    private checkNetworkName;
    private error;
    private themeConfig;
    private options;
    private providerController;
    private eventController;
    private static nTries;
    constructor(options: {
        theme?: VenomConnectOptions["theme"];
        providersOptions: VenomConnectOptions["providersOptions"];
        checkNetworkId?: number | number[];
        checkNetworkName?: string;
        nTries?: number;
    });
    private toggleModal;
    /**
     * Toggle the backdrop when performing an action in the extension window
     *
     * static method (via window)
     */
    static toggleExtensionWindow(params: ToggleExtensionWindow): Promise<void>;
    /**
     * This function causes the pop-up to be displayed with the available connection methods: through the extension, links to mobile applications.
     *
     * @return Promise of ProviderRpcClient or error/string
     */
    connect: () => Promise<any>;
    /**
     * This function allows you to get a specific provider **bypassing the selection pop-up** `connect(walletId, connectorTypeId)`.
     *
     * @return Promise of ProviderRpcClient or error/string
     */
    connectTo: (id: string, connectorId: string) => Promise<any>;
    /**
     * return
     *
     * {
     *
     *  show (boolean) for pop-up
     *
     *  themeConfig {...}
     *
     * }
     */
    getInfo: () => {
        show: boolean;
        themeConfig: ThemeConfig;
    };
    /**
     * You can use this function to interactively switch themes in runtime.
     */
    updateTheme(theme: ThemeNameList | ThemeConfig["theme"]): Promise<void>;
    /**
     * **Subscribing** to internal library events. `on(event, callback)`
     *
     * Returns the corresponding `off` function with no accepted parameters.
     */
    on(event: Events, callback: SimpleFunction): SimpleFunction;
    /**
     * **Unsubscribe** from internal library events. `on(event, callback)`
     */
    off(event: Events, callback?: SimpleFunction): void;
    /**
     * This function checks authorization in the available connection methods (extensions) and **returns** the corresponding **instance** of the wallet provider.
     *
     * @return Promise of auth ProviderRpcClient or false/undefined
     */
    checkAuth: (providerIdList?: string[] | undefined) => Promise<any>;
    /**
     * The function of getting a standalone provider by its ID. `getStandalone("venomwallet")` or `getStandalone()` By default, the ID is **venomwallet**.
     */
    getStandalone(walletId?: string): Promise<any>;
    /**
     * Returns the current provider (ProviderRpcClient) or _null_.
     */
    get currentProvider(): any;
    /**
     * The function of getting an object with promises, each of which waits for the initialization of the corresponding provider (_for example: `__venom`_) on the `window` object and is resolved by them or after several attempts is rejected.
     *
     *  You can get the promise you need by wallet ID and connection type `getPromise("venomwallet", "extension")` or you can use the default connection type ("extension") `getPromise("venomwallet")`.
     */
    static getPromise: (walletId: string, type?: string | undefined) => any;
    private checkIsWalletBrowser;
    private disconnect;
    private renderModal;
    private onError;
    private onProviderSelect;
    private onConnect;
    private onClose;
    private _toggleModal;
    private updateState;
}
export { VenomConnect };
//# sourceMappingURL=VenomConnect.d.ts.map