import { Box, Flex, Tabs, Text } from "@radix-ui/themes";
import { completeTasks, inProgressTasks, timeTrackerData } from "../sampleData";
import RadixProvider from "./RadixProvider";

export default function TabsDemo() {
	return (
		<RadixProvider>
			<Box>
				<Tabs.Root defaultValue="all">
					<Tabs.List>
						<Tabs.Trigger value="all">すべて</Tabs.Trigger>
						<Tabs.Trigger value="complete">完了</Tabs.Trigger>
						<Tabs.Trigger value="in-progress">進行中</Tabs.Trigger>
					</Tabs.List>

					<Box pt="3">
						<Tabs.Content value="all">
							<Flex direction="column" gap="2">
								{timeTrackerData.map((t) => (
									<Text key={t.id} as="p" size="2">
										{t.task} — {t.duration}
									</Text>
								))}
							</Flex>
						</Tabs.Content>

						<Tabs.Content value="complete">
							<Flex direction="column" gap="2">
								{completeTasks.map((t) => (
									<Text key={t.id} as="p" size="2">
										{t.task} — {t.duration}
									</Text>
								))}
							</Flex>
						</Tabs.Content>

						<Tabs.Content value="in-progress">
							<Flex direction="column" gap="2">
								{inProgressTasks.map((t) => (
									<Text key={t.id} as="p" size="2">
										{t.task} — {t.duration}
									</Text>
								))}
							</Flex>
						</Tabs.Content>
					</Box>
				</Tabs.Root>
			</Box>
		</RadixProvider>
	);
}
