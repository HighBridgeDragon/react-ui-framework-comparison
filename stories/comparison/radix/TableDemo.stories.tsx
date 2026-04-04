import type { Meta, StoryObj } from "@storybook/react-vite";
import TableDemo from "../../../src/comparison/radix/TableDemo";

const meta = {
	title: "フレームワーク比較/Radix Themes/Table",
	component: TableDemo,
} satisfies Meta<typeof TableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
