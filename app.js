/* 01. Semua teks antara muka disimpan dalam satu objek dwibahasa. */
const i18n = {
  "en": {
    "meta.title": "NimbusCloud — Interactive Cloud Dashboard by Putera MY",
    "meta.description": "A fictional cloud-hosting platform built by Putera MY with HTML, CSS and JavaScript. Explore a live dashboard, deployment flow, scaling controls and resource calculator.",
    "meta.socialDescription": "A fictional cloud platform with a working dashboard, deploy sequence, scaling controls and cost calculator. A portfolio demo by Putera MY.",
    "a11y.skip": "Skip to content",
    "notice.label": "Portfolio disclosure",
    "notice.text": "Portfolio demo by Putera MY. Fictional platform. All metrics are sample data.",
    "links.github": "GitHub",
    "links.portfolioLabel": "Open Putera MY's portfolio repository",
    "links.portfolio": "Portfolio",
    "nav.label": "Main navigation",
    "nav.home": "NimbusCloud home",
    "nav.overview": "Overview",
    "nav.platform": "Platform",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "theme.toLight": "Switch to light theme",
    "language.label": "Interface language",
    "palette.open": "Open command palette",
    "nav.getStarted": "Get Started",
    "nav.open": "Open navigation",
    "hero.new": "New",
    "hero.announcement": "Auto-Scaling 2.0",
    "hero.lineOne": "Cloud hosting.",
    "hero.lineTwo": "Limitless scale.",
    "hero.description": "Run a deployment, change capacity and inspect the response. This dashboard connects every control to one live application state.",
    "hero.start": "Get Started Free",
    "hero.how": "See How It Works",
    "hero.assurance": "No credit card required · 14-day trial",
    "hero.sampleOffer": "Sample offer for this portfolio demo. No account or subscription is created.",
    "hero.shortcut": "Go anywhere. Run any action.",
    "dashboard.address": "app.nimbuscloud.my / overview",
    "dashboard.navigation": "Dashboard navigation",
    "dashboard.home": "NimbusCloud overview",
    "dashboard.areas": "Product areas",
    "dashboard.servers": "Servers",
    "dashboard.analytics": "Analytics",
    "dashboard.network": "Network",
    "dashboard.settings": "Settings",
    "dashboard.localSession": "Local session",
    "shared.sampleData": "Sample data",
    "dashboard.title": "Overview",
    "dashboard.operational": "All operational",
    "deploy.action": "Deploy",
    "dashboard.cpu": "CPU",
    "dashboard.cpuHelp": "About CPU usage",
    "dashboard.cpuDescription": "Average across 4 instances",
    "dashboard.memory": "Memory",
    "dashboard.allocated": "Allocated",
    "dashboard.memoryDescription": "4 GB available",
    "dashboard.traffic": "Traffic",
    "dashboard.incoming": "Incoming",
    "units.rpsShort": "req/s",
    "dashboard.trafficDescription": "Updates once per second",
    "chart.title": "Network activity",
    "chart.window": "Last 60 seconds",
    "chart.accessibleLabel": "Sample incoming traffic over the last 60 seconds. Use the left and right arrow keys to inspect values.",
    "chart.fallback": "A live sample traffic chart. Current incoming traffic is 240 requests per second.",
    "chart.minuteAgo": "60s ago",
    "chart.now": "Now",
    "chart.keyboardHelp": "Hover to inspect. Keyboard: focus the chart, then use ← and →.",
    "chart.initialSummary": "Sample traffic is 240 requests per second. Four instances are active.",
    "servers.title": "Active servers",
    "servers.initialCount": "3 regions shown",
    "regions.sin": "Singapore",
    "servers.detail": "Sample instance. TLS enabled. No real server is connected.",
    "regions.fra": "Frankfurt",
    "regions.sfo": "San Francisco",
    "servers.empty": "No sample servers are running. Deploy an application to add one.",
    "deploy.title": "Deployment",
    "deploy.progressLabel": "Deployment progress",
    "deploy.cancel": "Cancel deployment",
    "deploy.sampleUrl": "Sample deployment URL",
    "deploy.copyUrl": "Copy sample deployment URL",
    "dashboard.disclosure": "Generated in your browser. Deploy actions do not create cloud resources.",
    "stats.title": "Sample platform figures",
    "stats.uptime": "Uptime",
    "stats.centres": "Data centres",
    "stats.latency": "Regional latency",
    "stats.disclosure": "Illustrative figures for a fictional service. They are not production measurements.",
    "features.eyebrow": "Six tools. One control plane.",
    "features.title": "Inspect the details.",
    "features.description": "Open a row, change a setting and follow the result in the dashboard. Each micro-visual uses the same sample application state.",
    "features.deployTitle": "Fast Deploy",
    "features.deployDescription": "Clone, build, test and release to three sample regions.",
    "features.deployDetail": "The deploy sequence streams its progress into the dashboard. Successful runs add a server row and increase sample traffic.",
    "features.runDeploy": "Run a deployment",
    "features.scalingTitle": "Auto-Scaling",
    "features.scalingDescription": "Add capacity above 70% CPU. Scale down below 30%.",
    "features.scalingDetail": "A four-second cooldown stops the instance count from changing too frequently. Traffic, cost and latency respond to the current capacity.",
    "features.adjustLoad": "Adjust traffic load",
    "features.securityTitle": "Layered Security",
    "features.securityDescription": "Inspect TLS, firewall and access-policy settings.",
    "features.securityDetail": "These switches change a sample policy checklist. They do not inspect your device or configure a real network.",
    "features.policyLegend": "Sample policy",
    "features.policyTls": "TLS required",
    "features.policyFirewall": "Firewall enabled",
    "features.policyAccess": "Scoped access",
    "features.policyInitial": "3 of 3 sample policies enabled.",
    "features.backupsTitle": "Automatic Backups",
    "features.backupsDescription": "Create and inspect a local snapshot record.",
    "features.backupsDetail": "Snapshot records stay in page memory. No files are read, copied or uploaded.",
    "features.createBackup": "Create sample snapshot",
    "features.noBackups": "No snapshot records yet.",
    "features.monitoringTitle": "Real-time Monitoring",
    "features.monitoringDescription": "Inspect a rolling window of 60 traffic samples.",
    "features.monitoringDetail": "The chart supports pointer inspection and keyboard navigation. CPU warnings appear above 80% utilisation.",
    "features.inspectChart": "Inspect the live chart",
    "features.supportTitle": "24/7 Support",
    "features.supportDescription": "Preview a support request without sending a message.",
    "features.supportDetail": "This fictional plan includes round-the-clock support. The form below validates a request locally; no support team is contacted.",
    "features.openSupport": "Preview support request",
    "workflow.eyebrow": "From commit to global",
    "workflow.title": "Follow one change\nthrough the system.",
    "workflow.description": "Scroll through the release path. The visual follows each stage, from a Git push to a traffic spike.",
    "workflow.visualLabel": "Release workflow visual",
    "workflow.trace": "Release trace",
    "workflow.commitLabel": "01 / Source",
    "workflow.commitVisual": "Commit received. Build queued.",
    "workflow.buildLabel": "02 / Build",
    "workflow.buildVisual": "Dependencies resolved. Tests passed.",
    "workflow.deployLabel": "03 / Release",
    "workflow.deployVisual": "Release available in three sample regions.",
    "workflow.scaleLabel": "04 / Respond",
    "workflow.scaleVisual": "Traffic rises. Additional instances take the load.",
    "workflow.initialCaption": "Stage 1 of 4: source received.",
    "workflow.commitTitle": "Push a commit.",
    "workflow.commitText": "The repository event identifies the application, commit and target environment. No manual server access is needed.",
    "workflow.buildTitle": "Build and verify.",
    "workflow.buildText": "Resolve dependencies, compile the application and run checks. Failed checks stop the release before traffic changes.",
    "workflow.deployTitle": "Release to regions.",
    "workflow.deployText": "The sample release moves to Singapore, Frankfurt and San Francisco. The previous version stays available until checks pass.",
    "workflow.scaleTitle": "Respond to demand.",
    "workflow.scaleText": "A traffic spike increases CPU load. The scaling policy adds instances, waits for its cooldown and checks demand again.",
    "workflow.tryScaling": "Try the scaling controls",
    "scaling.eyebrow": "Capacity, under your control",
    "scaling.title": "Give the system\nsome work.",
    "scaling.description": "Move the traffic slider or trigger a 10× spike. Watch the same instance count and CPU values update in the dashboard.",
    "scaling.load": "Traffic load",
    "scaling.rangeHelp": "Arrow keys: one step. Shift + arrow: ten steps.",
    "scaling.spike": "Traffic spike ×10",
    "scaling.auto": "Auto-scaling",
    "scaling.instances": "Active instances",
    "scaling.cpu": "Average CPU",
    "scaling.latency": "Sample latency",
    "scaling.hourly": "Estimated hourly cost",
    "scaling.fleet": "Instance pool",
    "scaling.stable": "Within capacity",
    "scaling.poolLabel": "Inspect sample instances",
    "scaling.instanceOne": "Inspect instance 1",
    "scaling.active": "Active",
    "scaling.instanceTwo": "Inspect instance 2",
    "scaling.instanceThree": "Inspect instance 3",
    "scaling.instanceFour": "Inspect instance 4",
    "scaling.initialInspector": "Instance 01 is active. Sample capacity: 100 requests per second.",
    "scaling.policyTitle": "The scaling policy",
    "scaling.cpuMeter": "Average sample CPU",
    "scaling.scaleOut": "Scale out",
    "scaling.scaleIn": "Scale in",
    "scaling.cooldown": "Cooldown",
    "scaling.fourSeconds": "4 active seconds",
    "scaling.capacity": "Per instance",
    "scaling.capacityValue": "100 requests/s",
    "scaling.initialExplanation": "Four instances are handling the current sample load. Raise traffic above the threshold to add capacity.",
    "scaling.ready": "Policy ready",
    "scaling.events": "Scaling events",
    "scaling.initialEvent": "Sample workload initialised. Four instances are active.",
    "network.eyebrow": "One release. Multiple regions.",
    "network.title": "Put the response\ncloser to the request.",
    "network.description": "Inspect eight sample regions. Focus a node or choose its button to view latency and availability. All network values are sample data.",
    "network.routes": "Show network activity",
    "network.mapTitle": "Eight sample cloud regions",
    "network.mapDescription": "San Francisco, New York, London, Frankfurt, Mumbai, Singapore, Tokyo and Sydney. Nodes support Enter, Space and arrow-key navigation.",
    "network.inspectSfo": "Inspect San Francisco",
    "network.inspectNyc": "Inspect New York",
    "network.inspectLon": "Inspect London",
    "network.inspectFra": "Inspect Frankfurt",
    "network.inspectBom": "Inspect Mumbai",
    "network.inspectSin": "Inspect Singapore",
    "network.inspectTyo": "Inspect Tokyo",
    "network.inspectSyd": "Inspect Sydney",
    "network.choose": "Choose a sample region",
    "regions.nyc": "New York",
    "regions.lon": "London",
    "regions.bom": "Mumbai",
    "regions.tyo": "Tokyo",
    "regions.syd": "Sydney",
    "network.selected": "Selected sample region",
    "network.code": "Region code",
    "network.latency": "Sample latency",
    "network.instances": "Sample instances",
    "network.deployHere": "Run sample deploy",
    "network.disclosure": "Region availability and latency are generated locally. No network probe is sent.",
    "pricing.eyebrow": "Predictable resources. Visible costs.",
    "pricing.title": "Start with a plan.\nCheck the numbers.",
    "pricing.description": "Compare the sample plans, then change the resource inputs below. Annual billing applies a 20% discount.",
    "pricing.samplePlans": "Sample plans · no charges",
    "pricing.billingLabel": "Billing period",
    "pricing.monthly": "Monthly",
    "pricing.yearly": "Yearly",
    "pricing.save": "Save 20%",
    "pricing.starter": "Starter",
    "pricing.starterTitle": "A place to start.",
    "pricing.starterDescription": "For a small project and a first deployment.",
    "pricing.perMonth": "/month",
    "pricing.starterBilling": "Free sample plan.",
    "pricing.starterOne": "1 instance",
    "pricing.starterTwo": "1 GB storage",
    "pricing.starterThree": "Community support",
    "pricing.chooseStarter": "Choose Starter",
    "pricing.pro": "Pro",
    "pricing.recommended": "Recommended",
    "pricing.proTitle": "Room for the next release.",
    "pricing.proDescription": "More capacity, automatic scaling and priority support.",
    "pricing.proBilling": "RM79 billed monthly.",
    "pricing.proOne": "Up to 10 instances",
    "pricing.proTwo": "100 GB storage",
    "pricing.proThree": "Auto-scaling and priority support",
    "pricing.choosePro": "Choose Pro",
    "pricing.enterprise": "Enterprise",
    "pricing.enterpriseTitle": "Define the requirements.",
    "pricing.enterpriseDescription": "A sample configuration for larger workloads.",
    "pricing.contact": "Contact us",
    "pricing.enterpriseBilling": "Custom capacity and service terms.",
    "pricing.enterpriseOne": "Custom resource limits",
    "pricing.enterpriseTwo": "Dedicated account contact",
    "pricing.enterpriseThree": "24/7 support with SLA",
    "calculator.eyebrow": "Resource calculator",
    "calculator.title": "Price the workload.",
    "calculator.description": "Reference rates are defined in one JavaScript object. Nothing is purchased.",
    "calculator.instances": "Instances",
    "calculator.storage": "Storage",
    "calculator.bandwidth": "Monthly bandwidth",
    "calculator.support": "Support level",
    "calculator.community": "Community",
    "calculator.priority": "Priority",
    "calculator.sla": "24/7 with SLA",
    "calculator.estimate": "Estimated monthly cost",
    "calculator.monthlyReference": "Monthly reference price.",
    "calculator.initialRecommendation": "Matching plan: Pro",
    "calculator.compute": "Compute",
    "calculator.storageCost": "Storage",
    "calculator.bandwidthCost": "Bandwidth",
    "calculator.supportCost": "Support",
    "calculator.breakdownLabel": "Cost breakdown: compute, storage, bandwidth and support",
    "calculator.disclosure": "Sample rates only. Annual billing discounts each component by 20%.",
    "pricing.initialSelection": "No paid demo plan selected.",
    "pricing.cancelPlan": "Cancel selected demo plan",
    "terminal.eyebrow": "A readable release trace",
    "terminal.title": "One command.\nEvery stage visible.",
    "terminal.description": "This sample session types a deployment trace. It repeats only while visible, and pauses when the tab is hidden.",
    "terminal.pause": "Pause session",
    "terminal.replay": "Replay terminal session",
    "terminal.windowTitle": "terminal / nimbus-cli",
    "terminal.copy": "Copy deploy command",
    "terminal.clone": "Cloning repository",
    "terminal.build": "Building application",
    "terminal.test": "Running checks",
    "terminal.regions": "Pushing to SIN, FRA and SFO",
    "terminal.complete": "Sample deployment ready",
    "terminal.disclosure": "Portfolio sequence. No Git command is executed.",
    "terminal.accessibleSummary": "Sample trace: clone repository, build application, run checks and release to three example regions. Use Pause session to stop the loop.",
    "faq.eyebrow": "Before the first deploy",
    "faq.title": "Know what happens\nwhen you click.",
    "faq.description": "The interface works in your browser. Cloud accounts, payments and support services are not connected.",
    "faq.deployQuestion": "How long does deployment take?",
    "faq.deployAnswer": "The portfolio sequence completes in a few seconds: clone, build, test and release. A real build would depend on source size, dependencies, tests and the selected regions.",
    "faq.securityQuestion": "Is my data secure?",
    "faq.securityAnswer": "This page does not request source code, credentials or payment information. Theme and language preferences stay in localStorage. Email forms validate locally and send nothing.",
    "faq.planQuestion": "Can I change plans later?",
    "faq.planAnswer": "Yes. Select another sample plan at any time. The calculator and selected-plan label update locally; no payment is taken and no subscription is created.",
    "faq.languagesQuestion": "Which programming languages are supported?",
    "faq.languagesAnswer": "The fictional platform is designed around Node.js, Python, Go, PHP and container workloads. This portfolio itself uses only HTML, CSS and vanilla JavaScript, with no build step.",
    "faq.cancelQuestion": "How do I cancel a subscription?",
    "faq.cancelAnswer": "Choose Cancel selected demo plan in the pricing section. Confirm the reset, then use Undo within five seconds if needed. This only resets the page state; there is no real subscription to cancel.",
    "faq.reviewPlan": "Review the selected plan",
    "cta.eyebrow": "Your next action",
    "cta.title": "Run your\nfirst deploy.",
    "cta.description": "Try the signup interaction, then explore the dashboard. This is a portfolio demo; no account is created.",
    "cta.emailLabel": "Email address",
    "cta.emailPlaceholder": "you@company.com",
    "cta.action": "Get Started Free",
    "cta.initialMessage": "Enter an email to check the form interaction.",
    "cta.privacy": "Nothing is sent or stored. Theme and language preferences are the only persistent settings.",
    "footer.description": "A fictional cloud platform built as a working front-end portfolio project.",
    "footer.stack": "HTML / CSS / JavaScript / SVG / Canvas",
    "footer.productLabel": "Product links",
    "footer.product": "Product",
    "footer.workflow": "Release workflow",
    "footer.scaling": "Auto-scaling",
    "footer.network": "Global network",
    "footer.sourceLabel": "Source and author links",
    "footer.source": "Source",
    "footer.readme": "Project README",
    "footer.commands": "Command palette",
    "footer.copyright": "© 2026 NimbusCloud. Portfolio demo by Putera MY. All platform figures are sample data.",
    "footer.backTop": "Back to top",
    "nav.menu": "Navigation",
    "nav.close": "Close navigation",
    "nav.mobileLabel": "Mobile navigation",
    "theme.toggle": "Toggle theme",
    "palette.title": "Command palette",
    "palette.searchLabel": "Search actions",
    "palette.placeholder": "Search pages or actions…",
    "palette.close": "Close command palette",
    "palette.loading": "Preparing available actions.",
    "palette.actions": "Available actions",
    "palette.empty": "No matching actions. Try “deploy”, “theme” or “pricing”.",
    "palette.navigate": "Navigate",
    "palette.run": "Run",
    "palette.dismiss": "Close",
    "confirm.eyebrow": "Confirm action",
    "confirm.title": "Reset the selected plan?",
    "confirm.description": "This returns the local demo plan to Starter. No account or subscription is changed.",
    "confirm.keep": "Keep current plan",
    "confirm.reset": "Reset to Starter",
    "support.title": "Preview a support request.",
    "support.close": "Close support form",
    "support.description": "This form validates locally. No message is sent to a support team.",
    "support.topic": "Topic",
    "support.deployment": "Deployment",
    "support.scaling": "Scaling",
    "support.billing": "Billing",
    "support.message": "Message",
    "support.placeholder": "Describe the issue in at least 10 characters.",
    "support.initial": "Your text stays in this form until it is closed.",
    "support.preview": "Validate request",
    "toast.label": "Notifications",
    "toast.dismiss": "Dismiss notification",
    "theme.toDark": "Switch to dark theme",
    "theme.dark": "Dark theme enabled.",
    "theme.light": "Light theme enabled.",
    "language.changed": "Interface language: English.",
    "shared.undo": "Undo",
    "shared.undone": "Change undone.",
    "shared.copied": "Copied",
    "shared.copyFailed": "Could not copy. Select the text and copy it manually.",
    "shared.actionFailed": "The action could not finish. Please try again.",
    "shared.enabled": "On",
    "shared.disabled": "Off",
    "shared.close": "Close",
    "dashboard.cpuTooltip": "Average CPU across active sample instances. Above 80% triggers a warning.",
    "dashboard.cpuAverage": "Average across {count} instances",
    "dashboard.highLoad": "High CPU load",
    "dashboard.overload": "Overload",
    "chart.summary": "Sample traffic: {traffic} requests per second. {instances} instances active. Average CPU: {cpu}%.",
    "chart.point": "{seconds} seconds ago: {traffic} requests per second.",
    "chart.current": "Now: {traffic} requests per second.",
    "servers.count": "{count} sample servers shown",
    "deploy.running": "Deployment in progress",
    "deploy.clone": "Cloning repository · main@a41c8e2",
    "deploy.build": "Building application · assets compiled",
    "deploy.test": "Running checks · 24 checks passed",
    "deploy.push": "Pushing release to SIN, FRA and SFO",
    "deploy.complete": "Sample release ready · {region}",
    "deploy.success": "Deploy complete",
    "deploy.successDetail": "A sample server was added. No cloud resource was created.",
    "deploy.cancelled": "Deployment cancelled",
    "deploy.cancelledDetail": "The previous sample release is still available.",
    "deploy.undone": "Sample deployment removed.",
    "workflow.caption": "Stage {stage} of 4: {name}",
    "workflow.source": "source received.",
    "workflow.build": "build verified.",
    "workflow.release": "regions ready.",
    "workflow.respond": "capacity adjusted.",
    "workflow.buildTrace": "build → test → package",
    "scaling.inspectInstance": "Inspect instance {number}",
    "scaling.inactive": "Standby",
    "scaling.inspector": "Instance {number} is {state}. Sample capacity: 100 requests per second.",
    "scaling.wait": "Cooldown: {seconds}s remaining",
    "scaling.outEvent": "Scale out: {from} → {to} instances. CPU exceeded 70%.",
    "scaling.inEvent": "Scale in: {from} → {to} instances. CPU fell below 30%.",
    "scaling.onEvent": "Auto-scaling enabled.",
    "scaling.offEvent": "Auto-scaling disabled. Capacity stays fixed.",
    "scaling.spikeEvent": "Traffic spike: {traffic} requests per second.",
    "scaling.explanation": "{instances} instances serve {traffic} sample requests per second at {cpu}% CPU.",
    "scaling.overloadHelp": "Capacity is fixed and CPU is above 95%. Enable auto-scaling or lower traffic to reduce latency.",
    "scaling.limit": "Instance limit reached",
    "network.selectedAnnouncement": "{region} selected. Sample latency {latency} milliseconds. All operational.",
    "network.activityChanged": "Network activity: {state}.",
    "pricing.billingChanged": "{period} billing selected.",
    "pricing.monthlyBill": "{price} billed monthly.",
    "pricing.yearlyBill": "{price} per month. {total} billed yearly.",
    "pricing.selected": "Selected sample plan: {plan}. No subscription created.",
    "pricing.selectionToast": "{plan} selected",
    "pricing.selectionDetail": "The selection stays in this page. No payment is taken.",
    "pricing.resetToast": "Sample plan reset to Starter.",
    "calculator.recommendation": "Matching plan: {plan}",
    "calculator.yearlyReference": "Monthly equivalent. Annual discount: 20%.",
    "calculator.custom": "Contact us for this configuration.",
    "calculator.summary": "Estimated cost {price} per month. Matching plan: {plan}.",
    "calculator.instanceValue": "{count} instances",
    "calculator.storageValue": "{value} GB storage",
    "calculator.bandwidthValue": "{value} TB per month",
    "features.policyCount": "{count} of 3 sample policies enabled.",
    "features.backupReady": "Sample snapshot created",
    "features.backupDetail": "A local record was added. No files were read or uploaded.",
    "features.snapshot": "Snapshot {number} · {time}",
    "terminal.resume": "Resume session",
    "terminal.paused": "Terminal session paused.",
    "terminal.resumed": "Terminal session resumed.",
    "palette.go": "Go to {section}",
    "palette.theme": "Toggle colour theme",
    "palette.language": "Switch to Bahasa Melayu",
    "palette.deploy": "Run a sample deployment",
    "palette.github": "Open project on GitHub",
    "palette.results": "{count} matching actions.",
    "palette.ready": "Choose an action or start typing.",
    "palette.page": "Section",
    "palette.action": "Action",
    "palette.external": "External link",
    "cta.required": "Enter your email address.",
    "cta.invalid": "Enter a valid email address, such as you@company.com.",
    "cta.success": "Email format accepted. Nothing was sent or stored; no account was created.",
    "cta.successToast": "Form checked",
    "support.invalid": "Describe the issue using 10–500 characters.",
    "support.success": "Request validated locally. Nothing was sent. You can edit the message and check it again.",
    "support.successToast": "Request format accepted"
  },
  "ms": {
    "meta.title": "NimbusCloud — Papan Pemuka Awan Interaktif oleh Putera MY",
    "meta.description": "Platform pengehosan awan fiksyen yang dibina oleh Putera MY dengan HTML, CSS dan JavaScript. Terokai papan pemuka langsung, aliran deploy, kawalan penskalaan dan kalkulator sumber.",
    "meta.socialDescription": "Platform awan fiksyen dengan papan pemuka berfungsi, urutan deploy, kawalan penskalaan dan kalkulator kos. Demo portfolio oleh Putera MY.",
    "a11y.skip": "Langkau ke kandungan",
    "notice.label": "Makluman portfolio",
    "notice.text": "Demo portfolio oleh Putera MY. Platform fiksyen. Semua metrik ialah data contoh.",
    "links.github": "GitHub",
    "links.portfolioLabel": "Buka repositori portfolio Putera MY",
    "links.portfolio": "Portfolio",
    "nav.label": "Navigasi utama",
    "nav.home": "Laman utama NimbusCloud",
    "nav.overview": "Gambaran",
    "nav.platform": "Platform",
    "nav.pricing": "Harga",
    "nav.faq": "Soalan Lazim",
    "theme.toLight": "Tukar kepada tema cerah",
    "language.label": "Bahasa antara muka",
    "palette.open": "Buka palet arahan",
    "nav.getStarted": "Mula Sekarang",
    "nav.open": "Buka navigasi",
    "hero.new": "Baharu",
    "hero.announcement": "Auto-Scaling 2.0",
    "hero.lineOne": "Pengehosan awan.",
    "hero.lineTwo": "Skala tanpa had.",
    "hero.description": "Jalankan deploy, ubah kapasiti dan periksa tindak balasnya. Setiap kawalan dalam papan pemuka ini berkongsi keadaan aplikasi yang sama.",
    "hero.start": "Mulakan Percuma",
    "hero.how": "Lihat Cara Berfungsi",
    "hero.assurance": "Tiada kad kredit diperlukan · Percubaan 14 hari",
    "hero.sampleOffer": "Contoh tawaran untuk demo portfolio ini. Tiada akaun atau langganan diwujudkan.",
    "hero.shortcut": "Terus ke bahagian. Jalankan arahan.",
    "dashboard.address": "app.nimbuscloud.my / gambaran",
    "dashboard.navigation": "Navigasi papan pemuka",
    "dashboard.home": "Gambaran NimbusCloud",
    "dashboard.areas": "Bahagian produk",
    "dashboard.servers": "Pelayan",
    "dashboard.analytics": "Analitik",
    "dashboard.network": "Rangkaian",
    "dashboard.settings": "Tetapan",
    "dashboard.localSession": "Sesi setempat",
    "shared.sampleData": "Data contoh",
    "dashboard.title": "Gambaran",
    "dashboard.operational": "Semua beroperasi",
    "deploy.action": "Deploy",
    "dashboard.cpu": "CPU",
    "dashboard.cpuHelp": "Tentang penggunaan CPU",
    "dashboard.cpuDescription": "Purata bagi 4 instance",
    "dashboard.memory": "Memori",
    "dashboard.allocated": "Diperuntukkan",
    "dashboard.memoryDescription": "4 GB tersedia",
    "dashboard.traffic": "Trafik",
    "dashboard.incoming": "Masuk",
    "units.rpsShort": "permintaan/s",
    "dashboard.trafficDescription": "Dikemas kini setiap saat",
    "chart.title": "Aktiviti rangkaian",
    "chart.window": "60 saat terakhir",
    "chart.accessibleLabel": "Contoh trafik masuk sepanjang 60 saat terakhir. Gunakan kekunci anak panah kiri dan kanan untuk memeriksa nilai.",
    "chart.fallback": "Carta trafik contoh langsung. Trafik masuk semasa ialah 240 permintaan sesaat.",
    "chart.minuteAgo": "60s lalu",
    "chart.now": "Kini",
    "chart.keyboardHelp": "Tuding untuk periksa. Papan kekunci: fokus pada carta, kemudian gunakan ← dan →.",
    "chart.initialSummary": "Trafik contoh ialah 240 permintaan sesaat. Empat instance sedang aktif.",
    "servers.title": "Pelayan aktif",
    "servers.initialCount": "3 wilayah dipaparkan",
    "regions.sin": "Singapura",
    "servers.detail": "Instance contoh. TLS diaktifkan. Tiada pelayan sebenar disambungkan.",
    "regions.fra": "Frankfurt",
    "regions.sfo": "San Francisco",
    "servers.empty": "Tiada pelayan contoh sedang berjalan. Deploy aplikasi untuk menambah pelayan.",
    "deploy.title": "Deploy aplikasi",
    "deploy.progressLabel": "Kemajuan deploy",
    "deploy.cancel": "Batalkan deploy",
    "deploy.sampleUrl": "URL deploy contoh",
    "deploy.copyUrl": "Salin URL deploy contoh",
    "dashboard.disclosure": "Dijana dalam pelayar anda. Tindakan deploy tidak mewujudkan sumber awan.",
    "stats.title": "Angka contoh platform",
    "stats.uptime": "Masa operasi",
    "stats.centres": "Pusat data",
    "stats.latency": "Latensi wilayah",
    "stats.disclosure": "Angka ilustrasi untuk perkhidmatan fiksyen. Angka ini bukan ukuran sistem produksi.",
    "features.eyebrow": "Enam alat. Satu pusat kawalan.",
    "features.title": "Periksa setiap butiran.",
    "features.description": "Buka baris, ubah tetapan dan ikuti hasilnya dalam papan pemuka. Setiap visual kecil menggunakan keadaan aplikasi contoh yang sama.",
    "features.deployTitle": "Deploy Pantas",
    "features.deployDescription": "Klon, bina, uji dan lancarkan ke tiga wilayah contoh.",
    "features.deployDetail": "Urutan deploy memaparkan kemajuannya dalam papan pemuka. Setiap proses yang berjaya menambah baris pelayan dan meningkatkan trafik contoh.",
    "features.runDeploy": "Jalankan deploy",
    "features.scalingTitle": "Penskalaan Automatik",
    "features.scalingDescription": "Tambah kapasiti apabila CPU melebihi 70%. Kurangkan apabila di bawah 30%.",
    "features.scalingDetail": "Sela empat saat menghalang bilangan instance daripada berubah terlalu kerap. Trafik, kos dan latensi bertindak balas terhadap kapasiti semasa.",
    "features.adjustLoad": "Laraskan beban trafik",
    "features.securityTitle": "Keselamatan Berlapis",
    "features.securityDescription": "Periksa tetapan TLS, firewall dan dasar akses.",
    "features.securityDetail": "Suis ini mengubah senarai semak dasar contoh. Suis ini tidak memeriksa peranti anda atau mengkonfigurasi rangkaian sebenar.",
    "features.policyLegend": "Dasar contoh",
    "features.policyTls": "TLS diwajibkan",
    "features.policyFirewall": "Firewall diaktifkan",
    "features.policyAccess": "Akses berskop",
    "features.policyInitial": "3 daripada 3 dasar contoh diaktifkan.",
    "features.backupsTitle": "Sandaran Automatik",
    "features.backupsDescription": "Cipta dan periksa rekod petikan setempat.",
    "features.backupsDetail": "Rekod petikan kekal dalam memori halaman. Tiada fail dibaca, disalin atau dimuat naik.",
    "features.createBackup": "Cipta petikan contoh",
    "features.noBackups": "Belum ada rekod petikan.",
    "features.monitoringTitle": "Pemantauan Masa Nyata",
    "features.monitoringDescription": "Periksa paparan bergerak bagi 60 sampel trafik.",
    "features.monitoringDetail": "Carta menyokong pemeriksaan dengan penuding dan navigasi papan kekunci. Amaran CPU muncul apabila penggunaan melebihi 80%.",
    "features.inspectChart": "Periksa carta langsung",
    "features.supportTitle": "Sokongan 24/7",
    "features.supportDescription": "Pratonton permintaan sokongan tanpa menghantar mesej.",
    "features.supportDetail": "Pelan fiksyen ini merangkumi sokongan sepanjang masa. Borang di bawah mengesahkan permintaan secara setempat; tiada pasukan sokongan dihubungi.",
    "features.openSupport": "Pratonton permintaan sokongan",
    "workflow.eyebrow": "Daripada commit ke seluruh dunia",
    "workflow.title": "Ikuti satu perubahan melalui sistem.",
    "workflow.description": "Skrol sepanjang aliran pelancaran. Visual mengikuti setiap peringkat, daripada Git push hingga lonjakan trafik.",
    "workflow.visualLabel": "Visual aliran pelancaran",
    "workflow.trace": "Jejak pelancaran",
    "workflow.commitLabel": "01 / Sumber",
    "workflow.commitVisual": "Commit diterima. Binaan dalam giliran.",
    "workflow.buildLabel": "02 / Binaan",
    "workflow.buildVisual": "Kebergantungan diselesaikan. Ujian lulus.",
    "workflow.deployLabel": "03 / Pelancaran",
    "workflow.deployVisual": "Versi tersedia di tiga wilayah contoh.",
    "workflow.scaleLabel": "04 / Tindak balas",
    "workflow.scaleVisual": "Trafik meningkat. Instance tambahan menampung beban.",
    "workflow.initialCaption": "Peringkat 1 daripada 4: sumber diterima.",
    "workflow.commitTitle": "Hantar commit.",
    "workflow.commitText": "Peristiwa repositori mengenal pasti aplikasi, commit dan persekitaran sasaran. Akses pelayan secara manual tidak diperlukan.",
    "workflow.buildTitle": "Bina dan sahkan.",
    "workflow.buildText": "Selesaikan kebergantungan, kompil aplikasi dan jalankan pemeriksaan. Pemeriksaan yang gagal menghentikan pelancaran sebelum trafik berubah.",
    "workflow.deployTitle": "Lancarkan ke wilayah.",
    "workflow.deployText": "Versi contoh dilancarkan ke Singapura, Frankfurt dan San Francisco. Versi sebelumnya kekal tersedia sehingga pemeriksaan lulus.",
    "workflow.scaleTitle": "Bertindak mengikut permintaan.",
    "workflow.scaleText": "Lonjakan trafik meningkatkan beban CPU. Dasar penskalaan menambah instance, menunggu sela dan memeriksa permintaan semula.",
    "workflow.tryScaling": "Cuba kawalan penskalaan",
    "scaling.eyebrow": "Kapasiti dalam kawalan anda",
    "scaling.title": "Berikan sistem sedikit beban.",
    "scaling.description": "Gerakkan gelangsar trafik atau cetuskan lonjakan 10×. Lihat bilangan instance dan nilai CPU yang sama dikemas kini dalam papan pemuka.",
    "scaling.load": "Beban trafik",
    "scaling.rangeHelp": "Anak panah: satu langkah. Shift + anak panah: sepuluh langkah.",
    "scaling.spike": "Lonjakan trafik ×10",
    "scaling.auto": "Penskalaan automatik",
    "scaling.instances": "Instance aktif",
    "scaling.cpu": "Purata CPU",
    "scaling.latency": "Latensi contoh",
    "scaling.hourly": "Anggaran kos sejam",
    "scaling.fleet": "Kumpulan instance",
    "scaling.stable": "Dalam kapasiti",
    "scaling.poolLabel": "Periksa instance contoh",
    "scaling.instanceOne": "Periksa instance 1",
    "scaling.active": "Aktif",
    "scaling.instanceTwo": "Periksa instance 2",
    "scaling.instanceThree": "Periksa instance 3",
    "scaling.instanceFour": "Periksa instance 4",
    "scaling.initialInspector": "Instance 01 sedang aktif. Kapasiti contoh: 100 permintaan sesaat.",
    "scaling.policyTitle": "Dasar penskalaan",
    "scaling.cpuMeter": "Purata CPU contoh",
    "scaling.scaleOut": "Tambah instance",
    "scaling.scaleIn": "Kurangkan instance",
    "scaling.cooldown": "Sela perubahan",
    "scaling.fourSeconds": "4 saat aktif",
    "scaling.capacity": "Setiap instance",
    "scaling.capacityValue": "100 permintaan/s",
    "scaling.initialExplanation": "Empat instance sedang mengendalikan beban contoh semasa. Tingkatkan trafik melepasi ambang untuk menambah kapasiti.",
    "scaling.ready": "Dasar sedia",
    "scaling.events": "Peristiwa penskalaan",
    "scaling.initialEvent": "Beban kerja contoh dimulakan. Empat instance sedang aktif.",
    "network.eyebrow": "Satu pelancaran. Pelbagai wilayah.",
    "network.title": "Dekatkan respons kepada permintaan.",
    "network.description": "Periksa lapan wilayah contoh. Fokus pada nod atau pilih butangnya untuk melihat latensi dan ketersediaan. Semua nilai rangkaian ialah data contoh.",
    "network.routes": "Tunjukkan aktiviti rangkaian",
    "network.mapTitle": "Lapan wilayah awan contoh",
    "network.mapDescription": "San Francisco, New York, London, Frankfurt, Mumbai, Singapura, Tokyo dan Sydney. Nod menyokong navigasi Enter, Space dan anak panah.",
    "network.inspectSfo": "Periksa San Francisco",
    "network.inspectNyc": "Periksa New York",
    "network.inspectLon": "Periksa London",
    "network.inspectFra": "Periksa Frankfurt",
    "network.inspectBom": "Periksa Mumbai",
    "network.inspectSin": "Periksa Singapura",
    "network.inspectTyo": "Periksa Tokyo",
    "network.inspectSyd": "Periksa Sydney",
    "network.choose": "Pilih wilayah contoh",
    "regions.nyc": "New York",
    "regions.lon": "London",
    "regions.bom": "Mumbai",
    "regions.tyo": "Tokyo",
    "regions.syd": "Sydney",
    "network.selected": "Wilayah contoh dipilih",
    "network.code": "Kod wilayah",
    "network.latency": "Latensi contoh",
    "network.instances": "Instance contoh",
    "network.deployHere": "Jalankan deploy contoh",
    "network.disclosure": "Ketersediaan dan latensi wilayah dijana secara setempat. Tiada ujian rangkaian dihantar.",
    "pricing.eyebrow": "Sumber terancang. Kos yang jelas.",
    "pricing.title": "Mulakan dengan pelan. Semak angkanya.",
    "pricing.description": "Bandingkan pelan contoh, kemudian ubah input sumber di bawah. Bil tahunan memberikan diskaun 20%.",
    "pricing.samplePlans": "Pelan contoh · tiada caj",
    "pricing.billingLabel": "Tempoh bil",
    "pricing.monthly": "Bulanan",
    "pricing.yearly": "Tahunan",
    "pricing.save": "Jimat 20%",
    "pricing.starter": "Starter",
    "pricing.starterTitle": "Ruang untuk bermula.",
    "pricing.starterDescription": "Untuk projek kecil dan deploy pertama.",
    "pricing.perMonth": "/bulan",
    "pricing.starterBilling": "Pelan contoh percuma.",
    "pricing.starterOne": "1 instance",
    "pricing.starterTwo": "Storan 1 GB",
    "pricing.starterThree": "Sokongan komuniti",
    "pricing.chooseStarter": "Pilih Starter",
    "pricing.pro": "Pro",
    "pricing.recommended": "Disyorkan",
    "pricing.proTitle": "Ruang untuk pelancaran seterusnya.",
    "pricing.proDescription": "Lebih kapasiti, penskalaan automatik dan sokongan keutamaan.",
    "pricing.proBilling": "RM79 dibilkan setiap bulan.",
    "pricing.proOne": "Sehingga 10 instance",
    "pricing.proTwo": "Storan 100 GB",
    "pricing.proThree": "Penskalaan automatik dan sokongan keutamaan",
    "pricing.choosePro": "Pilih Pro",
    "pricing.enterprise": "Enterprise",
    "pricing.enterpriseTitle": "Tetapkan keperluan anda.",
    "pricing.enterpriseDescription": "Konfigurasi contoh untuk beban kerja yang lebih besar.",
    "pricing.contact": "Hubungi kami",
    "pricing.enterpriseBilling": "Kapasiti dan terma perkhidmatan tersuai.",
    "pricing.enterpriseOne": "Had sumber tersuai",
    "pricing.enterpriseTwo": "Pegawai akaun khusus",
    "pricing.enterpriseThree": "Sokongan 24/7 dengan SLA",
    "calculator.eyebrow": "Kalkulator sumber",
    "calculator.title": "Kira kos beban kerja.",
    "calculator.description": "Kadar rujukan ditetapkan dalam satu objek JavaScript. Tiada pembelian dibuat.",
    "calculator.instances": "Instance",
    "calculator.storage": "Storan",
    "calculator.bandwidth": "Jalur lebar bulanan",
    "calculator.support": "Tahap sokongan",
    "calculator.community": "Komuniti",
    "calculator.priority": "Keutamaan",
    "calculator.sla": "24/7 dengan SLA",
    "calculator.estimate": "Anggaran kos bulanan",
    "calculator.monthlyReference": "Harga rujukan bulanan.",
    "calculator.initialRecommendation": "Pelan sepadan: Pro",
    "calculator.compute": "Pengkomputeran",
    "calculator.storageCost": "Storan",
    "calculator.bandwidthCost": "Jalur lebar",
    "calculator.supportCost": "Sokongan",
    "calculator.breakdownLabel": "Pecahan kos: pengkomputeran, storan, jalur lebar dan sokongan",
    "calculator.disclosure": "Kadar contoh sahaja. Bil tahunan memberikan diskaun 20% bagi setiap komponen.",
    "pricing.initialSelection": "Tiada pelan demo berbayar dipilih.",
    "pricing.cancelPlan": "Batalkan pelan demo dipilih",
    "terminal.eyebrow": "Jejak pelancaran yang mudah dibaca",
    "terminal.title": "Satu arahan. Setiap peringkat jelas.",
    "terminal.description": "Sesi contoh ini menaip jejak deploy. Sesi berulang hanya semasa kelihatan dan dijeda apabila tab tersembunyi.",
    "terminal.pause": "Jeda sesi",
    "terminal.replay": "Ulang sesi terminal",
    "terminal.windowTitle": "terminal / nimbus-cli",
    "terminal.copy": "Salin arahan deploy",
    "terminal.clone": "Mengklon repositori",
    "terminal.build": "Membina aplikasi",
    "terminal.test": "Menjalankan pemeriksaan",
    "terminal.regions": "Menghantar ke SIN, FRA dan SFO",
    "terminal.complete": "Deploy contoh sedia",
    "terminal.disclosure": "Urutan portfolio. Tiada arahan Git dijalankan.",
    "terminal.accessibleSummary": "Jejak contoh: klon repositori, bina aplikasi, jalankan pemeriksaan dan lancarkan ke tiga wilayah contoh. Gunakan Jeda sesi untuk menghentikan ulangan.",
    "faq.eyebrow": "Sebelum deploy pertama",
    "faq.title": "Ketahui hasil setiap klik.",
    "faq.description": "Antara muka ini berfungsi dalam pelayar anda. Akaun awan, pembayaran dan perkhidmatan sokongan tidak disambungkan.",
    "faq.deployQuestion": "Berapa lama masa untuk deploy?",
    "faq.deployAnswer": "Urutan portfolio selesai dalam beberapa saat: klon, bina, uji dan lancarkan. Binaan sebenar bergantung pada saiz sumber, kebergantungan, ujian dan wilayah yang dipilih.",
    "faq.securityQuestion": "Adakah data saya selamat?",
    "faq.securityAnswer": "Halaman ini tidak meminta kod sumber, kelayakan akses atau maklumat pembayaran. Pilihan tema dan bahasa disimpan dalam localStorage. Borang emel disahkan secara setempat tanpa menghantar apa-apa.",
    "faq.planQuestion": "Boleh tukar pelan kemudian?",
    "faq.planAnswer": "Boleh. Pilih pelan contoh lain pada bila-bila masa. Kalkulator dan label pelan dipilih dikemas kini secara setempat; tiada bayaran diambil atau langganan diwujudkan.",
    "faq.languagesQuestion": "Bahasa pengaturcaraan apa yang disokong?",
    "faq.languagesAnswer": "Platform fiksyen ini direka untuk Node.js, Python, Go, PHP dan beban kerja kontena. Portfolio ini sendiri hanya menggunakan HTML, CSS dan JavaScript biasa tanpa langkah binaan.",
    "faq.cancelQuestion": "Bagaimana cara membatalkan langganan?",
    "faq.cancelAnswer": "Pilih Batalkan pelan demo dipilih dalam bahagian harga. Sahkan tetapan semula, kemudian gunakan Buat asal dalam lima saat jika perlu. Tindakan ini hanya menetapkan semula keadaan halaman; tiada langganan sebenar untuk dibatalkan.",
    "faq.reviewPlan": "Semak pelan dipilih",
    "cta.eyebrow": "Langkah anda seterusnya",
    "cta.title": "Jalankan deploy pertama anda.",
    "cta.description": "Cuba interaksi pendaftaran, kemudian terokai papan pemuka. Ini ialah demo portfolio; tiada akaun diwujudkan.",
    "cta.emailLabel": "Alamat emel",
    "cta.emailPlaceholder": "anda@syarikat.com",
    "cta.action": "Mulakan Percuma",
    "cta.initialMessage": "Masukkan emel untuk mencuba interaksi borang.",
    "cta.privacy": "Tiada maklumat dihantar atau disimpan. Hanya pilihan tema dan bahasa disimpan secara kekal.",
    "footer.description": "Platform awan fiksyen yang dibina sebagai projek portfolio front-end berfungsi.",
    "footer.stack": "HTML / CSS / JavaScript / SVG / Canvas",
    "footer.productLabel": "Pautan produk",
    "footer.product": "Produk",
    "footer.workflow": "Aliran pelancaran",
    "footer.scaling": "Penskalaan automatik",
    "footer.network": "Rangkaian global",
    "footer.sourceLabel": "Pautan sumber dan pembangun",
    "footer.source": "Sumber",
    "footer.readme": "README projek",
    "footer.commands": "Palet arahan",
    "footer.copyright": "© 2026 NimbusCloud. Demo portfolio oleh Putera MY. Semua angka platform ialah data contoh.",
    "footer.backTop": "Kembali ke atas",
    "nav.menu": "Navigasi",
    "nav.close": "Tutup navigasi",
    "nav.mobileLabel": "Navigasi mudah alih",
    "theme.toggle": "Tukar tema",
    "palette.title": "Palet arahan",
    "palette.searchLabel": "Cari tindakan",
    "palette.placeholder": "Cari halaman atau tindakan…",
    "palette.close": "Tutup palet arahan",
    "palette.loading": "Menyediakan tindakan tersedia.",
    "palette.actions": "Tindakan tersedia",
    "palette.empty": "Tiada tindakan sepadan. Cuba “deploy”, “tema” atau “harga”.",
    "palette.navigate": "Navigasi",
    "palette.run": "Jalankan",
    "palette.dismiss": "Tutup",
    "confirm.eyebrow": "Sahkan tindakan",
    "confirm.title": "Tetapkan semula pelan dipilih?",
    "confirm.description": "Tindakan ini mengembalikan pelan demo setempat kepada Starter. Tiada akaun atau langganan diubah.",
    "confirm.keep": "Kekalkan pelan semasa",
    "confirm.reset": "Tetapkan semula kepada Starter",
    "support.title": "Pratonton permintaan sokongan.",
    "support.close": "Tutup borang sokongan",
    "support.description": "Borang ini disahkan secara setempat. Tiada mesej dihantar kepada pasukan sokongan.",
    "support.topic": "Topik",
    "support.deployment": "Deploy aplikasi",
    "support.scaling": "Penskalaan",
    "support.billing": "Bil",
    "support.message": "Mesej",
    "support.placeholder": "Terangkan isu dalam sekurang-kurangnya 10 aksara.",
    "support.initial": "Teks anda kekal dalam borang ini sehingga borang ditutup.",
    "support.preview": "Sahkan permintaan",
    "toast.label": "Pemberitahuan",
    "toast.dismiss": "Tutup pemberitahuan",
    "theme.toDark": "Tukar kepada tema gelap",
    "theme.dark": "Tema gelap diaktifkan.",
    "theme.light": "Tema cerah diaktifkan.",
    "language.changed": "Bahasa antara muka: Bahasa Melayu.",
    "shared.undo": "Buat asal",
    "shared.undone": "Perubahan dibatalkan.",
    "shared.copied": "Disalin",
    "shared.copyFailed": "Tidak dapat menyalin. Pilih teks dan salin secara manual.",
    "shared.actionFailed": "Tindakan tidak dapat diselesaikan. Sila cuba lagi.",
    "shared.enabled": "Hidup",
    "shared.disabled": "Mati",
    "shared.close": "Tutup",
    "dashboard.cpuTooltip": "Purata CPU bagi instance contoh yang aktif. Amaran dipaparkan apabila melebihi 80%.",
    "dashboard.cpuAverage": "Purata bagi {count} instance",
    "dashboard.highLoad": "Beban CPU tinggi",
    "dashboard.overload": "Beban berlebihan",
    "chart.summary": "Trafik contoh: {traffic} permintaan sesaat. {instances} instance aktif. Purata CPU: {cpu}%.",
    "chart.point": "{seconds} saat lalu: {traffic} permintaan sesaat.",
    "chart.current": "Kini: {traffic} permintaan sesaat.",
    "servers.count": "{count} pelayan contoh dipaparkan",
    "deploy.running": "Deployment sedang berjalan",
    "deploy.clone": "Mengklon repositori · main@a41c8e2",
    "deploy.build": "Membina aplikasi · aset dikompil",
    "deploy.test": "Menjalankan semakan · 24 semakan lulus",
    "deploy.push": "Menghantar keluaran ke SIN, FRA dan SFO",
    "deploy.complete": "Keluaran contoh sedia · {region}",
    "deploy.success": "Deploy selesai",
    "deploy.successDetail": "Satu pelayan contoh ditambah. Tiada sumber awan diwujudkan.",
    "deploy.cancelled": "Deployment dibatalkan",
    "deploy.cancelledDetail": "Keluaran contoh terdahulu masih tersedia.",
    "deploy.undone": "Deployment contoh dibuang.",
    "workflow.caption": "Langkah {stage} daripada 4: {name}",
    "workflow.source": "sumber diterima.",
    "workflow.build": "binaan disahkan.",
    "workflow.release": "wilayah sedia.",
    "workflow.respond": "kapasiti dilaraskan.",
    "workflow.buildTrace": "bina → uji → pakej",
    "scaling.inspectInstance": "Periksa instance {number}",
    "scaling.inactive": "Sedia tunggu",
    "scaling.inspector": "Instance {number} dalam keadaan {state}. Kapasiti contoh: 100 permintaan sesaat.",
    "scaling.wait": "Tempoh bertenang: baki {seconds}s",
    "scaling.outEvent": "Tambah kapasiti: {from} → {to} instance. CPU melebihi 70%.",
    "scaling.inEvent": "Kurangkan kapasiti: {from} → {to} instance. CPU di bawah 30%.",
    "scaling.onEvent": "Auto-scaling diaktifkan.",
    "scaling.offEvent": "Auto-scaling dimatikan. Kapasiti dikekalkan.",
    "scaling.spikeEvent": "Lonjakan trafik: {traffic} permintaan sesaat.",
    "scaling.explanation": "{instances} instance melayani {traffic} permintaan contoh sesaat pada {cpu}% CPU.",
    "scaling.overloadHelp": "Kapasiti kekal dan CPU melebihi 95%. Hidupkan auto-scaling atau kurangkan trafik untuk menurunkan latensi.",
    "scaling.limit": "Had instance dicapai",
    "network.selectedAnnouncement": "{region} dipilih. Latensi contoh {latency} milisaat. Semua sistem beroperasi.",
    "network.activityChanged": "Aktiviti rangkaian: {state}.",
    "pricing.billingChanged": "Bil {period} dipilih.",
    "pricing.monthlyBill": "{price} dibilkan setiap bulan.",
    "pricing.yearlyBill": "{price} sebulan. {total} dibilkan setiap tahun.",
    "pricing.selected": "Pelan contoh dipilih: {plan}. Tiada langganan diwujudkan.",
    "pricing.selectionToast": "{plan} dipilih",
    "pricing.selectionDetail": "Pilihan kekal dalam halaman ini. Tiada bayaran dikenakan.",
    "pricing.resetToast": "Pelan contoh ditetapkan semula kepada Starter.",
    "calculator.recommendation": "Pelan sepadan: {plan}",
    "calculator.yearlyReference": "Nilai setara bulanan. Diskaun tahunan: 20%.",
    "calculator.custom": "Hubungi kami untuk konfigurasi ini.",
    "calculator.summary": "Anggaran kos {price} sebulan. Pelan sepadan: {plan}.",
    "calculator.instanceValue": "{count} instance",
    "calculator.storageValue": "Storan {value} GB",
    "calculator.bandwidthValue": "{value} TB sebulan",
    "features.policyCount": "{count} daripada 3 dasar contoh diaktifkan.",
    "features.backupReady": "Snapshot contoh diwujudkan",
    "features.backupDetail": "Satu rekod setempat ditambah. Tiada fail dibaca atau dimuat naik.",
    "features.snapshot": "Snapshot {number} · {time}",
    "terminal.resume": "Sambung sesi",
    "terminal.paused": "Sesi terminal dijeda.",
    "terminal.resumed": "Sesi terminal disambung.",
    "palette.go": "Pergi ke {section}",
    "palette.theme": "Tukar tema warna",
    "palette.language": "Tukar kepada English",
    "palette.deploy": "Jalankan deployment contoh",
    "palette.github": "Buka projek di GitHub",
    "palette.results": "{count} tindakan sepadan.",
    "palette.ready": "Pilih tindakan atau mula menaip.",
    "palette.page": "Bahagian",
    "palette.action": "Tindakan",
    "palette.external": "Pautan luar",
    "cta.required": "Masukkan alamat emel anda.",
    "cta.invalid": "Masukkan alamat emel yang sah, seperti anda@syarikat.com.",
    "cta.success": "Format emel diterima. Tiada apa-apa dihantar atau disimpan; tiada akaun diwujudkan.",
    "cta.successToast": "Borang disemak",
    "support.invalid": "Terangkan masalah menggunakan 10–500 aksara.",
    "support.success": "Permintaan disahkan secara setempat. Tiada apa-apa dihantar. Anda boleh mengedit mesej dan menyemaknya semula.",
    "support.successToast": "Format permintaan diterima"
  }
};


