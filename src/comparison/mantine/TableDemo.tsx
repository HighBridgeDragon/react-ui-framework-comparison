import { Badge, Table } from "@mantine/core";
import { statusColor, timeTrackerData } from "../sampleData";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function TableDemo() {
	const rows = timeTrackerData.map((row) => (
		<Table.Tr key={row.id}>
			<Table.Td>{row.task}</Table.Td>
			<Table.Td>{row.project}</Table.Td>
			<Table.Td>{row.duration}</Table.Td>
			<Table.Td>{row.date}</Table.Td>
			<Table.Td>
				<Badge color={statusColor(row.status)} variant="light">
					{row.status}
				</Badge>
			</Table.Td>
		</Table.Tr>
	));

	return (
		<MantineProviderWrapper>
			<Table striped highlightOnHover withTableBorder withColumnBorders>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>タスク</Table.Th>
						<Table.Th>プロジェクト</Table.Th>
						<Table.Th>作業時間</Table.Th>
						<Table.Th>日付</Table.Th>
						<Table.Th>ステータス</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>{rows}</Table.Tbody>
			</Table>
		</MantineProviderWrapper>
	);
}
