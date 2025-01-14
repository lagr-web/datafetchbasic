import { useState } from "react";

async function getData() {

    const res = await fetch('https://enemy.pages.dev/assets/data.json',{next: {revalidate:10}});

    if (!res.ok) {
        throw new Error('failed to fetch data');
    }

    console.log('poul');

    return res.json();
}



const page = async () => {

    const data = await getData();

    //const extraData = moreData();

   // const [dataA, dataB] = await Promise.all([data, extraData]);

    return (

        <>
            {data &&

                data.content.map((item: any, index: number) => (

                    <div key={index}>{item.name}</div>

                ))

            }

        </>

    )
}

export default page;