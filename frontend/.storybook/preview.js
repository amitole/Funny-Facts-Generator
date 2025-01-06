import "../src/index.css";
import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";

setup((app) => {
  app.use(createPinia());
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
