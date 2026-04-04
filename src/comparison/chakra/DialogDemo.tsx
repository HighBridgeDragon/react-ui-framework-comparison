import {
	Button,
	DialogBackdrop,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogPositioner,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function DialogDemo() {
	const [open, setOpen] = useState(false);

	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start">
				<DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
					<DialogTrigger asChild>
						<Button colorPalette="red">タスクの削除</Button>
					</DialogTrigger>
					<DialogBackdrop />
					<DialogPositioner>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>タスクの削除</DialogTitle>
							</DialogHeader>
							<DialogBody>
								このタスクを削除してもよろしいですか？この操作は元に戻せません。
							</DialogBody>
							<DialogFooter>
								<Button variant="outline" onClick={() => setOpen(false)}>
									キャンセル
								</Button>
								<Button colorPalette="red" onClick={() => setOpen(false)}>
									削除
								</Button>
							</DialogFooter>
							<DialogCloseTrigger />
						</DialogContent>
					</DialogPositioner>
				</DialogRoot>
			</VStack>
		</ChakraProviderWrapper>
	);
}
