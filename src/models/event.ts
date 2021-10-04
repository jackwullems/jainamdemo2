import { images } from "assets";
import moment from "moment";

export interface EventModel {
    title: string
    image: any
    startTime: string
    duration: number
}

export const sampleMyevents: EventModel[] = [
    {
        title: 'Jeenals birthday event',
        image: images.event1,
        startTime: '2021-04-28',
        duration: 120
    },
    {
        title: 'Keyurs dance event',
        image: images.event2,
        startTime: '2021-04-28',
        duration: 120
    },
]

export const sampleMyInvitations: EventModel[] = [
    {
        title: 'Hardiks Live event',
        image: images.event3,
        startTime: '2021-04-28',
        duration: 120
    },
    {
        title: 'Sheetals wedding',
        image: images.event4,
        startTime: '2021-04-28',
        duration: 120
    },
]