import { Button, Group, Stack } from "@mantine/core";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function ButtonDemo() {
	return (
		<MantineProviderWrapper>
			<Stack gap="lg">
				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>バリエーション</p>
					<Group>
						<Button variant="filled">プライマリ</Button>
						<Button variant="outline">アウトライン</Button>
						<Button variant="subtle">テキスト</Button>
					</Group>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>サイズ</p>
					<Group align="center">
						<Button size="sm">小</Button>
						<Button size="md">中</Button>
						<Button size="lg">大</Button>
					</Group>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>状態</p>
					<Group>
						<Button disabled>無効</Button>
						<Button loading>読み込み中...</Button>
					</Group>
				</div>
			</Stack>
		</MantineProviderWrapper>
	);
}
