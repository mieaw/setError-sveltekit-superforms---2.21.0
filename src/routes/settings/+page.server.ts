import type { PageServerLoad } from "./$types.js";
import { fail, superValidate, setError } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        if (form.data.username === 'admin') {
            return setError(form, 'username', 'Username cannot be admin');
        }
        return {
            form,
        };
    },
};
