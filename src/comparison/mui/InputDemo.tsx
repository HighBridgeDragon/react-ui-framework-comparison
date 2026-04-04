import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MuiProvider from "./MuiProvider";

export default function InputDemo() {
	return (
		<MuiProvider>
			<Stack spacing={3} sx={{ maxWidth: 400 }}>
				<TextField label="タスク名" placeholder="タスク名を入力" />

				<TextField label="パスワード" type="password" />

				<TextField
					label="メールアドレス"
					error
					helperText="無効なメールアドレス"
				/>

				<TextField label="プロジェクト" value="Acme Corp" disabled />
			</Stack>
		</MuiProvider>
	);
}
