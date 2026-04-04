import { Badge, Box, Table } from "@radix-ui/themes";
import { statusColor, timeTrackerData } from "../sampleData";
import RadixProvider from "./RadixProvider";

export default function TableDemo() {
	return (
		<RadixProvider>
			<Box>
				<Table.Root variant="surface">
					<Table.Header>
						<Table.Row>
							<Table.ColumnHeaderCell>タスク</Table.ColumnHeaderCell>
							<Table.ColumnHeaderCell>プロジェクト</Table.ColumnHeaderCell>
							<Table.ColumnHeaderCell>作業時間</Table.ColumnHeaderCell>
							<Table.ColumnHeaderCell>日付</Table.ColumnHeaderCell>
							<Table.ColumnHeaderCell>ステータス</Table.ColumnHeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{timeTrackerData.map((row) => (
							<Table.Row key={row.id}>
								<Table.RowHeaderCell>{row.task}</Table.RowHeaderCell>
								<Table.Cell>{row.project}</Table.Cell>
								<Table.Cell>{row.duration}</Table.Cell>
								<Table.Cell>{row.date}</Table.Cell>
								<Table.Cell>
									<Badge color={statusColor(row.status)}>{row.status}</Badge>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Box>
		</RadixProvider>
	);
}
