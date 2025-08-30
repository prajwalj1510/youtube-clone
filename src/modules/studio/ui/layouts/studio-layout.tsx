import { SidebarProvider } from "@/components/ui/sidebar";
import { StudioNavbar } from "../components/studio-navbar/StudioNavbar";
import { StudioSidebar } from "../components/studio-sidebar/StudioSidebar";

interface StudioLayoutProps {
    children: React.ReactNode;
}

export const StudioLayout = ({ children }: StudioLayoutProps) => {
    return (
        <SidebarProvider>
            <div className="w-full border-r-2 border-border">
                <StudioNavbar />
                <div className="flex min-h-screen pt-[4rem]">
                    <StudioSidebar />
                    <main className="flex-1 overflow-y-auto ">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}