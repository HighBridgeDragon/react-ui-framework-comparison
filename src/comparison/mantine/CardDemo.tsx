import { Button, Card, Group, Text } from "@mantine/core";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function CardDemo() {
	return (
		<MantineProviderWrapper>
			<div style={{ maxWidth: 360 }}>
				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Card.Section withBorder inheritPadding py="xs">
						<Text fw={500}>タイムトラッカー</Text>
					</Card.Section>

					<Text size="sm" c="dimmed" mt="md">
						日々のタスクとプロジェクトを効率的に管理します。
					</Text>

					<Text size="sm" c="dimmed" mt="xs">
						本日の合計: 8時間30分
					</Text>

					<Group mt="md">
						<Button variant="outline">編集</Button>
						<Button variant="filled">詳細</Button>
					</Group>
				</Card>
			</div>
		</MantineProviderWrapper>
	);
}
