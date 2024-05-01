import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Inter, Anton} from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from '../components/Footer';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
  })
const anton = Anton({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-anton',
  })
   


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning data-theme='cupcake'>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "light" }}
				>
					<Navbar />
					<main className=' mx-auto'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
