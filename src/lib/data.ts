//src/lib/data.ts

export async function getQueryData(id: string) {

    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) throw new Error("failed");

    return res.json();

}


export const getAllData = async () => {

    const res = await fetch('https://dummyjson.com/products');

    if (!res.ok) throw new Error('failed');

    return res.json();


}


