'use client';

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useAuth, useClerk } from "@clerk/nextjs";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";


const Items = [
    {
        title: 'Home',
        url: '/',
        icon: HomeIcon,
    },
    {
        title: 'Subscriptions',
        url: '/feed/subscriptions',
        icon: PlaySquareIcon,
        auth: true,
    },
    {
        title: 'Trending',
        url: '/feed/trending',
        icon: FlameIcon,
    },
]

export const MainSection = () => {

    const { userId, isSignedIn } = useAuth()
    const clerk = useClerk()

    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {Items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} // TODO: Change to look at current pathname
                                onClick={(e) => {
                                    if (!isSignedIn && item.auth) {
                                        e.preventDefault()
                                        return clerk.openSignIn()
                                    }
                                }} // TODO: Do something on CLick
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon />
                                    <span className="text-sm">
                                        {item.title}
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
