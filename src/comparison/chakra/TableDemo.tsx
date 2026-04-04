import {
	Badge,
	TableBody,
	TableCell,
	TableColumnHeader,
	TableHeader,
	TableRoot,
	TableRow,
	VStack,
} from "@chakra-ui/react";
import { statusColor, timeTrackerData } from "../sampleData";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function TableDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start">
				<TableRoot variant="outline">
					<TableHeader>
						<TableRow>
							<TableColumnHeader>タスク</TableColumnHeader>
							<TableColumnHeader>プロジェクト</TableColumnHeader>
							<TableColumnHeader>作業時間</TableColumnHeader>
							<TableColumnHeader>日付</TableColumnHeader>
							<TableColumnHeader>ステータス</TableColumnHeader>
						</TableRow>
					</TableHeader>
					<TableBody>
						{timeTrackerData.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.task}</TableCell>
								<TableCell>{row.project}</TableCell>
								<TableCell>{row.duration}</TableCell>
								<TableCell>{row.date}</TableCell>
								<TableCell>
									<Badge colorPalette={statusColor(row.status)}>
										{row.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</TableRoot>
			</VStack>
		</ChakraProviderWrapper>
	);
}
