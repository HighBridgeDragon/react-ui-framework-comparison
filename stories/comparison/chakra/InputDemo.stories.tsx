import type { Meta, StoryObj } from "@storybook/react-vite";
import InputDemo from "../../../src/comparison/chakra/InputDemo";

const meta = {
	title: "フレームワーク比較/Chakra UI/Input",
	component: InputDemo,
} satisfies Meta<typeof InputDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
