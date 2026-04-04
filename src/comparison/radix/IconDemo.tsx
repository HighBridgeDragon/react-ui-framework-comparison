import { Badge, Box, Button, Flex, IconButton, Text } from "@radix-ui/themes";
import { Bell, House, Loader2, Search, Settings, Trash2 } from "lucide-react";
import RadixProvider from "./RadixProvider";

export default function IconDemo() {
	return (
		<RadixProvider>
			<Box>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>
					基本アイコン（サイズ）
				</p>
				<Flex gap="5" mb="4" align="center">
					<Flex direction="column" align="center" gap="1">
						<House size={16} />
						<Text size="1" color="gray">
							小
						</Text>
					</Flex>
					<Flex direction="column" align="center" gap="1">
						<Search size={24} />
						<Text size="1" color="gray">
							中
						</Text>
					</Flex>
					<Flex direction="column" align="center" gap="1">
						<Settings size={32} />
						<Text size="1" color="gray">
							大
						</Text>
					</Flex>
				</Flex>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>色・スタイル</p>
				<Flex gap="5" mb="4" align="center">
					<House size={24} style={{ color: "var(--accent-9)" }} />
					<Search size={24} style={{ color: "var(--gray-9)" }} />
					<Settings size={24} style={{ color: "#e91e63" }} />
				</Flex>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>ボタン内アイコン</p>
				<Flex gap="3" mb="4" align="center" wrap="wrap">
					<Button>
						<House size={16} />
						ホーム
					</Button>
					<Button variant="outline">
						<Trash2 size={16} />
						削除
					</Button>
					<IconButton variant="soft">
						<Settings size={16} />
					</IconButton>
				</Flex>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>インタラクティブ</p>
				<Flex gap="5" align="center">
					<Loader2
						size={24}
						style={{
							animation: "spin 1s linear infinite",
						}}
					/>
					<Box style={{ position: "relative", display: "inline-flex" }}>
						<Bell size={24} />
						<Badge
							color="red"
							variant="solid"
							style={{
								position: "absolute",
								top: -4,
								right: -8,
							}}
						>
							3
						</Badge>
					</Box>
				</Flex>
			</Box>
		</RadixProvider>
	);
}
