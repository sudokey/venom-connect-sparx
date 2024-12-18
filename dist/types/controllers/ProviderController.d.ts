import { Events } from "../helpers/events";
import { ExtensionConnector, ProviderControllerOptions, ProviderOptionsListWithOnClick, ProviderOptionsWithConnector } from "../types";
export declare const getPromiseRaw: (windowObject: any, walletId: string, type?: string | undefined, nTries?: number) => any;
export declare class ProviderController {
    private eventController;
    private providers;
    private providerOptions;
    private checkNetworkId;
    private checkNetworkName;
    private nTries;
    private _currentProvider;
    getStandalone: (walletId: string) => Promise<any>;
    set currentProvider(cp: any);
    get currentProvider(): any;
    constructor(options: ProviderControllerOptions);
    shouldDisplayProvider(id: string): boolean;
    getOptions: () => ProviderOptionsListWithOnClick;
    getProvider: (id: string) => (ProviderOptionsWithConnector & {
        id: string;
    }) | undefined;
    getProviderOption(id: string, connectorId: string, key: string): any;
    getAuthTo: (id: string, connectorId: string, authConnector: (providerPackage: any, opts: any) => Promise<any>) => Promise<any>;
    connectTo: (id: string, connectorId: string, connector: ExtensionConnector) => Promise<void>;
    on(event: Events, callback: (result: any) => void): () => void;
    off(event: Events, callback?: (result: any) => void): void;
}
//# sourceMappingURL=ProviderController.d.ts.map