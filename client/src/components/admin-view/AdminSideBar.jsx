import { LayoutDashboard,ShoppingBasket,BadgeCheck } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

export const adminSidebarMenuItems = [
    {
        id : "dashboard",
        label : "Dashboard",
        path : "/admin/dashboard",
        icon : <LayoutDashboard/>
    },
    {
        id : "products",
        label : "Products",
        path : "/admin/products",
        icon : <ShoppingBasket/>
    },
    {
        id : "orders",
        label : "Orders",
        path : "/admin/orders",
        icon : <BadgeCheck/>
    },
]

function MenuItems ({setOpen}) {
  const navigate = useNavigate();
  return <nav className="mt-8 flex flex-col gap-2 ">
    {
      adminSidebarMenuItems.map(menuItem => <div key={menuItem.id} onClick={() => {
        navigate(menuItem.path)
        setOpen ? setOpen(false) : null
      }}
      className="flex items-center gap-2 text-lg cursor-pointer rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">

        {menuItem.icon}
        <span>{menuItem.label}</span>

      </div>)
    }
      </nav>
}


const AdminSideBar = ({open,setOpen}) => {

  const navigate = useNavigate();

  return (

    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
            <div className="flex flex-col h-full">
                <SheetHeader>
                  <SheetTitle className="flex gap-2 mt-5 mb-4">
                    <ChartNoAxesCombined size={30}/>
                    <span className="text-xl font-bold">Admin Panel</span>
                  </SheetTitle>
                    <SheetDescription className="sr-only">
                       Manage your dashboard and store settings
                    </SheetDescription>
                </SheetHeader>
                <MenuItems setOpen={setOpen}/>
            </div>
        </SheetContent>
      </Sheet>
        <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
          <div onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer">
            <ChartNoAxesCombined size={30}/>
              <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <MenuItems/>
        </aside>
    </Fragment>

  );

};

export default AdminSideBar;