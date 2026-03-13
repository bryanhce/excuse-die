import type { ReactNode } from "react";

export interface Excuse {
    id: number;
    dieText: string;
    elabText: ReactNode;
}

// TODO: add some validation to the dieText, need to be at least 1 word and max of 6 words

export const EXCUSES: Excuse[] = [
    {
        // landing excuse
        id: 0,
        dieText: "Generate your next Excuse!",
        elabText: "Up your Excuse game and escape your next obligation with ease",
    },
    {
        id: 1,
        dieText: "Dog's birthday",
        elabText: (
            <p>
                My dog is turning 5 today! <strong>It is a very important milestone.</strong>
            </p>
        ),
    },
    {
        id: 2,
        dieText: "Overslept",
        elabText: (
            <p>
                Worked way too hard to provide maximum shareholder value last night and my
                biological battery completely depleted.
            </p>
        ),
    },
    {
        id: 3,
        dieText: "Abducted by aliens",
        elabText: (
            <p>
                They tried to probe my brain for company secrets, but got bored. Still, I need the
                day off to recover from the tractor beam.
            </p>
        ),
    },
    {
        id: 4,
        dieText: "Washing my hair",
        elabText: (
            <span>
                It is a rigorous 12-step routine involving rare Amazonian clays.{" "}
                <em>I cannot be rushed.</em>
            </span>
        ),
    },
    {
        id: 5,
        dieText: "Trapped by a weighted blanket",
        elabText: (
            <p>
                The physics are undeniable. The blanket has claimed me, and I am now one with the
                mattress.
            </p>
        ),
    },
    {
        id: 6,
        dieText: "Cat on keyboard",
        elabText: (
            <p>
                To move the feline overlord is a felony in my household. My hands are literally
                tied.
            </p>
        ),
    },
    {
        id: 7,
        dieText: "Existential crisis",
        elabText: (
            <p>
                I suddenly realized that time is merely a construct. Therefore, the 10 AM sync is
                also a construct.
            </p>
        ),
    },
    {
        id: 8,
        dieText: "Rogue Roomba attack",
        elabText: (
            <p>
                The robot uprising has officially begun in my living room. I am currently seeking
                refuge on the kitchen island.
            </p>
        ),
    },
    {
        id: 9,
        dieText: "Too good-looking today",
        elabText: (
            <p>
                Honestly, my hair is doing this <strong>incredible</strong> thing and it would just
                be way too distracting for the team on the Zoom call.
            </p>
        ),
    },
    {
        id: 10,
        dieText: "Swallowed by a pothole",
        elabText: (
            <p>
                The local infrastructure has finally claimed me. Please tell my manager to send a
                rope and some snacks.
            </p>
        ),
    },
    {
        id: 11,
        dieText: "Forgot how to perceive linear time",
        elabText: (
            <p>
                Is the deadline yesterday, today, or tomorrow?{" "}
                <em>I exist in all moments simultaneously now.</em>
            </p>
        ),
    },
];

export const MAX_FACES = EXCUSES.length;
