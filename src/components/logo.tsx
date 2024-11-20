import { Fellix } from "@/app/layout";
import { cn } from "@/lib/utils";

export const Logo = () => {
    return (
        <div className={cn(Fellix.className, "text-2xl flex tracking-tight")}>
            TatvaFlow
            <div className="text-2xl text-[#0055D3]">.</div>
        </div>
    );
};