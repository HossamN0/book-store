import Link from "next/link";
import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function MainNav() {
    return (
        <Navbar className="sticky top-0 z-50">
            <NavbarBrand as={Link} href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Store</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>Home</NavbarLink>
                <NavbarLink as={Link} href="#">About</NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle className="focus:ring-0"/>
        </Navbar>
    );
}


export function MainFooter() {
    return (
        <Footer container className="rounded-none">
            <FooterCopyright href="#" by="Book Store" year={2024} />
            <FooterLinkGroup>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
        </Footer>
    );
}
