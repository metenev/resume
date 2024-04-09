import { FC } from "react"
import StarEmptyIcon from '../../assets/star_icon_empty.svg?react'
import StarFullIcon from '../../assets/star_icon.svg?react'
import './StarsRating.scss'

type Props = {
    max?: number,
    value: number
}

export const StarsRating: FC<Props> = props => {
    const max = props.max ?? 3
    const stars: JSX.Element[] = []

    for (let i = 0; i < max; i++) {
        stars.push(
            i < props.value
                ? <StarFullIcon className="full" />
                : <StarEmptyIcon className="empty" />
        )
    }

    return <span className="rating stars">
        {stars}
    </span>
}