import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Misqui Server",
	description: "Custom server component page",
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className="flex flex-col min-h-screen">{children}</div>
}