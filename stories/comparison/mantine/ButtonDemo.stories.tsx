import type { Meta, StoryObj } from "@storybook/react-vite";
import ButtonDemo from "../../../src/comparison/mantine/ButtonDemo";

const meta = {
	title: "フレームワーク比較/Mantine/Button",
	component: ButtonDemo,
} satisfies Meta<typeof ButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