/* 02. Utiliti kecil, keutamaan pengguna dan keadaan aplikasi bersama. */
const root = document.documentElement;
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
/* Token gerakan dibaca sekali sebelum sebarang perubahan DOM. */
const motionTokens = (() => {
  const style = getComputedStyle(root);
  const names = ['--duration-press', '--duration-fast', '--duration-ui', '--duration-reveal', '--duration-hero', '--duration-tooltip', '--duration-live', '--stagger'];
  return Object.freeze(Object.fromEntries(names.map(name => [name, parseFloat(style.getPropertyValue(name)) || 0])));
})();
const token = name => motionTokens[name] || 0;
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch {} }
};

const NimbusState = (() => {
  const events = new EventTarget();
  let data = Object.freeze({
    language: root.lang === 'ms' ? 'ms' : 'en',
    theme: root.dataset.theme === 'light' ? 'light' : 'dark',
    billing: 'monthly', selectedPlan: null, region: 'sin',
    instances: 4, load: 240, traffic: 240, cpu: 60, memory: 1.6,
    latency: 17, autoScaling: true, deploying: false, deployProgress: 0,
    servers: Object.freeze([
      Object.freeze({ id: 'nimbus-sin-01', region: 'sin', latency: 12 }),
      Object.freeze({ id: 'nimbus-fra-01', region: 'fra', latency: 18 }),
      Object.freeze({ id: 'nimbus-sfo-01', region: 'sfo', latency: 16 })
    ])
  });
  function emit(type, detail = {}) {
    events.dispatchEvent(new CustomEvent(type, { detail }));
  }
  function update(patch, source = 'ui') {
    const next = { ...data, ...patch };
    for (const [key, min, max] of [
      ['instances', 1, 20], ['load', 0, 2000], ['traffic', 0, 100000],
      ['cpu', 0, 100], ['memory', 0, 4], ['latency', 1, 10000],
      ['deployProgress', 0, 100]
    ]) {
      const value = Number(next[key]);
      next[key] = Number.isFinite(value) ? clamp(value, min, max) : data[key];
    }
    next.instances = Math.round(next.instances);
    next.language = next.language === 'ms' ? 'ms' : 'en';
    next.theme = next.theme === 'light' ? 'light' : 'dark';
    next.billing = next.billing === 'yearly' ? 'yearly' : 'monthly';
    if (next.servers !== data.servers) {
      next.servers = Object.freeze(next.servers.map(server => Object.freeze({ ...server })));
    }
    const changed = Object.keys(next).filter(key => next[key] !== data[key]);
    if (!changed.length) return data;
    const previous = data;
    data = Object.freeze(next);
    emit('change', { state: data, previous, changed, source });
    changed.forEach(key => emit(key, { value: data[key], previous: previous[key], source }));
    return data;
  }
  return Object.freeze({
    get: () => data, update, emit,
    on(type, handler) {
      const listener = event => handler(event.detail);
      events.addEventListener(type, listener);
      return () => events.removeEventListener(type, listener);
    }
  });
})();
window.NimbusState = NimbusState;

