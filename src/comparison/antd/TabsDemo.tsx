import { Tabs } from "antd";
import {
	completeTasks,
	inProgressTasks,
	type TimeEntry,
	timeTrackerData,
} from "../sampleData";
import AntdProvider from "./AntdProvider";

function TaskList({ entries }: { entries: readonly TimeEntry[] }) {
	return (
		<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
			{entries.map((entry) => (
				<li key={entry.id} style={{ padding: "4px 0" }}>
					{entry.task} — {entry.duration}
				</li>
			))}
		</ul>
	);
}

const items = [
	{
		key: "all",
		label: "すべて",
		children: <TaskList entries={timeTrackerData} />,
	},
	{
		key: "complete",
		label: "完了",
		children: <TaskList entries={completeTasks} />,
	},
	{
		key: "in-progress",
		label: "進行中",
		children: <TaskList entries={inProgressTasks} />,
	},
];

export default function TabsDemo() {
	return (
		<AntdProvider>
			<Tabs defaultActiveKey="all" items={items} />
		</AntdProvider>
	);
}
