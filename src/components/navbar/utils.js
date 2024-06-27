import { useEffect, useState } from "react";

export const useNavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [scroll, setScroll] = useState(0)

    const handleNavExpansion = () => setIsNavExpanded(prev => !prev)

    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY))
    }, [scroll])

    const NavLinks = [
        {
            name: "Home",
            children: [
                { name: "", href: "" },
            ],
            href: ""
        },
        {
            name: "Rooms",
            children: [
                { name: "", href: "" },
            ],
            href: ""
        },
        {
            name: "Pages",
            children: [
                { name: "", href: "" },
            ],
            href: ""
        },
        {
            name: "Shop",
            children: [
                { name: "", href: "" },
            ],
            href: ""
        },
        {
            name: "Blog",
            children: [
                { name: "", href: "" },
            ],
            href: ""
        },
        {
            name: "Contact",
            href: ""
        }
    ]

    return {
        NavLinks,
        scroll,
        handleNavExpansion,
        isNavExpanded
    }
}

