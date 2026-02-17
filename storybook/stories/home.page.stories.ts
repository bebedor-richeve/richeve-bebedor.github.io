import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Pages/Home Page" };
export default meta;

type Story = StoryObj;

export const HomePage: Story = {
  render: () => `
    <home-page
        class="
            list-item

            group-list
            list
        "

        hx-get="/pages/home.page.html"
        hx-trigger="load"
        hx-swap="outerHTML"
    />
  `
};
