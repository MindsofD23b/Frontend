import { AppProvider } from "./_state/AppProvider";
import HomeShell from "./_components/HomeShell";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <HomeShell>{children}</HomeShell>
    </AppProvider>
  );
}
