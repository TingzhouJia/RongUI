import { useAnchorContext } from "./context"
import React,{ useEffect } from "react"
import { LinkActive, LinkActiveTitle } from "./wrapper"

export interface AnchorLinkProps {
    href: string;
    target?: string;
    title: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
  }



const AnchorLink:React.FC<AnchorLinkProps>=(props)=>{
    const {href}=props
    const {registerLink,unregisterLink,onClick,scrollTo,activeLink}=useAnchorContext()
    useEffect(() => {
        unregisterLink(href)
        registerLink(href)
        return () => {
            unregisterLink(href)
        }
    }, [href])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    
        const { href, title } = props;
        if (onClick) {
          onClick(e, { title, href });
        }
        scrollTo(href);
      };
    
    const renderAnchorLink=()=>{
        const {href, title, children, className } = props
        const active=activeLink===href
        return (
            <LinkActive className={className}>
                <LinkActiveTitle active={active} onClick={handleClick}>
                {title}
                </LinkActiveTitle>
                {children}
            </LinkActive>
        )
    }

    return (
        renderAnchorLink()
    )
}

export default AnchorLink