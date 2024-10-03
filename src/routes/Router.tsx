import {Route, Switch} from "wouter";
import Home from "@/pages/Home/Home.tsx";
import WareHouse from "@/pages/Products/WareHouse";
import NotFound from "@/pages/NotFound/NotFound";
import AddProduct from "@/pages/Products/AddProduct"

const Routes = () => 
{
    return (
        <section className="mx-auto w-[800px] py-24 px-8 tablet:w-full">
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/inventario" component={WareHouse} />
                <Route path="/pedirProducto" component={AddProduct} />
                <Route path="*" component={NotFound}/>
            </Switch>
        </section> 
    )
}
export default Routes;