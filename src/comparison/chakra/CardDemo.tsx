import {
	Button,
	CardBody,
	CardDescription,
	CardFooter,
	CardHeader,
	CardRoot,
	CardTitle,
	HStack,
	VStack,
} from "@chakra-ui/react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function CardDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start">
				<CardRoot maxW="sm">
					<CardHeader>
						<CardTitle>タイムトラッカー</CardTitle>
						<CardDescription>
							日々のタスクとプロジェクトを効率的に管理します。
						</CardDescription>
					</CardHeader>
					<CardBody>本日の合計: 8時間30分</CardBody>
					<CardFooter>
						<HStack gap="3">
							<Button variant="outline">編集</Button>
							<Button colorPalette="blue" variant="solid">
								詳細
							</Button>
						</HStack>
					</CardFooter>
				</CardRoot>
			</VStack>
		</ChakraProviderWrapper>
	);
}
