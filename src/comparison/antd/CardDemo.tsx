import { Button, Card } from "antd";
import AntdProvider from "./AntdProvider";

export default function CardDemo() {
	return (
		<AntdProvider>
			<Card
				title="タイムトラッカー"
				style={{ width: 360 }}
				actions={[
					<Button type="link" key="edit">
						編集
					</Button>,
					<Button type="primary" key="details">
						詳細
					</Button>,
				]}
			>
				<p>日々のタスクとプロジェクトを効率的に管理します。</p>
				<p>本日の合計: 8時間30分</p>
			</Card>
		</AntdProvider>
	);
}
