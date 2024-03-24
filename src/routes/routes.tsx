/*
 * Copyright (c) 2023.
 * File Name: routes.tsx
 * Author: Coderthemes
 */
import { LazyExoticComponent, ReactNode, Suspense, lazy } from "react"
import { Navigate, RouteObject, useRoutes } from "react-router-dom"
import PrivateRoute from "@src/routes/PrivateRoute"
import DefaultLayout from "@src/layouts/DefaultLayout"

const VerticalLayout = lazy(() => import("@src/layouts/VerticalLayout"))
const GoogleMaps = lazy(() => import("@src/pages/maps/GoogleMaps"))

const loading = () => <div />

const Component = ({
	component: Component,
}: {
	component: LazyExoticComponent<() => ReactNode>
}) => (
	<Suspense fallback={loading()}>
		<Component />
	</Suspense>
)

const componentRoutes = (): RouteObject => {
	return {}
}

const appsRoutes = (): RouteObject => {
	return {}
}

const authRoutes = (): RouteObject => {
	return {
		path: "/",
		element: <PrivateRoute component={DefaultLayout} />,
		children: [
			{
				path: "login",
				element: <Component component={lazy(() => import("@src/pagesNew/auth/Login"))} />,
			},
			{
				path: "logout",
				element: <Component component={lazy(() => import("@src/pagesNew/auth/Logout"))} />,
			},
			{
				path: "auth",
				children: [
					{
						path: "login",
						element: (
							<Component component={lazy(() => import("@src/pages/auth/Login"))} />
						),
					},
					{
						path: "register",
						element: (
							<Component component={lazy(() => import("@src/pages/auth/Register"))} />
						),
					},
					{
						path: "logout",
						element: (
							<Component component={lazy(() => import("@src/pages/auth/Logout"))} />
						),
					},
					{
						path: "recover-password",
						element: (
							<Component
								component={lazy(() => import("@src/pages/auth/ResetPassword"))}
							/>
						),
					},
					{
						path: "lock-screen",
						element: (
							<Component
								component={lazy(() => import("@src/pages/auth/LockScreen"))}
							/>
						),
					},
					{
						path: "confirm-mail",
						element: (
							<Component
								component={lazy(() => import("@src/pages/auth/ConfirmMail"))}
							/>
						),
					},
					{
						path: "login2",
						element: (
							<Component component={lazy(() => import("@src/pages/auth/Login2"))} />
						),
					},
					{
						path: "register2",
						element: (
							<Component
								component={lazy(() => import("@src/pages/auth/Register2"))}
							/>
						),
					},
					{
						path: "logout2",
						element: (
							<Component component={lazy(() => import("@src/pages/auth/Logout2"))} />
						),
					},
					{
						path: "recover-password2",
						element: (
							<Component
								component={lazy(() => import("@src/pages/auth/ResetPassword2"))}
							/>
						),
					},
					{
						path: "lock-screen2",
						element: (
							<Component
								component={lazy(() => import("@src/pages/auth/LockScreen2"))}
							/>
						),
					},
					{
						path: "confirm-mail2",
						element: (
							<Component
								component={lazy(() => import("@src/pages/auth/ConfirmMail2"))}
							/>
						),
					},
				],
			},
			{
				path: "landing",
				element: <Component component={lazy(() => import("@src/pages/landing"))} />,
			},
			{
				path: "maintenance",
				element: (
					<Component component={lazy(() => import("@src/pages/other/Maintenance"))} />
				),
			},
			{
				path: "error-404",
				element: <Component component={lazy(() => import("@src/pages/error/Error404"))} />,
			},
			{
				path: "error-500",
				element: <Component component={lazy(() => import("@src/pages/error/Error500"))} />,
			},
		],
	}
}

