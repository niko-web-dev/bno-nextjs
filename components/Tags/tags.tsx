import {FC} from "react";

interface ITags {
    brand: string
    types: string[]
}
const Tags: FC<ITags> = ({brand, types}) => {
    return (
        <div>
            <h3>{brand}</h3>
            <ul>
                {types.map((type, index) => {
                    return (
                        <li key={index}>{type}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tags
