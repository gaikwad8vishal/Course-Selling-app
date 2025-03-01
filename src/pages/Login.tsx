import { JSX } from "react";
import { Navmenu } from "../component/nav";




export function Loginpage():JSX.Element{

    return (
        <div>
            <Navmenu/>
    <section className=" md:px-[3rem] lg:px-[3rem]
    h-[100%] w-[100%] max-w-[80rem] p-[1rem]  relative flex min-h-screen items-center justify-center overflow-hidden antialiased " >
        <div className=" flex w-full flex-col justify-between gap-12 rounded-2xl bg-primary/5 p-8 sm:max-w-[26rem] opacity-1 will-change-auto  shadow-md bg-slate-300 " >
            <div className="flex flex-col text-center" >
                <h2 className="text-3xl font-semibold tracking-tighter xl:text-4xl">
                    Welcome to
                    <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1 pl-1  font-black tracking-tighter text-transparent" >Coursera</span>
                </h2>
                <p className="  md:text-lg md:font-medium tracking-tighter text-primary/75 md:text-xl" >Log in to access paid content!</p>
            </div>
            <div className="flex flex-col gap-8" >
                <div className="grid w-full items-center gap-4" > 
                    <div className="relative flex flex-col gap-4" >
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"  >Email</label>
                        <input className="flex h-10 w-full rounded-md border border-gray-700/50 px-2 focus:ring-none border-none bg-primary/5 focus:outline-none" id="email" placeholder="name@email.com" name="email"></input>
                    </div>
                    <div className="relative flex flex-col gap-4" >
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                        <div className="flex">
                            <input className="flex h-10 w-full rounded-md border border-gray-700/50 px-2 focus:ring-none border-none bg-primary/5 focus:outline-none" placeholder="••••••••" name="password" id="password" >
                            </input>
                            <button className="abosolute bottom-0 right-0- flex h-10 items-center px-4 text-neutral-500" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-8"  >Login</button>
            </div>
        </div>
        <div className=" absolute -bottom-[16rem] -z-[20] size-[24rem] overflow-hidden rounded-full bg-gradient-to-t from-blue-400 to-blue-700 blur-[16em] ">

        </div>

    </section>
    </div>
    )
}