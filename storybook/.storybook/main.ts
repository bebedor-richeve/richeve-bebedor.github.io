import type { StorybookConfig } from "@storybook/html-vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|js|html)"],
  framework: { name: "@storybook/html-vite", options: {} },
  addons: [],
  staticDirs: ["../public"]
};

export default config;
