import type { Meta, StoryObj } from "@storybook/react-vite";
import CardDemo from "../../../src/comparison/mui/CardDemo";

const meta = {
	title: "フレームワーク比較/MUI/Card",
	component: CardDemo,
} satisfies Meta<typeof CardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
