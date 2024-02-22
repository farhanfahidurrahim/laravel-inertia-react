// export default function Index({ auth, pizzas }) {
//     return (
//         <div>
//             <h1>Hii</h1>
//         </div>
//     );
// }

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "@/Components/Table";

const columns = ["size", "chef", "status"];

export default function Index({ auth, pizzas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pizzas
                </h2>
            }
        >
            <Head title="Pizzas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table
                            columns={columns}
                            items={pizzas}
                            primary="Order Number"
                            action="pizza.edit"
                        ></Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
