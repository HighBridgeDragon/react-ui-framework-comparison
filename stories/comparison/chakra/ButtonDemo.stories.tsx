import type { Meta, StoryObj } from "@storybook/react-vite";
import ButtonDemo from "../../../src/comparison/chakra/ButtonDemo";

const meta = {
	title: "フレームワーク比較/Chakra UI/Button",
	component: ButtonDemo,
} satisfies Meta<typeof ButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
