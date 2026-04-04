import { DatePicker, Space, TimePicker } from "antd";
import AntdProvider from "./AntdProvider";

export default function DatePickerDemo() {
	return (
		<AntdProvider>
			<Space direction="vertical" size="middle">
				<DatePicker placeholder="日付を選択" />
				<DatePicker picker="week" placeholder="週を選択" />
				<DatePicker picker="month" placeholder="月を選択" />
				<TimePicker placeholder="時刻を選択" />
				<DatePicker.RangePicker />
			</Space>
		</AntdProvider>
	);
}
