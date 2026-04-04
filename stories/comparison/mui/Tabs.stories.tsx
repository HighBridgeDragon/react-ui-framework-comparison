import type { Meta, StoryObj } from "@storybook/react-vite";
import TabsDemo from "../../../src/comparison/mui/TabsDemo";

const meta = {
	title: "フレームワーク比較/MUI/Tabs",
	component: TabsDemo,
} satisfies Meta<typeof TabsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
