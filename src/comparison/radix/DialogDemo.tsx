import { Box, Button, Dialog, Flex } from "@radix-ui/themes";
import RadixProvider from "./RadixProvider";

export default function DialogDemo() {
	return (
		<RadixProvider>
			<Box>
				<Dialog.Root>
					<Dialog.Trigger>
						<Button>タスクの削除</Button>
					</Dialog.Trigger>
					<Dialog.Content maxWidth="450px">
						<Dialog.Title>タスクの削除</Dialog.Title>
						<Dialog.Description size="2" mb="4">
							このタスクを削除してもよろしいですか？この操作は元に戻せません。
						</Dialog.Description>
						<Flex gap="3" justify="end">
							<Dialog.Close>
								<Button variant="soft" color="gray">
									キャンセル
								</Button>
							</Dialog.Close>
							<Dialog.Close>
								<Button variant="solid" color="red">
									削除
								</Button>
							</Dialog.Close>
						</Flex>
					</Dialog.Content>
				</Dialog.Root>
			</Box>
		</RadixProvider>
	);
}
