// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        ignores: ["node_modules", "dist", "eslint.config.mjs"],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },

    {
        rules: {
            // "no-console": "error",
            "dot-notation": "error",
        },
    },
);
