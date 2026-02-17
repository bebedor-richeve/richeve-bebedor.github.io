import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Home Page" };
export default meta;

type Story = StoryObj;

export const HomePage: Story = {
  render: () => `
    <section
        class="
            list-item

            group-list
            list
        "

        hx-get="/stories/home.page.html"
        hx-trigger="load"
        hx-swap="outerHTML"
    />
  `
};
