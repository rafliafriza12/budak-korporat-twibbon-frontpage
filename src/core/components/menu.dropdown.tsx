import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { navigationMenuConfig } from '@/configs/app.config';
import { Menu } from 'lucide-react';

export default function MenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4 mr-5 mt-2">
        {navigationMenuConfig.items.map((item) => (
          <DropdownMenuItem key={item.title} className="mb-2">
            <Link href={item.href} className="flex items-center gap-2 text-white">
              <span>{item.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
