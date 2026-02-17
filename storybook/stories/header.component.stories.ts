import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Header" };
export default meta;

type Story = StoryObj;

export const PageTreeHeader: Story = {
  render: () => `
    <aside
        class="
            page-tree
            list

            left-sidebar
            sidebar
            bar
        "
    >
        <section
            class="
                list-item

                group-list
                list
            "

            hx-get="/stories/page-tree-header.component.html"
            hx-trigger="load"
            hx-swap="innerHTML"
        />
    </aside>
  `
};

export const PageTreeHeaderWithControl: Story = {
  render: () => `
    <aside
        class="
            page-tree
            list

            left-sidebar
            sidebar
            bar
        "
    >
        <section
            class="
                list-item

                group-list
                list
            "

            hx-get="/stories/page-tree-header-with-control.component.html"
            hx-trigger="load"
            hx-swap="innerHTML"
        />
    </aside>
  `
};

export const PageTreeHeaderWithLogoIcon: Story = {
  render: () => `
    <aside
        class="
            page-tree
            list

            left-sidebar
            sidebar
            bar
        "
    >
        <section
            class="
                list-item

                group-list
                list
            "

            hx-get="/stories/page-tree-header-with-logo-icon.component.html"
            hx-trigger="load"
            hx-swap="innerHTML"
        />
    </aside>
  `
};

export const CompletePageTreeHeader: Story = {
  render: () => `
    <aside
        class="
            page-tree
            list

            left-sidebar
            sidebar
            bar
        "
    >
        <section
            class="
                list-item

                group-list
                list
            "

            hx-get="/stories/complete-page-tree-header.component.html"
            hx-trigger="load"
            hx-swap="innerHTML"
        />
    </aside>
  `
};
