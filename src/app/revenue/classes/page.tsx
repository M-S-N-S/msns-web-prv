import { ClassTable } from "~/app/_components/revenue/tables/ClassTable";



export default function ClassesPage(){

    return (
        <section className="grid gap-2">
            <h1 className="text-3xl text-gray-900">Classes Detail</h1>
            <ClassTable/>
        </section>
    )
}