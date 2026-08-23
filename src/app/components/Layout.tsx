import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({
    children,
}:{
    children:React.ReactNode;
}){

    return(

        <div className="flex h-screen p-4 md:p-6 lg:p-8">
            <div className="flex flex-1 rounded-[2.5rem] overflow-hidden shadow-[0_16px_64px_0_rgba(31,38,135,0.1)] border border-white/50 bg-white/40 backdrop-blur-3xl">
                <Sidebar/>
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                    <Header/>
                    <div className="p-4 sm:p-6 md:p-8 overflow-y-auto h-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>

    )

}