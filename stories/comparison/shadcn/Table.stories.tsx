import type { Meta, StoryObj } from "@storybook/react-vite";
import TableDemo from "../../../src/comparison/shadcn/TableDemo";

const meta = {
	title: "フレームワーク比較/shadcn/Table",
	component: TableDemo,
} satisfies Meta<typeof TableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
