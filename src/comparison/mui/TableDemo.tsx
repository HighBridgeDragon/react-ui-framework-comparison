import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useMemo, useState } from "react";
import { timeTrackerData } from "../sampleData";
import MuiProvider from "./MuiProvider";

type SortKey = "task" | "project" | "duration" | "date" | "status";
type SortDirection = "asc" | "desc";

const statusColor: Record<string, "success" | "info" | "warning"> = {
	完了: "success",
	進行中: "info",
	未着手: "warning",
};

const columns: { key: SortKey; label: string }[] = [
	{ key: "task", label: "タスク" },
	{ key: "project", label: "プロジェクト" },
	{ key: "duration", label: "作業時間" },
	{ key: "date", label: "日付" },
	{ key: "status", label: "ステータス" },
];

export default function TableDemo() {
	const [sortKey, setSortKey] = useState<SortKey>("date");
	const [sortDir, setSortDir] = useState<SortDirection>("asc");

	const handleSort = (key: SortKey) => {
		if (sortKey === key) {
			setSortDir((d) => (d === "asc" ? "desc" : "asc"));
		} else {
			setSortKey(key);
			setSortDir("asc");
		}
	};

	const sorted = useMemo(
		() =>
			[...timeTrackerData].sort((a, b) => {
				const aVal = a[sortKey];
				const bVal = b[sortKey];
				const cmp = aVal.localeCompare(bVal);
				return sortDir === "asc" ? cmp : -cmp;
			}),
		[sortKey, sortDir],
	);

	return (
		<MuiProvider>
			<TableContainer component={Paper}>
				<Table size="small">
					<TableHead>
						<TableRow>
							{columns.map((col) => (
								<TableCell key={col.key}>
									<TableSortLabel
										active={sortKey === col.key}
										direction={sortKey === col.key ? sortDir : "asc"}
										onClick={() => handleSort(col.key)}
									>
										{col.label}
									</TableSortLabel>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{sorted.map((row) => (
							<TableRow key={row.id} hover>
								<TableCell>{row.task}</TableCell>
								<TableCell>{row.project}</TableCell>
								<TableCell>{row.duration}</TableCell>
								<TableCell>{row.date}</TableCell>
								<TableCell>
									<Chip
										label={row.status}
										color={statusColor[row.status] ?? "default"}
										size="small"
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</MuiProvider>
	);
}
