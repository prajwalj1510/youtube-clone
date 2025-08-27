import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../components/home-navbar/HomeNavbar";
import { HomeSidebar } from "../components/home-sidebar/HomeSidebar";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <SidebarProvider>
            <div className="w-full border-r-2 border-border">
                <HomeNavbar />

                <div className="flex min-h-screen pt-[4rem]">
                    <HomeSidebar />
                    <main className="flex-1 overflow-y-auto ">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}