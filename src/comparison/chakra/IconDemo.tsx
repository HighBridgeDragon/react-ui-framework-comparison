import {
	Box,
	Button,
	HStack,
	IconButton,
	Spinner,
	VStack,
} from "@chakra-ui/react";
import { Bell, House, Search, Settings, Trash2 } from "lucide-react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function IconDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start">
				<VStack gap="3" align="start">
					<p style={{ fontWeight: 600, marginBottom: 4 }}>
						基本アイコン（サイズ）
					</p>
					<HStack gap="6" align="center">
						<VStack gap="1">
							<House size={16} />
							<Box fontSize="xs">小</Box>
						</VStack>
						<VStack gap="1">
							<Search size={24} />
							<Box fontSize="xs">中</Box>
						</VStack>
						<VStack gap="1">
							<Settings size={32} />
							<Box fontSize="xs">大</Box>
						</VStack>
					</HStack>
				</VStack>

				<VStack gap="3" align="start">
					<p style={{ fontWeight: 600, marginBottom: 4 }}>色・スタイル</p>
					<HStack gap="6" align="center">
						<House size={24} color="var(--chakra-colors-blue-500)" />
						<Search size={24} color="var(--chakra-colors-gray-500)" />
						<Settings size={24} color="#e91e63" />
					</HStack>
				</VStack>

				<VStack gap="3" align="start">
					<p style={{ fontWeight: 600, marginBottom: 4 }}>ボタン内アイコン</p>
					<HStack gap="3">
						<Button colorPalette="blue" variant="solid">
							<House size={16} />
							ホーム
						</Button>
						<Button colorPalette="red" variant="outline">
							<Trash2 size={16} />
							削除
						</Button>
						<IconButton colorPalette="blue" variant="ghost" aria-label="設定">
							<Settings size={16} />
						</IconButton>
					</HStack>
				</VStack>

				<VStack gap="3" align="start">
					<p style={{ fontWeight: 600, marginBottom: 4 }}>インタラクティブ</p>
					<HStack gap="6" align="center">
						<Spinner size="md" />
						<Box position="relative" display="inline-flex">
							<Bell size={24} />
							<Box
								position="absolute"
								top="-1"
								right="-1"
								bg="red.500"
								color="white"
								borderRadius="full"
								w="5"
								h="5"
								display="flex"
								alignItems="center"
								justifyContent="center"
								fontSize="xs"
							>
								3
							</Box>
						</Box>
					</HStack>
				</VStack>
			</VStack>
		</ChakraProviderWrapper>
	);
}
