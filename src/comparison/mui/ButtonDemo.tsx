import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import MuiProvider from "./MuiProvider";

export default function ButtonDemo() {
	return (
		<MuiProvider>
			<p style={{ fontWeight: 600, marginBottom: 4 }}>バリエーション</p>
			<Stack direction="row" spacing={2} sx={{ mb: 3 }}>
				<Button variant="contained">プライマリ</Button>
				<Button variant="outlined">アウトライン</Button>
				<Button variant="text">テキスト</Button>
			</Stack>

			<p style={{ fontWeight: 600, marginBottom: 4 }}>サイズ</p>
			<Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
				<Button variant="contained" size="small">
					小
				</Button>
				<Button variant="contained" size="medium">
					中
				</Button>
				<Button variant="contained" size="large">
					大
				</Button>
			</Stack>

			<p style={{ fontWeight: 600, marginBottom: 4 }}>状態</p>
			<Stack direction="row" spacing={2} alignItems="center">
				<Button variant="contained" disabled>
					無効
				</Button>
				<Button
					variant="contained"
					disabled
					startIcon={<CircularProgress size={16} color="inherit" />}
				>
					読み込み中...
				</Button>
			</Stack>
		</MuiProvider>
	);
}