/* Satu jam aktif: tiada setInterval dan tiada masa terkumpul semasa dijeda. */
const Clock = (() => {
  const jobs = new Set();
  const visibility = new Map();
  let frame = 0;
  let previous = 0;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visibility.set(entry.target, entry.isIntersecting));
    refresh();
  }, { threshold: 0 });
  const eligible = job => !document.hidden && !job.paused &&
    !(job.motion && motionQuery.matches) &&
    (!job.element || (job.element.isConnected && visibility.get(job.element)));

  function remove(job) {
    jobs.delete(job);
    if (job.element && ![...jobs].some(other => other.element === job.element)) {
      observer.unobserve(job.element);
      visibility.delete(job.element);
    }
    refresh();
  }
  function tick(now) {
    frame = 0;
    const delta = previous ? Math.min(now - previous, 100) : 0;
    previous = now;
    for (const job of [...jobs]) {
      if (!jobs.has(job) || !eligible(job)) continue;
      job.elapsed += delta;
      if (job.elapsed < job.interval) continue;
      const elapsed = job.elapsed;
      job.elapsed = 0;
      if (job.once) remove(job);
      job.run(elapsed);
    }
    refresh();
  }
  function refresh() {
    const active = [...jobs].some(eligible);
    if (active && !frame) frame = requestAnimationFrame(tick);
    if (!active) {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
    }
  }
  function add(run, { interval = 0, element = null, motion = false, once = false } = {}) {
    if (element && !visibility.has(element)) {
      visibility.set(element, false);
      observer.observe(element);
    }
    const job = { run, interval, element, motion, once, paused: false, elapsed: 0 };
    jobs.add(job);
    refresh();
    return {
      cancel: () => remove(job),
      pause() { job.paused = true; refresh(); },
      resume() { job.paused = false; refresh(); }
    };
  }
  function after(ms, callback, options = {}) {
    return add(callback, { ...options, interval: Math.max(0, ms), once: true });
  }
  function sleep(ms, { signal, ...options } = {}) {
    return new Promise((resolve, reject) => {
      if (signal?.aborted) return reject(new DOMException('Aborted', 'AbortError'));
      const job = after(ms, () => {
        signal?.removeEventListener('abort', abort);
        resolve();
      }, options);
      function abort() {
        job.cancel();
        reject(new DOMException('Aborted', 'AbortError'));
      }
      signal?.addEventListener('abort', abort, { once: true });
    });
  }
  document.addEventListener('visibilitychange', () => {
    root.dataset.pageHidden = String(document.hidden);
    previous = 0;
    refresh();
    NimbusState.emit('visibility', { hidden: document.hidden });
  });
  motionQuery.addEventListener('change', () => {
    refresh();
    NimbusState.emit('motion', { reduced: motionQuery.matches });
  });
  root.dataset.pageHidden = String(document.hidden);
  return Object.freeze({ add, after, sleep, refresh, get size() { return jobs.size; } });
})();

