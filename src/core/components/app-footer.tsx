import { appConfig } from '@/configs/app.config';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function AppFooter() {
  return (
    <footer>
      <div className="container mx-auto border-t-border border-t-[1px] py-5 w-screen px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-5">
          <div className="w-full">
            <div className="mt-4 w-full">
              <div className="flex items-center gap-2">
                {appConfig.items.map((item, key) => (
                  <div key={key}>
                    <h1>{item.addres}</h1>
                    <div className="grid grid-cols-1 gap-4 mt-5 ">
                      <div className="flex-col">
                        <h1>Email Address :</h1>
                        <p>{item.email}</p>
                      </div>
                      <div className="flex-col">
                        <h1>Phone Number :</h1>
                        <p>{item.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* kanan */}
          <div className="mt-4 w-full flex justify-end">
            <div className="flex gap-2">
              <div className="flex-col ">
                <h1 className="font-semibold">COMPANY</h1>
                {appConfig.company.map((item, key) => (
                  <div key={key} className="py-2">
                    <Link href={item.href}>
                      <h1>{item.title}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 w-full flex justify-start lg:justify-end">
            <div className="flex  gap-2">
              <div className="flex-col">
                <h1 className="font-semibold">RESOURCES</h1>
                {appConfig.resource.map((item, key) => (
                  <div key={key} className="py-2">
                    <Link href={item.href}>
                      <h1>{item.title}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 w-full flex justify-end">
            <div className="flex gap-2">
              <div className="flex-col">
                <h1 className="font-semibold">SOSIAL</h1>
                {appConfig.sosial.map((item, key) => (
                  <div key={key} className="py-2">
                    <Link href={item.href}>
                      <h1>{item.title}</h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <h1 className="font-light text-center">
            {' '}
            Copyright Budak Korporat 2024-2025, All Rights Reserved
          </h1>
        </div>
      </div>
    </footer>
  );
}
