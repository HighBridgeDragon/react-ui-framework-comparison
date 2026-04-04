import { Flex, Heading, Link, Text } from "@radix-ui/themes";
import RadixProvider from "./RadixProvider";

export default function TypographyDemo() {
	return (
		<RadixProvider>
			<Flex direction="column" gap="4">
				<p style={{ fontWeight: 600, marginBottom: 4 }}>見出し</p>
				<Flex direction="column" gap="1">
					<Heading size="9">見出し 1</Heading>
					<Heading size="8">見出し 2</Heading>
					<Heading size="7">見出し 3</Heading>
					<Heading size="6">見出し 4</Heading>
					<Heading size="5">見出し 5</Heading>
					<Heading size="4">見出し 6</Heading>
				</Flex>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>本文テキスト</p>
				<Flex direction="column" gap="1">
					<Text as="p" size="5">
						本文 大:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text as="p" size="3">
						本文 中:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text as="p" size="2">
						本文 小:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text as="p" size="1">
						キャプション
					</Text>
				</Flex>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>装飾</p>
				<Flex direction="column" gap="1">
					<Text as="p" weight="bold">
						太字テキスト
					</Text>
					<Text as="p">
						<em>イタリックテキスト</em>
					</Text>
					<Link href="#">リンクテキスト</Link>
					<Text as="p">
						<code>コードテキスト</code>
					</Text>
					<Text as="p">
						<del>取り消し線テキスト</del>
					</Text>
					<Text as="p">
						通常テキストに<strong>太字</strong>と<em>斜体</em>と
						<Link href="#">リンク</Link>を混在
					</Text>
				</Flex>
			</Flex>
		</RadixProvider>
	);
}
