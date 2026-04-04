import type { Meta, StoryObj } from "@storybook/react-vite";
import TypographyDemo from "../../../src/comparison/mantine/TypographyDemo";

const meta = {
	title: "フレームワーク比較/Mantine/Typography",
	component: TypographyDemo,
} satisfies Meta<typeof TypographyDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
