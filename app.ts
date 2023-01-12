require('dotenv').config();

import { module1 } from "./modules/module1";
import { data_error } from "./modules/data_error";

async function app() {
    console.log("start app")

    await module1()

    const { data, error } = await data_error()

    if (error) {
        throw new Error(error);
    }

    console.log({ data })

    console.log("end app")
}

app()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`);
        // process.exit(1);
    })
    .finally(async () => {
        console.log('finally end app.');
        // await prisma.$disconnect();
    });