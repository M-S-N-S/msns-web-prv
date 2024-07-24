import { StudentTable } from "~/app/_components/revenue/tables/StudentTable";

export default function ClassesPage(){

    return (
        <section className="grid gap-2">
            <h1 className="text-3xl text-gray-900">Student Detail</h1>
            <StudentTable/>
        </section>
    )
}