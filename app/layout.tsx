import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/util/Provider";
import Navbar from "@/components/Navbar";
import { GlobalProvider } from "@/context/GlobalContext";

export const metadata: Metadata = {
	title: "Smartphones",
	description: "Zara Web Challenge",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Provider>
					<GlobalProvider>
						<Navbar />
						{children}
					</GlobalProvider>
				</Provider>
			</body>
		</html>
	);
}
