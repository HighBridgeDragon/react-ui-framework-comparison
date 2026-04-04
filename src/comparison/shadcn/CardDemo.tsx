import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import ShadcnScope from "./ShadcnScope";

export default function CardDemo() {
	return (
		<ShadcnScope className="space-y-4 max-w-lg">
			<Card>
				<CardHeader>
					<CardTitle>タイムトラッカー</CardTitle>
					<CardDescription>
						日々のタスクとプロジェクトを効率的に管理します。
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-sm">本日の合計: 8時間30分</p>
				</CardContent>
				<CardFooter className="gap-2">
					<Button variant="outline">編集</Button>
					<Button>詳細</Button>
				</CardFooter>
			</Card>
		</ShadcnScope>
	);
}
