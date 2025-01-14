export async function getQueryData(id:string){

    try{

        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if(!res.ok) throw new Error("failed");
    
        return res.json();

    }catch(error){

        console.log(error);

    } 

}


export const getAllData = async ()=> {

    const res = await fetch('https://dummyjson.com/products');
    
    if(!res.ok) throw new Error('failed');
    
    return res.json();
    
    
    }