/* 03. Terjemahan selamat; tiada teks terjemahan dimasukkan sebagai HTML. */
const translationParameters = new WeakMap();
const missingTranslations = new Set();
function t(key, parameters = {}) {
  const language = NimbusState.get().language;
  const text = i18n[language][key] ?? i18n.en[key];
  if (text === undefined) {
    if (!missingTranslations.has(key)) {
      missingTranslations.add(key);
      console.warn('Missing translation:', key);
    }
    return '';
  }
  return text.replace(/\{(\w+)\}/g, (_, name) => String(parameters[name] ?? ''));
}
function translatedContent(element, text) {
  const parts = text.split('\n');
  element.replaceChildren(...parts.flatMap((part, index) =>
    index ? [document.createElement('br'), document.createTextNode(part)] : [document.createTextNode(part)]
  ));
}
function applyTranslations(scope = document) {
  const attributes = ['aria-label', 'aria-valuetext', 'aria-roledescription', 'placeholder', 'title', 'content'];
  const selectors = ['[data-i18n]', ...attributes.map(name => `[data-i18n-${name}]`)];
  const elements = $$(selectors.join(','), scope);
  if (scope instanceof Element && scope.matches(selectors.join(','))) elements.unshift(scope);
  elements.forEach(element => {
    const parameters = translationParameters.get(element) || {};
    if (element.dataset.i18n) translatedContent(element, t(element.dataset.i18n, parameters));
    attributes.forEach(attribute => {
      const key = element.getAttribute(`data-i18n-${attribute}`);
      if (key) element.setAttribute(attribute, t(key, parameters));
    });
  });
}
function bindText(element, key, parameters = {}) {
  if (!element) return;
  element.dataset.i18n = key;
  translationParameters.set(element, parameters);
  translatedContent(element, t(key, parameters));
}
function announce(key, parameters = {}) {
  bindText($('#app-announcer'), key, parameters);
}
const locale = () => NimbusState.get().language === 'ms' ? 'ms-MY' : 'en-MY';
function formatNumber(value, decimals = 0) {
  return new Intl.NumberFormat(locale(), {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals
  }).format(value);
}
function formatMoney(value, decimals = 2) {
  return new Intl.NumberFormat(locale(), {
    style: 'currency', currency: 'MYR', currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: decimals, maximumFractionDigits: decimals
  }).format(value);
}
const actionHandlers = new Map();
function registerAction(name, handler) { actionHandlers.set(name, handler); }
function animateSegment(group) {
  if (!group || motionQuery.matches) return;
  group.classList.add('is-switching');
  Clock.after(token('--duration-ui'), () => group.classList.remove('is-switching'));
}
function syncThemeButtons() {
  const key = NimbusState.get().theme === 'dark' ? 'theme.toLight' : 'theme.toDark';
  $$('[data-action="theme"]').forEach(button => {
    button.setAttribute('data-i18n-aria-label', key);
    button.dataset.tooltipI18n = key;
    button.setAttribute('aria-label', t(key));
  });
}
function setLanguage(language, { silent = false } = {}) {
  if (!['en', 'ms'].includes(language)) return;
  const changed = NimbusState.get().language !== language;
  root.lang = language;
  storage.set('nimbus-language', language);
  /* Keadaan mesti ditukar sebelum teks dan pelanggan peristiwa dilukis. */
  NimbusState.update({ language }, 'language');
  syncThemeButtons();
  applyTranslations();
  $$('[data-language]').forEach(button => {
    const selected = button.dataset.language === language;
    button.setAttribute('aria-pressed', String(selected));
    if (changed && selected) animateSegment(button.closest('.segmented'));
  });
  $('#og-locale').content = language === 'ms' ? 'ms_MY' : 'en_MY';
  $('#og-locale-alternate').content = language === 'ms' ? 'en_MY' : 'ms_MY';
  NimbusState.emit('translated', { language });
  if (changed && !silent) announce('language.changed');
}
let themeTransition = false;
async function setTheme(theme, trigger = null, { silent = false } = {}) {
  if (!['dark', 'light'].includes(theme) || themeTransition) return;
  if (theme === NimbusState.get().theme) return;
  const apply = () => {
    root.dataset.theme = theme;
    storage.set('nimbus-theme', theme);
    $$('meta[name="theme-color"]').forEach(meta => {
      meta.content = theme === 'dark' ? '#080B09' : '#F4F6EF';
    });
    NimbusState.update({ theme }, 'theme');
    syncThemeButtons();
    NimbusState.emit('theme-applied', { theme });
    if (!silent) announce(`theme.${theme}`);
  };
  if (!document.startViewTransition || motionQuery.matches) { apply(); return; }
  themeTransition = true;
  const rectangle = trigger?.getBoundingClientRect();
  const x = rectangle ? rectangle.left + rectangle.width / 2 : innerWidth / 2;
  const y = rectangle ? rectangle.top + rectangle.height / 2 : innerHeight / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  try {
    const transition = document.startViewTransition(apply);
    await transition.ready;
    const animation = root.animate({
      clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
    }, {
      duration: token('--duration-reveal'), easing: getComputedStyle(root).getPropertyValue('--ease-out').trim(),
      pseudoElement: '::view-transition-new(root)'
    });
    await animation.finished;
    await transition.finished;
  } catch { if (NimbusState.get().theme !== theme) apply(); }
  finally { themeTransition = false; }
}

/* 04. Digit bergulir; nilai boleh dibaca kekal sebagai satu teks lengkap. */
const rollingValues = new WeakMap();
function rollNumber(element, value, options = {}) {
  if (!element) return;
  const { decimals = 0, prefix = '', suffix = '', format } = options;
  const text = format ? format(value) : `${prefix}${formatNumber(value, decimals)}${suffix}`;
  let record = rollingValues.get(element);
  const signature = [...text].map(character => /\d/.test(character) ? '#' : character).join('');
  if (!record || !element.contains(record.accessible) || record.signature !== signature) {
    const visual = document.createElement('span');
    visual.className = 'rolling-number';
    visual.setAttribute('aria-hidden', 'true');
    const tracks = [];
    for (const character of text) {
      const part = document.createElement('span');
      if (/\d/.test(character)) {
        part.className = 'rolling-digit';
        const track = document.createElement('span');
        track.className = 'rolling-digit-track';
        for (let digit = 0; digit <= 9; digit++) {
          const glyph = document.createElement('span');
          glyph.textContent = digit;
          track.append(glyph);
        }
        track.style.setProperty('--digit', character);
        part.append(track);
        tracks.push(track);
      } else {
        part.className = 'rolling-separator';
        part.textContent = character;
      }
      visual.append(part);
    }
    const accessible = document.createElement('span');
    accessible.className = 'sr-only';
    element.replaceChildren(visual, accessible);
    record = { signature, tracks, accessible };
    rollingValues.set(element, record);
  }
  [...text].filter(character => /\d/.test(character)).forEach((digit, index) => {
    record.tracks[index].style.setProperty('--digit', digit);
  });
  record.accessible.textContent = text;
}


/* Navigasi, dialog dan bantuan papan kekunci. */
const dialogTriggers = new WeakMap();

function openDialog(dialog, trigger = document.activeElement) {
  if (!dialog || dialog.open) return;
  $$('dialog[open]').forEach(other => closeDialog(other));
  dialogTriggers.set(dialog, trigger);
  dialog.showModal();
  document.body.classList.add('has-modal');
  if (dialog.id === 'mobile-menu') $('#mobile-menu-button').setAttribute('aria-expanded', 'true');
  const initial = $('input:not([type="hidden"]), [autofocus], button, a[href]', dialog);
  initial?.focus({ preventScroll: true });
}

function closeDialog(dialog) {
  if (!dialog?.open) return;
  const trigger = dialogTriggers.get(dialog);
  dialogTriggers.delete(dialog);
  dialog.close();
  document.body.classList.toggle('has-modal', Boolean($('dialog[open]')));
  if (dialog.id === 'mobile-menu') $('#mobile-menu-button').setAttribute('aria-expanded', 'false');
  if (trigger?.isConnected && !trigger.closest('[inert]')) trigger.focus({ preventScroll: true });
}

function setupDialogs() {
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('cancel', event => {
      event.preventDefault();
      closeDialog(dialog);
    });
    dialog.addEventListener('close', () => {
      document.body.classList.toggle('has-modal', Boolean($('dialog[open]')));
      if (dialog.id === 'mobile-menu') $('#mobile-menu-button').setAttribute('aria-expanded', String(dialog.open));
      const trigger = dialogTriggers.get(dialog);
      if (trigger?.isConnected && !trigger.closest('[inert]')) trigger.focus({ preventScroll: true });
      dialogTriggers.delete(dialog);
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog);
    });
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const items = $$('a[href], button, input, select, textarea, [tabindex]', dialog)
        .filter(node => !node.disabled && node.tabIndex >= 0 && node.getClientRects().length);
      if (!items.length) return event.preventDefault();
      const first = items[0], last = items.at(-1);
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    });
  });
  registerAction('open-menu', button => openDialog($('#mobile-menu'), button));
  registerAction('close-menu', () => closeDialog($('#mobile-menu')));
  registerAction('close-palette', () => closeDialog($('#command-palette')));
  registerAction('dismiss-confirm', () => closeDialog($('#confirm-dialog')));
  registerAction('close-support', () => closeDialog($('#support-dialog')));
}

