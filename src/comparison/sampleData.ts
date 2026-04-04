export type TimeEntry = {
	id: number;
	task: string;
	project: string;
	duration: string;
	date: string;
	status: "完了" | "進行中" | "未着手";
};

export const timeTrackerData: TimeEntry[] = [
	{
		id: 1,
		task: "デザインレビュー",
		project: "Acme Corp",
		duration: "2h 15m",
		date: "2026-03-28",
		status: "完了",
	},
	{
		id: 2,
		task: "API連携",
		project: "Acme Corp",
		duration: "4h 30m",
		date: "2026-03-29",
		status: "進行中",
	},
	{
		id: 3,
		task: "ユニットテスト",
		project: "バックエンド",
		duration: "1h 45m",
		date: "2026-03-29",
		status: "完了",
	},
	{
		id: 4,
		task: "バグ修正 #142",
		project: "Acme Corp",
		duration: "0h 50m",
		date: "2026-03-30",
		status: "進行中",
	},
	{
		id: 5,
		task: "ドキュメント作成",
		project: "バックエンド",
		duration: "3h 00m",
		date: "2026-03-31",
		status: "未着手",
	},
];

export const completeTasks = timeTrackerData.filter((d) => d.status === "完了");
export const inProgressTasks = timeTrackerData.filter(
	(d) => d.status === "進行中",
);

export function statusColor(
	status: string,
): "green" | "blue" | "yellow" | "gray" {
	switch (status) {
		case "完了":
			return "green";
		case "進行中":
			return "blue";
		case "未着手":
			return "yellow";
		default:
			return "gray";
	}
}
