import Dashboard from "./sidebar/Dashboard";
import { useOutlet } from "react-router-dom";


function RootLayout({children}) {
    const outlet = useOutlet();
    return (
        <div className="flex gap-5">
            <Dashboard />
            <main className="max-w-5xl flex-1 py-4 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 sm:ml-64">{outlet}</main>
        </div>
    );
}

export default RootLayout;