import ShadcnScope from "./ShadcnScope";

export default function TypographyDemo() {
	return (
		<ShadcnScope>
			<div className="space-y-4">
				<p style={{ fontWeight: 600, marginBottom: 4 }}>見出し</p>
				<div className="space-y-1">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
						見出し 1
					</h1>
					<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
						見出し 2
					</h2>
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
						見出し 3
					</h3>
					<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
						見出し 4
					</h4>
					<h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
						見出し 5
					</h5>
					<h6 className="scroll-m-20 text-base font-semibold tracking-tight">
						見出し 6
					</h6>
				</div>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>本文テキスト</p>
				<div className="space-y-1">
					<p className="text-lg leading-7">
						本文 大:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</p>
					<p className="text-base leading-7">
						本文 中:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</p>
					<p className="text-sm leading-6">
						本文 小:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</p>
					<p className="text-xs text-muted-foreground">キャプション</p>
				</div>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>装飾</p>
				<div className="space-y-1">
					<p className="font-bold">太字テキスト</p>
					<p className="italic">イタリックテキスト</p>
					<p>
						<a href="https://example.com" className="underline text-primary">
							リンクテキスト
						</a>
					</p>
					<p>
						<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
							コードテキスト
						</code>
					</p>
					<p className="line-through">取り消し線テキスト</p>
					<p>
						通常テキストに<strong>太字</strong>と<em>斜体</em>と
						<a href="https://example.com" className="underline text-primary">
							リンク
						</a>
						を混在
					</p>
				</div>
			</div>
		</ShadcnScope>
	);
}
