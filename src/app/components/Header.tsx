import { Bell } from "lucide-react";

export default function Header() {

    return (

        <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

            <div>

                <h2 className="text-2xl font-bold">
                    Dashboard
                </h2>

                <p className="text-gray-500">
                    Bem-vindo de volta.
                </p>

            </div>

            <div className="flex items-center gap-5">

                <button className="relative">

                    <Bell/>

                    <span
                        className="
                        absolute
                        -top-1
                        -right-1
                        w-3
                        h-3
                        bg-red-500
                        rounded-full
                        "
                    />

                </button>

                <img
                    src="https://i.pravatar.cc/100"
                    className="w-11 h-11 rounded-full"
                />

            </div>

        </header>

    );

}