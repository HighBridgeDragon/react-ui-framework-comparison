import { Space, Typography } from "antd";
import AntdProvider from "./AntdProvider";

const { Title, Paragraph, Text, Link } = Typography;

export default function TypographyDemo() {
	return (
		<AntdProvider>
			<Typography>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>見出し</p>
				<Space direction="vertical" size={0} style={{ marginBottom: 16 }}>
					<Title level={1}>見出し 1</Title>
					<Title level={2}>見出し 2</Title>
					<Title level={3}>見出し 3</Title>
					<Title level={4}>見出し 4</Title>
					<Title level={5}>見出し 5</Title>
				</Space>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>本文テキスト</p>
				<Space
					direction="vertical"
					size={4}
					style={{ marginBottom: 16, display: "flex" }}
				>
					<Paragraph>
						本文:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Paragraph>
					<Paragraph type="secondary">
						セカンダリ:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Paragraph>
					<Text type="secondary">キャプション（secondary）</Text>
				</Space>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>装飾</p>
				<Space direction="vertical" size={4} style={{ display: "flex" }}>
					<Text strong>太字テキスト</Text>
					<Text italic>イタリックテキスト</Text>
					<Link href="#">リンクテキスト</Link>
					<Text code>コードテキスト</Text>
					<Text delete>取り消し線テキスト</Text>
					<Paragraph>
						通常テキストに<Text strong>太字</Text>と<Text italic>斜体</Text>と
						<Link href="#">リンク</Link>を混在
					</Paragraph>
				</Space>
			</Typography>
		</AntdProvider>
	);
}
