export const COMPONENT_TYPES = [
	"Button",
	"Input",
	"Card",
	"Table",
	"Dialog",
	"DatePicker",
	"Tabs",
	"Icon",
	"Typography",
] as const;
export type ComponentType = (typeof COMPONENT_TYPES)[number];

export const FRAMEWORK_NAMES = [
	"MUI",
	"Chakra UI",
	"shadcn/ui",
	"Ant Design",
	"Mantine",
	"Radix Themes",
] as const;
export type FrameworkName = (typeof FRAMEWORK_NAMES)[number];
