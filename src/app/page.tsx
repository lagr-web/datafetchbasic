import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getAllData } from "@/lib/data";

export default async function Home() {

  const data = await getAllData();


  return (
    <>

    {data &&

       data.products.map( (item:any)=>(
        
        <div>
          <Link
           href={{

            pathname: '/mquery',
            query: {id: item.id}

           }}
          
          >{item.title}</Link>

        </div>
        

       ) )


    }
  

    </>


  );
}
