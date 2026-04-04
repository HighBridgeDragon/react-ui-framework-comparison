import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import ShadcnScope from "./ShadcnScope";

export default function DialogDemo() {
	return (
		<ShadcnScope className="space-y-4">
			<Dialog>
				<DialogTrigger asChild>
					<Button>タスクの削除</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>タスクの削除</DialogTitle>
						<DialogDescription>
							このタスクを削除してもよろしいですか？この操作は元に戻せません。
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline">キャンセル</Button>
						<Button variant="destructive">削除</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</ShadcnScope>
	);
}
