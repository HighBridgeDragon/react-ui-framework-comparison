import type { Meta, StoryObj } from "@storybook/react-vite";
import TypographyDemo from "../../../src/comparison/radix/TypographyDemo";

const meta = {
	title: "フレームワーク比較/Radix Themes/Typography",
	component: TypographyDemo,
} satisfies Meta<typeof TypographyDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
