import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({
    children,
}:{
    children:React.ReactNode;
}){

    return(

        <div className="flex">

            <Sidebar/>

            <main className="flex-1 bg-slate-100 min-h-screen">

                <Header/>

                <div className="p-8">

                    {children}

                </div>

            </main>

        </div>

    )

}