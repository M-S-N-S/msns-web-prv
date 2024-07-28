import { ClassTable } from "~/app/_components/revenue/tables/ClassTable";



export default function ClassesPage(){

    return (
        <section className="grid gap-2">
            <h1 className="text-3xl font-bold text-green-800 p-4">Class Grades</h1>
            <ClassTable/>
        </section>
    )
}