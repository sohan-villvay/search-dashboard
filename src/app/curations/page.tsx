"use client"

import Card from "@components/card/card";
import { ListProducts } from "./list";
import { Separator } from "@components/ui/separator";
import { AddNewSet } from "./add-new";
import { Input } from "@components/ui/input";
import { useMemo } from "react";

export default function Curations() {


    return (

    <div className="flex flex-row  gap-4">
      <Card header="Synonyms with Refine" >
        <Separator className="my-4" />

            <Input/>
            <AddNewSet/>
            {/* <CreateProduct/> */}
            {/* <ProductTable/> */}
           <ListProducts/>

      </Card>
    </div>
    );
}