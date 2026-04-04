import {
	BellOutlined,
	DeleteOutlined,
	HomeOutlined,
	LoadingOutlined,
	SearchOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Badge, Button, Space, Typography } from "antd";
import AntdProvider from "./AntdProvider";

const { Text } = Typography;

export default function IconDemo() {
	return (
		<AntdProvider>
			<Space direction="vertical" size="middle" style={{ width: "100%" }}>
				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>
						基本アイコン（サイズ）
					</p>
					<div style={{ marginTop: 8 }}>
						<Space size="large" align="center">
							<Space direction="vertical" align="center" size={4}>
								<HomeOutlined style={{ fontSize: 16 }} />
								<Text type="secondary" style={{ fontSize: 12 }}>
									小
								</Text>
							</Space>
							<Space direction="vertical" align="center" size={4}>
								<SearchOutlined style={{ fontSize: 24 }} />
								<Text type="secondary" style={{ fontSize: 12 }}>
									中
								</Text>
							</Space>
							<Space direction="vertical" align="center" size={4}>
								<SettingOutlined style={{ fontSize: 32 }} />
								<Text type="secondary" style={{ fontSize: 12 }}>
									大
								</Text>
							</Space>
						</Space>
					</div>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>色・スタイル</p>
					<div style={{ marginTop: 8 }}>
						<Space size="large" align="center">
							<HomeOutlined style={{ fontSize: 24, color: "#1677ff" }} />
							<SearchOutlined style={{ fontSize: 24, color: "#8c8c8c" }} />
							<SettingOutlined style={{ fontSize: 24, color: "#e91e63" }} />
						</Space>
					</div>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>ボタン内アイコン</p>
					<div style={{ marginTop: 8 }}>
						<Space wrap>
							<Button type="primary" icon={<HomeOutlined />}>
								ホーム
							</Button>
							<Button icon={<DeleteOutlined />}>削除</Button>
							<Button
								type="primary"
								shape="circle"
								icon={<SettingOutlined />}
							/>
						</Space>
					</div>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>インタラクティブ</p>
					<div style={{ marginTop: 8 }}>
						<Space size="large" align="center">
							<LoadingOutlined style={{ fontSize: 24 }} />
							<Badge count={3}>
								<BellOutlined style={{ fontSize: 24 }} />
							</Badge>
						</Space>
					</div>
				</div>
			</Space>
		</AntdProvider>
	);
}
