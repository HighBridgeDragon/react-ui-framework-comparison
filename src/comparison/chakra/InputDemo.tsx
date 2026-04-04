import {
	FieldErrorText,
	FieldLabel,
	FieldRoot,
	Input,
	VStack,
} from "@chakra-ui/react";
import ChakraProviderWrapper from "./ChakraProviderWrapper";

export default function InputDemo() {
	return (
		<ChakraProviderWrapper>
			<VStack gap="6" align="start" maxW="400px">
				<FieldRoot>
					<FieldLabel>タスク名</FieldLabel>
					<Input placeholder="タスク名を入力" />
				</FieldRoot>

				<FieldRoot>
					<FieldLabel>パスワード</FieldLabel>
					<Input type="password" placeholder="パスワードを入力" />
				</FieldRoot>

				<FieldRoot invalid>
					<FieldLabel>メールアドレス</FieldLabel>
					<Input type="email" placeholder="user@example.com" />
					<FieldErrorText>無効なメールアドレス</FieldErrorText>
				</FieldRoot>

				<FieldRoot disabled>
					<FieldLabel>プロジェクト</FieldLabel>
					<Input value="Acme Corp" />
				</FieldRoot>
			</VStack>
		</ChakraProviderWrapper>
	);
}
