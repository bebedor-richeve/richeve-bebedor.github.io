import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Page List Item" };
export default meta;

type Story = StoryObj;

export const PageListItem: Story = {
  render: () => `
    <aside
        class="
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
        >
            <nav>
                <ul
                    class="
                        page-list
                        list
                    "

                    hx-get="/stories/page-list-item.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </section>
    </aside>
  `
};

export const PageListItemWithControl: Story = {
  render: () => `
    <aside
        class="
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
        >
            <nav>
                <ul
                    class="
                        page-list
                        list
                    "

                    hx-get="/stories/page-list-item-with-control.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </section>
    </aside>
  `
};

export const PageListItemWithIcon: Story = {
  render: () => `
    <aside
        class="
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
        >
            <nav>
                <ul
                    class="
                        page-list
                        list
                    "

                    hx-get="/stories/page-list-item-with-icon.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </aside>
    </section>
  `
};

export const CompletePageListItem: Story = {
  render: () => `
    <aside
        class="
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
        >
            <nav>
                <ul
                    class="
                        page-list
                        list
                    "

                    hx-get="/stories/complete-page-list-item.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </aside>
    </section>
  `
};
