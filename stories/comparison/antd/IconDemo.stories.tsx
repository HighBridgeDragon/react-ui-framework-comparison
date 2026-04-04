import type { Meta, StoryObj } from "@storybook/react-vite";
import IconDemo from "../../../src/comparison/antd/IconDemo";

const meta = {
	title: "フレームワーク比較/Ant Design/Icon",
	component: IconDemo,
} satisfies Meta<typeof IconDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