function navigateTo(id, { focus = true, history = true } = {}) {
  const target = document.getElementById(String(id).replace(/^#/, ''));
  if (!target) return false;
  $$('dialog[open]').forEach(dialog => closeDialog(dialog));
  if (history && location.hash !== `#${target.id}`) {
    try { window.history.pushState(null, '', `#${encodeURIComponent(target.id)}`); } catch (_) {}
  }
  if (focus) {
    const temporary = !target.hasAttribute('tabindex') && !target.matches('a[href],button,input,select,textarea');
    if (temporary) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (temporary) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }
  target.scrollIntoView({ behavior: motionQuery.matches ? 'instant' : 'smooth', block: 'start' });
  return true;
}

function setupNavigation() {
  const nav = $('#desktop-nav'), indicator = $('#nav-indicator'), header = $('#site-header');
  const links = $$('[data-nav-link]'), sections = $$('main > section[id]');
  const groups = { features: 'features', workflow: 'features', scaling: 'features', network: 'features', terminal: 'features', pricing: 'pricing', faq: 'faq', 'get-started': 'faq' };
  let scheduled = false;
  function renderNavigation() {
    scheduled = false;
    const offset = header.getBoundingClientRect().height + 120;
    let current = 'overview';
    for (const section of sections) if (section.getBoundingClientRect().top <= offset) current = groups[section.id] || 'overview';
    const active = links.find(link => link.hash === `#${current}`) || links[0];
    const navRect = nav.getBoundingClientRect(), activeRect = active.getBoundingClientRect();
    const maximum = root.scrollHeight - innerHeight;
    const progress = maximum > 0 ? Math.min(1, Math.max(0, scrollY / maximum)) : 0;
    links.forEach(link => link === active ? link.setAttribute('aria-current', 'location') : link.removeAttribute('aria-current'));
    indicator.style.transform = `translateX(${activeRect.left - navRect.left}px) scaleX(${activeRect.width})`;
    $('#scroll-progress').style.transform = `scaleX(${progress})`;
  }
  function schedule() {
    if (!scheduled && !document.hidden) { scheduled = true; requestAnimationFrame(renderNavigation); }
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  addEventListener('popstate', () => {
    if (location.hash) { try { navigateTo(decodeURIComponent(location.hash.slice(1)), { history: false }); } catch (_) {} }
    else scrollTo({ top: 0, behavior: motionQuery.matches ? 'instant' : 'smooth' });
  });
  NimbusState.on('translated', schedule);
  NimbusState.on('visibility', schedule);
  document.fonts?.ready.then(schedule);
  schedule();
}

/* Tooltip berkongsi satu elemen dan mengekalkan penerangan asal. */
function setupTooltips() {
  const tooltip = $('#tooltip');
  let owner = null, pending = null;
  function hide() {
    pending?.cancel(); pending = null;
    if (owner) {
      const ids = (owner.getAttribute('aria-describedby') || '').split(/\s+/).filter(id => id && id !== tooltip.id);
      if (ids.length) owner.setAttribute('aria-describedby', ids.join(' '));
      else owner.removeAttribute('aria-describedby');
    }
    owner = null; tooltip.hidden = true;
  }
  function position() {
    if (!owner) return;
    tooltip.textContent = t(owner.dataset.tooltipI18n);
    const source = owner.getBoundingClientRect(), box = tooltip.getBoundingClientRect();
    const x = Math.max(16, Math.min(innerWidth - box.width - 16, source.left + source.width / 2 - box.width / 2));
    const y = source.top - box.height - 10 >= 8 ? source.top - box.height - 10 : source.bottom + 10;
    tooltip.style.transform = `translate(${x}px, ${Math.min(innerHeight - box.height - 8, y)}px)`;
  }
  function show(trigger) {
    hide(); owner = trigger; tooltip.hidden = false;
    const ids = new Set((trigger.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean));
    ids.add(tooltip.id); trigger.setAttribute('aria-describedby', [...ids].join(' '));
    position();
  }
  document.addEventListener('pointerover', event => {
    const trigger = event.target.closest('[data-tooltip-i18n]');
    if (!trigger || trigger.contains(event.relatedTarget) || event.pointerType === 'touch') return;
    pending?.cancel(); pending = Clock.after(token('--duration-tooltip'), () => show(trigger), { element: trigger });
  });
  document.addEventListener('pointerout', event => {
    const trigger = event.target.closest('[data-tooltip-i18n]');
    if (trigger && !trigger.contains(event.relatedTarget) && !trigger.matches(':focus-within')) hide();
  });
  document.addEventListener('focusin', event => {
    const trigger = event.target.closest('[data-tooltip-i18n]');
    if (trigger) show(trigger);
  });
  document.addEventListener('focusout', event => { if (owner?.contains(event.target) && !owner.contains(event.relatedTarget)) hide(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  addEventListener('scroll', hide, { passive: true });
  addEventListener('resize', hide, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) hide(); });
  NimbusState.on('translated', position);
  NimbusState.on('theme-applied', position);
}

/* Pendedahan berlaku sekali; pilihan gerakan dikurangkan memaparkan semua kandungan. */
function setupReveal() {
  const elements = $$('[data-reveal]');
  const reveal = element => element.classList.add('is-visible');
  if (motionQuery.matches || !('IntersectionObserver' in window)) { elements.forEach(reveal); return; }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { reveal(entry.target); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  elements.forEach(element => {
    const siblings = [...element.parentElement.children].filter(child => child.hasAttribute('data-reveal'));
    element.style.setProperty('--reveal-delay', `${Math.min(5, siblings.indexOf(element)) * token('--stagger')}ms`);
    observer.observe(element);
  });
  NimbusState.on('motion', () => { if (motionQuery.matches) { observer.disconnect(); elements.forEach(reveal); } });
}

function setupCountUp() {
  $$('[data-count]').forEach(element => {
    const value = Number(element.dataset.count), decimals = Number(element.dataset.countDecimals || 0);
    const options = { decimals, prefix: element.dataset.countPrefix || '', suffix: element.dataset.countSuffix || '' };
    const duration = token('--duration-hero');
    let elapsed = 0, finished = motionQuery.matches;
    const render = number => rollNumber(element, number, options);
    render(value);
    if (!finished) {
      const job = Clock.add(delta => {
        elapsed = Math.min(duration, elapsed + delta);
        const progress = 1 - Math.pow(1 - elapsed / duration, 3);
        render(value * progress);
        if (elapsed >= duration) { finished = true; job.cancel(); render(value); }
      }, { interval: 16, element, motion: true });
      NimbusState.on('motion', () => { if (motionQuery.matches) { finished = true; job.cancel(); render(value); } });
    }
    NimbusState.on('language', () => render(finished ? value : value * (1 - Math.pow(1 - elapsed / duration, 3))));
  });
}


/* 05. Maklum balas butang dan notifikasi dengan tempoh aktif. */
const busyButtons = new WeakSet();
function prepareFeedback(scope = document) {
  $$('[data-feedback]', scope).forEach(button => {
    if (!$('.button-feedback', button)) {
      button.append($('#button-feedback-template').content.cloneNode(true));
    }
  });
}
async function withFeedback(button, action, { minimum = token('--duration-ui') } = {}) {
  if (!button || busyButtons.has(button)) return;
  busyButtons.add(button);
  const wasDisabled = button.disabled;
  const oldAriaDisabled = button.getAttribute('aria-disabled');
  button.dataset.state = 'loading';
  button.setAttribute('aria-busy', 'true');
  if ('disabled' in button) button.disabled = true;
  else button.setAttribute('aria-disabled', 'true');
  try {
    const [result] = await Promise.all([action(), Clock.sleep(minimum)]);
    button.dataset.state = 'success';
    await Clock.sleep(token('--duration-reveal'));
    return result;
  } catch (error) {
    if (error?.name !== 'AbortError') {
      showToast({ title: 'shared.actionFailed', type: 'error' });
      console.error(error);
    }
  } finally {
    delete button.dataset.state;
    button.removeAttribute('aria-busy');
    if ('disabled' in button) button.disabled = wasDisabled;
    if (oldAriaDisabled === null) button.removeAttribute('aria-disabled');
    else button.setAttribute('aria-disabled', oldAriaDisabled);
    busyButtons.delete(button);
  }
}

const activeToasts = new Set();
function showToast({ title, description = '', params = {}, type = 'success', duration = 5000, undo = null } = {}) {
  const stack = $('#toast-stack');
  const element = $('#toast-template').content.firstElementChild.cloneNode(true);
  element.dataset.type = type;
  bindText($('.toast-title', element), title, params);
  const detail = $('.toast-description', element);
  detail.hidden = !description;
  if (description) bindText(detail, description, params);
  const action = $('.toast-action', element);
  action.hidden = !undo;
  if (undo) bindText(action, 'shared.undo');
  $('.toast-icon use', element).setAttribute('href', type === 'success' ? '#icon-check' : '#icon-warning');
  applyTranslations(element);
  stack.append(element);
  let elapsed = 0;
  let closing = false;
  let hovered = false;
  const handle = { close };
  activeToasts.add(handle);
  while (activeToasts.size > 3) [...activeToasts][0].close(true);
  const life = Clock.add(delta => {
    if (hovered || element.contains(document.activeElement)) return;
    elapsed += delta;
    element.style.setProperty('--toast-progress', String(Math.max(0, 1 - elapsed / duration)));
    if (elapsed >= duration) close();
  });
  element.addEventListener('pointerenter', () => { hovered = true; });
  element.addEventListener('pointerleave', () => { hovered = false; });
  $('.toast-close', element).addEventListener('click', () => close());
  action.addEventListener('click', () => {
    if (closing || !undo) return;
    undo();
    announce('shared.undone');
    close();
  });
  announce(title, params);
  function close(immediate = false) {
    if (closing) return;
    closing = true;
    life.cancel();
    activeToasts.delete(handle);
    action.disabled = true;
    if (element.contains(document.activeElement)) {
      const nextClose = $('.toast-close', stack);
      if (nextClose && !element.contains(nextClose)) nextClose.focus();
      else $('#site-header [data-action="theme"]').focus({ preventScroll: true });
    }
    if (immediate || motionQuery.matches) element.remove();
    else {
      element.classList.add('is-leaving');
      Clock.after(token('--duration-fast'), () => element.remove());
    }
  }
  return handle;
}

/* Salinan datang daripada teks sebenar; kaedah lama menjadi sandaran. */
async function copyText(text, button) {
  try {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const selection = document.createElement('textarea');
      selection.value = text;
      selection.setAttribute('readonly', '');
      selection.setAttribute('aria-hidden', 'true');
      selection.tabIndex = -1;
      selection.style.cssText = 'position:fixed;left:-10000px;top:0;';
      document.body.append(selection);
      selection.select();
      const copied = document.execCommand('copy');
      selection.remove();
      button?.focus({ preventScroll: true });
      if (!copied) throw new Error('Clipboard unavailable');
    }
    const use = button ? $('use', button) : null;
    const href = use?.getAttribute('href');
    if (use) use.setAttribute('href', '#icon-check');
    showToast({ title: 'shared.copied', duration: 2500 });
    Clock.after(1500, () => { if (use && button.isConnected) use.setAttribute('href', href); });
    return true;
  } catch {
    showToast({ title: 'shared.copyFailed', type: 'error' });
    return false;
  }
}

/* 06. Borang setempat: sahkan tanpa menyimpan atau menghantar data. */
function setupForms() {
  const signup = $('#signup-form');
  const email = $('#signup-email');
  const message = $('#signup-message');
  signup.addEventListener('submit', async event => {
    event.preventDefault();
    if (email.disabled) return;
    const valid = email.validity.valid && email.value.trim().length > 0;
    if (!valid) {
      email.setAttribute('aria-invalid', 'true');
      message.classList.remove('is-success');
      message.classList.add('is-error');
      bindText(message, email.value.trim() ? 'cta.invalid' : 'cta.required');
      email.focus();
      return;
    }
    email.disabled = true;
    await withFeedback($('button[type="submit"]', signup), async () => {
      await Clock.sleep(token('--duration-ui'));
      email.removeAttribute('aria-invalid');
      email.value = '';
      message.classList.remove('is-error');
      message.classList.add('is-success');
      bindText(message, 'cta.success');
      showToast({ title: 'cta.successToast', description: 'cta.success' });
    });
    email.disabled = false;
  });
  email.addEventListener('input', () => {
    email.removeAttribute('aria-invalid');
    message.classList.remove('is-error', 'is-success');
    bindText(message, 'cta.initialMessage');
  });
  const form = $('#support-form');
  const input = $('#support-message');
  const output = $('#support-result');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const length = input.value.trim().length;
    if (length < 10 || length > 500) {
      input.setAttribute('aria-invalid', 'true');
      output.classList.remove('is-success');
      output.classList.add('is-error');
      bindText(output, 'support.invalid');
      input.focus();
      return;
    }
    await withFeedback($('button[type="submit"]', form), async () => {
      input.removeAttribute('aria-invalid');
      output.classList.remove('is-error');
      output.classList.add('is-success');
      bindText(output, 'support.success');
      showToast({ title: 'support.successToast', description: 'support.success' });
    });
  });
  input.addEventListener('input', () => {
    input.removeAttribute('aria-invalid');
    output.classList.remove('is-error', 'is-success');
    bindText(output, 'support.initial');
  });
  $('#support-dialog').addEventListener('close', () => {
    form.reset();
    input.removeAttribute('aria-invalid');
    output.classList.remove('is-error', 'is-success');
    bindText(output, 'support.initial');
  });
  registerAction('support', button => openDialog($('#support-dialog'), button));
  registerAction('close-support', () => closeDialog($('#support-dialog')));
  registerAction('dismiss-confirm', () => closeDialog($('#confirm-dialog')));
}

function setupInteractionRouting() {
  registerAction('theme', button => setTheme(NimbusState.get().theme === 'dark' ? 'light' : 'dark', button));
  registerAction('focus-chart', () => navigateTo('traffic-chart'));
  document.addEventListener('click', event => {
    if (event.defaultPrevented) return;
    const button = event.target.closest('button, a');
    if (!button || button.disabled || button.getAttribute('aria-disabled') === 'true') {
      if (button?.getAttribute('aria-disabled') === 'true') event.preventDefault();
      return;
    }
    if (button.dataset.language) { setLanguage(button.dataset.language); return; }
    if (button.dataset.copyTarget) {
      event.preventDefault();
      const target = document.getElementById(button.dataset.copyTarget);
      const command = button.dataset.copyTarget === 'terminal-command' ? 'nimbus deploy my-app' : target?.textContent;
      if (command) copyText(command.trim(), button);
      return;
    }
    const handler = actionHandlers.get(button.dataset.action);
    if (handler) { event.preventDefault(); handler(button, event); return; }
    if (button.matches('a[href^="#"]')) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      let id;
      try { id = decodeURIComponent(button.hash.slice(1)); } catch { return; }
      if (!document.getElementById(id)) return;
      event.preventDefault();
      if (button.hasAttribute('data-feedback')) withFeedback(button, () => navigateTo(id));
      else navigateTo(id);
    }
  });
  $$('[data-shortcut-hint]').forEach(element => {
    element.textContent = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K';
  });
}

/* 07. But hanya sekali. Fungsi bahagian 4 dan 5 dipanggil apabila ditambah. */
function boot() {
  $('#toast-stack').setAttribute('role', 'region');
  bindText($('[data-story-step="1"] code'), 'workflow.buildTrace');
  syncThemeButtons();
  setLanguage(NimbusState.get().language, { silent: true });
  prepareFeedback();
  setupDialogs();
  setupNavigation();
  setupTooltips();
  setupReveal();
  setupCountUp();
  setupForms();
  setupInteractionRouting();
  if (typeof setupDashboard === 'function') setupDashboard();
  if (typeof setupFeatures === 'function') setupFeatures();
  root.classList.add('app-ready');
  if (!motionQuery.matches) {
    root.dataset.intro = 'running';
    Clock.after(token('--duration-hero') + token('--stagger'), () => delete root.dataset.intro, { element: $('#overview') });
  }
  NimbusState.emit('ready');
}
queueMicrotask(boot);

/* 08. Model beban bersama; semua nilai ini ialah data contoh setempat. */
/* Unit masa ringkas kekal tepat untuk satu atau beberapa saat. */
i18n.en['chart.point'] = '{seconds}s ago: {traffic} requests per second.';
i18n.ms['chart.point'] = '{seconds}s lalu: {traffic} permintaan sesaat.';

const CLOUD_CONFIG = Object.freeze({
  capacityPerInstance: 100,
  hourlyInstanceCost: 0.12,
  sampleInterval: 1000,
  impulseDecay: 3500,
  regionLatency: Object.freeze({
    sin: 12, fra: 18, sfo: 16, nyc: 21,
    lon: 17, bom: 14, tyo: 15, syd: 20
  })
});

const CloudModel = (() => {
  const impulses = new Map();
  let velocity = 0;
  let drift = 0;
  let impulseSequence = 0;

  function estimate(traffic, instances) {
    const utilisation = traffic / (instances * CLOUD_CONFIG.capacityPerInstance);
    const cpu = clamp(utilisation * 100, 0, 100);
    const excess = Math.max(0, utilisation - 0.95);
    return {
      cpu,
      memory: clamp(0.7 + cpu * 0.014 + instances * 0.015, 0.7, 3.9),
      latency: Math.round(12 + cpu * 0.08 + excess * excess * 180 + (cpu > 95 ? 45 : 0))
    };
  }

  function impulseTotal() {
    return [...impulses.values()].reduce((total, value) => total + value, 0);
  }

  function reconcile(source = 'capacity') {
    const state = NimbusState.get();
    const traffic = Math.max(0, state.load + impulseTotal());
    NimbusState.update({ traffic, ...estimate(traffic, state.instances) }, source);
  }

  function setLoad(value, source = 'load-control') {
    NimbusState.update({ load: clamp(Number(value) || 0, 0, 2000) }, source);
    drift = 0;
    velocity = 0;
    reconcile(source);
  }

  function setInstances(value, source = 'instance-control') {
    NimbusState.update({ instances: value }, source);
    const state = NimbusState.get();
    NimbusState.update(estimate(state.traffic, state.instances), source);
  }

  function addImpulse(value = 180) {
    const id = ++impulseSequence;
    impulses.set(id, Math.max(0, value));
    reconcile('deploy-traffic');
    return () => {
      impulses.delete(id);
      reconcile('deploy-undo');
    };
  }

  function step(delta = CLOUD_CONFIG.sampleInterval, source = 'dashboard') {
    const state = NimbusState.get();
    const factor = clamp(delta / CLOUD_CONFIG.sampleInterval, 0.1, 2);
    const amplitude = Math.min(18, state.load * 0.045);
    velocity = clamp(velocity * 0.7 + (Math.random() - 0.5) * amplitude, -18, 18);
    drift = clamp(drift * 0.86 + velocity, -amplitude * 2, amplitude * 2);
    for (const [id, value] of impulses) {
      const next = value * Math.exp(-delta / CLOUD_CONFIG.impulseDecay);
      if (next < 0.5) impulses.delete(id);
      else impulses.set(id, next);
    }
    const targetTraffic = Math.max(0, state.load + drift + impulseTotal());
    const traffic = state.traffic + (targetTraffic - state.traffic) * (1 - Math.pow(0.62, factor));
    const target = estimate(traffic, state.instances);
    const servers = state.servers.map(server => {
      const base = CLOUD_CONFIG.regionLatency[server.region] || 18;
      const latency = clamp(server.latency + (base - server.latency) * 0.14 + (Math.random() - 0.5) * 0.9, 1, 999);
      return { ...server, latency };
    });
    NimbusState.update({
      traffic,
      cpu: state.cpu + (target.cpu - state.cpu) * 0.48,
      memory: state.memory + (target.memory - state.memory) * 0.22,
      latency: state.latency + (target.latency - state.latency) * 0.45,
      servers
    }, 'sample');
    NimbusState.emit('sample', { traffic, delta, source });
  }

  return Object.freeze({ estimate, reconcile, setLoad, setInstances, addImpulse, step });
})();

/* 09. Carta trafik: 60 sampel, tatal mendatar dan pemeriksaan papan kekunci. */
function createTrafficChart({ canvas, container, samples = [] }) {
  const initial = samples.filter(Number.isFinite).slice(-60).map(value => Math.max(0, value));
  const seed = initial[0] ?? NimbusState.get().traffic;
  let values = [...Array(Math.max(0, 60 - initial.length)).fill(seed), ...initial];
  let previousValues = values.slice();
  let context = null;
  let active = false;
  let destroyed = false;
  let initialised = false;
  let animation = null;
  let pendingDraw = null;
  let selected = null;
  let pointerInside = false;
  let shift = 1;
  let reveal = 1;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let colors = {};
  let numberFormatter;
  let timeFormatter;

  const tooltip = $('#chart-tooltip');
  const tooltipTime = $('#chart-tooltip-time');
  const tooltipValue = $('#chart-tooltip-value');
  const summary = $('#chart-summary');
  const announcement = $('#chart-announcement');
  const listeners = new AbortController();
  const unsubscribe = [];

  const peak = points => Math.max(100, ...points);
  const niceMaximum = points => {
    const maximum = peak(points);
    const step = Math.pow(10, Math.floor(Math.log10(maximum)));
    return Math.ceil(maximum / step) * step;
  };

  function readPresentation() {
    const style = getComputedStyle(canvas);
    colors = {
      line: style.getPropertyValue('--primary-text').trim(),
      area: style.getPropertyValue('--chart-fill').trim(),
      grid: style.getPropertyValue('--border').trim(),
      label: style.getPropertyValue('--muted').trim(),
      surface: style.getPropertyValue('--surface').trim(),
      font: style.getPropertyValue('--font-mono').trim()
    };
    const language = NimbusState.get().language === 'ms' ? 'ms-MY' : 'en-MY';
    numberFormatter = new Intl.NumberFormat(language, { maximumFractionDigits: 0 });
    timeFormatter = new Intl.RelativeTimeFormat(language, { numeric: 'auto', style: 'short' });
  }

  function updateSummary() {
    const state = NimbusState.get();
    bindText(summary, 'chart.summary', {
      traffic: formatNumber(values.at(-1)),
      instances: formatNumber(state.instances),
      cpu: formatNumber(state.cpu, 1)
    });
  }

  function resize() {
    if (!active || document.hidden || destroyed) return;
    const bounds = canvas.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    pixelRatio = Math.min(2, window.devicePixelRatio || 1);
    const pixelsWide = Math.round(width * pixelRatio);
    const pixelsHigh = Math.round(height * pixelRatio);
    if (canvas.width !== pixelsWide || canvas.height !== pixelsHigh) {
      canvas.width = pixelsWide;
      canvas.height = pixelsHigh;
    }
    context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function geometry() {
    const left = Math.min(48, width * .24);
    const right = 12;
    const top = 18;
    const bottom = height - 14;
    return {
      left, right, top, bottom,
      plotWidth: Math.max(1, width - left - right),
      plotHeight: Math.max(1, bottom - top)
    };
  }

  function pointAt(index, value, plot, maximum) {
    return {
      x: plot.left + index / 59 * plot.plotWidth,
      y: plot.bottom - value / maximum * plot.plotHeight
    };
  }

  function updateInspection(plot, maximum) {
    if (selected === null || !active || document.hidden) {
      tooltip.hidden = true;
      return;
    }
    const value = values[selected];
    const seconds = 59 - selected;
    const point = pointAt(selected + 1 - shift, value, plot, maximum);
    const x = clamp(point.x, plot.left, width - plot.right);

    context.save();
    context.strokeStyle = colors.label;
    context.lineWidth = 1;
    context.setLineDash([3, 4]);
    context.beginPath();
    context.moveTo(x, plot.top);
    context.lineTo(x, plot.bottom);
    context.stroke();
    context.setLineDash([]);
    context.fillStyle = colors.surface;
    context.strokeStyle = colors.line;
    context.lineWidth = 2;
    context.beginPath();
    context.arc(x, point.y, 4, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();

    const timeText = timeFormatter.format(-seconds, 'second');
    const valueText = `${numberFormatter.format(value)} ${t('units.rpsShort')}`;
    if (tooltipTime.textContent !== timeText) tooltipTime.textContent = timeText;
    if (tooltipValue.textContent !== valueText) tooltipValue.textContent = valueText;
    tooltip.hidden = false;
    /* Kedudukan anggaran mengelakkan bacaan susun atur pada setiap bingkai. */
    const tooltipWidth = Math.min(248, Math.max(140, width - 16));
    tooltip.style.width = `${tooltipWidth}px`;
    tooltip.style.transform = `translateX(${clamp(x - tooltipWidth / 2, 8, Math.max(8, width - tooltipWidth - 8))}px)`;
  }

  function draw() {
    if (!active || document.hidden || destroyed || !context || !width) return;
    const plot = geometry();
    const maximum = niceMaximum(previousValues) +
      (niceMaximum(values) - niceMaximum(previousValues)) * shift;
    const points = shift < 1 ? [...previousValues, values.at(-1)] : values;
    const offset = shift < 1 ? shift : 0;

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.font = `400 14px ${colors.font}`;
    context.textAlign = 'right';
    context.textBaseline = 'middle';
    context.lineWidth = 1;

    [0, .5, 1].forEach(fraction => {
      const y = plot.top + plot.plotHeight * fraction;
      context.strokeStyle = colors.grid;
      context.beginPath();
      context.moveTo(plot.left, y);
      context.lineTo(width - plot.right, y);
      context.stroke();
      context.fillStyle = colors.label;
      context.fillText(numberFormatter.format(maximum * (1 - fraction)), plot.left - 8, y);
    });

    context.save();
    context.beginPath();
    context.rect(plot.left, plot.top - 3, plot.plotWidth * reveal, plot.plotHeight + 6);
    context.clip();
    context.beginPath();
    points.forEach((value, index) => {
      const point = pointAt(index - offset, value, plot, maximum);
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    const last = pointAt(points.length - 1 - offset, 0, plot, maximum);
    const first = pointAt(-offset, 0, plot, maximum);
    context.lineTo(last.x, plot.bottom);
    context.lineTo(first.x, plot.bottom);
    context.closePath();
    context.fillStyle = colors.area;
    context.fill();

    context.beginPath();
    points.forEach((value, index) => {
      const point = pointAt(index - offset, value, plot, maximum);
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.strokeStyle = colors.line;
    context.lineWidth = 2;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.stroke();
    context.restore();

    updateInspection(plot, maximum);
    container.dataset.ready = 'true';
  }

  function render() {
    if (!active || document.hidden || destroyed || pendingDraw) return;
    pendingDraw = Clock.after(0, () => {
      pendingDraw = null;
      draw();
    }, { element: canvas });
  }

  function animate(kind) {
    animation?.cancel();
    let elapsed = 0;
    const duration = token('--duration-hero');
    animation = Clock.add(delta => {
      elapsed = Math.min(duration, elapsed + delta);
      const progress = duration ? elapsed / duration : 1;
      if (kind === 'intro') reveal = 1 - Math.pow(1 - progress, 3);
      else shift = progress;
      draw();
      if (progress === 1) {
        animation.cancel();
        animation = null;
      }
    }, { element: canvas, motion: true });
  }

  function push(value) {
    if (!Number.isFinite(value) || destroyed) return false;
    previousValues = values.slice();
    values = [...values.slice(1), Math.max(0, value)];
    reveal = 1;
    shift = motionQuery.matches || !active || document.hidden ? 1 : 0;
    updateSummary();
    if (shift === 0) animate('shift');
    render();
    return true;
  }

  function setActive(next) {
    if (destroyed) return;
    active = Boolean(next);
    if (!active) {
      animation?.cancel();
      animation = null;
      pendingDraw?.cancel();
      pendingDraw = null;
      resizeJob?.cancel();
      resizeJob = null;
      reveal = 1;
      shift = 1;
      selected = null;
      pointerInside = false;
      tooltip.hidden = true;
      return;
    }
    if (!context) context = canvas.getContext('2d');
    if (!context) return;
    readPresentation();
    resize();
    updateSummary();
    if (!initialised) {
      initialised = true;
      reveal = motionQuery.matches ? 1 : 0;
      if (!motionQuery.matches) animate('intro');
    }
    render();
  }

  function inspectPointer(event) {
    if (!active || !width) return;
    pointerInside = true;
    const bounds = canvas.getBoundingClientRect();
    const plot = geometry();
    const ratio = clamp((event.clientX - bounds.left - plot.left) / plot.plotWidth, 0, 1);
    selected = clamp(Math.round(ratio * 59 - (1 - shift)), 0, 59);
    render();
  }

  canvas.addEventListener('pointermove', inspectPointer, { signal: listeners.signal });
  canvas.addEventListener('pointerdown', inspectPointer, { signal: listeners.signal });
  canvas.addEventListener('pointerleave', () => {
    pointerInside = false;
    if (document.activeElement !== canvas) {
      selected = null;
      render();
    }
  }, { signal: listeners.signal });
  canvas.addEventListener('blur', () => {
    if (!pointerInside) {
      selected = null;
      render();
    }
  }, { signal: listeners.signal });
  canvas.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Escape'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Escape') {
      selected = null;
      tooltip.hidden = true;
      render();
      return;
    }
    const position = selected ?? 59;
    selected = event.key === 'Home' ? 0 : event.key === 'End' ? 59 :
      clamp(position + (event.key === 'ArrowLeft' ? -1 : 1), 0, 59);
    const seconds = 59 - selected;
    bindText(announcement, seconds ? 'chart.point' : 'chart.current', {
      seconds: formatNumber(seconds),
      traffic: formatNumber(values[selected])
    });
    render();
  }, { signal: listeners.signal });

  let resizeJob = null;
  function requestResize() {
    if (!active || destroyed || resizeJob) return;
    resizeJob = Clock.after(0, () => {
      resizeJob = null;
      resize();
      draw();
    }, { element: canvas });
  }
  const resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(requestResize) : null;
  resizeObserver?.observe(canvas);
  addEventListener('resize', requestResize, { passive: true, signal: listeners.signal });
  document.fonts?.ready.then(() => { if (!destroyed) requestResize(); });
  unsubscribe.push(NimbusState.on('translated', () => {
    readPresentation();
    updateSummary();
    render();
  }));
  unsubscribe.push(NimbusState.on('theme-applied', () => { readPresentation(); render(); }));
  unsubscribe.push(NimbusState.on('motion', () => {
    if (motionQuery.matches) {
      animation?.cancel();
      animation = null;
      reveal = 1;
      shift = 1;
      render();
    }
  }));
  unsubscribe.push(NimbusState.on('visibility', ({ hidden }) => {
    if (hidden) tooltip.hidden = true;
    else if (active) render();
  }));
  unsubscribe.push(NimbusState.on('instances', updateSummary));
  unsubscribe.push(NimbusState.on('cpu', updateSummary));

  return {
    push, render, setActive,
    get samples() { return values.slice(); },
    destroy() {
      if (destroyed) return;
      setActive(false);
      destroyed = true;
      resizeJob?.cancel();
      resizeObserver?.disconnect();
      listeners.abort();
      unsubscribe.forEach(stop => stop());
    }
  };
}

/* 10. Paparan dashboard mengekalkan nod DOM dan fokus pengguna. */
let deploymentController = null;
let deploymentRequest = null;

function requestDeployment(trigger = null, region = NimbusState.get().region) {
  if (!deploymentController || deploymentRequest || NimbusState.get().deploying) return Promise.resolve(false);
  const run = () => deploymentController.start(region);
  const operation = trigger?.hasAttribute('data-feedback')
    ? withFeedback(trigger, run)
    : run();
  deploymentRequest = operation.catch(error => {
    if (error?.name !== 'AbortError') {
      console.error(error);
      showToast({ title: 'shared.actionFailed', type: 'error' });
    }
    return false;
  }).finally(() => {
    deploymentController.release();
    deploymentRequest = null;
  });
  return deploymentRequest;
}

function setupDashboard() {
  const dashboard = $('#dashboard');
  const serverList = $('#server-list');
  const serverRows = new Map();
  const closingRows = new Map();
  const motions = new Map();
  const cpuCard = $('#metric-cpu');
  const health = $('#dashboard-health');
  const healthText = $('span:last-child', health);
  const healthDot = $('.status-dot', health);
  const initial = NimbusState.get();
  let inView = false;
  let active = false;
  let chart = null;
  let lastServerOrder = '';

  function playMotion(element, frames, duration = token('--duration-ui')) {
    if (motionQuery.matches || !element.animate) return null;
    const animation = element.animate(frames, {
      duration,
      easing: getComputedStyle(root).getPropertyValue('--ease-out').trim(),
      fill: 'both'
    });
    motions.set(animation, element);
    if (!active) animation.pause();
    animation.finished.then(() => {
      motions.delete(animation);
      animation.cancel();
    }).catch(() => motions.delete(animation));
    return animation;
  }

  function flipRows(change) {
    const nodes = [
      ...serverList.children,
      $('#deploy-panel'), $('#deployment-result'), $('.dashboard-footnote', dashboard)
    ].filter(node => node && node.getClientRects().length);
    const positions = new Map(nodes.map(node => [node, node.getBoundingClientRect().top]));
    for (const [animation, node] of motions) {
      if (positions.has(node)) { animation.cancel(); motions.delete(animation); }
    }
    change();
    if (motionQuery.matches || !active) return;
    const shifts = nodes.filter(node => node.isConnected && node.getClientRects().length)
      .map(node => [node, positions.get(node) - node.getBoundingClientRect().top]);
    shifts.forEach(([node, shift]) => {
      if (Math.abs(shift) > 0.5) playMotion(node, [
        { transform: `translateY(${shift}px)` }, { transform: 'translateY(0)' }
      ]);
    });
  }

  function cancelRowClose(id) {
    const pending = closingRows.get(id);
    if (!pending) return;
    pending.job.cancel();
    pending.animation?.cancel();
    closingRows.delete(id);
  }

  function toggleServer(button) {
    const row = button.closest('.server-row');
    const detail = $('.server-detail', row);
    const id = row.dataset.server;
    const open = button.getAttribute('aria-expanded') !== 'true';
    cancelRowClose(id);
    button.setAttribute('aria-expanded', String(open));
    row.classList.toggle('is-selected', open);
    if (open) {
      flipRows(() => { detail.hidden = false; });
      playMotion(detail, [
        { opacity: 0, transform: 'translateY(-4px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ]);
    } else if (motionQuery.matches) {
      detail.hidden = true;
    } else {
      const duration = token('--duration-fast');
      const animation = playMotion(detail, [{ opacity: 1 }, { opacity: 0 }], duration);
      const job = Clock.after(duration, () => {
        flipRows(() => { detail.hidden = true; });
        animation?.cancel();
        closingRows.delete(id);
      }, { element: row });
      closingRows.set(id, { job, animation });
    }
  }

  /* Baris asal diambil alih supaya semantik dan saiz awal kekal stabil. */
  $$('.server-row', serverList).forEach(row => {
    const server = initial.servers.find(item => item.region === row.dataset.server);
    if (!server) { row.remove(); return; }
    row.dataset.server = server.id;
    $('.server-name span:last-child', row).classList.add('server-id');
    $('[data-server-latency]', row).classList.add('server-latency-value');
    serverRows.set(server.id, row);
  });

  function renderServers(state) {
    const ids = new Set(state.servers.map(server => server.id));
    for (const [id, row] of serverRows) {
      if (ids.has(id)) continue;
      cancelRowClose(id);
      if (row.contains(document.activeElement)) {
        const target = $('#deploy-button').disabled ? $('#traffic-chart') : $('#deploy-button');
        target.focus({ preventScroll: true });
      }
      row.remove();
      serverRows.delete(id);
    }
    const order = state.servers.map(server => server.id).join('|');
    state.servers.forEach(server => {
      let row = serverRows.get(server.id);
      if (!row) {
        row = $('#server-template').content.firstElementChild.cloneNode(true);
        row.dataset.server = server.id;
        serverRows.set(server.id, row);
        row.classList.add('is-new');
        Clock.after(token('--duration-ui'), () => row.classList.remove('is-new'), { element: dashboard });
      }
      const button = $('.server-toggle', row);
      const detail = $('.server-detail', row);
      detail.id = `server-detail-${server.id}`;
      button.setAttribute('aria-controls', detail.id);
      $('.server-id', row).textContent = server.id;
      bindText($('.server-region', row), `regions.${server.region}`);
      rollNumber($('.server-latency-value', row), server.latency);
      row.style.animationPlayState = active ? 'running' : 'paused';
    });
    if (order !== lastServerOrder) {
      state.servers.forEach(server => serverList.append(serverRows.get(server.id)));
      lastServerOrder = order;
    }
    $('#servers-empty').hidden = state.servers.length > 0;
    bindText($('#server-count'), 'servers.count', { count: formatNumber(state.servers.length) });
  }

  function renderMetrics(state) {
    rollNumber($('[data-number="cpu"]'), state.cpu, { decimals: 1 });
    rollNumber($('[data-number="memory"]'), state.memory, { decimals: 1 });
    rollNumber($('[data-number="traffic"]'), state.traffic);
    bindText($('#cpu-description'), 'dashboard.cpuAverage', { count: formatNumber(state.instances) });
    const danger = state.cpu > 95;
    const warning = state.cpu > 80 && !danger;
    cpuCard.classList.toggle('is-warning', warning);
    cpuCard.classList.toggle('is-danger', danger);
    bindText(healthText, danger ? 'dashboard.overload' : warning ? 'dashboard.highLoad' : 'dashboard.operational');
    health.style.borderColor = danger ? 'var(--danger)' : warning ? 'var(--warn)' : '';
    healthDot.style.background = danger ? 'var(--danger)' : warning ? 'var(--warn)' : '';
    bindText($('#chart-summary'), 'chart.summary', {
      traffic: formatNumber(state.traffic),
      instances: formatNumber(state.instances),
      cpu: formatNumber(state.cpu, 1)
    });
  }

  function render(force = false) {
    if (!active && !force) return;
    const state = NimbusState.get();
    renderMetrics(state);
    renderServers(state);
  }

  function heartbeat() {
    if (!active || motionQuery.matches) return;
    $$('.server-name .status-dot', serverList).forEach(dot => {
      playMotion(dot, [{ opacity: 1 }, { opacity: 0.45 }, { opacity: 1 }], token('--duration-reveal'));
    });
  }

  function syncActivity() {
    active = inView && !document.hidden;
    dashboard.dataset.live = String(active && !motionQuery.matches);
    if (active && !chart) {
      const seed = Array.from({ length: 60 }, (_, index) =>
        Math.max(0, initial.traffic * (0.92 + 0.05 * Math.sin(index * 0.3) + 0.03 * Math.sin(index * 0.71)))
      );
      seed[59] = NimbusState.get().traffic;
      chart = createTrafficChart({ canvas: $('#traffic-chart'), container: $('#chart-container'), samples: seed });
    }
    if (active && chart && chart.samples.at(-1) !== NimbusState.get().traffic) {
      chart.push(NimbusState.get().traffic);
    }
    chart?.setActive(active);
    for (const [animation] of motions) {
      if (motionQuery.matches) animation.finish();
      else if (active) animation.play();
      else animation.pause();
    }
    serverRows.forEach(row => { row.style.animationPlayState = active ? 'running' : 'paused'; });
    if (active) render(true);
  }

  serverList.addEventListener('click', event => {
    const button = event.target.closest('.server-toggle');
    if (button) toggleServer(button);
  });
  NimbusState.on('change', ({ changed, source, state }) => {
    if (changed.some(key => ['cpu', 'memory', 'traffic', 'instances', 'servers'].includes(key))) render();
    if (active && changed.includes('traffic') && source !== 'sample') chart?.push(state.traffic);
  });
  NimbusState.on('sample', ({ traffic }) => {
    if (active) { chart?.push(traffic); heartbeat(); }
  });
  NimbusState.on('translated', () => { render(true); chart?.render(); });
  NimbusState.on('visibility', syncActivity);
  NimbusState.on('motion', syncActivity);
  const observer = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncActivity();
  }, { threshold: 0 });
  observer.observe(dashboard);
  Clock.add(delta => CloudModel.step(delta), {
    interval: CLOUD_CONFIG.sampleInterval, element: dashboard, motion: true
  });
  render(true);
  deploymentController = createDeploymentController({ dashboard, flipRows });
  registerAction('deploy', button => requestDeployment(button, button.dataset.regionDeploy || NimbusState.get().region));
  registerAction('cancel-deploy', () => deploymentController.cancel());
  NimbusState.on('deploy-request', ({ region } = {}) => requestDeployment(null, region || NimbusState.get().region));
}

/* 11. Urutan deploy menggunakan masa aktif, bukannya masa dinding. */
function createDeploymentController({ dashboard, flipRows }) {
  const panel = $('#deploy-panel');
  const logs = $('#deploy-log');
  const cancelButton = $('#cancel-deploy');
  const result = $('#deployment-result');
  const url = $('#deploy-url');
  const stages = [
    { key: 'deploy.clone', duration: 600 },
    { key: 'deploy.build', duration: 1100 },
    { key: 'deploy.test', duration: 700 },
    { key: 'deploy.push', duration: 1100 },
    { key: 'deploy.complete', duration: 400 }
  ];
  const totalDuration = stages.reduce((total, stage) => total + stage.duration, 0);
  let sequence = 1;
  let current = null;
  let releaseButtons = null;

  function setProgress(value) {
    const percent = clamp(Math.round(value), 0, 100);
    $('#deploy-progress').value = percent;
    $('#deploy-progress').textContent = `${formatNumber(percent)}%`;
    $('#deploy-percentage').textContent = `${formatNumber(percent)}%`;
    $('#deploy-progress-fill').style.transform = `scaleX(${percent / 100})`;
    if (NimbusState.get().deployProgress !== percent) NimbusState.update({ deployProgress: percent }, 'deploy-progress');
  }

  function appendLog(key, region) {
    const line = document.createElement('li');
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.classList.add('icon');
    icon.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#icon-check');
    icon.append(use);
    const text = document.createElement('span');
    bindText(text, key, { region: region.toUpperCase() });
    line.append(icon, text);
    logs.append(line);
    return line;
  }

  function lockButtons() {
    const records = $$('[data-action="deploy"]').map(button => ({
      button, disabled: button.disabled, busy: button.getAttribute('aria-busy'), owned: busyButtons.has(button)
    }));
    records.forEach(({ button }) => { button.disabled = true; button.setAttribute('aria-busy', 'true'); });
    return () => records.forEach(({ button, disabled, busy, owned }) => {
      if (owned) return;
      button.disabled = disabled;
      if (busy === null) button.removeAttribute('aria-busy');
      else button.setAttribute('aria-busy', busy);
    });
  }

  function start(requestedRegion) {
    if (current) return Promise.resolve(false);
    const region = Object.hasOwn(CLOUD_CONFIG.regionLatency, requestedRegion) ? requestedRegion : 'sin';
    const previousResult = { hidden: result.hidden, url: url.textContent };
    const release = ++sequence;
    const serverId = `nimbus-${region}-${String(release).padStart(2, '0')}`;
    releaseButtons = lockButtons();
    logs.replaceChildren();
    flipRows(() => { panel.hidden = false; result.hidden = true; });
    panel.setAttribute('aria-busy', 'true');
    cancelButton.hidden = false;
    cancelButton.disabled = false;
    NimbusState.update({ deploying: true, deployProgress: 0 }, 'deploy-start');
    setProgress(0);
    announce('deploy.running');
    navigateTo('deploy-panel', { history: false });
    cancelButton.focus({ preventScroll: true });

    return new Promise((resolve, reject) => {
      let elapsed = 0;
      let nextStage = 0;
      let boundary = stages[0].duration;
      let job = null;
      const run = { cancel, complete };
      current = run;

      function settle() {
        job?.cancel();
        panel.removeAttribute('aria-busy');
        cancelButton.hidden = true;
        current = null;
        NimbusState.update({ deploying: false }, 'deploy-finish');
      }

      function complete() {
        if (current !== run) return;
        const focusWasCancel = document.activeElement === cancelButton;
        while (nextStage < stages.length) appendLog(stages[nextStage++].key, region);
        setProgress(100);
        const state = NimbusState.get();
        const removeImpulse = CloudModel.addImpulse(180);
        const newServer = { id: serverId, region, latency: CLOUD_CONFIG.regionLatency[region] };
        flipRows(() => NimbusState.update({ servers: [newServer, ...state.servers] }, 'deploy-success'));
        const deployedUrl = `https://my-app-${String(release).padStart(2, '0')}.nimbuscloud.example`;
        url.textContent = deployedUrl;
        result.hidden = false;
        settle();
        if (focusWasCancel) $('button', result).focus({ preventScroll: true });
        showToast({
          title: 'deploy.success', description: 'deploy.successDetail', duration: 5000,
          undo() {
            const latest = NimbusState.get();
            flipRows(() => NimbusState.update({ servers: latest.servers.filter(server => server.id !== serverId) }, 'deploy-undo'));
            removeImpulse();
            if (url.textContent === deployedUrl) {
              url.textContent = previousResult.url;
              result.hidden = previousResult.hidden;
            }
            announce('deploy.undone');
          }
        });
        try { if (navigator.vibrate) navigator.vibrate(10); } catch {}
        resolve({ serverId, region, url: deployedUrl });
      }

      function cancel() {
        if (current !== run) return;
        appendLog('deploy.cancelled', region);
        url.textContent = previousResult.url;
        result.hidden = previousResult.hidden;
        settle();
        panel.setAttribute('tabindex', '-1');
        panel.focus({ preventScroll: true });
        panel.addEventListener('blur', () => panel.removeAttribute('tabindex'), { once: true });
        showToast({
          title: 'deploy.cancelled', description: 'deploy.cancelledDetail', type: 'warning',
          undo: () => requestDeployment(null, region)
        });
        reject(new DOMException('Aborted', 'AbortError'));
      }

      if (motionQuery.matches) { complete(); return; }
      job = Clock.add(delta => {
        elapsed = Math.min(totalDuration, elapsed + delta);
        while (nextStage < stages.length && elapsed >= boundary) {
          appendLog(stages[nextStage].key, region);
          nextStage++;
          boundary += stages[nextStage]?.duration || 0;
        }
        setProgress(elapsed / totalDuration * 100);
        if (elapsed >= totalDuration) complete();
      }, { interval: 32, element: dashboard });
    });
  }

  NimbusState.on('translated', () => setProgress(NimbusState.get().deployProgress));
  NimbusState.on('motion', ({ reduced }) => { if (reduced && current) current.complete(); });
  return {
    start,
    cancel: () => current?.cancel(),
    release() { releaseButtons?.(); releaseButtons = null; }
  };
}

/* 12. Gelangsar berkongsi tingkah laku, nilai dan bantuan papan kekunci. */
function initRange(input, onChange, { format = value => formatNumber(value) } = {}) {
  const control = input.closest('.range-control');
  const field = input.closest('.range-field');
  const bubble = $('.range-value-bubble', control);
  const output = $('output', field);
  const abort = new AbortController();
  let width = 0;

  function render() {
    const value = Number(input.value);
    const min = Number(input.min);
    const max = Number(input.max);
    const ratio = max > min ? clamp((value - min) / (max - min), 0, 1) : 0;
    const text = format(value);
    const number = formatNumber(value, Number.isInteger(value) ? 0 : 1);
    const bubbleWidth = Math.min(width, number.length * 8.5 + 16);
    const thumbPosition = 11 + ratio * Math.max(0, width - 22);
    control.style.setProperty('--range-fill', String(ratio));
    control.style.setProperty('--bubble-x', `${clamp(thumbPosition - bubbleWidth / 2, 0, Math.max(0, width - bubbleWidth))}px`);
    if (bubble) bubble.textContent = number;
    if (output) { output.textContent = text; output.setAttribute('aria-live', 'off'); }
    input.setAttribute('aria-valuetext', text);
  }
  input.addEventListener('input', () => {
    render();
    onChange(Number(input.value), input);
  }, { signal: abort.signal });
  input.addEventListener('keydown', event => {
    if (!event.shiftKey || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowUp'].includes(event.key) ? 1 : -1;
    input.value = String(clamp(Number(input.value) + direction * (Number(input.step) || 1) * 10, Number(input.min), Number(input.max)));
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }, { signal: abort.signal });
  const observer = new ResizeObserver(entries => {
    width = entries[0].contentRect.width;
    render();
  });
  observer.observe(control);
  const unsubscribe = NimbusState.on('translated', render);
  render();
  return {
    render,
    destroy() { abort.abort(); observer.disconnect(); unsubscribe(); }
  };
}

/* Semua alat dipasang selepas teras dan dashboard tersedia. */
function setupFeatures() {
  setupStory();
  setupScaling();
  setupNetwork();
  setupPricing();
  setupCommandPalette();
  setupTerminal();
  setupFAQ();
  setupMicroFeatures();
}

/* 13. Dasar penskalaan berkongsi sampel dengan dashboard. */
Object.assign(i18n.en, {
  'scaling.policyOff': 'Policy off · capacity is fixed',
  'scaling.reducedExplanation': '{instances} instances serve {traffic} sample requests per second at {cpu}% CPU. Static preview: changing a control applies the policy immediately.',
  'scaling.pressureHelp': 'CPU is above 70%. The policy will add capacity after its cooldown.',
  'scaling.limitHelp': 'All 20 sample instances are active. Reduce traffic to bring CPU below the threshold.'
});
Object.assign(i18n.ms, {
  'scaling.policyOff': 'Dasar dimatikan · kapasiti kekal',
  'scaling.reducedExplanation': '{instances} instance melayani {traffic} permintaan contoh sesaat pada {cpu}% CPU. Pratonton statik: perubahan kawalan terus menggunakan dasar penskalaan.',
  'scaling.pressureHelp': 'CPU melebihi 70%. Dasar akan menambah kapasiti selepas sela perubahan.',
  'scaling.limitHelp': 'Semua 20 instance contoh sedang aktif. Kurangkan trafik untuk menurunkan CPU di bawah ambang.'
});

function setupScaling() {
  const section = $('#scaling');
  const grid = $('#instance-grid');
  const slider = $('#traffic-load');
  const toggle = $('#auto-scaling');
  const eventList = $('#scaling-events');
  const meter = $('#cpu-meter');
  const badge = $('#scaling-state');
  const cells = new Map();
  const enterJobs = new Map();
  const records = [];
  let selected = 1;
  let remaining = 0;
  let inView = false;
  let eventSequence = 0;
  let inspectorSignature = '';
  const cooldown = 4000;

  for (let number = 1; number <= 20; number++) {
    const cell = $(`[data-instance="${number}"]`, grid) ||
      $('#instance-template').content.firstElementChild.cloneNode(true);
    cell.dataset.instance = String(number);
    cell.setAttribute('data-i18n-aria-label', 'scaling.inspectInstance');
    $('.instance-index', cell).textContent = String(number).padStart(2, '0');
    if (!cell.isConnected) grid.append(cell);
    cells.set(number, cell);
  }
  const firstEvent = $('li', eventList);
  records.push({ id: 0, key: 'scaling.initialEvent', params: {}, node: firstEvent });

  const range = initRange(slider, value => {
    CloudModel.setLoad(value);
    evaluatePolicy(motionQuery.matches);
    render(true);
  }, {
    format: value => `${formatNumber(value)} ${t('units.rpsShort')}`
  });

  function text(element, key, params = {}, force = false) {
    if (force || element.textContent !== t(key, params)) bindText(element, key, params);
  }

  function renderEvents(force = false) {
    if ((!inView || document.hidden) && !force) return;
    const valid = new Set(records.map(record => record.node));
    [...eventList.children].forEach(node => { if (!valid.has(node)) node.remove(); });
    [...records].reverse().forEach(record => {
      const params = Object.fromEntries(Object.entries(record.params).map(([key, value]) =>
        [key, typeof value === 'number' ? formatNumber(value) : value]
      ));
      text(record.node, record.key, params, force);
      if (!record.node.isConnected) eventList.prepend(record.node);
    });
  }

  function addEvent(key, params = {}) {
    records.unshift({ id: ++eventSequence, key, params, node: document.createElement('li') });
    if (records.length > 8) records.pop().node.remove();
    renderEvents();
  }

  function renderInspector(force = false) {
    const active = selected <= NimbusState.get().instances;
    const signature = `${selected}:${active}:${NimbusState.get().language}`;
    if (!force && signature === inspectorSignature) return;
    inspectorSignature = signature;
    bindText($('#instance-inspector'), 'scaling.inspector', {
      number: String(selected).padStart(2, '0'),
      state: t(active ? 'scaling.active' : 'scaling.inactive').toLocaleLowerCase(locale())
    });
  }

  function renderCells(state, force = false) {
    cells.forEach((cell, number) => {
      const wasActive = cell.classList.contains('is-active');
      const nowActive = number <= state.instances;
      cell.classList.toggle('is-active', nowActive);
      cell.classList.toggle('is-selected', number === selected);
      cell.setAttribute('aria-pressed', String(number === selected));
      const parameters = { number: formatNumber(number) };
      translationParameters.set(cell, parameters);
      cell.setAttribute('aria-label', t('scaling.inspectInstance', parameters));
      text($('.instance-state', cell), nowActive ? 'scaling.active' : 'scaling.inactive', {}, force);
      cell.style.animationPlayState = inView && !document.hidden ? 'running' : 'paused';
      if (wasActive === nowActive) return;
      enterJobs.get(number)?.cancel();
      cell.classList.remove('is-entering');
      if (nowActive && inView && !document.hidden && !motionQuery.matches) {
        const delay = Math.min(8, Math.max(0, number - 1)) * token('--stagger');
        cell.style.setProperty('--instance-delay', `${delay}ms`);
        cell.classList.add('is-entering');
        enterJobs.set(number, Clock.after(delay + token('--duration-ui'), () => {
          cell.classList.remove('is-entering');
          enterJobs.delete(number);
        }, { element: section }));
      }
    });
  }

  function renderCooldown(state) {
    const key = !state.autoScaling ? 'scaling.policyOff' : remaining > 0 ? 'scaling.wait' : 'scaling.ready';
    text($('#scaling-cooldown'), key, { seconds: formatNumber(Math.ceil(remaining / 1000)) });
  }

  function render(force = false) {
    if ((!inView || document.hidden) && !force) return;
    const state = NimbusState.get();
    slider.value = String(state.load);
    toggle.checked = state.autoScaling;
    range.render();
    rollNumber($('#scaling-instance-count'), state.instances);
    rollNumber($('#scaling-cpu'), state.cpu);
    rollNumber($('#scaling-latency'), state.latency);
    rollNumber($('#scaling-cost'), state.instances * CLOUD_CONFIG.hourlyInstanceCost, { format: formatMoney });
    meter.setAttribute('aria-valuenow', state.cpu.toFixed(1));
    meter.setAttribute('aria-valuetext', `${formatNumber(state.cpu, 1)}%`);
    $('#cpu-meter-fill').style.transform = `scaleX(${state.cpu / 100})`;
    meter.style.setProperty('--meter-color', state.cpu > 95 ? 'var(--danger)' : state.cpu > 70 ? 'var(--warn)' : 'var(--primary-text)');
    const limit = state.autoScaling && state.instances === 20 && state.cpu > 70;
    badge.dataset.state = state.cpu > 95 ? 'overload' : state.cpu > 70 ? 'warning' : 'healthy';
    text(badge, state.cpu > 95 ? 'dashboard.overload' : limit ? 'scaling.limit' : state.cpu > 70 ? 'dashboard.highLoad' : 'scaling.stable');
    const key = limit ? 'scaling.limitHelp' : !state.autoScaling && state.cpu > 95 ? 'scaling.overloadHelp' :
      state.autoScaling && state.cpu > 70 ? 'scaling.pressureHelp' : motionQuery.matches ? 'scaling.reducedExplanation' : 'scaling.explanation';
    text($('#scaling-explanation'), key, {
      instances: formatNumber(state.instances), traffic: formatNumber(state.traffic), cpu: formatNumber(state.cpu)
    });
    $('[data-action="spike"]').disabled = state.load === 0 || state.load >= Number(slider.max);
    renderCells(state, force);
    renderInspector();
    renderCooldown(state);
    renderEvents(force);
  }

  function evaluatePolicy(immediate = false) {
    const state = NimbusState.get();
    if (!state.autoScaling || (!immediate && remaining > 0)) return;
    const desired = clamp(Math.ceil(state.traffic / (CLOUD_CONFIG.capacityPerInstance * 0.65)), 1, 20);
    let next = state.instances;
    if (state.cpu > 70) next = Math.max(state.instances, desired);
    else if (state.cpu < 30 && desired < state.instances) next = immediate ? desired : Math.max(desired, state.instances - 1);
    if (next === state.instances) return;
    remaining = immediate ? 0 : cooldown;
    CloudModel.setInstances(next, 'auto-scaling');
    addEvent(next > state.instances ? 'scaling.outEvent' : 'scaling.inEvent', { from: state.instances, to: next });
  }

  registerAction('spike', () => {
    const load = Math.min(Number(slider.max), NimbusState.get().load * 10);
    CloudModel.setLoad(load, 'traffic-spike');
    addEvent('scaling.spikeEvent', { traffic: load });
    evaluatePolicy(motionQuery.matches);
    render(true);
  });
  toggle.addEventListener('change', () => {
    remaining = 0;
    NimbusState.update({ autoScaling: toggle.checked }, 'auto-control');
    addEvent(toggle.checked ? 'scaling.onEvent' : 'scaling.offEvent');
    evaluatePolicy(motionQuery.matches);
    render(true);
  });
  grid.addEventListener('click', event => {
    const cell = event.target.closest('[data-instance]');
    if (!cell) return;
    selected = Number(cell.dataset.instance);
    render(true);
  });
  grid.addEventListener('keydown', event => {
    const cell = event.target.closest('[data-instance]');
    if (!cell || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const columns = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    const offset = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -columns, ArrowDown: columns }[event.key] || 0;
    selected = event.key === 'Home' ? 1 : event.key === 'End' ? 20 : clamp(Number(cell.dataset.instance) + offset, 1, 20);
    cells.get(selected).focus();
    render(true);
  });
  NimbusState.on('sample', ({ delta }) => {
    remaining = Math.max(0, remaining - delta);
    evaluatePolicy();
    render();
  });
  NimbusState.on('change', ({ changed }) => {
    if (changed.some(key => ['load', 'instances', 'cpu', 'latency', 'traffic', 'autoScaling'].includes(key))) render();
  });
  NimbusState.on('translated', () => render(true));
  NimbusState.on('motion', ({ reduced }) => {
    if (reduced) {
      remaining = 0;
      enterJobs.forEach(job => job.cancel());
      enterJobs.clear();
      cells.forEach(cell => cell.classList.remove('is-entering'));
      evaluatePolicy(true);
    }
    render(true);
  });
  function syncActivity() {
    cells.forEach(cell => { cell.style.animationPlayState = inView && !document.hidden ? 'running' : 'paused'; });
    if (inView && !document.hidden) render(true);
  }
  NimbusState.on('visibility', syncActivity);
  const observer = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncActivity();
  }, { threshold: 0 });
  observer.observe(section);
  Clock.add(delta => {
    if ($('#dashboard').dataset.live !== 'true') CloudModel.step(delta, 'scaling');
  }, { interval: CLOUD_CONFIG.sampleInterval, element: section, motion: true });
  render(true);
}

/* 14. Palet arahan berkongsi dialog asli dan tindakan aplikasi. */
function setupCommandPalette() {
  const dialog = $('#command-palette');
  const input = $('#palette-search');
  const list = $('#palette-results');
  const empty = $('#palette-empty');
  const announcement = $('#palette-announcement');
  const highlight = document.createElement('li');
  highlight.className = 'palette-highlight';
  highlight.setAttribute('role', 'presentation');
  highlight.setAttribute('aria-hidden', 'true');
  let matches = [];
  let selected = -1;
  let trigger = null;
  let announcementJob = null;

  const normalise = value => String(value).normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

  function fuzzyScore(query, text) {
    if (!query) return 1;
    const direct = text.indexOf(query);
    if (direct >= 0) return 1000 - direct - (text.length - query.length) * 0.1;
    let cursor = 0, previous = -2, score = 0;
    for (const character of query.replace(/\s/g, '')) {
      const index = text.indexOf(character, cursor);
      if (index < 0) return -1;
      score += 10 + (index === previous + 1 ? 8 : 0) + (index === 0 || text[index - 1] === ' ' ? 5 : 0);
      score -= (index - cursor) * 0.1;
      cursor = index + 1;
      previous = index;
    }
    return score;
  }

  function availableActions() {
    const sections = [
      ['overview', 'nav.overview'], ['features', 'nav.platform'],
      ['workflow', 'footer.workflow'], ['scaling', 'footer.scaling'],
      ['network', 'footer.network'], ['pricing', 'nav.pricing'],
      ['terminal', 'terminal.windowTitle'], ['faq', 'nav.faq'],
      ['get-started', 'nav.getStarted']
    ];
    const actions = sections.map(([id, key]) => ({
      id: `section-${id}`, key: 'palette.go', params: { section: t(key) }, hint: 'palette.page',
      search: `${id} ${i18n.en[key]} ${i18n.ms[key]}`,
      run: () => navigateTo(id)
    }));
    actions.push(
      { id: 'theme', key: 'palette.theme', hint: 'palette.action', search: 'theme dark light tema gelap cerah',
        run: () => setTheme(NimbusState.get().theme === 'dark' ? 'light' : 'dark', trigger) },
      { id: 'language', key: 'palette.language', hint: 'palette.action', search: 'language bahasa english melayu en bm ms',
        run: () => setLanguage(NimbusState.get().language === 'en' ? 'ms' : 'en') },
      { id: 'deploy', key: 'palette.deploy', hint: 'palette.action', search: 'deploy release launch lancar aplikasi',
        disabled: NimbusState.get().deploying || $('#deploy-button').disabled, run: () => requestDeployment() },
      { id: 'github', key: 'palette.github', hint: 'palette.external', search: 'github source code kod repositori repository',
        run: () => window.open('https://github.com/puteraaqmalputera-dot/NimbusCloud', '_blank', 'noopener,noreferrer') }
    );
    return actions;
  }

  function positionHighlight(scroll = false) {
    const options = $$('.palette-option', list);
    const option = options[selected];
    highlight.hidden = !option;
    if (!option) { input.removeAttribute('aria-activedescendant'); return; }
    const top = option.offsetTop;
    const height = option.offsetHeight;
    const viewTop = list.scrollTop;
    const viewHeight = list.clientHeight;
    options.forEach((node, index) => node.setAttribute('aria-selected', String(index === selected)));
    input.setAttribute('aria-activedescendant', option.id);
    highlight.style.setProperty('--palette-offset', `${top - 8}px`);
    highlight.style.setProperty('--palette-row-height', `${height}px`);
    if (scroll && top < viewTop + 8) list.scrollTop = Math.max(0, top - 8);
    else if (scroll && top + height > viewTop + viewHeight - 8) list.scrollTop = top + height - viewHeight + 8;
  }

  function render(preserve = true) {
    const previousId = preserve ? matches[selected]?.id : null;
    const query = normalise(input.value);
    matches = availableActions().map(action => ({
      ...action, score: fuzzyScore(query, normalise(`${t(action.key, action.params)} ${i18n.en[action.key]} ${i18n.ms[action.key]} ${action.search}`))
    })).filter(action => action.score >= 0).sort((a, b) => b.score - a.score);
    list.replaceChildren(highlight);
    matches.forEach((action, index) => {
      const option = $('#palette-option-template').content.firstElementChild.cloneNode(true);
      option.id = `palette-option-${action.id}`;
      option.dataset.paletteIndex = String(index);
      option.style.cursor = action.disabled ? 'not-allowed' : 'pointer';
      option.setAttribute('aria-disabled', String(Boolean(action.disabled)));
      bindText($('.palette-option-label', option), action.key, action.params || {});
      bindText($('.palette-option-hint', option), action.hint);
      const icon = action.id === 'github' ? '#icon-github' : action.id === 'theme' ? '#icon-sun' :
        action.id === 'deploy' ? '#icon-terminal' : '#icon-arrow';
      $('use', option).setAttribute('href', icon);
      list.append(option);
    });
    selected = matches.findIndex(action => action.id === previousId && !action.disabled);
    if (selected < 0) selected = matches.findIndex(action => !action.disabled);
    $('#palette-loading').hidden = true;
    empty.hidden = matches.length > 0;
    input.setAttribute('aria-expanded', String(dialog.open));
    positionHighlight();
    announcementJob?.cancel();
    announcementJob = Clock.after(token('--duration-ui'), () => {
      bindText(announcement, query ? 'palette.results' : 'palette.ready', { count: formatNumber(matches.length) });
      announcementJob = null;
    }, { element: dialog });
  }

  function open(button = document.activeElement) {
    if (dialog.open) { closeDialog(dialog); return; }
    trigger = button?.closest('dialog')
      ? $('#site-header [data-action="palette"]') || $('#mobile-menu-button')
      : button;
    input.value = '';
    openDialog(dialog, trigger);
    render(false);
    input.focus({ preventScroll: true });
    list.scrollTop = 0;
  }

  function move(direction, edge = null) {
    if (!matches.length) return;
    let index = edge === 'start' ? -1 : edge === 'end' ? matches.length : selected;
    for (let attempt = 0; attempt < matches.length; attempt++) {
      index = (index + direction + matches.length) % matches.length;
      if (!matches[index].disabled) { selected = index; positionHighlight(true); return; }
    }
  }

  function runSelected() {
    const action = matches[selected];
    if (!action || action.disabled || (action.id === 'deploy' && (NimbusState.get().deploying || $('#deploy-button').disabled))) return;
    closeDialog(dialog);
    action.run();
  }

  input.addEventListener('input', () => render(false));
  input.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', 'Escape'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowDown') move(1);
    else if (event.key === 'ArrowUp') move(-1);
    else if (event.key === 'Home') move(1, 'start');
    else if (event.key === 'End') move(-1, 'end');
    else if (event.key === 'Enter') runSelected();
    else closeDialog(dialog);
  });
  list.addEventListener('pointerdown', event => {
    if (event.target.closest('.palette-option')) event.preventDefault();
  });
  list.addEventListener('pointermove', event => {
    const option = event.target.closest('.palette-option');
    if (!option || option.getAttribute('aria-disabled') === 'true') return;
    const index = Number(option.dataset.paletteIndex);
    if (selected !== index) { selected = index; positionHighlight(); }
  });
  list.addEventListener('click', event => {
    const option = event.target.closest('.palette-option');
    if (!option || option.getAttribute('aria-disabled') === 'true') return;
    selected = Number(option.dataset.paletteIndex);
    runSelected();
  });
  dialog.addEventListener('close', () => {
    announcementJob?.cancel(); announcementJob = null;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    announcement.textContent = '';
  });
  document.addEventListener('keydown', event => {
    if (!(event.metaKey || event.ctrlKey) || event.altKey || event.key.toLowerCase() !== 'k') return;
    event.preventDefault();
    open(document.activeElement);
  });
  addEventListener('resize', () => { if (dialog.open) positionHighlight(); }, { passive: true });
  NimbusState.on('translated', () => { if (dialog.open) render(); });
  NimbusState.on('deploying', () => { if (dialog.open) render(); });
  const deployObserver = new MutationObserver(() => { if (dialog.open) render(); });
  deployObserver.observe($('#deploy-button'), { attributes: true, attributeFilter: ['disabled'] });
  registerAction('palette', button => open(button));
}

/* 15. Tarif contoh tunggal; semua pengiraan wang menggunakan sen. */
const PRICING_CONFIG = Object.freeze({
  free: Object.freeze({ instances: 1, storage: 1, bandwidth: 0.4 }),
  rates: Object.freeze({ instance: 18, storageGB: 0.35, bandwidthTB: 3 }),
  support: Object.freeze({ community: 0, priority: 25, sla: 150 }),
  pro: Object.freeze({ monthly: 79, instances: 10, storage: 100, bandwidth: 10 }),
  annualFactor: 0.8,
  limits: Object.freeze({ instances: 50, storage: 1000, bandwidth: 50 })
});

function calculatePrice(resources, billing = 'monthly') {
  const config = PRICING_CONFIG;
  const instances = clamp(Number(resources.instances) || 1, 1, config.limits.instances);
  const storage = clamp(Number(resources.storage) || 1, 1, config.limits.storage);
  const bandwidth = clamp(Number(resources.bandwidth) || 0, 0, config.limits.bandwidth);
  const support = Object.hasOwn(config.support, resources.support) ? resources.support : 'community';
  const starter = instances <= config.free.instances && storage <= config.free.storage &&
    bandwidth <= config.free.bandwidth && support === 'community';
  const enterprise = instances > config.pro.instances || storage > config.pro.storage ||
    bandwidth > config.pro.bandwidth || support === 'sla';
  const plan = starter ? 'starter' : enterprise ? 'enterprise' : 'pro';
  const cents = value => Math.round((value + Number.EPSILON) * 100);
  const parts = {
    compute: cents(Math.max(0, instances - config.free.instances) * config.rates.instance),
    storage: cents(Math.max(0, storage - config.free.storage) * config.rates.storageGB),
    bandwidth: cents(Math.max(0, bandwidth - config.free.bandwidth) * config.rates.bandwidthTB),
    support: cents(config.support[support])
  };
  const raw = Object.values(parts).reduce((sum, value) => sum + value, 0);
  if (plan === 'pro' && raw < cents(config.pro.monthly)) {
    parts.compute += cents(config.pro.monthly) - raw;
  }
  const factor = billing === 'yearly' ? config.annualFactor : 1;
  const costs = Object.fromEntries(Object.entries(parts).map(([key, value]) =>
    [key, Math.round(value * factor) / 100]
  ));
  const totalCents = Object.values(costs).reduce((sum, value) => sum + cents(value), 0);
  return { plan, costs, total: totalCents / 100, contact: plan === 'enterprise' };
}

function setupPricing() {
  const section = $('#pricing');
  const form = $('#calculator-form');
  const total = $('#calculator-total');
  const support = $('#calc-support');
  const cancel = $('#cancel-plan-button');
  const confirm = $('#confirm-dialog');
  const confirmAction = $('#confirm-action');
  const cards = $$('[data-plan-card]');
  let announcement = null;
  let cancelling = false;
  const ranges = [];

  function resources() {
    return {
      instances: Number($('#calc-instances').value),
      storage: Number($('#calc-storage').value),
      bandwidth: Number($('#calc-bandwidth').value),
      support: support.value
    };
  }

  function planName(plan) { return t(`pricing.${plan}`); }

  function renderSelection() {
    const selected = NimbusState.get().selectedPlan;
    cards.forEach(card => {
      if (card.dataset.planCard === selected) card.setAttribute('aria-current', 'true');
      else card.removeAttribute('aria-current');
      $('[data-select-plan]', card).setAttribute('aria-pressed', String(card.dataset.planCard === selected));
    });
    cancel.disabled = !selected || selected === 'starter';
    bindText($('#selected-plan-status'), selected ? 'pricing.selected' : 'pricing.initialSelection',
      selected ? { plan: planName(selected) } : {});
  }

  function renderCalculator(announceChange = false) {
    const result = calculatePrice(resources(), NimbusState.get().billing);
    if (result.contact) bindText(total, 'pricing.contact');
    else {
      delete total.dataset.i18n;
      rollNumber(total, result.total, { format: value => formatMoney(value) });
    }
    bindText($('#calculator-billing'), result.contact ? 'calculator.custom' :
      NimbusState.get().billing === 'yearly' ? 'calculator.yearlyReference' : 'calculator.monthlyReference');
    const recommendation = $('#calculator-plan');
    const parameters = { plan: planName(result.plan) };
    if (recommendation.textContent !== t('calculator.recommendation', parameters)) {
      bindText(recommendation, 'calculator.recommendation', parameters);
    }
    cards.forEach(card => card.classList.toggle('is-recommended', card.dataset.planCard === result.plan));
    for (const [key, value] of Object.entries(result.costs)) {
      rollNumber($(`#cost-${key}`), value, { format: amount => formatMoney(amount) });
      const segment = $(`[data-cost-segment="${key}"]`);
      segment.style.flex = `${value} 1 0px`;
      segment.style.opacity = value > 0 ? '1' : '0';
    }
    $('#cost-stack').style.opacity = result.total ? '1' : '0.35';
    if (announceChange) {
      announcement?.cancel();
      announcement = Clock.after(token('--duration-ui'), () => {
        bindText($('#calculator-announcement'), result.contact ? 'calculator.custom' : 'calculator.summary', {
          price: formatMoney(result.total), plan: planName(result.plan)
        });
        announcement = null;
      }, { element: section });
    }
  }

  function renderBilling() {
    const yearly = NimbusState.get().billing === 'yearly';
    const price = PRICING_CONFIG.pro.monthly * (yearly ? PRICING_CONFIG.annualFactor : 1);
    rollNumber($('[data-plan-price="starter"]'), 0);
    rollNumber($('[data-plan-price="pro"]'), price, { decimals: yearly ? 2 : 0 });
    bindText($('#pro-billing-note'), yearly ? 'pricing.yearlyBill' : 'pricing.monthlyBill', {
      price: formatMoney(price, yearly ? 2 : 0), total: formatMoney(price * 12)
    });
    $$('[data-billing]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.billing === NimbusState.get().billing));
    });
    renderCalculator();
  }

  function setBilling(period) {
    if (!['monthly', 'yearly'].includes(period) || period === NimbusState.get().billing) return;
    NimbusState.update({ billing: period }, 'billing-control');
    animateSegment($('.billing-switch'));
    bindText($('#billing-announcement'), 'pricing.billingChanged', { period: t(`pricing.${period}`) });
  }

  async function choosePlan(button) {
    const plan = button.dataset.selectPlan;
    if (!['starter', 'pro', 'enterprise'].includes(plan)) return;
    await withFeedback(button, () => {
      NimbusState.update({ selectedPlan: plan }, 'plan-selection');
      showToast({
        title: 'pricing.selectionToast', description: 'pricing.selectionDetail',
        params: { plan: planName(plan) }
      });
    });
    if (plan === 'enterprise' && NimbusState.get().selectedPlan === 'enterprise') {
      $('#support-topic').value = 'billing';
      openDialog($('#support-dialog'), button);
    }
  }

  async function resetPlan() {
    const previous = NimbusState.get().selectedPlan;
    if (cancelling || !previous || previous === 'starter') return;
    cancelling = true;
    await withFeedback(confirmAction, () => {
      NimbusState.update({ selectedPlan: 'starter' }, 'plan-reset');
      showToast({
        title: 'pricing.resetToast', duration: 5000,
        undo: () => NimbusState.update({ selectedPlan: previous }, 'plan-undo')
      });
    });
    closeDialog(confirm);
    $('[data-select-plan="starter"]').focus({ preventScroll: true });
    cancelling = false;
  }

  ranges.push(initRange($('#calc-instances'), () => renderCalculator(true), {
    format: value => t('calculator.instanceValue', { count: formatNumber(value) })
  }));
  ranges.push(initRange($('#calc-storage'), () => renderCalculator(true), {
    format: value => t('calculator.storageValue', { value: formatNumber(value) })
  }));
  ranges.push(initRange($('#calc-bandwidth'), () => renderCalculator(true), {
    format: value => t('calculator.bandwidthValue', { value: formatNumber(value, Number.isInteger(value) ? 0 : 1) })
  }));
  support.addEventListener('change', () => renderCalculator(true));
  form.addEventListener('submit', event => event.preventDefault());
  section.addEventListener('click', event => {
    const billing = event.target.closest('[data-billing]');
    if (billing) setBilling(billing.dataset.billing);
    const button = event.target.closest('[data-select-plan]');
    if (button && !button.disabled) choosePlan(button);
  });
  confirmAction.addEventListener('click', resetPlan);
  registerAction('cancel-plan', button => {
    const selected = NimbusState.get().selectedPlan;
    if (selected && selected !== 'starter') openDialog(confirm, button);
  });
  NimbusState.on('billing', renderBilling);
  NimbusState.on('selectedPlan', renderSelection);
  NimbusState.on('translated', () => {
    ranges.forEach(range => range.render());
    renderBilling();
    renderSelection();
    if ($('#billing-announcement').dataset.i18n) {
      bindText($('#billing-announcement'), 'pricing.billingChanged', { period: t(`pricing.${NimbusState.get().billing}`) });
    }
  });
  renderBilling();
  renderSelection();
}

