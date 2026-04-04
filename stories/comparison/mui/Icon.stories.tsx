import type { Meta, StoryObj } from "@storybook/react-vite";
import IconDemo from "../../../src/comparison/mui/IconDemo";

const meta = {
	title: "フレームワーク比較/MUI/Icon",
	component: IconDemo,
} satisfies Meta<typeof IconDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
