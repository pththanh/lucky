import type { Preview } from "@storybook/react";
import "../src/App.css";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: "3rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
