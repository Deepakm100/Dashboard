import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Lectures', image: iconsImgs.budget },
    { id: 3, title: 'Marks Obtained', image: iconsImgs.plane },
    { id: 4, title: 'Tests', image: iconsImgs.budget },
    { id: 5, title: 'OverAll Progress', image: iconsImgs.budget},
    { id: 6, title: 'Monthly Reports', image: iconsImgs.report },
    { id: 7, title: 'Assignments', image: iconsImgs.budget },
    { id: 8, title: 'Notices', image: iconsImgs.budget },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Linear Algebra",
        image: iconsImgs.plane,
        date: "23/12/23",
        amount: 22
    },
    {
        id: 12, 
        name: "Quantum Physics",
        image: iconsImgs.plane,
        date: "23/07/23",
        amount: 20
    },
    {
        id: 13, 
        name: "Applied Chemistry",
        image: iconsImgs.plane,
        date: "23/08/22",
        amount: 30
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 95,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 80,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 85,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 70,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 92,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Lecture 23",
        type: "Watched",
        amount: 120
    },
    {
        id: 20, 
        title: "Lecture 24",
        type: "Watched",
        amount: 110
    },
    {
        id: 21, 
        title: "Lecture 25",
        type: "Watched",
        amount: 90
    },
    {
        id: 22, 
        title: "Lecture 26",
        type: null,
        amount: 115
    },
    {
        id: 23, 
        title: "Lecture 27",
        type: null,
        amount: 60
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "Chapter 1",
        due_date: "20/12/24",
        amount: 50
    },
    {
        id: 25,
        title: "Chapter 2",
        due_date: "22/12/24",
        amount: 100
    },
    {
        id: 26,
        title: "Chapter 3",
        due_date: "23/12/24",
        amount: 20
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 100 ,
        title: "Assignment 1",
        date_taken: "24/12/24",
        amount_left: 40
    }
]