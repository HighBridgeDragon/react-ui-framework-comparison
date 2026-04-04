import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import MuiProvider from "./MuiProvider";

export default function DialogDemo() {
	const [open, setOpen] = useState(false);

	return (
		<MuiProvider>
			<Button variant="contained" color="error" onClick={() => setOpen(true)}>
				タスクの削除
			</Button>

			<Dialog open={open} onClose={() => setOpen(false)}>
				<DialogTitle>タスクの削除</DialogTitle>
				<DialogContent>
					<DialogContentText>
						このタスクを削除してもよろしいですか？この操作は元に戻せません。
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>キャンセル</Button>
					<Button
						onClick={() => setOpen(false)}
						color="error"
						variant="contained"
					>
						削除
					</Button>
				</DialogActions>
			</Dialog>
		</MuiProvider>
	);
}