/* 16. Peralihan ringkas menggunakan transform dan opacity sahaja. */
const narrativeTransitions = new Map();
function narrativeEnter(element, offset = 8, fade = true) {
  narrativeTransitions.get(element)?.();
  if (motionQuery.matches) return;
  const transform = element.style.transform;
  const opacity = element.style.opacity;
  const duration = token('--duration-ui');
  let elapsed = 0;
  let job;
  const finish = () => {
    job?.cancel();
    element.style.transform = transform;
    element.style.opacity = opacity;
    narrativeTransitions.delete(element);
  };
  element.style.transform = `translateY(${offset}px)`;
  if (fade) element.style.opacity = '0';
  narrativeTransitions.set(element, finish);
  job = Clock.add(delta => {
    elapsed = Math.min(duration, elapsed + delta);
    const progress = duration ? 1 - Math.pow(1 - elapsed / duration, 3) : 1;
    element.style.transform = `translateY(${offset * (1 - progress)}px)`;
    if (fade) element.style.opacity = String(progress);
    if (elapsed >= duration) finish();
  }, { element, motion: true });
}
function narrativeFlip(nodes, change) {
  const before = new Map(nodes.map(node => [node, node.getBoundingClientRect().top]));
  nodes.forEach(node => narrativeTransitions.get(node)?.());
  change();
  const after = nodes.map(node => [node, before.get(node) - node.getBoundingClientRect().top]);
  after.forEach(([node, distance]) => {
    if (Math.abs(distance) > 0.5) narrativeEnter(node, distance, false);
  });
}
NimbusState.on('motion', ({ reduced }) => {
  if (reduced) [...narrativeTransitions.values()].forEach(finish => finish());
});

