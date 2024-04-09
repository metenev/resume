import { FC } from "react"
import './NumericRating.scss'

type Props = {
    max?: number,
    value: number
}

export const NumericRating: FC<Props> = ({ value, max }) => {
    return <span className="rating numeric">
        <strong className="value">{value}</strong>
        <span className="divider">/</span>
        <span className="total">{max ?? 5}</span>
    </span>
}