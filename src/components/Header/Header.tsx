import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import {Link} from "wouter";


const Header = () => 
{
    return (
        <header className="sticky top-0 z-30 bg-[#fffffff2] py-4 w-full ">
             <NavigationMenu className="mx-auto p-8">
                <NavigationMenuList className="mobile:flex-col mobile:gap-4">
                <NavigationMenuItem>
                    <Link href="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-md font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50">
                            Home
                    </Link>
                   
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/inventario" className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-md font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50">
                            Inventario
                    </Link>
                   
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <Link href="/pedirProducto" className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-md font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50">
                            Añadir Producto
                    </Link>
                </NavigationMenuItem>
                
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
export default Header;