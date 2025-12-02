export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // full viewport, no scroll, keeps the gradient
    <section className="h-screen w-screen overflow-hidden">{children}</section>
  );
}
