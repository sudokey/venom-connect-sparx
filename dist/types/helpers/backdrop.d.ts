import { ModalState } from "../components";
export type ToggleExtensionWindow = {
    isExtensionWindowOpen: boolean;
    popUpText?: ModalState["popUpText"];
};
export declare const toggleExtensionWindow: (params: ToggleExtensionWindow) => Promise<any>;
//# sourceMappingURL=backdrop.d.ts.map