import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { useState } from "react";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function DialogDemo() {
	const [opened, setOpened] = useState(false);

	return (
		<MantineProviderWrapper>
			<Stack gap="md">
				<Group>
					<Button color="red" onClick={() => setOpened(true)}>
						タスクの削除
					</Button>
				</Group>

				<Modal
					opened={opened}
					onClose={() => setOpened(false)}
					title="タスクの削除"
				>
					<Text size="sm">
						このタスクを削除してもよろしいですか？この操作は元に戻せません。
					</Text>
					<Group justify="flex-end" mt="md">
						<Button variant="subtle" onClick={() => setOpened(false)}>
							キャンセル
						</Button>
						<Button color="red" onClick={() => setOpened(false)}>
							削除
						</Button>
					</Group>
				</Modal>
			</Stack>
		</MantineProviderWrapper>
	);
}
