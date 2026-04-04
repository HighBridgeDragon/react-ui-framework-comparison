import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import RadixProvider from "./RadixProvider";

export default function CardDemo() {
	return (
		<RadixProvider>
			<Box>
				<Card style={{ maxWidth: 400 }}>
					<Heading size="3" mb="2">
						タイムトラッカー
					</Heading>
					<Text as="p" size="2" color="gray" mb="2">
						日々のタスクとプロジェクトを効率的に管理します。
					</Text>
					<Text as="p" size="2" color="gray" mb="3">
						本日の合計: 8時間30分
					</Text>
					<Flex gap="2">
						<Button size="2" variant="outline">
							編集
						</Button>
						<Button size="2" variant="solid">
							詳細
						</Button>
					</Flex>
				</Card>
			</Box>
		</RadixProvider>
	);
}
