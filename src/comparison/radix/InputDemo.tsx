import { Box, Flex, Text, TextField } from "@radix-ui/themes";
import RadixProvider from "./RadixProvider";

export default function InputDemo() {
	return (
		<RadixProvider>
			<Box>
				<Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
					<Box>
						<Text as="label" size="2" weight="bold" mb="1">
							タスク名
						</Text>
						<TextField.Root placeholder="タスク名を入力" />
					</Box>

					<Box>
						<Text as="label" size="2" weight="bold" mb="1">
							パスワード
						</Text>
						<TextField.Root type="password" placeholder="" />
					</Box>

					<Box>
						<Text as="label" size="2" weight="bold" mb="1">
							メールアドレス
						</Text>
						<TextField.Root color="red" placeholder="" />
						<Text size="1" color="red" mt="1" as="p">
							無効なメールアドレス
						</Text>
					</Box>

					<Box>
						<Text as="label" size="2" weight="bold" mb="1">
							プロジェクト
						</Text>
						<TextField.Root value="Acme Corp" disabled />
					</Box>
				</Flex>
			</Box>
		</RadixProvider>
	);
}
