import { Stack, Text } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { useState } from "react";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function DatePickerDemo() {
	const [date, setDate] = useState<Date | null>(null);

	return (
		<MantineProviderWrapper>
			<Stack gap="lg" style={{ maxWidth: 400 }}>
				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>日付選択</p>
					<DatePicker
						value={date}
						onChange={(value) => setDate(value as Date | null)}
					/>
					{date && (
						<Text size="sm" mt="xs" c="dimmed">
							選択済み: {date.toLocaleDateString()}
						</Text>
					)}
				</div>

				<div>
					<p style={{ fontWeight: 600, marginBottom: 4 }}>時刻入力</p>
					<TimeInput label="開始時刻" />
					<TimeInput label="終了時刻" mt="sm" />
				</div>
			</Stack>
		</MantineProviderWrapper>
	);
}
