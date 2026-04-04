export default function ShadcnScope({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <div className={className || undefined}>{children}</div>;
}
