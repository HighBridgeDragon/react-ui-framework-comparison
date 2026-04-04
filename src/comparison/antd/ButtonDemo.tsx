import { Button, Space } from "antd";
import AntdProvider from "./AntdProvider";

export default function ButtonDemo() {
	return (
		<AntdProvider>
			<Space direction="vertical" size="middle">
				<Space wrap>
					<Button type="primary">プライマリ</Button>
					<Button type="default">アウトライン</Button>
					<Button type="text">テキスト</Button>
				</Space>

				<Space wrap>
					<Button type="primary" size="small">
						小
					</Button>
					<Button type="primary" size="middle">
						中
					</Button>
					<Button type="primary" size="large">
						大
					</Button>
				</Space>

				<Space wrap>
					<Button disabled>無効</Button>
					<Button type="primary" loading>
						読み込み中...
					</Button>
				</Space>
			</Space>
		</AntdProvider>
	);
}
