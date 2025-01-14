import { getQueryData } from "@/lib/data";

interface PageProps {

    searchParams: Promise<{ id: string }>;
}


const page = async (props: PageProps) => {

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