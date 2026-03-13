import type { ReactNode } from "react";
import ListContainer from "./ListContainer";

export interface Excuse {
    id: number;
    dieText: string;
    elabText: ReactNode;
}

// Ensure id is unique, dieText is at least 1 word and max of 6
// TODO: can add linter rule to enforce this standard
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
            <ListContainer>
                <li>
                    My dog is turning 10 today! <strong>It is a very important milestone.</strong>
                </li>
                <li>
                    My dog is the love of my life! I <strong>cannot</strong> miss his birthday.
                </li>
                <li>
                    Picture as evidence
                    <img src="/dog.jpg" alt="A cute dog" className="mt-2 rounded-xl shadow-sm w-full h-auto object-cover max-h-48" />
                </li>
            </ListContainer>

        ),
    },
    {
        id: 2,
        dieText: "Overslept",
        elabText: (
            <ListContainer>
                <li>
                    Worked way too hard to provide maximum shareholder value last night and my
                    biological battery completely depleted.
                </li>
                <li>
                    My alarm clock ran out of battery!
                </li>
                <li>
                    I had a dream from the higher beings, telling me not to turn up 👀
                </li>
            </ListContainer>
        ),
    },
    {
        id: 3,
        dieText: "Abducted by aliens",
        elabText: (
            <ListContainer>
                <li>
                    They tried to probe my brain for company secrets, but got bored. Still, I need the
                    day off to recover from the tractor beam.
                </li>
            </ListContainer>
        ),
    },
    {
        id: 4,
        dieText: "Washing my hair",
        elabText: (
            <ListContainer>
                <li>
                    It is a rigorous 12-step routine involving rare Amazonian clays.{" "}
                    <em>I cannot be rushed.</em>
                </li>
                <li>
                    The salon stylist had a knife at my throat, threatening me to stay 😰
                </li>
            </ListContainer>
        ),
    },
    {
        id: 5,
        dieText: "Trapped by a weighted blanket",
        elabText: (
            <ListContainer>
                <li>
                    The physics are undeniable. The blanket has claimed me, and I am now one with the
                    mattress.
                </li>
                <li>
                    Even Socrates struggled to get out of bed, who am I to contend?
                </li>
            </ListContainer>
        ),
    },
    {
        id: 6,
        dieText: "Cat on keyboard",
        elabText: (
            <ListContainer>
                <li>
                    To move the feline overlord is a felony in my household. My hands are literally
                tied.
                </li>
                <li>
                    She almost dropped the database, luckily I stopped her in time. You should be thanking me!
                </li>
            </ListContainer>
        ),
    },
    {
        id: 7,
        dieText: "Existential crisis",
        elabText: (
            <ListContainer>
                <li>
                    I suddenly realized that time is merely a construct. Therefore, the 10 AM sync is
                    also a construct.
                </li>
                <li>
                    Why do we even build software when the universe is headed towards inevitable heat-death? 🌌
                </li>
            </ListContainer>
        ),
    },
    {
        id: 8,
        dieText: "Rogue Roomba attack",
        elabText: (
            <ListContainer>
                <li>
                    The robot uprising has officially begun in my living room. I am currently seeking
                    refuge on the kitchen island.
                </li>
                <li>
                    It learned how to wield a kitchen knife. Send help, not a Slack message! 🔪🤖
                </li>
            </ListContainer>
        ),
    },
    {
        id: 9,
        dieText: "Too good-looking today",
        elabText: (
            <ListContainer>
                <li>
                    Honestly, my hair is doing this <strong>incredible</strong> thing and it would just
                    be way too distracting for the team on the Zoom call.
                </li>
                <li>
                    I am legally required to spare you all from my blinding radiance today. ✨😎
                </li>
            </ListContainer>
        ),
    },
    {
        id: 10,
        dieText: "Swallowed by a pothole",
        elabText: (
            <ListContainer>
                <li>
                    The local infrastructure has finally claimed me. Please tell my manager to send a
                    rope and some snacks.
                </li>
                <li>
                    It's deeper than it looks. I think I see the Mole People. We're forming a union down here. 👷‍♂️🕳️
                </li>
            </ListContainer>
        ),
    },
    {
        id: 11,
        dieText: "Forgot how to perceive linear time",
        elabText: (
            <ListContainer>
                <li>
                    Is the deadline yesterday, today, or tomorrow?{" "}
                    <em>I exist in all moments simultaneously now.</em>
                </li>
                <li>
                    The concept of a "workweek" is extremely limiting for a multidimensional entity such as myself. 🌀🕰️
                </li>
            </ListContainer>
        ),
    },
];

export const MAX_FACES = EXCUSES.length;
