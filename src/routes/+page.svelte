<script lang="ts">
	// Components
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Stats from "$lib/components/layout/Stats.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Nav from "$lib/components/layout/Nav.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
	
	// Icons
	import Eye from "~icons/lucide/eye";
	import Search from "~icons/lucide/search";
	import Users from "~icons/lucide/users";
	import Clock from "~icons/lucide/clock";
	import TrendingUp from "~icons/lucide/trending-up";
	import Shield from "~icons/lucide/shield";

	// Data
	const heroCallsToAction = [
		{
			href: "/get-started",
			label: "Start capturing knowledge"
		},
		{
			href: "/demo",
			label: "See how it works"
		}
	];

	const features = [
		{
			title: "Visual capture technology",
			description: "Record any workflow with a single click—no writing required.",
			icon: Eye,
			imageSrc: "/generated/image-a-manufacturing-worker-in-safety-gear-we.webp"
		},
		{
			title: "Instant searchability",
			description: "Find the exact step you need with voice or text search.",
			icon: Search,
			imageSrc: "/generated/image-a-factory-floor-scene-where-workers-coll.webp"
		},
		{
			title: "Built for teams",
			description: "Share knowledge across shifts and departments effortlessly.",
			icon: Users,
			imageSrc: "/generated/image-a-manufacturing-team-meeting-is-in-progr.webp"
		}
	];

	const stats = [
		{
			value: "50%",
			description: "reduction in training time",
			icon: Clock
		},
		{
			value: "10,000+",
			description: "workflows captured",
			icon: TrendingUp
		},
		{
			value: "99.9%",
			description: "uptime reliability",
			icon: Shield
		}
	];

	const testimonials = [
		{
			name: "Sarah Chen",
			position: "Operations Manager",
			company: "Precision Manufacturing Inc",
			quote: "Squint eliminated our biggest bottleneck—waiting for our senior operators to train new hires. Now anyone can follow the visual guides and get up to speed in days, not weeks.",
			image: "/generated/image-an-operations-manager-dressed-in-utility.webp"
		},
		{
			name: "Mike Rodriguez",
			position: "Plant Supervisor",
			company: "Industrial Solutions Corp",
			quote: "We used to lose critical knowledge when experienced workers retired. With Squint, we capture their expertise before it walks out the door. It's been a game-changer for our continuity.",
			image: "/generated/image-a-senior-technician-with-a-weathered-fac.webp"
		},
		{
			name: "Jennifer Walsh",
			position: "Production Director",
			company: "Advanced Manufacturing LLC",
			quote: "The visual instructions are so clear that our error rates dropped 40% in the first month. Our team actually enjoys documenting processes now because it's so simple.",
			image: "/generated/image-an-operations-manager-dressed-in-utility.webp"
		}
	];

	const manufacturingLogos = [
		"https://logo.clearbit.com/caterpillar.com",
		"https://logo.clearbit.com/boeing.com", 
		"https://logo.clearbit.com/ge.com",
		"https://logo.clearbit.com/honeywell.com",
		"https://logo.clearbit.com/3m.com",
		"https://logo.clearbit.com/emerson.com"
	];

	const ctaCallsToAction = [
		{
			href: "/get-started",
			label: "Start free trial",
			variant: "primary" as const
		},
		{
			href: "/contact",
			label: "Talk to sales",
			variant: "secondary" as const
		}
	];
</script>

<Nav />

