import { appConfig } from '@/configs/app.config';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function AppFooter() {
  return (
    <footer>
      <div className="container mx-auto border-t-border border-t-[1px] py-5 flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
          <div>
            <Image src={appConfig.logo} alt="Logo" width={100} height={100} />
            <div className="mt-4">
              <h1 className="text-xl lg:text-2xl font-bold">Follow us on</h1>
              <div className="flex items-center gap-2">
                {Object.entries(appConfig.social_media).map(([key, value]) => (
                  <Link href={value.url} key={key}>
                    <Icon icon={value.icon} width={24} height={24} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
