import { Button } from "@/components/ui/button";
import ShadcnScope from "./ShadcnScope";

export default function ButtonDemo() {
	return (
		<ShadcnScope className="space-y-4">
			<div>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>バリエーション</p>
				<div className="flex flex-wrap gap-2">
					<Button variant="default">プライマリ</Button>
					<Button variant="outline">アウトライン</Button>
					<Button variant="ghost">テキスト</Button>
				</div>
			</div>

			<div>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>サイズ</p>
				<div className="flex flex-wrap items-center gap-2">
					<Button size="sm">小</Button>
					<Button size="default">中</Button>
					<Button size="lg">大</Button>
				</div>
			</div>

			<div>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>状態</p>
				<div className="flex flex-wrap gap-2">
					<Button disabled>無効</Button>
					<Button disabled>読み込み中...</Button>
				</div>
			</div>
		</ShadcnScope>
	);
}
