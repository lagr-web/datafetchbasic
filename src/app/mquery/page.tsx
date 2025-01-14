import { getQueryData } from "@/lib/data";

const page = async(props: { searchParams: Promise<{ id: string }> })  => {

//const page = async ({ searchParams }: { searchParams: { id: string }}) => {

const { id } = await props.searchParams;

    const data = await getQueryData(id);

    return (

        <>

            {data &&

                <>
                    <div>{data.title}</div>
                    <div>{data.description}</div>

                </>
            }

        </>
    )


}

export default page;