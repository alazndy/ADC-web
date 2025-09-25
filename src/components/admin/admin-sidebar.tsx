"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarSeparator,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar"
import {
  Package,
  LayoutGrid,
  Briefcase,
  Building2,
  Wrench,
  Cpu,
  LogOut,
  Settings,
  User,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"


export function AdminSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Logo forceWhiteText />
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel>Yönetim</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/admin" legacyBehavior passHref>
                <SidebarMenuButton
                  as="a"
                  tooltip="Gösterge Paneli"
                  isActive={pathname === "/admin"}
                >
                  <LayoutGrid />
                  <span>Gösterge Paneli</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/admin/products" legacyBehavior passHref>
                <SidebarMenuButton
                  as="a"
                  tooltip="Ürünler"
                  isActive={isActive("/admin/products")}
                >
                  <Package />
                  <span>Ürünler</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/admin/projects" legacyBehavior passHref>
                <SidebarMenuButton
                  as="a"
                  tooltip="Projeler"
                  isActive={isActive("/admin/projects")}
                >
                  <Briefcase />
                  <span>Projeler</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/admin/sectors" legacyBehavior passHref>
                <SidebarMenuButton
                  as="a"
                  tooltip="Sektörler"
                  isActive={isActive("/admin/sectors")}
                >
                  <Building2 />
                  <span>Sektörler</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/admin/services" legacyBehavior passHref>
                <SidebarMenuButton
                  as="a"
                  tooltip="Hizmetler"
                  isActive={isActive("/admin/services")}
                >
                  <Wrench />
                  <span>Hizmetler</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/admin/tech-solutions" legacyBehavior passHref>
                <SidebarMenuButton
                  as="a"
                  tooltip="Teknoloji Çözümleri"
                  isActive={isActive("/admin/tech-solutions")}
                >
                  <Cpu />
                  <span>Teknoloji Çözümleri</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton as="a" tooltip="Ayarlar" href="#">
              <Settings />
              <span>Ayarlar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <SidebarMenuButton as="a" tooltip="Profil" href="#">
              <User />
              <span>Kullanıcı Adı</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/" legacyBehavior passHref>
                <SidebarMenuButton as="a" tooltip="Çıkış Yap">
                  <LogOut />
                  <span>Çıkış Yap</span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
