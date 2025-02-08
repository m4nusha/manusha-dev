import { useEffect } from "react";

function HomeInfo() {

    useEffect(() => {
        const a = fetch('https://api.greatcomcat')
        a 
    },[])

    return <h1 className="flex text-xxl">{`I'm Manusha`}</h1>
}

export default HomeInfo;