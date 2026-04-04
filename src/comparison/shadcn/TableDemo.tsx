import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { statusColor, timeTrackerData } from "../sampleData";
import ShadcnScope from "./ShadcnScope";

export default function TableDemo() {
	return (
		<ShadcnScope className="space-y-4">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>タスク</TableHead>
						<TableHead>プロジェクト</TableHead>
						<TableHead>作業時間</TableHead>
						<TableHead>日付</TableHead>
						<TableHead>ステータス</TableHead>
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
								<span className={`text-${statusColor(row.status)}-600`}>
									{row.status}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</ShadcnScope>
	);
}
