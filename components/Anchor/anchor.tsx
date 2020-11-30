import { useState, useEffect } from "react";

import React from "react";
import {useAnchorContext,AnchorContext} from "./context";
import scrollTo, { getScroll } from '../utils/scrollTo'
import { AnchorInner, AnchorWrapper, AnchorInnerInk, AnchorInk } from "./wrapper";
import AnchorLink from "./link";
export type AnchorContainer = HTMLElement | Window;

function getDefaultContainer() {
    return window;
}

function getOffsetTop(element: HTMLElement, container: AnchorContainer): number {
    if (!element.getClientRects().length) {
        return 0;
    }

    const rect = element.getBoundingClientRect();

    if (rect.width || rect.height) {
        if (container === window) {
            container = element.ownerDocument!.documentElement!;
            return rect.top - container.clientTop;
        }
        return rect.top - (container as HTMLElement).getBoundingClientRect().top;
    }

    return rect.top;
}

const sharpMatcherRegx = /#(\S+)$/;

type Section = {
    link: string;
    top: number;
};

export interface AnchorBasicProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    offsetTop?: number;
    bounds?: number;
    affix?: boolean;
    showInkInFixed?: boolean;
    getContainer?: () => AnchorContainer;
    getCurrentAnchor?: () => string;
    onClick?: (
        e: React.MouseEvent<HTMLElement>,
        link: { title: React.ReactNode; href: string },
    ) => void;
    targetOffset?: number;
    onChange?: (currentActiveLink: string) => void;
}
export interface AnchorProps extends React.FC<AnchorBasicProps> {
    Link:typeof AnchorLink
}
const Anchor: AnchorProps = (props) => {
    const [activeLink, setactiveLink] = useState<any>(null)
    const [links, setlinks] = useState<string[]>([])
    const registerLink = (link: string) => {
        if (!links.includes(link)) {
            links.push(link);
        }
    };
    const wrapperRef = React.useRef<any>(null)
    const savenode = React.useRef<any>(null)
    const [animating, setanimating] = useState(false)

    const unregisterLink = (link: string) => {
        const index = links.indexOf(link);
        if (index !== -1) {
            links.splice(index, 1);
        }
    };

    const getContainer = () => {

        const { getContainer } = props;

        const getFunc = getContainer || getDefaultContainer;

        return getFunc();
    };
    const getCurrentAnchor = (offsetTop = 0, bounds = 5) => {
        const { getCurrentAnchor } = props;

        if (typeof getCurrentAnchor === 'function') {
            return getCurrentAnchor();
        }

        const linkSections: Array<Section> = [];
        const container = getContainer();
        links.forEach(link => {
            const sharpLinkMatch = sharpMatcherRegx.exec(link.toString());
            if (!sharpLinkMatch) {
                return;
            }
            const target = document.getElementById(sharpLinkMatch[1]);
            if (target) {
                const top = getOffsetTop(target, container);
                if (top < offsetTop + bounds) {
                    linkSections.push({
                        link,
                        top,
                    });
                }
            }
        });

        if (linkSections.length) {
            const maxSection = linkSections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev));
            return maxSection.link;
        }
        return '';
    }
    useEffect(() => {
        const scrollContainer = getContainer()
        scrollContainer.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const setCurrentActiveLink = (link: string) => {

        const { onChange } = props;

        if (activeLink !== link) {
            setactiveLink(link)
            if (onChange) {
                onChange(link);
            }
        }
    };
    const handleScrollTo = (link: string) => {
        const { offsetTop, targetOffset } = props;

        setCurrentActiveLink(link);
        const container = getContainer();
        const scrollTop = getScroll(container, true);
        const sharpLinkMatch = sharpMatcherRegx.exec(link);
        if (!sharpLinkMatch) {
            return;
        }
        const targetElement = document.getElementById(sharpLinkMatch[1]);
        if (!targetElement) {
            return;
        }

        const eleOffsetTop = getOffsetTop(targetElement, container);
        let y = scrollTop + eleOffsetTop;
        y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
        setanimating(true)

        scrollTo(y, {
            callback: () => {
                setanimating(false)
            },
            getContainer,
        });
    };
    const handleScroll = () => {
        if (animating) {
            return;
        }
        const { offsetTop, bounds, targetOffset } = props;
        const currentActiveLink = getCurrentAnchor(
            targetOffset !== undefined ? targetOffset : offsetTop || 0,
            bounds,
        );
        setCurrentActiveLink(currentActiveLink);
    };
    const {
        className = '',
        style,
        offsetTop,
        children,
    } = props
    const wrapperStyle = {
        maxHeight: offsetTop ? `calc(100vh - ${offsetTop}px)` : '100vh',
        ...style,
    };
    const anchorContent = (
        <AnchorWrapper ref={wrapperRef} className={className} style={wrapperStyle}>
            <div >
                <AnchorInk>
                    <AnchorInnerInk active={activeLink} ref={savenode} />
                </AnchorInk>
                {children}
            </div>
        </AnchorWrapper>
    );
    
    return (
        <AnchorContext.Provider
        value={{
            onClick:props.onClick,
            registerLink,
            unregisterLink,
            activeLink,
            scrollTo:handleScrollTo,
        }}
        >
            {anchorContent}
        </AnchorContext.Provider>
    )
}

Anchor.Link=AnchorLink

export default Anchor