import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import type { SyntheticEvent } from "react";
import { useState } from "react";
import { completeTasks, inProgressTasks, timeTrackerData } from "../sampleData";
import MuiProvider from "./MuiProvider";

function TabPanel({
	value,
	index,
	children,
}: {
	value: number;
	index: number;
	children: React.ReactNode;
}) {
	if (value !== index) return null;
	return <Box sx={{ p: 2 }}>{children}</Box>;
}

function TaskList({ entries }: { entries: typeof timeTrackerData }) {
	return (
		<Stack spacing={1}>
			{entries.map((entry) => (
				<Stack key={entry.id} direction="row" spacing={1} alignItems="center">
					<Typography variant="body2" sx={{ minWidth: 120 }}>
						{entry.task}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{entry.duration}
					</Typography>
				</Stack>
			))}
		</Stack>
	);
}

export default function TabsDemo() {
	const [tab, setTab] = useState(0);

	const handleChange = (_: SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

	return (
		<MuiProvider>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={tab} onChange={handleChange}>
					<Tab label="すべて" />
					<Tab label="完了" />
					<Tab label="進行中" />
				</Tabs>
			</Box>

			<TabPanel value={tab} index={0}>
				<TaskList entries={timeTrackerData} />
			</TabPanel>

			<TabPanel value={tab} index={1}>
				<TaskList entries={completeTasks} />
			</TabPanel>

			<TabPanel value={tab} index={2}>
				<TaskList entries={inProgressTasks} />
			</TabPanel>
		</MuiProvider>
	);
}