/* Cerita kekal lengkap sebagai urutan bertindan pada telefon dan gerakan minimum. */
function setupStory() {
  const section = $('#workflow');
  const layout = $('.story-layout', section);
  const sticky = $('.story-sticky', section);
  const holder = $('#story-scenes');
  const scenes = $$('[data-story-scene]');
  const steps = $$('[data-story-step]');
  const mobile = matchMedia('(max-width: 899px)');
  const names = ['workflow.source', 'workflow.build', 'workflow.release', 'workflow.respond'];
  let current = 0;
  let stacked = false;

  function render(animate = false) {
    scenes.forEach((scene, index) => {
      const selected = index === current;
      if (!stacked && !selected) narrativeTransitions.get(scene)?.();
      scene.hidden = !stacked && !selected;
      scene.classList.toggle('is-active', stacked || selected);
      if (animate && selected && !stacked) narrativeEnter(scene);
    });
    steps.forEach((step, index) => step.classList.toggle('is-active', index === current));
    $('#story-progress').style.transform = `scaleX(${(current + 1) / 4})`;
    bindText($('#story-caption'), 'workflow.caption', {
      stage: formatNumber(current + 1), name: t(names[current])
    });
  }
  function adapt() {
    stacked = mobile.matches || motionQuery.matches;
    sticky.hidden = stacked;
    layout.style.gridTemplateColumns = stacked ? 'minmax(0, 1fr)' : '';
    scenes.forEach((scene, index) => {
      if (stacked) steps[index].append(scene);
      else holder.append(scene);
    });
    render();
  }
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const next = Number(visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.dataset.storyStep);
    if (next !== current) { current = next; render(true); }
  }, { rootMargin: '-20% 0px -45% 0px', threshold: 0 });
  steps.forEach(step => observer.observe(step));
  mobile.addEventListener('change', adapt);
  NimbusState.on('motion', adapt);
  NimbusState.on('translated', () => render());
  adapt();
}

