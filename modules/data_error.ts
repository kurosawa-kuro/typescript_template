require('dotenv').config();

export async function data_error(): Promise<{ data: string, error: any }> {
    console.log("data_error invoked")
    try {
        // throw new Error("Error module1");

        return { data: "success", error: null }
    } catch (error) {
        return { data: "", error }
    }
}