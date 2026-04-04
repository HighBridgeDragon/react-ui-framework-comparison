import { Suspense } from "react";
import type { ComponentType, FrameworkName } from "./componentTypes";
import { FRAMEWORK_NAMES } from "./componentTypes";
import { componentRegistry } from "./registry";

const COMPONENT_LABELS: Record<ComponentType, string> = {
	Button: "ボタン",
	Input: "入力",
	Card: "カード",
	Table: "テーブル",
	Dialog: "ダイアログ",
	DatePicker: "日付選択",
	Tabs: "タブ",
	Icon: "アイコン",
	Typography: "タイポグラフィ",
};

function FrameworkPanel({
	framework,
	componentType,
}: {
	framework: FrameworkName;
	componentType: ComponentType;
}) {
	const Component = componentRegistry[framework][componentType];

	return (
		<div
			style={{
				border: "1px solid #e0e0e0",
				borderRadius: 8,
				padding: 16,
				minWidth: 0,
				overflow: "auto",
				fontSize: 14,
			}}
		>
			<h3
				style={{
					margin: "0 0 12px 0",
					fontSize: 14,
					color: "#666",
					borderBottom: "1px solid #eee",
					paddingBottom: 8,
				}}
			>
				{framework} — {COMPONENT_LABELS[componentType]}デモ
			</h3>
			<Suspense fallback={<div>読み込み中...</div>}>
				<Component />
			</Suspense>
		</div>
	);
}

export default function SideBySide({
	componentType,
}: {
	componentType: ComponentType;
}) {
	return (
		<div>
			<h2 style={{ marginBottom: 16 }}>{componentType} 比較</h2>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: 16,
				}}
			>
				{FRAMEWORK_NAMES.map((fw) => (
					<FrameworkPanel
						key={fw}
						framework={fw}
						componentType={componentType}
					/>
				))}
			</div>
		</div>
	);
}
