import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import MuiProvider from "./MuiProvider";

export default function CardDemo() {
	return (
		<MuiProvider>
			<Card sx={{ maxWidth: 400 }}>
				<CardHeader
					title="タイムトラッカー"
					subheader="本日の合計: 8時間30分"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						日々のタスクとプロジェクトを効率的に管理します。
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" variant="outlined">
						編集
					</Button>
					<Button size="small" variant="contained">
						詳細
					</Button>
				</CardActions>
			</Card>
		</MuiProvider>
	);
}
