import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b">Header</header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="p-4 border-t">Footer</footer>
    </div>
  );
}
