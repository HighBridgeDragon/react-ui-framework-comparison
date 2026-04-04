import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiProvider from "./MuiProvider";

export default function TypographyDemo() {
	return (
		<MuiProvider>
			<p style={{ fontWeight: 600, marginBottom: 4 }}>見出し</p>
			<Stack spacing={1} sx={{ mb: 3 }}>
				<Typography variant="h1">見出し 1</Typography>
				<Typography variant="h2">見出し 2</Typography>
				<Typography variant="h3">見出し 3</Typography>
				<Typography variant="h4">見出し 4</Typography>
				<Typography variant="h5">見出し 5</Typography>
				<Typography variant="h6">見出し 6</Typography>
			</Stack>

			<p style={{ fontWeight: 600, marginBottom: 4 }}>本文テキスト</p>
			<Stack spacing={1} sx={{ mb: 3 }}>
				<Typography variant="body1">
					本文1:
					吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
				</Typography>
				<Typography variant="body2">
					本文2:
					吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
				</Typography>
				<Typography variant="subtitle1">サブタイトル1</Typography>
				<Typography variant="subtitle2">サブタイトル2</Typography>
				<Typography variant="caption">キャプション</Typography>
				<Typography variant="overline">オーバーライン</Typography>
			</Stack>

			<p style={{ fontWeight: 600, marginBottom: 4 }}>装飾</p>
			<Stack spacing={1}>
				<Typography>
					<strong>太字テキスト</strong>
				</Typography>
				<Typography>
					<em>イタリックテキスト</em>
				</Typography>
				<Typography>
					<Link href="#">リンクテキスト</Link>
				</Typography>
				<Typography>
					<code>コードテキスト</code>
				</Typography>
				<Typography>
					<del>取り消し線テキスト</del>
				</Typography>
				<Typography>
					通常テキストに<strong>太字</strong>と<em>斜体</em>と
					<Link href="#">リンク</Link>を混在
				</Typography>
			</Stack>
		</MuiProvider>
	);
}
