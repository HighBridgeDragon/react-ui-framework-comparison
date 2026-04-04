import ShadcnScope from "./ShadcnScope";

export default function DatePickerDemo() {
	return (
		<ShadcnScope className="space-y-4">
			<div className="rounded-lg border border-dashed p-6 text-center">
				<p className="text-muted-foreground">内蔵 DatePicker なし</p>
				<p className="mt-2 text-sm text-muted-foreground">
					shadcn/ui には内蔵の DatePicker コンポーネントがありません。Popover と
					Calendar コンポーネントを react-day-picker
					と組み合わせて日付選択を構成できます。
				</p>
			</div>
		</ShadcnScope>
	);
}
