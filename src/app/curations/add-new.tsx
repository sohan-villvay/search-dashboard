"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@components/ui/button";
import { CreateProduct } from "./create";

export const AddNewSet = () => {


  return (
    <div className="mb-3 ">
    <Dialog>
    <DialogTrigger>
        <Button>+ New Set</Button>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>New Synonym Set</DialogTitle>
        <DialogDescription>
            Add ID and Synonyms
        </DialogDescription>
        </DialogHeader>
        <CreateProduct/>
    </DialogContent>
    </Dialog>
    </div>
  );
};