import { HomeLayout } from "@/modules/home/ui/layouts/HomeLayout"

interface HomeLayoutProps {
    children: React.ReactNode
}

const HomeLayoutMain = ({ children }: HomeLayoutProps) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )

}

export default HomeLayoutMain