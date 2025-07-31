/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	/** Optional link target, e.g., '_blank' */
	target?: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Start free trial",
	href: "/get-started"
};

export const navigation: NavItem[] = [
	{
		label: "Product",
		showInNav: true,
		showInFooter: false,
		children: [
			{
				label: "Features",
				href: "/features",
				showInNav: true,
				showInFooter: false,
				description: "Visual capture and searchable instructions"
			},
			{
				label: "Use cases",
				href: "/use-cases",
				showInNav: true,
				showInFooter: false,
				description: "Manufacturing workflows and training"
			}
		]
	},
	{
		label: "Solutions",
		href: "/solutions",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Resources",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Documentation",
				href: "/docs",
				showInNav: true,
				showInFooter: true,
				description: "Get started guides and API reference"
			},
			{
				label: "Case studies",
				href: "/case-studies",
				showInNav: true,
				showInFooter: true,
				description: "See how teams use Squint"
			},
			{
				label: "Blog",
				href: "/blog",
				showInNav: true,
				showInFooter: true,
				description: "Manufacturing insights and best practices"
			}
		]
	},
	{
		label: "Company",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Contact",
				href: "/contact",
				showInNav: false,
				showInFooter: true
			}
		]
	},
	{
		label: "Legal",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Security",
				href: "/legal/security",
				showInNav: false,
				showInFooter: true
			}
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
