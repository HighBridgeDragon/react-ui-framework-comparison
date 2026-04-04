import type { Meta, StoryObj } from "@storybook/react-vite";
import CardDemo from "../../../src/comparison/radix/CardDemo";

const meta = {
	title: "フレームワーク比較/Radix Themes/Card",
	component: CardDemo,
} satisfies Meta<typeof CardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
