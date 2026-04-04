import { Box, Card, Text } from "@radix-ui/themes";
import RadixProvider from "./RadixProvider";

export default function DatePickerDemo() {
	return (
		<RadixProvider>
			<Box>
				<Card style={{ maxWidth: 480 }}>
					<Text as="p" size="3" weight="bold" mb="2">
						内蔵 DatePicker なし
					</Text>
					<Text as="p" size="2" color="gray">
						Radix Themes には DatePicker コンポーネントが含まれていません。
						日付選択が必要な場合は、サードパーティのライブラリ（react-day-picker
						など）を組み合わせて使用する必要があります。
					</Text>
				</Card>
			</Box>
		</RadixProvider>
	);
}
