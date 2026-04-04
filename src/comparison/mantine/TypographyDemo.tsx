import { Anchor, Code, Stack, Text, Title } from "@mantine/core";
import MantineProviderWrapper from "./MantineProviderWrapper";

export default function TypographyDemo() {
	return (
		<MantineProviderWrapper>
			<Stack gap="md">
				<p style={{ fontWeight: 600, marginBottom: 4 }}>見出し</p>
				<Stack gap={4}>
					<Title order={1}>見出し 1</Title>
					<Title order={2}>見出し 2</Title>
					<Title order={3}>見出し 3</Title>
					<Title order={4}>見出し 4</Title>
					<Title order={5}>見出し 5</Title>
					<Title order={6}>見出し 6</Title>
				</Stack>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>本文テキスト</p>
				<Stack gap={4}>
					<Text size="lg">
						本文 大:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text size="md">
						本文 中:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text size="sm">
						本文 小:
						吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。
					</Text>
					<Text size="xs" c="dimmed">
						キャプション
					</Text>
				</Stack>

				<p style={{ fontWeight: 600, marginBottom: 4 }}>装飾</p>
				<Stack gap={4}>
					<Text fw={700}>太字テキスト</Text>
					<Text fs="italic">イタリックテキスト</Text>
					<Anchor href="#">リンクテキスト</Anchor>
					<Code>コードテキスト</Code>
					<Text td="line-through">取り消し線テキスト</Text>
					<Text>
						通常テキストに
						<Text span fw={700}>
							太字
						</Text>
						と
						<Text span fs="italic">
							斜体
						</Text>
						と<Anchor href="#">リンク</Anchor>を混在
					</Text>
				</Stack>
			</Stack>
		</MantineProviderWrapper>
	);
}
