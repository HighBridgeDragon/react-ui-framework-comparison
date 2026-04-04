import {
	List,
	TabsContent,
	TabsList,
	TabsRoot,
	TabsTrigger,
	VStack,
} from "@chakra-ui/react";
import { completeTasks, inProgressTasks, timeTrackerData } from "../sampleData";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

function TaskList({ items }: { items: typeof timeTrackerData }) {
	return (
		<List.Root pt="4" gap="1">
			{items.map((item) => (
				<List.Item key={item.id}>
					{item.task} — {item.duration}
				</List.Item>
			))}
		</List.Root>
	);
}

export default function TabsDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start">
				<TabsRoot defaultValue="all" variant="line">
					<TabsList>
						<TabsTrigger value="all">すべて</TabsTrigger>
						<TabsTrigger value="complete">完了</TabsTrigger>
						<TabsTrigger value="in-progress">進行中</TabsTrigger>
					</TabsList>

					<TabsContent value="all">
						<TaskList items={timeTrackerData} />
					</TabsContent>

					<TabsContent value="complete">
						<TaskList items={completeTasks} />
					</TabsContent>

					<TabsContent value="in-progress">
						<TaskList items={inProgressTasks} />
					</TabsContent>
				</TabsRoot>
			</VStack>
		</ChakraProviderWrapper>
	);
}
