"use client"

import Card from "@components/card/card";
import { CreateProduct } from "./create";
import { ListProducts } from "./list";
import { ShowProduct } from "./show";
import { ProductTable } from "./table";
import { Separator } from "@components/ui/separator";

export default function Curations() {
    return (

    <div className="flex flex-row  gap-4">
      <Card header="Synonyms with Refine" >
        <Separator className="my-4" />

            <CreateProduct/>
            <ShowProduct/>
            {/* <ListProducts/> */}
            <ProductTable/>

      </Card>
    </div>
    );
}