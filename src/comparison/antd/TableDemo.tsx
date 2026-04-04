import type { TableColumnsType } from "antd";
import { Table, Tag } from "antd";
import { type TimeEntry, timeTrackerData } from "../sampleData";
import AntdProvider from "./AntdProvider";

const columns: TableColumnsType<TimeEntry> = [
	{
		title: "タスク",
		dataIndex: "task",
		key: "task",
		sorter: (a, b) => a.task.localeCompare(b.task),
	},
	{
		title: "プロジェクト",
		dataIndex: "project",
		key: "project",
		sorter: (a, b) => a.project.localeCompare(b.project),
	},
	{
		title: "作業時間",
		dataIndex: "duration",
		key: "duration",
	},
	{
		title: "日付",
		dataIndex: "date",
		key: "date",
		sorter: (a, b) => a.date.localeCompare(b.date),
	},
	{
		title: "ステータス",
		dataIndex: "status",
		key: "status",
		render: (status: string) => {
			const color =
				status === "完了" ? "green" : status === "進行中" ? "blue" : "orange";
			return <Tag color={color}>{status}</Tag>;
		},
		sorter: (a, b) => a.status.localeCompare(b.status),
	},
];

export default function TableDemo() {
	return (
		<AntdProvider>
			<Table<TimeEntry>
				dataSource={timeTrackerData}
				columns={columns}
				rowKey="id"
				pagination={false}
			/>
		</AntdProvider>
	);
}
