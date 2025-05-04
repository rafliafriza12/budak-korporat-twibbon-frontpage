import AppFooter from '../components/app-footer';
import AppHeader from '../components/app-header';

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* <div className="hidden lg:block"> */}
      <AppHeader />
      {/* </div> */}
      <div className="w-screen overflow-hidden">{children}</div>
      <AppFooter />
    </main>
  );
}
