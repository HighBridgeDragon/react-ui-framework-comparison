import { Button, HStack, VStack } from "@chakra-ui/react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function ButtonDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start">
				<VStack gap="3" align="start">
					<p style={{ fontWeight: 600, marginBottom: 4 }}>バリエーション</p>
					<HStack gap="3">
						<Button colorPalette="blue" variant="solid">
							プライマリ
						</Button>
						<Button colorPalette="blue" variant="outline">
							アウトライン
						</Button>
						<Button colorPalette="blue" variant="ghost">
							テキスト
						</Button>
					</HStack>
				</VStack>

				<VStack gap="3" align="start">
					<p style={{ fontWeight: 600, marginBottom: 4 }}>サイズ</p>
					<HStack gap="3" align="center">
						<Button colorPalette="blue" size="sm">
							小
						</Button>
						<Button colorPalette="blue" size="md">
							中
						</Button>
						<Button colorPalette="blue" size="lg">
							大
						</Button>
					</HStack>
				</VStack>

				<VStack gap="3" align="start">
					<p style={{ fontWeight: 600, marginBottom: 4 }}>状態</p>
					<HStack gap="3">
						<Button colorPalette="blue" disabled>
							無効
						</Button>
						<Button colorPalette="blue" loading>
							読み込み中...
						</Button>
					</HStack>
				</VStack>
			</VStack>
		</ChakraProviderWrapper>
	);
}
