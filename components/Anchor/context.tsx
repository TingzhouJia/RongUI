import React from "react";

export interface RongAnchor {
    registerLink: (link: string) => void;
    unregisterLink: (link: string) => void;
    activeLink: string | null;
    scrollTo: (link: string) => void;
    onClick?: (
        e: React.MouseEvent<HTMLElement>,
        link: { title: React.ReactNode; href: string },
    ) => void;
}

export const AnchorContext = React.createContext<RongAnchor>(null as any);
export const useAnchorContext = (): RongAnchor =>
    React.useContext<RongAnchor>(AnchorContext)
