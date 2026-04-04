import { Input } from "@/components/ui/input";
import ShadcnScope from "./ShadcnScope";

export default function InputDemo() {
	return (
		<ShadcnScope className="space-y-4 max-w-md">
			<div className="space-y-2">
				<label htmlFor="task-name-input" className="text-sm font-medium">
					タスク名
				</label>
				<Input id="task-name-input" placeholder="タスク名を入力" />
			</div>

			<div className="space-y-2">
				<label htmlFor="password-input" className="text-sm font-medium">
					パスワード
				</label>
				<Input id="password-input" type="password" />
			</div>

			<div className="space-y-2">
				<label htmlFor="email-input" className="text-sm font-medium">
					メールアドレス
				</label>
				<Input id="email-input" aria-invalid="true" />
				<p className="text-sm text-destructive">無効なメールアドレス</p>
			</div>

			<div className="space-y-2">
				<label htmlFor="project-input" className="text-sm font-medium">
					プロジェクト
				</label>
				<Input id="project-input" value="Acme Corp" disabled />
			</div>
		</ShadcnScope>
	);
}
