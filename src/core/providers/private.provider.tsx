import { redirect } from 'next/navigation';
import { authValidator } from '@/services/auth/auth.store';

export default async function PrivateProviders({ children }: { children: React.ReactNode }) {
  const isAuth = await authValidator();

  if (!isAuth) {
    redirect('/login');
  }

  return <>{children}</>;
}
