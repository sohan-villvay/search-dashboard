"use client"

import { CreateProduct } from "./create";
import { ListProducts } from "./list";
import { ShowProduct } from "./show";

export default function Curations() {
    return (
        <div>
            <h2 className="text-xl font-medium text-center">Curations</h2>
            <ShowProduct/>
            <ListProducts/>
            <CreateProduct/>
        </div>
    );
}