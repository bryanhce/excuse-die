import type { ReactNode } from "react";

const ListContainer = ({ children }: { children: ReactNode }) => {
    return (
        <ul className="list-disc leading-relaxed pl-5 pb-5 marker:text-terracotta flex flex-col gap-y-2">
            {children}
        </ul>
    );
};

export default ListContainer;
