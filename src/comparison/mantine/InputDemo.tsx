import { PasswordInput, Stack, TextInput } from "@mantine/core";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function InputDemo() {
	return (
		<MantineProviderWrapper>
			<Stack gap="md" style={{ maxWidth: 400 }}>
				<TextInput label="タスク名" placeholder="タスク名を入力" />
				<PasswordInput label="パスワード" />
				<TextInput label="メールアドレス" error="無効なメールアドレス" />
				<TextInput label="プロジェクト" value="Acme Corp" disabled />
			</Stack>
		</MantineProviderWrapper>
	);
}
