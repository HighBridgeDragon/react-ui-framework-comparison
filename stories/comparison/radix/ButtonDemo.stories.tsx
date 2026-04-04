import type { Meta, StoryObj } from "@storybook/react-vite";
import ButtonDemo from "../../../src/comparison/radix/ButtonDemo";

const meta = {
	title: "フレームワーク比較/Radix Themes/Button",
	component: ButtonDemo,
} satisfies Meta<typeof ButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
