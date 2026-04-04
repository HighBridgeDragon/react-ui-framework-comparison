import { Text, VStack } from "@chakra-ui/react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function DatePickerDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start">
				<Text color="fg.muted">
					Chakra UI には内蔵の DatePicker がありません
				</Text>
			</VStack>
		</ChakraProviderWrapper>
	);
}
