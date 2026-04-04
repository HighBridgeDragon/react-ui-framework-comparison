import Delete from "@mui/icons-material/Delete";
import Home from "@mui/icons-material/Home";
import Notifications from "@mui/icons-material/Notifications";
import Search from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiProvider from "./MuiProvider";

export default function IconDemo() {
	return (
		<MuiProvider>
			<p style={{ fontWeight: 600, marginBottom: 4 }}>基本アイコン（サイズ）</p>
			<Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
				<Stack alignItems="center" spacing={0.5}>
					<Home fontSize="small" />
					<Typography variant="caption">小</Typography>
				</Stack>
				<Stack alignItems="center" spacing={0.5}>
					<Search fontSize="medium" />
					<Typography variant="caption">中</Typography>
				</Stack>
				<Stack alignItems="center" spacing={0.5}>
					<Settings fontSize="large" />
					<Typography variant="caption">大</Typography>
				</Stack>
			</Stack>

			<p style={{ fontWeight: 600, marginBottom: 4 }}>色・スタイル</p>
			<Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
				<Home color="primary" />
				<Search color="secondary" />
				<Settings sx={{ color: "#e91e63" }} />
			</Stack>

			<p style={{ fontWeight: 600, marginBottom: 4 }}>ボタン内アイコン</p>
			<Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
				<Button variant="contained" startIcon={<Home />}>
					ホーム
				</Button>
				<Button variant="outlined" startIcon={<Delete />}>
					削除
				</Button>
				<IconButton color="primary">
					<Settings />
				</IconButton>
			</Stack>

			<p style={{ fontWeight: 600, marginBottom: 4 }}>インタラクティブ</p>
			<Stack direction="row" spacing={3} alignItems="center">
				<CircularProgress size={24} />
				<Badge badgeContent={3} color="error">
					<Notifications />
				</Badge>
			</Stack>
		</MuiProvider>
	);
}
