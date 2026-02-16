import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Header" };
export default meta;

type Story = StoryObj;

export const Header: Story = {
  render: () => `
    <section
        hx-get="/partials/header.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const HeaderWithControl: Story = {
  render: () => `
    <section
        hx-get="/partials/header-with-control.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const HeaderWithLogoIcon: Story = {
  render: () => `
    <section
        hx-get="/partials/header-with-logo-icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const CompleteHeader: Story = {
  render: () => `
    <section
        hx-get="/partials/complete-header.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};
