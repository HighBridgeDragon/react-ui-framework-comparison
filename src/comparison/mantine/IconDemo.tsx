import {
	ActionIcon,
	Button,
	Group,
	Indicator,
	Loader,
	Stack,
	Text,
} from "@mantine/core";
import {
	IconBell,
	IconHome,
	IconSearch,
	IconSettings,
	IconTrash,
} from "@tabler/icons-react";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function IconDemo() {
	return (
		<MantineProviderWrapper>
			<Stack gap="lg">
				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>
						基本アイコン（サイズ）
					</p>
					<Group gap="xl" align="center">
						<Stack align="center" gap={4}>
							<IconHome size={16} />
							<Text size="xs" c="dimmed">
								小
							</Text>
						</Stack>
						<Stack align="center" gap={4}>
							<IconSearch size={24} />
							<Text size="xs" c="dimmed">
								中
							</Text>
						</Stack>
						<Stack align="center" gap={4}>
							<IconSettings size={32} />
							<Text size="xs" c="dimmed">
								大
							</Text>
						</Stack>
					</Group>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>色・スタイル</p>
					<Group gap="xl" align="center">
						<IconHome size={24} color="var(--mantine-color-blue-6)" />
						<IconSearch size={24} color="var(--mantine-color-gray-6)" />
						<IconSettings size={24} color="#e91e63" />
					</Group>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>ボタン内アイコン</p>
					<Group>
						<Button leftSection={<IconHome size={16} />}>ホーム</Button>
						<Button variant="outline" leftSection={<IconTrash size={16} />}>
							削除
						</Button>
						<ActionIcon variant="filled">
							<IconSettings size={16} />
						</ActionIcon>
					</Group>
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>インタラクティブ</p>
					<Group gap="xl" align="center">
						<Loader size="sm" />
						<Indicator label="3" size={16}>
							<IconBell size={24} />
						</Indicator>
					</Group>
				</div>
			</Stack>
		</MantineProviderWrapper>
	);
}
