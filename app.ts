require('dotenv').config();

import { module1 } from "./module1";

async function app() {
    console.log("start app")

    await module1()

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