import { Button, Modal } from "antd";
import { useState } from "react";
import AntdProvider from "./AntdProvider";

export default function DialogDemo() {
	const [open, setOpen] = useState(false);

	return (
		<AntdProvider>
			<Button danger onClick={() => setOpen(true)}>
				タスクの削除
			</Button>
			<Modal
				title="タスクの削除"
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
				okText="削除"
				okButtonProps={{ danger: true }}
				cancelText="キャンセル"
			>
				<p>このタスクを削除してもよろしいですか？この操作は元に戻せません。</p>
			</Modal>
		</AntdProvider>
	);
}
