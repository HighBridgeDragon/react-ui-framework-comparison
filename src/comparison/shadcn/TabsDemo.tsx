import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	completeTasks,
	inProgressTasks,
	type TimeEntry,
	timeTrackerData,
} from "../sampleData";
import ShadcnScope from "./ShadcnScope";

function TaskList({ entries }: { entries: TimeEntry[] }) {
	return (
		<ul className="space-y-1 text-sm">
			{entries.map((row) => (
				<li key={row.id}>
					{row.task} — {row.duration}
				</li>
			))}
		</ul>
	);
}

export default function TabsDemo() {
	return (
		<ShadcnScope className="space-y-4 max-w-lg">
			<Tabs defaultValue="all">
				<TabsList>
					<TabsTrigger value="all">すべて</TabsTrigger>
					<TabsTrigger value="complete">完了</TabsTrigger>
					<TabsTrigger value="in-progress">進行中</TabsTrigger>
				</TabsList>
				<TabsContent value="all" className="mt-3">
					<TaskList entries={timeTrackerData} />
				</TabsContent>
				<TabsContent value="complete" className="mt-3">
					<TaskList entries={completeTasks} />
				</TabsContent>
				<TabsContent value="in-progress" className="mt-3">
					<TaskList entries={inProgressTasks} />
				</TabsContent>
			</Tabs>
		</ShadcnScope>
	);
}