<main>
	<!-- Hero Section -->
	<Hero
		title="No more bottlenecks when your experts are out"
		subtitle="Capture your team's tribal knowledge as it happens—no writing, no delays. Squint turns everyday workflows into searchable visual instructions in seconds."
		imageSrc="/generated/image-a-manufacturing-worker-in-safety-gear-we.webp"
		callsToAction={heroCallsToAction}
	/>

	<!-- Social Proof -->
	<LogoScroller
		label="Trusted by manufacturing teams at"
		logoUrls={manufacturingLogos}
	/>

	<!-- Problem/Solution Section -->
	<section class="section-px section-py bg-muted/30">
		<div class="container mx-auto max-w-4xl text-center">
			<h2 class="text-title1 mb-6">Tribal knowledge, captured before it disappears</h2>
			<p class="text-headline text-muted-foreground mb-8 max-w-3xl mx-auto">
				Senior operators know the unofficial steps that make things work. Squint helps you record those steps with a single click, so you don't lose key know-how when someone's out—or gone for good.
			</p>
			<div class="grid md:grid-cols-3 gap-8 mt-12">
				<div class="text-center">
					<div class="bg-destructive/10 text-destructive rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
						<Clock class="w-8 h-8" />
					</div>
					<h3 class="text-callout font-semibold mb-2">Production delays</h3>
					<p class="text-body text-muted-foreground">When key workers are unavailable, lines slow down or stop completely</p>
				</div>
				<div class="text-center">
					<div class="bg-destructive/10 text-destructive rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
						<Users class="w-8 h-8" />
					</div>
					<h3 class="text-callout font-semibold mb-2">Knowledge gaps</h3>
					<p class="text-body text-muted-foreground">Critical expertise lives only in senior workers' heads</p>
				</div>
				<div class="text-center">
					<div class="bg-destructive/10 text-destructive rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
						<TrendingUp class="w-8 h-8" />
					</div>
					<h3 class="text-callout font-semibold mb-2">Training bottlenecks</h3>
					<p class="text-body text-muted-foreground">New hires take weeks to get up to speed on complex processes</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<Features
		title="Simple for teams that hate documentation"
		subtitle="Skip the long write-ups. Squint uses screen capture and voice to build step-by-step visual instructions, so your team can document what they do in real-time while they do it."
		features={features}
	/>

	<!-- Stats Section -->
	<Stats stats={stats} class="bg-primary/5" />

	<!-- Use Cases Section -->
	<section class="section-px section-py">
		<div class="container mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-title1 mb-6">Built for manufacturing teams</h2>
				<p class="text-headline text-muted-foreground max-w-3xl mx-auto">
					From the factory floor to the training room, Squint adapts to how your team actually works.
				</p>
			</div>
			
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<h3 class="text-title2 mb-6">Capture workflows on the floor directly</h3>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<div class="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
								<Eye class="w-4 h-4" />
							</div>
							<span class="text-body">Record machine setups, quality checks, and troubleshooting steps</span>
						</li>
						<li class="flex items-start gap-3">
							<div class="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
								<Search class="w-4 h-4" />
							</div>
							<span class="text-body">Search visual instructions by voice or text</span>
						</li>
						<li class="flex items-start gap-3">
							<div class="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
								<Users class="w-4 h-4" />
							</div>
							<span class="text-body">Train new hires faster with show-not-tell guides</span>
						</li>
					</ul>
				</div>
				<div class="aspect-video rounded-lg overflow-hidden">
					<img 
						src="/generated/image-a-factory-floor-scene-where-workers-coll.webp" 
						alt="Manufacturing team collaborating on factory floor"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<Testimonials testimonials={testimonials} />

	<!-- Benefits Section -->
	<section class="section-px section-py bg-muted/30">
		<div class="container mx-auto text-center">
			<h2 class="text-title1 mb-6">Why operations managers choose Squint</h2>
			<p class="text-headline text-muted-foreground mb-12 max-w-3xl mx-auto">
				Turn your biggest operational challenges into competitive advantages.
			</p>
			
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-background rounded-lg p-8 text-center">
					<div class="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
						<Clock class="w-8 h-8" />
					</div>
					<h3 class="text-callout font-semibold mb-4">Reduce downtime</h3>
					<p class="text-body text-muted-foreground">Keep production running smoothly even when experienced workers are off shift</p>
				</div>
				<div class="bg-background rounded-lg p-8 text-center">
					<div class="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
						<TrendingUp class="w-8 h-8" />
					</div>
					<h3 class="text-callout font-semibold mb-4">Cut onboarding time</h3>
					<p class="text-body text-muted-foreground">Reduce training time for new hires by up to 50% with visual step-by-step guides</p>
				</div>
				<div class="bg-background rounded-lg p-8 text-center">
					<div class="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
						<Shield class="w-8 h-8" />
					</div>
					<h3 class="text-callout font-semibold mb-4">Standardize processes</h3>
					<p class="text-body text-muted-foreground">Ensure consistent quality and safety across all shifts and departments</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA -->
	<CallToAction
		title="Start capturing knowledge today"
		subtitle="No training required"
		description="Join manufacturing teams who've transformed their operations with Squint. Turn tribal knowledge into trackable, searchable resources that keep your production running smoothly."
		imageSrc="/generated/image-a-senior-technician-with-a-weathered-fac.webp"
		callsToAction={ctaCallsToAction}
	/>
</main>

<Footer />
