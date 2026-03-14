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
                    <img
                        src="/dog.jpg"
                        alt="A cute dog"
                        className="mt-2 rounded-xl shadow-sm w-full h-auto object-cover max-h-48"
                    />
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
                <li>My alarm clock ran out of battery!</li>
                <li>I had a dream from the higher beings, telling me not to turn up 👀</li>
            </ListContainer>
        ),
    },
    {
        id: 3,
        dieText: "Abducted by aliens",
        elabText: (
            <ListContainer>
                <li>
                    They tried to probe my brain for company secrets, but got bored. Still, I need
                    the day off to recover from the tractor beam.
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
                <li>The salon stylist had a knife at my throat, threatening me to stay 😰</li>
            </ListContainer>
        ),
    },
    {
        id: 5,
        dieText: "Trapped by a weighted blanket",
        elabText: (
            <ListContainer>
                <li>
                    The physics are undeniable. The blanket has claimed me, and I am now one with
                    the mattress.
                </li>
                <li>Even Socrates struggled to get out of bed, who am I to contend?</li>
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
                    She almost dropped the database, luckily I stopped her in time. You should be
                    thanking me!
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
                    I suddenly realized that time is merely a construct. Therefore, the 10am sync
                    is also a construct.
                </li>
                <li>
                    Why do we even build software when the universe is headed towards inevitable
                    heat-death? 🌌
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
                    The robot uprising has officially begun in my living room. I am currently
                    seeking refuge on the kitchen island.
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
                    Honestly, my hair is doing this <strong>incredible</strong> thing and it would
                    just be way too distracting for the team on the Zoom call.
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
                    The local infrastructure has finally claimed me. Please tell my manager to send
                    a rope and some snacks.
                </li>
                <li>
                    It's deeper than it looks. I think I see the Mole People 👷‍♂️🕳️. We're forming a union
                    down here.
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
                    The concept of a "workweek" is extremely limiting for a multidimensional entity
                    such as myself.
                </li>
            </ListContainer>
        ),
    },
    {
        id: 12,
        dieText: "Wi-Fi stolen by neighbour",
        elabText: (
            <ListContainer>
                <li>
                    My neighbour changed their Wi-Fi password without warning me. I consider this a
                    breach of trust.
                </li>
                <li>I am currently drafting a peace treaty to regain network access.</li>
            </ListContainer>
        ),
    },
    {
        id: 13,
        dieText: "Pants inexplicably shrunk",
        elabText: (
            <ListContainer>
                <li>I put my favorite work pants in the dryer, and they now fit a toddler.</li>
                <li>
                    I am not legally allowed to attend this meeting pantless.{" "}
                    <em>It’s HR policy.</em>
                </li>
            </ListContainer>
        ),
    },
    {
        id: 14,
        dieText: "Stuck in Wikipedia rabbit hole",
        elabText: (
            <ListContainer>
                <li>
                    I started reading about software architecture and somehow ended up on the
                    history of 14th-century cheese-making 🧀📚.
                </li>
                <li>I cannot stop reading. I am now a certified Gouda historian.</li>
            </ListContainer>
        ),
    },
    {
        id: 15,
        dieText: "Locked out by smart home",
        elabText: (
            <ListContainer>
                <li>
                    My smart lock pushed an unapproved firmware update and has now trapped me in the
                    hallway.
                </li>
                <li>My toaster is laughing at me. The machines have won.</li>
            </ListContainer>
        ),
    },
    {
        id: 16,
        dieText: "Caffeine withdrawal migraine",
        elabText: (
            <ListContainer>
                <li>
                    The espresso machine broke down this morning. My brain is currently operating on
                    1990s dial-up speeds.
                </li>
                <li>If I speak before consuming coffee, I might say something we all regret.</li>
            </ListContainer>
        ),
    },
    {
        id: 17,
        dieText: "Parrot screaming profanities",
        elabText: (
            <ListContainer>
                <li>
                    My roommate's bird learned a completely unacceptable word and refuses to stop
                    shouting it.
                </li>
                <li>
                    For the sake of our company's professionalism, I <strong>must</strong> stay on
                    mute all day. 🦜🤬
                </li>
            </ListContainer>
        ),
    },
    {
        id: 18,
        dieText: "Lost fight with giant spider",
        elabText: (
            <ListContainer>
                <li>
                    It had eight legs, a visible health bar, and it now owns the deed to my
                    apartment.
                </li>
                <li>I am currently negotiating rent with my new arachnid landlord. 🕷️🏠</li>
            </ListContainer>
        ),
    },
    {
        id: 19,
        dieText: "Astrology said to stay home",
        elabText: (
            <ListContainer>
                <li>
                    My horoscope explicitly warned me against "unnecessary virtual gatherings"
                    today.
                </li>
                <li>I can't argue with the cosmos. It's just bad vibes. ✨🔮</li>
            </ListContainer>
        ),
    },
    {
        id: 20,
        dieText: "Spilled coffee on the motherboard",
        elabText: (
            <ListContainer>
                <li>
                    My laptop drank my morning brew and is now completely fried. It was an expensive
                    breakfast.
                </li>
                <li>Trying to put it in a giant bag of rice, but I only have quinoa. 💻🍚</li>
            </ListContainer>
        ),
    },
    {
        id: 21,
        dieText: "Unexpected plumbing disaster",
        elabText: (
            <ListContainer>
                <li>
                    My bathroom sink has turned into Old Faithful. I am holding back the floodwaters
                    with a single towel.
                </li>
                <li>
                    If I hop on the call, you will only hear the sounds of rushing water and my
                    weeping. 🌊😭
                </li>
            </ListContainer>
        ),
    },
    {
        id: 22,
        dieText: "Trapped in an elevator",
        elabText: (
            <ListContainer>
                <li>
                    I pressed the button for the lobby, but the elevator decided to trap me between
                    floors 3 and 4.
                </li>
                <li>
                    The firemen are on their way but they seem to be stuck in traffic...
                </li>
            </ListContainer>
        ),
    },
    {
        id: 23,
        dieText: "Ghost rearranging my furniture",
        elabText: (
            <ListContainer>
                <li>
                    A poltergeist is stacking my dining chairs. It’s incredibly distracting and
                    frankly, a safety hazard.
                </li>
                <li>
                    I need the morning off to call a priest or at least sage the home office. 👻🪑
                </li>
            </ListContainer>
        ),
    },
    {
        id: 24,
        dieText: "Allergic reaction to corporate jargon",
        elabText: (
            <ListContainer>
                <li>
                    Someone told me to "circle back and align on synergies," and I immediately broke
                    out in hives.
                </li>
                <li>My doctor prescribed me 8 hours of absolutely zero buzzwords.</li>
            </ListContainer>
        ),
    },
    {
        id: 25,
        dieText: "Trying to domesticate a raccoon",
        elabText: (
            <ListContainer>
                <li>
                    🦝 There is a trash panda on my porch and we are bonding. I cannot abandon him
                    during this critical trust-building phase. 🦝
                </li>
                <li>
                    He has accepted a marshmallow from my hand. I am basically a Disney Princess
                    now.
                </li>
            </ListContainer>
        ),
    },
    {
        id: 26,
        dieText: "GPS led me into a swamp",
        elabText: (
            <ListContainer>
                <li>
                    Maps took a "creative liberty" with my shortcut to the coffee shop. I am now
                    knee-deep in mud.
                </li>
                <li>
                    Please tell the team I might be slightly delayed, pending rescue from an
                    airboat. 🗺️🐊
                </li>
            </ListContainer>
        ),
    },
    {
        id: 27,
        dieText: "Too aggressively cozy right now",
        elabText: (
            <ListContainer>
                <li>
                    The ambient temperature and blanket configuration are mathematically perfect.
                </li>
                <li>
                    To disturb this peace would be a profound crime against comfort itself. 🛌☕
                </li>
            </ListContainer>
        ),
    },
    {
        id: 28,
        dieText: "Fell for a phishing scam",
        elabText: (
            <ListContainer>
                <li>
                    A BTS JungKook urgently needed my help. I am currently untangling my
                    compromised bank accounts.
                </li>
                <li>
                    Look, the email looked <strong>very</strong> professional. I thought it was an
                    investor! 🎣💸
                </li>
            </ListContainer>
        ),
    },
    {
        id: 29,
        dieText: "Plant needs emotional support",
        elabText: (
            <ListContainer>
                <li>
                    My prized Monstera dropped a leaf today. I need to be here for it during this
                    difficult grieving period.
                </li>
                <li>I'll be playing it classical music until morale improves. 🪴🎻</li>
            </ListContainer>
        ),
    },
    {
        id: 30,
        dieText: "Ate suspiciously ancient leftovers",
        elabText: (
            <ListContainer>
                <li>
                    That three-week-old lasagna was a terrible mistake. My stomach is filing a
                    formal complaint.
                </li>
                <li>I have taken up permanent residence in the bathroom. Do not disturb. 🤢🚽</li>
            </ListContainer>
        ),
    },
    {
        id: 31,
        dieText: "Mercury is in severe retrograde",
        elabText: (
            <ListContainer>
                <li>
                    The planets are completely out of alignment. If I push any code today, I will
                    single-handedly break production.
                </li>
                <li>I am burning sage over my router to ward off network outages. 🪐🔥</li>
            </ListContainer>
        ),
    },
];

export const MAX_FACES = EXCUSES.length;
