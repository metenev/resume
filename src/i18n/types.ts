import { FunctionComponent, SVGProps } from "react";

type ExperienceDateRange = {
    dateStart: string,
    dateEnd: string,
}
type ExperienceDateText = {
    dateText: string,
}

type Experience = {
    title: string,

    company?: {
        name: string,
        desc: string,
        workMode: string,
    },

    notes: (string | string[])[]
}

type ExperienceWithDateRange = Experience & ExperienceDateRange;
type ExperienceWithDateText = Experience & ExperienceDateText;

export function isExperienceWithDateRange(value: Experience): value is ExperienceWithDateRange {
    return (
        typeof (value as ExperienceWithDateRange).dateStart !== 'undefined' &&
        typeof (value as ExperienceWithDateRange).dateEnd !== 'undefined'
    )
}

export type MessagesSet = {
    langName: string,

    builtWith: string,

    name: string,
    role: string,

    contacts: {
        text: string,
        url?: string,
        icon: FunctionComponent<SVGProps<SVGSVGElement>>
    }[],

    summary: {
        title: string,
        content: string[]
    },

    experience: {
        title: string,
        content: (ExperienceWithDateRange | ExperienceWithDateText)[],
    },

    skills: {
        title: string,
        items: {
            name: string,
            rank: number
        }[],

        additionalContent?: string[],

        bonus?: {
            title: string,
            items: {
                name: string,
                rank: number
            }[]
        }
    }[],

    footerContent: string[]
}

export type Messages = Record<string, MessagesSet>
