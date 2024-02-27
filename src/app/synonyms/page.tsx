import { Synonyms, columns } from "./columns"
import { DataTable } from "@components/synonyms/data-table"
import { getData, postData } from "@/lib/actions";
import { toast } from "sonner"
import { Separator } from "@/components/ui/separator";


export async function makePostRequest() {

    console.log("Add new")

    try {
        const data = {
            "synonyms": [
                "sdf",
                "sfgffgdg",
                "dfdf"
            ],
            "id": "Test2"
        };

        const response = await postData(data);
        console.log('Response:', response);
        toast("New synonym set added!")


    } catch (error) {
        console.error('Error:', error);
    }
}

//TODO: Make a reusable component for the Cards
export default async function Synonyms() {
    const data = await getData()
    return (
        <div className="flex flex-row  gap-4">

            <div className="container basis-3/5 mx-auto py-5 bg-white rounded-3xl p-4 shadow-lg">
                <h2 className="text-l font-medium text-center">Synonyms</h2>
                <Separator className="my-4" />
                <DataTable columns={columns} data={data} />
            </div>

            <div className="container basis-2/5 mx-auto py-5 bg-white rounded-3xl shadow-lg">
                <h2 className="text-l font-medium text-center">Unit of Measures</h2>
                <Separator className="my-4" />
            </div>

        </div>
    );
}