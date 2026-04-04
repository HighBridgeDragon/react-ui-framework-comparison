import type { Meta, StoryObj } from "@storybook/react-vite";
import TypographyDemo from "../../../src/comparison/chakra/TypographyDemo";

const meta = {
	title: "フレームワーク比較/Chakra UI/Typography",
	component: TypographyDemo,
} satisfies Meta<typeof TypographyDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