const otherRoutes = (): RouteObject => {
	return {
		path: "/",
		element: <PrivateRoute component={VerticalLayout} />,
		children: [
			{
				path: "kanban",
				element: <Component component={lazy(() => import("@src/pagesNew/apps/Kanban"))} />,
			},
			{
				path: "ecommerce",
				element: (
					<Component component={lazy(() => import("@src/pages/dashboard/ecommerce/"))} />
				),
			},
			{
				path: "workspace",
				element: (
					<Component component={lazy(() => import("@src/pagesNew/apps/Workspace"))} />
				),
			},
			{
				path: "analytics",
				element: (
					<Component component={lazy(() => import("@src/pages/dashboard/Analytics"))} />
				),
			},
			{
				path: "error-404-alt",
				element: (
					<Component component={lazy(() => import("@src/pages/error/Error404Alt"))} />
				),
			},
			{
				path: "/apps/",
				children: [
					{
						path: "calendar",
						element: (
							<Component component={lazy(() => import("@src/pages/apps/Calendar"))} />
						),
					},
					{
						path: "chat",
						element: (
							<Component component={lazy(() => import("@src/pages/apps/Chat"))} />
						),
					},
					{
						path: "kanban",
						element: (
							<Component component={lazy(() => import("@src/pages/apps/Kanban"))} />
						),
					},
					{
						path: "file-manager",
						element: (
							<Component
								component={lazy(() => import("@src/pages/apps/FileManager"))}
							/>
						),
					},
					{
						path: "email/inbox",
						element: (
							<Component
								component={lazy(() => import("@src/pages/apps/emails/Inbox"))}
							/>
						),
					},
					{
						path: "email/read",
						element: (
							<Component
								component={lazy(() => import("@src/pages/apps/emails/Read"))}
							/>
						),
					},
					{
						path: "tasks/list",
						element: (
							<Component
								component={lazy(() => import("@src/pages/apps/tasks/List"))}
							/>
						),
					},
					{
						path: "tasks/details",
						element: (
							<Component
								component={lazy(() => import("@src/pages/apps/tasks/Details"))}
							/>
						),
					},
				],
			},
			{
				path: "/pages/",
				children: [
					{
						path: "starter",
						element: (
							<Component component={lazy(() => import("@src/pages/other/Starter"))} />
						),
					},
					{
						path: "profile",
						element: (
							<Component
								component={lazy(() => import("@src/pages/other/Profile/"))}
							/>
						),
					},
					{
						path: "timeline",
						element: (
							<Component
								component={lazy(() => import("@src/pages/other/Timeline"))}
							/>
						),
					},
					{
						path: "invoice",
						element: (
							<Component component={lazy(() => import("@src/pages/other/Invoice"))} />
						),
					},
					{
						path: "faq",
						element: (
							<Component component={lazy(() => import("@src/pages/other/FAQs"))} />
						),
					},
					{
						path: "pricing",
						element: (
							<Component component={lazy(() => import("@src/pages/other/Pricing"))} />
						),
					},
				],
			},
			{
				path: "/ui/",
				children: [
					{
						path: "accordions",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Accordions"))}
							/>
						),
					},
					{
						path: "alerts",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Alerts"))}
							/>
						),
					},
					{
						path: "avatars",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Avatars"))}
							/>
						),
					},
					{
						path: "badges",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Badges"))}
							/>
						),
					},
					{
						path: "breadcrumbs",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Breadcrumbs"))}
							/>
						),
					},
					{
						path: "buttons",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Buttons"))}
							/>
						),
					},
					{
						path: "cards",
						element: (
							<Component component={lazy(() => import("@src/pages/base-ui/Cards"))} />
						),
					},
					{
						path: "collapses",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Collapses"))}
							/>
						),
					},
					{
						path: "dismissibles",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Dismissible"))}
							/>
						),
					},
					{
						path: "menus",
						element: (
							<Component component={lazy(() => import("@src/pages/base-ui/Menus"))} />
						),
					},
					{
						path: "progresses",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Progresses"))}
							/>
						),
					},
					{
						path: "skeletons",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Skeletons"))}
							/>
						),
					},
					{
						path: "spinners",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Spinners"))}
							/>
						),
					},
					{
						path: "lists",
						element: (
							<Component component={lazy(() => import("@src/pages/base-ui/Lists"))} />
						),
					},
					{
						path: "ratios",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Ratios"))}
							/>
						),
					},
					{
						path: "tabs",
						element: (
							<Component component={lazy(() => import("@src/pages/base-ui/Tabs"))} />
						),
					},
					{
						path: "dialogs",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Dialogs"))}
							/>
						),
					},
					{
						path: "drawers",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Drawers"))}
							/>
						),
					},
					{
						path: "popovers",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Popovers"))}
							/>
						),
					},
					{
						path: "tooltips",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Tooltips"))}
							/>
						),
					},
					{
						path: "typographies",
						element: (
							<Component
								component={lazy(() => import("@src/pages/base-ui/Typographies"))}
							/>
						),
					},
				],
			},
			{
				path: "/extended-ui/",
				children: [
					{
						path: "swipers",
						element: (
							<Component
								component={lazy(() => import("@src/pages/extended-ui/Swipers"))}
							/>
						),
					},
					{
						path: "nestable-list",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/extended-ui/NestableList")
								)}
							/>
						),
					},
					{
						path: "ratings",
						element: (
							<Component
								component={lazy(() => import("@src/pages/extended-ui/Ratings"))}
							/>
						),
					},
					{
						path: "players",
						element: (
							<Component
								component={lazy(() => import("@src/pages/extended-ui/Players"))}
							/>
						),
					},
					{
						path: "scrollbars",
						element: (
							<Component
								component={lazy(() => import("@src/pages/extended-ui/Scrollbars"))}
							/>
						),
					},
				],
			},
			{
				path: "/icons/",
				children: [
					{
						path: "lucide-icons",
						element: (
							<Component
								component={lazy(() => import("@src/pages/other/icons/LucideIcons"))}
							/>
						),
					},
				],
			},
			{
				path: "/forms/",
				children: [
					{
						path: "basic-elements",
						element: (
							<Component
								component={lazy(() => import("@src/pages/forms/BasicElements"))}
							/>
						),
					},
					{
						path: "editors",
						element: (
							<Component component={lazy(() => import("@src/pages/forms/Editors"))} />
						),
					},
					{
						path: "file-uploads",
						element: (
							<Component
								component={lazy(() => import("@src/pages/forms/FileUploads"))}
							/>
						),
					},
					{
						path: "layout",
						element: (
							<Component
								component={lazy(() => import("@src/pages/forms/FormsLayout"))}
							/>
						),
					},
				],
			},
			{
				path: "/tables/",
				children: [
					{
						path: "basic-tables",
						element: (
							<Component
								component={lazy(() => import("@src/pages/tables/BasicTables"))}
							/>
						),
					},
					{
						path: "data-grid",
						element: (
							<Component
								component={lazy(() => import("@src/pages/tables/DataGrid"))}
							/>
						),
					},
				],
			},
			{
				path: "/ui/apex/",
				children: [
					{
						path: "area",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/AreaApex/")
								)}
							/>
						),
					},
					{
						path: "bar",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/BarApex/")
								)}
							/>
						),
					},
					{
						path: "bubble",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/BubbleApex/")
								)}
							/>
						),
					},
					{
						path: "candlestick",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/CandleStickApex/")
								)}
							/>
						),
					},
					{
						path: "column",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/ColumnApex/")
								)}
							/>
						),
					},
					{
						path: "heatmap",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/HeatApex/")
								)}
							/>
						),
					},
					{
						path: "line",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/LineApex/")
								)}
							/>
						),
					},
					{
						path: "mixed",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/MixedApex/")
								)}
							/>
						),
					},
					{
						path: "timeline",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/TimelineApex/")
								)}
							/>
						),
					},
					{
						path: "boxplot",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/BoxPlotApex/")
								)}
							/>
						),
					},
					{
						path: "treemap",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/TreemapApex/")
								)}
							/>
						),
					},
					{
						path: "pie",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/PieApex/")
								)}
							/>
						),
					},
					{
						path: "radar",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/RadarApex/")
								)}
							/>
						),
					},
					{
						path: "radialbar",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/RadialbarApex/")
								)}
							/>
						),
					},
					{
						path: "scatter",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/ScatterApex/")
								)}
							/>
						),
					},
					{
						path: "polararea",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/PolarAreaApex/")
								)}
							/>
						),
					},
					{
						path: "sparklines",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/ApexCharts/SparklinesApex/")
								)}
							/>
						),
					},
				],
			},
			{
				path: "/ui/chartjs/",
				children: [
					{
						path: "area",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/Chartjs/AreaChartjs/")
								)}
							/>
						),
					},
					{
						path: "bar",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/Chartjs/BarChartjs/")
								)}
							/>
						),
					},
					{
						path: "line",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/Chartjs/LineChartjs/")
								)}
							/>
						),
					},
					{
						path: "other",
						element: (
							<Component
								component={lazy(
									() => import("@src/pages/charts/Chartjs/OtherChartjs/")
								)}
							/>
						),
					},
				],
			},
			{
				path: "/ui/maps/",
				children: [
					{
						path: "google-maps",
						element: <GoogleMaps />,
					},
					{
						path: "vector-maps",
						element: (
							<Component
								component={lazy(() => import("@src/pages/maps/VectorMaps"))}
							/>
						),
					},
				],
			},
		],
	}
}

const Routes = () => {
	return useRoutes([
		{ path: "/", element: <Navigate to="/kanban" /> },
		appsRoutes(),
		componentRoutes(),
		otherRoutes(),
		authRoutes(),
	])
}

export { Routes }
