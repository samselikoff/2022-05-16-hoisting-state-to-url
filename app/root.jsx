import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  ];
}

export const meta = () => ({
  charset: "utf-8",
  title: "Lifting state up to the URL",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
