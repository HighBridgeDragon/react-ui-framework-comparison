import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerDemo from "../../../src/comparison/mantine/DatePickerDemo";

const meta = {
	title: "フレームワーク比較/Mantine/DatePicker",
	component: DatePickerDemo,
} satisfies Meta<typeof DatePickerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
