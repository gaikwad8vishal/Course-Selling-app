


export function ThemeChanger(){


    return (
    
    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground dark:text-neutral-950 h-10 w-10 group rounded-lg border-none bg-transparent shadow-none hover:bg-blue-600/5" >
        <svg id="moonmode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="  color-black  absolute size-6 rotate-90 scale-0 transition-all group-hover:text-blue-500 dark:rotate-0 dark:scale-100 dark:text-black">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
        <svg id="sunmode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun size-6 rotate-0 scale-100 text-black transition-all group-hover:text-blue-500 dark:-rotate-90 dark:scale-0">
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
    <span className=" sr-only " >toggletheme</span>
</button>)

}



