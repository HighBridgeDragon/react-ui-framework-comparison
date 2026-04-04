import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import MuiProvider from "./MuiProvider";

export default function DatePickerDemo() {
	const [date, setDate] = useState<Dayjs | null>(dayjs("2026-03-28"));
	const [time, setTime] = useState<Dayjs | null>(dayjs().hour(9).minute(0));

	return (
		<MuiProvider>
			<Stack spacing={3} sx={{ maxWidth: 300 }}>
				<DatePicker
					label="日付を選択"
					value={date}
					onChange={(newValue) => setDate(newValue)}
				/>

				<TimePicker
					label="時刻を選択"
					value={time}
					onChange={(newValue) => setTime(newValue)}
				/>

				<Typography variant="body2" color="text.secondary">
					選択済み: {date?.format("YYYY-MM-DD") ?? "なし"} /{" "}
					{time?.format("HH:mm") ?? "なし"}
				</Typography>
			</Stack>
		</MuiProvider>
	);
}
