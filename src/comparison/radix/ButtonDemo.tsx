import { Box, Button, Flex } from "@radix-ui/themes";
import RadixProvider from "./RadixProvider";

export default function ButtonDemo() {
	return (
		<RadixProvider>
			<Box>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>バリエーション</p>
				<Flex gap="3" mb="4" wrap="wrap">
					<Button variant="solid">プライマリ</Button>
					<Button variant="outline">アウトライン</Button>
					<Button variant="ghost">テキスト</Button>
				</Flex>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>サイズ</p>
				<Flex gap="3" mb="4" align="center">
					<Button size="1">小</Button>
					<Button size="2">中</Button>
					<Button size="3">大</Button>
				</Flex>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>状態</p>
				<Flex gap="3" mb="4">
					<Button disabled>無効</Button>
					<Button disabled>読み込み中...</Button>
				</Flex>
			</Box>
		</RadixProvider>
	);
}
