import type { Meta, StoryObj } from "@storybook/react-vite";
import DialogDemo from "../../../src/comparison/mantine/DialogDemo";

const meta = {
	title: "フレームワーク比較/Mantine/Dialog",
	component: DialogDemo,
} satisfies Meta<typeof DialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
