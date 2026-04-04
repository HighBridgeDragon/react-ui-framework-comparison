import type { Meta, StoryObj } from "@storybook/react-vite";
import IconDemo from "../../../src/comparison/mantine/IconDemo";

const meta = {
	title: "フレームワーク比較/Mantine/Icon",
	component: IconDemo,
} satisfies Meta<typeof IconDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
