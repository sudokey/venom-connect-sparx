import { getValueByKey } from ".";
import { ProviderOptions } from "../../types";
import Apple from "../logos/Apple.svg";
import ChromeExtension from "../logos/ChromeExtensionEver.svg";
import EverWalletLogo from "../logos/EverWalletLogo.svg";
import FirefoxExtension from "../logos/FirefoxExtensionEver.svg";
import MobileApp from "../logos/MobileAppEver.svg";
import MobileAppWhite from "../logos/MobileAppEverWhite.svg";
import PlayMarket from "../logos/PlayMarket.svg";

export { EverWalletLogo };

// for ever
const everDefaultLink = "/";
const everIosDeepLink =
  "https://apps.apple.com/ru/app/ton-crystal-wallet/id1581310780";
const everAndroidDeepLink =
  "https://play.google.com/store/apps/details?id=com.broxus.crystal.app";
const everExtensionLinkChrome =
  "https://chrome.google.com/webstore/detail/ever-wallet/cgeeodpfagjceefieflmdfphplkenlfk";
const everExtensionLinkFirefox = "https://everwallet.net";
export const sparxDefaultLinks = {
  ios: everIosDeepLink,
  android: everAndroidDeepLink,
  qr: undefined,
  extension: [
    {
      browser: "chrome",
      link:
        everExtensionLinkChrome !== null
          ? everExtensionLinkChrome || everDefaultLink
          : null,
    },
    {
      browser: "firefox",
      link:
        everExtensionLinkFirefox !== null
          ? everExtensionLinkFirefox || everDefaultLink
          : null,
    },
  ],
};
//

export const getSparxQr = () => {
  return "";
};

const EverWalletLogos = {
  wallet: EverWalletLogo,
  connectors: {
    chromeExtension: ChromeExtension,
    firefoxExtension: FirefoxExtension,
    mobile: MobileApp,
    mobileWhite: MobileAppWhite,
    ios: MobileApp,
    iosWhite: MobileAppWhite,
    android: MobileApp,
    androidWhite: MobileAppWhite,
    apple: Apple,
    playMarket: PlayMarket,
  },
};

export const sparxwallet: ProviderOptions = {
  id: "sparxwallet",
  // wallet: {
  //   name: everWalletName,
  //   description: "The official wallet of the Everscale network",
  //   logo: EverWalletLogos.wallet,
  // },
  walletWaysToConnect: [
    {
      id: "extension",
      type: "extension",
      logo: {
        chrome: EverWalletLogos.connectors.chromeExtension,
        firefox: EverWalletLogos.connectors.firefoxExtension,
      },
      name: "Sparx [[browser]] Extension", // [[browser]] will replace to 'Chrome' or 'Firefox'
      options: {
        isCurrentBrowser: [
          ["isChrome", "isDesktop"],
          ["isFirefox", "isDesktop"],
        ],
        installExtensionLink: (links: typeof sparxDefaultLinks | undefined) =>
          getValueByKey("sparxwallet", "extension")(links),
        checkIsProviderExist: () => !!window.__sparx, // todo
      },
    },
    {
      id: "mobile",
      type: "mobile",
      logo: EverWalletLogos.connectors.mobile,
      logoWhite: EverWalletLogos.connectors.mobileWhite,
      name: "Sparx Mobile App",
      options: {
        qr: (links: typeof sparxDefaultLinks | undefined) =>
          getValueByKey("sparxwallet", "qr")(links),
        devises: [
          {
            type: "ios",
            img: EverWalletLogos.connectors.apple,
            text: "iOS App",

            deepLink: (links: typeof sparxDefaultLinks | undefined) =>
              getValueByKey("sparxwallet", "ios")(links),
            alt: "iOS",
            storeId: "ios",
          },
          {
            type: "android",
            img: EverWalletLogos.connectors.playMarket,
            text: "Android App",

            deepLink: (
              links: typeof sparxDefaultLinks | undefined = sparxDefaultLinks
            ) => getValueByKey("sparxwallet", "android")(links),
            alt: "Android",
            storeId: "android",
          },
        ],
      },
    },
    {
      id: "ios",
      type: "ios",
      logo: EverWalletLogos.connectors.ios,
      logoWhite: EverWalletLogos.connectors.iosWhite,
      name: "Sparx Mobile App",
      options: {
        text: "Click here to open App Store",

        deepLink: (
          links: typeof sparxDefaultLinks | undefined = sparxDefaultLinks
        ) => getValueByKey("sparxwallet", "ios")(links),
      },
    },
    {
      id: "android",
      type: "android",
      logo: EverWalletLogos.connectors.android,
      logoWhite: EverWalletLogos.connectors.androidWhite,
      name: "Sparx Mobile App",
      options: {
        text: "Click here to open Google Play",

        deepLink: (
          links: typeof sparxDefaultLinks | undefined = sparxDefaultLinks
        ) => getValueByKey("sparxwallet", "android")(links),
      },
    },
  ],
};
