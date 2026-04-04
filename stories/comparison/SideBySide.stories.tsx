import type { Meta, StoryObj } from "@storybook/react-vite";
import { COMPONENT_TYPES } from "../../src/comparison/componentTypes";
import SideBySide from "../../src/comparison/SideBySide";

const meta = {
	title: "フレームワーク比較/並列比較",
	component: SideBySide,
	argTypes: {
		componentType: {
			control: "select",
			options: [...COMPONENT_TYPES],
		},
	},
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof SideBySide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = { args: { componentType: "Button" } };
export const Input: Story = { args: { componentType: "Input" } };
export const Card: Story = { args: { componentType: "Card" } };
export const Table: Story = { args: { componentType: "Table" } };
export const Dialog: Story = { args: { componentType: "Dialog" } };
export const DatePicker: Story = { args: { componentType: "DatePicker" } };
export const Tabs: Story = { args: { componentType: "Tabs" } };
export const Icon: Story = { args: { componentType: "Icon" } };
export const Typography: Story = { args: { componentType: "Typography" } };
