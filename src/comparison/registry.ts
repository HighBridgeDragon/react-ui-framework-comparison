import { lazy } from "react";
import type { ComponentType, FrameworkName } from "./componentTypes";

type LazyComponent = React.LazyExoticComponent<React.ComponentType>;

export const componentRegistry: Record<
	FrameworkName,
	Record<ComponentType, LazyComponent>
> = {
	MUI: {
		Button: lazy(() => import("./mui/ButtonDemo")),
		Input: lazy(() => import("./mui/InputDemo")),
		Card: lazy(() => import("./mui/CardDemo")),
		Table: lazy(() => import("./mui/TableDemo")),
		Dialog: lazy(() => import("./mui/DialogDemo")),
		DatePicker: lazy(() => import("./mui/DatePickerDemo")),
		Tabs: lazy(() => import("./mui/TabsDemo")),
		Icon: lazy(() => import("./mui/IconDemo")),
		Typography: lazy(() => import("./mui/TypographyDemo")),
	},
	"Chakra UI": {
		Button: lazy(() => import("./chakra/ButtonDemo")),
		Input: lazy(() => import("./chakra/InputDemo")),
		Card: lazy(() => import("./chakra/CardDemo")),
		Table: lazy(() => import("./chakra/TableDemo")),
		Dialog: lazy(() => import("./chakra/DialogDemo")),
		DatePicker: lazy(() => import("./chakra/DatePickerDemo")),
		Tabs: lazy(() => import("./chakra/TabsDemo")),
		Icon: lazy(() => import("./chakra/IconDemo")),
		Typography: lazy(() => import("./chakra/TypographyDemo")),
	},
	"shadcn/ui": {
		Button: lazy(() => import("./shadcn/ButtonDemo")),
		Input: lazy(() => import("./shadcn/InputDemo")),
		Card: lazy(() => import("./shadcn/CardDemo")),
		Table: lazy(() => import("./shadcn/TableDemo")),
		Dialog: lazy(() => import("./shadcn/DialogDemo")),
		DatePicker: lazy(() => import("./shadcn/DatePickerDemo")),
		Tabs: lazy(() => import("./shadcn/TabsDemo")),
		Icon: lazy(() => import("./shadcn/IconDemo")),
		Typography: lazy(() => import("./shadcn/TypographyDemo")),
	},
	"Ant Design": {
		Button: lazy(() => import("./antd/ButtonDemo")),
		Input: lazy(() => import("./antd/InputDemo")),
		Card: lazy(() => import("./antd/CardDemo")),
		Table: lazy(() => import("./antd/TableDemo")),
		Dialog: lazy(() => import("./antd/DialogDemo")),
		DatePicker: lazy(() => import("./antd/DatePickerDemo")),
		Tabs: lazy(() => import("./antd/TabsDemo")),
		Icon: lazy(() => import("./antd/IconDemo")),
		Typography: lazy(() => import("./antd/TypographyDemo")),
	},
	Mantine: {
		Button: lazy(() => import("./mantine/ButtonDemo")),
		Input: lazy(() => import("./mantine/InputDemo")),
		Card: lazy(() => import("./mantine/CardDemo")),
		Table: lazy(() => import("./mantine/TableDemo")),
		Dialog: lazy(() => import("./mantine/DialogDemo")),
		DatePicker: lazy(() => import("./mantine/DatePickerDemo")),
		Tabs: lazy(() => import("./mantine/TabsDemo")),
		Icon: lazy(() => import("./mantine/IconDemo")),
		Typography: lazy(() => import("./mantine/TypographyDemo")),
	},
	"Radix Themes": {
		Button: lazy(() => import("./radix/ButtonDemo")),
		Input: lazy(() => import("./radix/InputDemo")),
		Card: lazy(() => import("./radix/CardDemo")),
		Table: lazy(() => import("./radix/TableDemo")),
		Dialog: lazy(() => import("./radix/DialogDemo")),
		DatePicker: lazy(() => import("./radix/DatePickerDemo")),
		Tabs: lazy(() => import("./radix/TabsDemo")),
		Icon: lazy(() => import("./radix/IconDemo")),
		Typography: lazy(() => import("./radix/TypographyDemo")),
	},
};
