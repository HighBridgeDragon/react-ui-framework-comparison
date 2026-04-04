import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

interface AntdProviderProps {
	children: ReactNode;
}

export default function AntdProvider({ children }: AntdProviderProps) {
	return (
		<ConfigProvider theme={{ token: { colorPrimary: "#1976d2" } }}>
			{children}
		</ConfigProvider>
	);
}
