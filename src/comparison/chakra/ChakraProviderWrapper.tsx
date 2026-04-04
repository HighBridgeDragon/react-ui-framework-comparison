import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig);

export default function ChakraProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
