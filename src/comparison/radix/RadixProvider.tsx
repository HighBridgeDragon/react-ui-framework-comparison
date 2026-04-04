import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

interface RadixProviderProps {
	children: React.ReactNode;
}

export default function RadixProvider({ children }: RadixProviderProps) {
	return (
		<Theme accentColor="blue" grayColor="slate" radius="medium">
			{children}
		</Theme>
	);
}
