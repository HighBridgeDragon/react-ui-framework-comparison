import { Input, Space, Typography } from "antd";
import AntdProvider from "./AntdProvider";

const { Text } = Typography;

export default function InputDemo() {
	return (
		<AntdProvider>
			<Space direction="vertical" size="middle" style={{ width: 320 }}>
				<div>
					<Text strong>タスク名</Text>
					<Input placeholder="タスク名を入力" />
				</div>
				<div>
					<Text strong>パスワード</Text>
					<Input.Password placeholder="パスワードを入力" />
				</div>
				<div>
					<Text strong>メールアドレス</Text>
					<Input status="error" placeholder="メールアドレスを入力" />
					<Text type="danger" style={{ fontSize: 12 }}>
						無効なメールアドレス
					</Text>
				</div>
				<div>
					<Text strong>プロジェクト</Text>
					<Input disabled value="Acme Corp" />
				</div>
			</Space>
		</AntdProvider>
	);
}