/* Peta menyambungkan wilayah yang dipilih kepada tujuh lokasi lain. */
function setupNetwork() {
  const section = $('#network');
  const nodes = $$('.network-node', section);
  const buttons = $$('[data-region-select]', section);
  const panel = $('#region-panel');
  const routes = $('.network-arcs', section);
  const activity = $('#network-motion');
  const positions = Object.fromEntries(nodes.map(node => {
    const dot = $('.node-core', node);
    return [node.dataset.region, [Number(dot.getAttribute('cx')), Number(dot.getAttribute('cy'))]];
  }));
  let inView = false;
  let previousRegion = '';

  function syncActivity() {
    section.dataset.live = String(inView && !document.hidden && !motionQuery.matches && activity.checked);
  }
  function render(animate = false) {
    const state = NimbusState.get();
    const region = Object.hasOwn(positions, state.region) ? state.region : 'sin';
    nodes.forEach(node => {
      const selected = node.dataset.region === region;
      node.classList.toggle('is-selected', selected);
      node.setAttribute('aria-pressed', String(selected));
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.regionSelect === region)));
    bindText($('#region-name'), `regions.${region}`);
    bindText($('#region-status'), 'dashboard.operational');
    $('#region-code').textContent = region.toUpperCase();
    rollNumber($('#region-latency'), CLOUD_CONFIG.regionLatency[region]);
    rollNumber($('#region-instances'), state.servers.filter(server => server.region === region).length);
    $('[data-region-deploy]', panel).dataset.regionDeploy = region;
    if (previousRegion !== region) {
      const [x, y] = positions[region];
      routes.replaceChildren(...Object.entries(positions).filter(([key]) => key !== region).map(([, [endX, endY]]) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const top = Math.max(24, Math.min(y, endY) - Math.abs(x - endX) * 0.12 - 28);
        path.setAttribute('d', `M${x} ${y}Q${(x + endX) / 2} ${top} ${endX} ${endY}`);
        return path;
      }));
      previousRegion = region;
      if (animate) narrativeEnter(panel, 6);
    }
  }
  function select(region, notify = false) {
    if (!Object.hasOwn(positions, region)) return;
    const changed = NimbusState.get().region !== region;
    NimbusState.update({ region }, 'network');
    if (!changed) render();
    if (notify) announce('network.selectedAnnouncement', {
      region: t(`regions.${region}`), latency: formatNumber(CLOUD_CONFIG.regionLatency[region])
    });
  }
  nodes.forEach((node, index) => {
    node.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') select(node.dataset.region);
    });
    node.addEventListener('focus', () => select(node.dataset.region, true));
    node.addEventListener('click', () => select(node.dataset.region, true));
    node.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); select(node.dataset.region, true); return;
      }
      const moves = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 };
      if (!Object.hasOwn(moves, event.key) && !['Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? nodes.length - 1 :
        (index + moves[event.key] + nodes.length) % nodes.length;
      nodes[next].focus();
    });
  });
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.regionSelect, true)));
  activity.addEventListener('change', () => {
    syncActivity();
    announce('network.activityChanged', { state: t(activity.checked ? 'shared.enabled' : 'shared.disabled') });
  });
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncActivity();
    if (inView) render();
  }, { threshold: 0 }).observe(section);
  NimbusState.on('region', () => render(true));
  NimbusState.on('servers', () => { if (inView && !document.hidden) render(); });
  NimbusState.on('translated', () => render());
  NimbusState.on('visibility', syncActivity);
  NimbusState.on('motion', syncActivity);
  render(); syncActivity();
}

/* Terminal menaip dalam kitaran lapan saat masa aktif sahaja. */
function setupTerminal() {
  const section = $('#terminal');
  const command = $('#terminal-command');
  const lines = $$('[data-terminal-line]', section);
  const pause = $('#terminal-pause');
  const text = 'nimbus deploy my-app';
  const thresholds = [1500, 2200, 2900, 3600, 4300];
  let elapsed = 0;
  let paused = false;
  let inView = false;
  let seen = new Set();
  let job;

  function render() {
    const complete = motionQuery.matches;
    const length = complete ? text.length : clamp(Math.floor((elapsed - 200) / 45), 0, text.length);
    const content = text.slice(0, length);
    if (command.textContent !== content) command.textContent = content;
    command.classList.toggle('is-typing', !complete && !paused && inView && !document.hidden && length < text.length);
    lines.forEach((line, index) => {
      const visible = complete || elapsed >= thresholds[index];
      line.classList.toggle('is-pending', !visible);
      if (visible && !seen.has(index)) {
        seen.add(index);
        if (!complete) narrativeEnter(line, 4);
      }
    });
    pause.setAttribute('aria-pressed', String(paused));
    bindText($('span', pause), paused ? 'terminal.resume' : 'terminal.pause');
  }
  function sync() {
    if (paused || !inView || document.hidden) job?.pause();
    else job?.resume();
    render();
  }
  job = Clock.add(delta => {
    elapsed += delta;
    if (elapsed >= 8000) { elapsed %= 8000; seen = new Set(); }
    render();
  }, { interval: 40, element: section, motion: true });
  registerAction('terminal-pause', () => {
    paused = !paused;
    sync();
    announce(paused ? 'terminal.paused' : 'terminal.resumed');
  });
  registerAction('terminal-replay', () => {
    elapsed = 0; paused = false; seen = new Set(); sync();
  });
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting; sync();
  }, { threshold: 0 }).observe(section);
  NimbusState.on('visibility', sync);
  NimbusState.on('motion', sync);
  NimbusState.on('translated', render);
  sync();
}

/* Akordion mengekalkan fokus; baris lain bergerak menggunakan FLIP. */
function setupFAQ() {
  const items = $$('.faq-item');
  const buttons = $$('.faq-question');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const opening = button.getAttribute('aria-expanded') !== 'true';
      narrativeFlip(items, () => buttons.forEach(other => {
        const open = opening && other === button;
        other.setAttribute('aria-expanded', String(open));
        other.closest('.faq-item').classList.toggle('is-open', open);
        const panel = document.getElementById(other.getAttribute('aria-controls'));
        if (!open) narrativeTransitions.get(panel)?.();
        panel.hidden = !open;
      }));
      if (opening) narrativeEnter(document.getElementById(button.getAttribute('aria-controls')), 6);
    });
    button.addEventListener('keydown', event => {
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 :
        (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
    });
  });
}

/* Visual kecil mencerminkan keadaan aplikasi dan tindakan sebenar pengguna. */
function setupMicroFeatures() {
  const section = $('#features');
  const rows = $$('.feature-row', section);
  const policies = $$('[data-policy]', section);
  const snapshots = [];
  const history = Array(12).fill(NimbusState.get().traffic);
  let snapshotNumber = 0;
  let inView = false;

  rows.forEach(row => $('summary', row).addEventListener('click', event => {
    event.preventDefault();
    if (row.open) narrativeTransitions.get($('.feature-detail', row))?.();
    narrativeFlip(rows, () => { row.open = !row.open; });
    if (row.open) narrativeEnter($('.feature-detail', row), 6);
  }));
  function renderPolicy() {
    const count = policies.filter(input => input.checked).length;
    bindText($('#policy-result'), 'features.policyCount', { count: formatNumber(count) });
    $$('.micro-security i', section).forEach((bar, index) => {
      bar.style.opacity = policies[index].checked ? '1' : '0.2';
    });
  }
  function renderSnapshots() {
    const list = $('#snapshot-list');
    list.replaceChildren(...snapshots.map(snapshot => {
      const item = document.createElement('li');
      bindText(item, 'features.snapshot', {
        number: formatNumber(snapshot.number).padStart(2, '0'),
        time: new Intl.DateTimeFormat(locale(), { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(snapshot.date)
      });
      return item;
    }));
    $('#backup-empty').hidden = snapshots.length > 0;
    $('.micro-backups', section).dataset.count = String(snapshots.length);
  }
  function renderVisuals() {
    const state = NimbusState.get();
    $('.micro-pipeline', section).dataset.stage = String(Math.min(4, Math.floor(state.deployProgress / 25)));
    $$('#feature-instance-visual i').forEach((cell, index) => cell.classList.toggle('is-active', index < state.instances));
    const maximum = Math.max(100, ...history, state.traffic);
    const minimum = Math.min(...history, state.traffic) * 0.85;
    const span = Math.max(1, maximum - minimum);
    const values = [...history.slice(0, -1), state.traffic];
    $('#feature-traffic-path').setAttribute('d', values.map((value, index) =>
      `${index ? 'L' : 'M'}${1 + index / 11 * 118} ${29 - (value - minimum) / span * 26}`
    ).join(' '));
  }
  policies.forEach(input => input.addEventListener('change', renderPolicy));
  registerAction('backup', button => withFeedback(button, () => {
    snapshots.unshift({ number: ++snapshotNumber, date: new Date() });
    snapshots.splice(3);
    renderSnapshots();
    showToast({ title: 'features.backupReady', description: 'features.backupDetail' });
  }));
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    if (inView) renderVisuals();
  }, { threshold: 0 }).observe(section);
  NimbusState.on('change', ({ changed }) => {
    if (inView && !document.hidden && changed.some(key => ['deployProgress', 'instances', 'traffic'].includes(key))) renderVisuals();
  });
  NimbusState.on('sample', ({ traffic }) => {
    if (!inView || document.hidden) return;
    history.shift(); history.push(traffic); renderVisuals();
  });
  NimbusState.on('translated', () => { renderPolicy(); renderSnapshots(); });
  renderPolicy(); renderSnapshots(); renderVisuals();
}
