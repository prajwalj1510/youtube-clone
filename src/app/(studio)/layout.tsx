import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";

interface StudioLayoutProps {
    children: React.ReactNode;
}

const StudioLayoutMain = ({ children }: StudioLayoutProps) => {
    return (
        <StudioLayout>
            {children}
        </StudioLayout>
    )
}

export default StudioLayoutMain
