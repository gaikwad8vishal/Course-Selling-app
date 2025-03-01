import { JSX } from "react"
import { ThemeChanger } from "../icons/themechangerIcon"
import { Loginpage } from "./Login"





export function Dashafter(){


    return <div>
        <Afterdashnav/>
    </div>
}




interface afterdashnavprop{

}



function Afterdashnav( props: afterdashnavprop ) {
        return<> <nav className="fixed top-0 z-[999] w-full border-b border-primary/10 bg-background opacity-100 will-change-auto transform-none ">
                <div className=" lg:px-[3rem] xl:px-[3rem] max-w-[80rem] p-[1rem] h-[100%] w-[100%] flex w-full items-center justify-between p-3">
                    <div className="flex items-center gap-4 opacity-1 will-change-auto transform-none" >
                        <a className=" flex items-center gap-2 " href="/"  >
                            <p className="hidden bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[410px]:block">
                                Coursera
                            </p>
                        </a>
                    </div>
                    <div className="flex items-center gap-4 opacity-1 will-change-auto transform-none">
                        <div className="hidden md:block" >
                            <div className="relative mx-auto flex w-full items-center max-w-sm lg:max-w-lg" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 dark:text-gray-400">
                                <circle cx={"11"} cy={"11"} r={"8"} ></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </svg>
                                <input placeholder="Search anything" className="flex h-10 w-full border px-2 rounded-lg border-gray-200 bg-white pl-10 pr-12 focus-visible:ring-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:focus-visible:ring-gray-700" aria-label="Search"></input>
                                <kbd className="pointer-events-none absolute right-3 top-2.5 inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                    <span>⌘</span>
                                    K
                                </kbd>
                            </div>
                        <div className="md:hidden" ></div>
                    </div>
                        
                    <ThemeChanger/>

                    <button  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-700" type="button" id="radix-:rb:" aria-haspopup="menu" aria-expanded="false"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user size-4" >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx={"12"} cy={"7"} r={"4"}></circle>
                    </svg>
                    </button>
                </div>
                </div>
                
            </nav>
            <Infosidebar nothing="hiii"/>

            </>
}

interface titelprop{
    nothing: string;
}

function Infosidebar(props:titelprop):JSX.Element{
    return <div>
        <div className="overflow-hidden rounded-md border p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[99999] m-2 min-w-44 bg-neutral-100 dark:bg-neutral-900" >
            <div className="relative cursor-pointer select-none items-center rounded-sm px-2 py-1.5 outline-none transition-colors  focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 flex gap-2 text-base">
                hi there
            </div>
            <div>
                hello
            </div>
            <div>
                namaste
            </div>
        </div>
    </div>
}