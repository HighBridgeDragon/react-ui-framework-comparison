import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function TypographyDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack align="start" gap={4}>
				<p style={{ fontWeight: 600, marginBottom: 4 }}>見出し</p>
				<VStack align="start" gap={1}>
					<Heading size="4xl">見出し 1</Heading>
					<Heading size="3xl">見出し 2</Heading>
					<Heading size="2xl">見出し 3</Heading>
					<Heading size="xl">見出し 4</Heading>
					<Heading size="lg">見出し 5</Heading>
					<Heading size="md">見出し 6</Heading>
				</VStack>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>本文テキスト</p>
				<VStack align="start" gap={1}>
					<Text fontSize="lg">
						本文 大:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text fontSize="md">
						本文 中:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text fontSize="sm">
						本文 小:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text fontSize="xs">キャプション</Text>
				</VStack>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>装飾</p>
				<VStack align="start" gap={1}>
					<Text fontWeight="bold">太字テキスト</Text>
					<Text fontStyle="italic">イタリックテキスト</Text>
					<Link href="#">リンクテキスト</Link>
					<Text>
						<code>コードテキスト</code>
					</Text>
					<Text textDecoration="line-through">取り消し線テキスト</Text>
					<Text>
						通常テキストに<strong>太字</strong>と<em>斜体</em>と
						<Link href="#">リンク</Link>を混在
					</Text>
				</VStack>
			</VStack>
		</ChakraProviderWrapper>
	);
}
