import { ThemeChanger } from "../icons/themechangerIcon";
import { Loginpage } from "../pages/Login";



export function Navmenu(){

    return <><nav className="fixed top-0 z-[999] w-full border-b border-primary/10 bg-background opacity-100 will-change-auto transform-none ">
        <div className=" lg:px-[3rem] xl:px-[3rem] max-w-[80rem] p-[1rem] h-[100%] w-[100%] flex w-full items-center justify-between p-3">
            <div className="flex items-center gap-4 opacity-1 will-change-auto transform-none" >
                <a className=" flex items-center gap-2 " href="/"  >
                    <p className="hidden bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[410px]:block">
                        Coursera
                    </p>
                </a>
            </div>
            <div className="flex items-center gap-4 opacity-1 will-change-auto transform-none">
                
                <ThemeChanger/>
                
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu w-[1.5rem] h-[1.5rem]  ">
                        <path></path>
                        <line x1={"4"} x2={"20"} y1={"12"} y2={"12"} ></line>
                        <line x1={"4"} x2={"20"} y1={"6"} y2={"6"} ></line> <line x1={"4"} x2={"20"} y1={"18"} y2={"18"} ></line>
                    </svg>
                </button>
                <div className=" hidden items-center gap2 md:flex" >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground dark:text-neutral-950 hover:bg-primary/90 h-10 px-4 py-2" onClick={Loginpage} >Login</button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-10 px-4 py-2" >
                        <a href="/joinnow" >Join now</a>
                    </button>
                </div>

            </div>

        </div>
    </nav>
    </>
}