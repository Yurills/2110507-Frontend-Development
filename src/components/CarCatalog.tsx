import Link from "next/link"
import ProductCard from "./ProductCard"
import { ClassNames } from "@emotion/react"

export default async function CarCatalog( {carJson} : {carJson:Object}) {
    const carJsonReady = await carJson;
    return (
        <>
        Explore {carJsonReady.count} model in our catalog
        <div style = {{margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap", padding: "10px"}}>
            {
                carJsonReady.data.map((carItem:Object) => (
                    <Link key={carItem.model} href={`/car/${carItem.id}` }className="w-1/5">
                        <ProductCard carName={carItem.model} imgSrc={carItem.picture}/>
                    </Link>
                ))
            }
        </div>
        </>
    )
}