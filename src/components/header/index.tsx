import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Header() {
    return (
        <header className="p-6 flex items-center justify-between">
            <SidebarTrigger />
        </header>
    )
}
