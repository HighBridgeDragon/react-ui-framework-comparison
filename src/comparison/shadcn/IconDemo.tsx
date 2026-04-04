import { Bell, House, Loader2, Search, Settings, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShadcnScope from "./ShadcnScope";

export default function IconDemo() {
	return (
		<ShadcnScope className="space-y-4">
			<div>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>
					基本アイコン（サイズ）
				</p>
				<div className="flex flex-wrap items-center gap-6">
					<div className="flex flex-col items-center gap-1">
						<House className="h-4 w-4" />
						<span className="text-xs">小</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Search className="h-6 w-6" />
						<span className="text-xs">中</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Settings className="h-8 w-8" />
						<span className="text-xs">大</span>
					</div>
				</div>
			</div>

			<div>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>色・スタイル</p>
				<div className="flex flex-wrap items-center gap-6">
					<House className="h-6 w-6 text-blue-500" />
					<Search className="h-6 w-6 text-gray-500" />
					<Settings className="h-6 w-6 text-pink-500" />
				</div>
			</div>

			<div>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>ボタン内アイコン</p>
				<div className="flex flex-wrap items-center gap-2">
					<Button>
						<House className="mr-2 h-4 w-4" />
						ホーム
					</Button>
					<Button variant="outline">
						<Trash2 className="mr-2 h-4 w-4" />
						削除
					</Button>
					<Button variant="outline" size="icon">
						<Settings className="h-4 w-4" />
					</Button>
				</div>
			</div>

			<div>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>インタラクティブ</p>
				<div className="flex flex-wrap items-center gap-6">
					<Loader2 className="h-6 w-6 animate-spin" />
					<div className="relative inline-flex">
						<Bell className="h-6 w-6" />
						<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
							3
						</span>
					</div>
				</div>
			</div>
		</ShadcnScope>
	);
}
