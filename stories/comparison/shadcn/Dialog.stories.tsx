import type { Meta, StoryObj } from "@storybook/react-vite";
import DialogDemo from "../../../src/comparison/shadcn/DialogDemo";

const meta = {
	title: "フレームワーク比較/shadcn/Dialog",
	component: DialogDemo,
} satisfies Meta<typeof DialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
