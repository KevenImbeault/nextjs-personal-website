import type {Config} from "next-globe-gen/config";

const config: Config = {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routes: {
        originDir: "./_app",
        localizedDir: "./app/(i18n)",
    },
    messages: {
        originDir: "./data/locales",
        keyExtractionDirs: ["./_app", "./components", "./data"],
    },
};

export default config;