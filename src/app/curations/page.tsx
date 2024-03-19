"use client"

import Card from "@components/card/card";
import { ListSynonyms } from "./list";
import { Separator } from "@components/ui/separator";
import { AddNewSet } from "./add-new";
import { Input } from "@components/ui/input";
import { useMemo } from "react";

export default function Curations() {

    return (

      <div className="flex flex-row  gap-4">

        <div className="container basis-3/5 mx-auto py-5 bg-white rounded-3xl p-4 shadow-lg">
            <h2 className="text-l font-medium text-center">Synonyms</h2>
            <Separator className="my-4" />
            <AddNewSet/>
            <ListSynonyms/>
        </div>

        <div className="container basis-2/5 mx-auto py-5 bg-white rounded-3xl shadow-lg">
            <h2 className="text-l font-medium text-center">Unit of Measures</h2>
            <Separator className="my-4" />
        </div>

      </div>

    );
}