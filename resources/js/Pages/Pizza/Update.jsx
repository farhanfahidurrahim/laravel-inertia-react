import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import InputError from "./../../Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function Update({ pizza, className = "" }) {
    const statusOptions = [
        "Ordered",
        "Preparing",
        "Baking",
        "Checking",
        "Ready",
    ];
    console.log("check", pizza);

    const submit = (e) => {
        e.preventDefault();
        patch(route("pizza.update", pizza.id));
    };

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            size: pizza.size,
            crust: pizza.crust,
            toppings: pizza.toppings.join(", "),
            status: pizza.status,
        });

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Order Information
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="size" value="Size"></InputLabel>
                    <TextInput
                        id="size"
                        className="mt-1 block w-full"
                        value={data.size}
                        disabled
                    ></TextInput>
                </div>
                <div>
                    <InputLabel
                        htmlFor="toppings"
                        value="Toppings"
                    ></InputLabel>
                    <TextInput
                        id="size"
                        className="mt-1 block w-full"
                        value={data.toppings}
                        disabled
                    ></TextInput>
                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status"></InputLabel>
                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                    ></SelectInput>
                    <InputError className="mt-2" message={errors.status} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Save Changes
                    </PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
