import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerDemo from "../../../src/comparison/antd/DatePickerDemo";

const meta = {
	title: "フレームワーク比較/Ant Design/DatePicker",
	component: DatePickerDemo,
} satisfies Meta<typeof DatePickerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
