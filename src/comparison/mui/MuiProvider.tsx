import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { ReactNode } from "react";
import theme from "./theme";

export default function MuiProvider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			<ScopedCssBaseline>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					{children}
				</LocalizationProvider>
			</ScopedCssBaseline>
		</ThemeProvider>
	);
}
