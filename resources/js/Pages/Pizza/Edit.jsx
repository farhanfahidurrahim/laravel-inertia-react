import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Update from "./Update";

export default function Edit({ auth, pizza }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Order# {pizza.id}
                </h2>
            }
        >
            <Head title={"Order#" + pizza.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <Update pizza={pizza} className="max-w-xl"></Update>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
