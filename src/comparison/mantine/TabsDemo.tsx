import { Group, Stack, Tabs, Text } from "@mantine/core";
import {
	completeTasks,
	inProgressTasks,
	type TimeEntry,
	timeTrackerData,
} from "../sampleData";
import MantineProviderWrapper from "./MantineProviderWrapper";

function TaskList({ items }: { items: readonly TimeEntry[] }) {
	return (
		<Stack gap="xs">
			{items.map((item) => (
				<Group key={item.id} justify="space-between">
					<Text size="sm">{item.task}</Text>
					<Text size="sm" c="dimmed">
						{item.duration}
					</Text>
				</Group>
			))}
		</Stack>
	);
}

export default function TabsDemo() {
	return (
		<MantineProviderWrapper>
			<Tabs defaultValue="all">
				<Tabs.List>
					<Tabs.Tab value="all">すべて</Tabs.Tab>
					<Tabs.Tab value="complete">完了</Tabs.Tab>
					<Tabs.Tab value="inprogress">進行中</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value="all" pt="md">
					<TaskList items={timeTrackerData} />
				</Tabs.Panel>

				<Tabs.Panel value="complete" pt="md">
					<TaskList items={completeTasks} />
				</Tabs.Panel>

				<Tabs.Panel value="inprogress" pt="md">
					<TaskList items={inProgressTasks} />
				</Tabs.Panel>
			</Tabs>
		</MantineProviderWrapper>
	);
}
