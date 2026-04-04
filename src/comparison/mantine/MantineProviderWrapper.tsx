import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import "./mantine-styles-layered.css";

interface MantineProviderWrapperProps {
	children: ReactNode;
}

export default function MantineProviderWrapper({
	children,
}: MantineProviderWrapperProps) {
	return <MantineProvider>{children}</MantineProvider>;
}
