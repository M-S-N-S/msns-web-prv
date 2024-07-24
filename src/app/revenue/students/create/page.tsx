import { StudentCreation } from "~/app/_components/revenue/forms/student/StudentCreation";

export default function ClassesPage(){

    return (
        <section className="grid gap-2">
            <h1 className="text-3xl text-gray-900">Add Student</h1>
            <StudentCreation/>
        </section>
    )
}