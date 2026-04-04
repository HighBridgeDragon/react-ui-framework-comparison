import type { Meta, StoryObj } from "@storybook/react-vite";
import TabsDemo from "../../../src/comparison/chakra/TabsDemo";

const meta = {
	title: "フレームワーク比較/Chakra UI/Tabs",
	component: TabsDemo,
} satisfies Meta<typeof TabsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
