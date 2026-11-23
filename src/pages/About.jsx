// import { Link } from "react-router-dom";
// import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function About() {
//     return (
//         <div>
//             <Navbar />
//             <main
//                 className="
//         min-h-screen
//         bg-chizzy-paper
//         text-chizzy-ink
//         dark:bg-chizzy-dark
//         dark:text-chizzy-white
//         transition-colors
//         duration-300
//       "
//             >
//                 {/* Hero */}
//                 <section className="pt-40 pb-28 px-6">
//                     <div className="max-w-7xl mx-auto">
//                         <p className="text-sm uppercase tracking-[0.3em] text-[#b7791f] font-semibold mb-6">
//                             About FocusForge
//                         </p>

//                         <div className="max-w-5xl">
//                             <h1 className="heading-font text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
//                                 A place for
//                                 <br />
//                                 <span className="italic">ideas that matter.</span>
//                             </h1>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Introduction */}
//                 <section className="px-6 pb-32">
//                     <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
//                         <div className="lg:col-span-4">
//                             <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f]">
//                                 The idea
//                             </p>
//                         </div>

//                         <div className="lg:col-span-7 lg:col-start-6">
//                             <p className="heading-font text-3xl md:text-4xl leading-tight mb-8">
//                                 FocusForge is a space for thoughtful writing,
//                                 meaningful ideas and perspectives worth sitting
//                                 with.
//                             </p>

//                             <div className="space-y-5 text-base md:text-lg leading-8 text-black/60 dark:text-white/60">
//                                 <p>
//                                     The internet moves quickly. New opinions appear
//                                     every second, trends come and go, and there is
//                                     always something demanding our attention.
//                                 </p>

//                                 <p>
//                                     ChizzyWrites exists to slow things down a little.
//                                     It is a place to explore ideas, stories and
//                                     perspectives that deserve more than a passing
//                                     glance.
//                                 </p>

//                                 <p>
//                                     From technology and culture to personal growth,
//                                     life and the ideas shaping our world, every article
//                                     is an invitation to stop, read and think.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Philosophy */}
//                 <section className="border-y border-black/5 dark:border-white/5 px-6 py-28">
//                     <div className="max-w-7xl mx-auto">
//                         <div className="grid lg:grid-cols-2 gap-16 items-start">
//                             <div>
//                                 <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
//                                     Our philosophy
//                                 </p>

//                                 <h2 className="heading-font text-5xl md:text-6xl leading-tight">
//                                     Read slowly.
//                                     <br />
//                                     Think deeply.
//                                 </h2>
//                             </div>

//                             <div className="lg:pt-12">
//                                 <p className="text-lg leading-8 text-black/60 dark:text-white/60 max-w-xl">
//                                     We believe good writing does more than give you
//                                     information. It changes the way you see something
//                                     you thought you already understood.
//                                 </p>

//                                 <div className="mt-10 space-y-8">
//                                     <div className="border-l border-[#b7791f] pl-6">
//                                         <h3 className="heading-font text-2xl mb-2">
//                                             Curiosity
//                                         </h3>

//                                         <p className="text-sm leading-7 text-black/50 dark:text-white/50">
//                                             Ask better questions. Look beyond the obvious.
//                                             Stay interested in the world around you.
//                                         </p>
//                                     </div>

//                                     <div className="border-l border-[#b7791f] pl-6">
//                                         <h3 className="heading-font text-2xl mb-2">
//                                             Perspective
//                                         </h3>

//                                         <p className="text-sm leading-7 text-black/50 dark:text-white/50">
//                                             There is rarely only one way to look at an idea.
//                                             We explore different perspectives and encourage
//                                             thoughtful reflection.
//                                         </p>
//                                     </div>

//                                     <div className="border-l border-[#b7791f] pl-6">
//                                         <h3 className="heading-font text-2xl mb-2">
//                                             Growth
//                                         </h3>

//                                         <p className="text-sm leading-7 text-black/50 dark:text-white/50">
//                                             The things we read can influence the way we
//                                             think, live and grow. That is something worth
//                                             taking seriously.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* What We Write About */}
//                 <section className="px-6 py-32">
//                     <div className="max-w-7xl mx-auto">
//                         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
//                             <div>
//                                 <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
//                                     What you'll find
//                                 </p>

//                                 <h2 className="heading-font text-5xl md:text-6xl">
//                                     Something for
//                                     <br />
//                                     every curious mind.
//                                 </h2>
//                             </div>

//                             <Link
//                                 to="/categories"
//                                 className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 text-sm
//                 font-medium
//                 hover:text-[#b7791f]
//                 transition-colors
//               "
//                             >
//                                 Explore categories
//                                 <FiArrowRight size={17} />
//                             </Link>
//                         </div>

//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//                             {[
//                                 {
//                                     number: "01",
//                                     title: "Technology",
//                                     text: "The tools, trends and ideas changing the way we live.",
//                                 },
//                                 {
//                                     number: "02",
//                                     title: "Life",
//                                     text: "Lessons, experiences and perspectives on living well.",
//                                 },
//                                 {
//                                     number: "03",
//                                     title: "Spiritual Growth",
//                                     text: "Insights and guidance for a deeper connection with God and your faith.",
//                                 },
//                                 {
//                                     number: "04",
//                                     title: "Mental Health",
//                                     text: "Practical advice and insights for a healthier mind.",
//                                 },
//                             ].map((item) => (
//                                 <Link
//                                     key={item.number}
//                                     to={`/categories?topic=${item.title.toLowerCase()}`}
//                                     className="
//       group
//       min-h-64
//       p-7
//       rounded-2xl
//       border
//       border-black/10
//       dark:border-white/10
//       flex
//       flex-col
//       justify-between
//       hover:bg-[#171717]
//       hover:text-white
//       dark:hover:bg-[#f5f2ea]
//       dark:hover:text-[#111111]
//       transition-all
//       duration-300
//     "
//                                 >
//                                     <div className="flex justify-between items-start">
//                                         <span className="text-xs opacity-40">
//                                             {item.number}
//                                         </span>

//                                         <FiArrowUpRight
//                                             size={18}
//                                             className="
//           opacity-30
//           group-hover:opacity-100
//           group-hover:translate-x-1
//           group-hover:-translate-y-1
//           transition-all
//         "
//                                         />
//                                     </div>

//                                     <div>
//                                         <h3 className="heading-font text-2xl mb-3">
//                                             {item.title}
//                                         </h3>

//                                         <p className="text-sm leading-6 opacity-50">
//                                             {item.text}
//                                         </p>
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Editorial Statement */}
//                 <section className="bg-[#171717] text-[#f5f2ea] dark:bg-black px-6 py-32">
//                     <div className="max-w-5xl mx-auto">
//                         <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-8">
//                             A simple belief
//                         </p>

//                         <blockquote className="heading-font text-4xl md:text-5xl lg:text-6xl leading-tight">
//                             “A good article doesn't simply tell you something.
//                             It leaves you seeing something differently.”
//                         </blockquote>
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="px-6 py-32">
//                     <div className="max-w-4xl mx-auto text-center">
//                         <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
//                             Keep exploring
//                         </p>

//                         <h2 className="heading-font text-5xl md:text-6xl leading-tight mb-7">
//                             There's always
//                             <br />
//                             something worth reading.
//                         </h2>

//                         <p className="text-black/60 dark:text-white/60 max-w-xl mx-auto leading-7 mb-9">
//                             Explore the latest articles and discover an idea,
//                             perspective or story that stays with you.
//                         </p>

//                         <Link
//                             to="/articles"
//                             className="
//               inline-flex
//               items-center
//               gap-3
//               px-7
//               py-4
//               rounded-full
//               bg-[#171717]
//               text-white
//               dark:bg-[#f5f2ea]
//               dark:text-[#111111]
//               font-medium
//               hover:gap-5
//               transition-all
//             "
//                         >
//                             Read the articles
//                             <FiArrowRight size={18} />
//                         </Link>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     );
// }






import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    const categories = [
        {
            number: "01",
            title: "Inner Alignment",
            slug: "inner-alignment",
            text: "Reconnect with yourself, understand your values, and cultivate inner peace and clarity.",
        },
        {
            number: "02",
            title: "Self Development",
            slug: "self-development",
            text: "Build better habits, strengthen your mindset, and grow into the person you aspire to be.",
        },
        {
            number: "03",
            title: "Fun Hub",
            slug: "fun-hub",
            text: "Explore interesting stories, entertaining ideas, and everything else worth reading.",
        },
    ];

    return (
        <div>
            <Navbar />

            <main
                className="
                    min-h-screen
                    bg-chizzy-paper
                    text-chizzy-ink
                    dark:bg-chizzy-dark
                    dark:text-chizzy-white
                    transition-colors
                    duration-300
                "
            >
                {/* Hero */}
                <section className="pt-40 pb-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#b7791f] font-semibold mb-6">
                            About FocusForge
                        </p>

                        <div className="max-w-5xl">
                            <h1 className="heading-font text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                                Align within.
                                <br />
                                <span className="italic">
                                    Grow beyond.
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-2xl text-lg md:text-xl leading-8 text-black/50 dark:text-white/50 mt-10">
                            A space for self-discovery, inner alignment,
                            and becoming more intentional about the person
                            you are and the life you choose to live.
                        </p>
                    </div>
                </section>

                {/* Introduction */}
                <section className="px-6 pb-32">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f]">
                                The idea
                            </p>
                        </div>

                        <div className="lg:col-span-7 lg:col-start-6">
                            <p className="heading-font text-3xl md:text-4xl leading-tight mb-8">
                                FocusForge is a space dedicated to
                                understanding yourself, finding alignment,
                                and growing with intention.
                            </p>

                            <div className="space-y-5 text-base md:text-lg leading-8 text-black/60 dark:text-white/60">
                                <p>
                                    In a world that constantly encourages us
                                    to do more, achieve more, and become more,
                                    it is easy to lose connection with ourselves.
                                    We become caught up in expectations,
                                    distractions, and the pursuit of things
                                    that may not truly align with who we are.
                                </p>

                                <p>
                                    FocusForge exists to create space for a
                                    different kind of conversation. One that
                                    encourages us to pause, reflect, understand
                                    ourselves more deeply, and become more
                                    conscious of the lives we are building.
                                </p>

                                <p>
                                    Through thoughtful articles, reflections,
                                    and ideas, we explore inner alignment,
                                    self-development, and everything interesting
                                    in between. Because meaningful growth
                                    doesn't begin with changing everything
                                    around us. It begins within.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="border-y border-black/5 dark:border-white/5 px-6 py-28">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
                                    Our philosophy
                                </p>

                                <h2 className="heading-font text-5xl md:text-6xl leading-tight">
                                    Understand yourself.
                                    <br />
                                    <span className="italic">
                                        Become yourself.
                                    </span>
                                </h2>
                            </div>

                            <div className="lg:pt-12">
                                <p className="text-lg leading-8 text-black/60 dark:text-white/60 max-w-xl">
                                    We believe that lasting transformation
                                    begins with self-awareness. The more
                                    deeply we understand ourselves, the more
                                    consciously we can shape our decisions,
                                    relationships, habits, and direction.
                                </p>

                                <div className="mt-10 space-y-8">
                                    {/* Self-awareness */}
                                    <div className="border-l border-[#b7791f] pl-6">
                                        <h3 className="heading-font text-2xl mb-2">
                                            Self-awareness
                                        </h3>

                                        <p className="text-sm leading-7 text-black/50 dark:text-white/50">
                                            Understand your thoughts, emotions,
                                            patterns, motivations, and the
                                            beliefs that shape your identity.
                                        </p>
                                    </div>

                                    {/* Alignment */}
                                    <div className="border-l border-[#b7791f] pl-6">
                                        <h3 className="heading-font text-2xl mb-2">
                                            Alignment
                                        </h3>

                                        <p className="text-sm leading-7 text-black/50 dark:text-white/50">
                                            Build a life where your actions
                                            reflect your values, intentions,
                                            and the person you genuinely
                                            aspire to become.
                                        </p>
                                    </div>

                                    {/* Growth */}
                                    <div className="border-l border-[#b7791f] pl-6">
                                        <h3 className="heading-font text-2xl mb-2">
                                            Growth
                                        </h3>

                                        <p className="text-sm leading-7 text-black/50 dark:text-white/50">
                                            Embrace the continuous process
                                            of learning, evolving, confronting
                                            yourself, and becoming better
                                            without demanding perfection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="px-6 py-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
                                    Explore our content
                                </p>

                                <h2 className="heading-font text-5xl md:text-6xl">
                                    Three spaces.
                                    <br />
                                    <span className="italic">
                                        Endless possibilities.
                                    </span>
                                </h2>
                            </div>

                            <Link
                                to="/categories"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-medium
                                    hover:text-[#b7791f]
                                    transition-colors
                                "
                            >
                                Explore categories
                                <FiArrowRight size={17} />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {categories.map((item) => (
                                <Link
                                    key={item.number}
                                    to={`/categories?topic=${item.slug}`}
                                    className="
                                        group
                                        min-h-64
                                        p-7
                                        rounded-2xl
                                        border
                                        border-black/10
                                        dark:border-white/10
                                        flex
                                        flex-col
                                        justify-between
                                        hover:bg-[#171717]
                                        hover:text-white
                                        dark:hover:bg-[#f5f2ea]
                                        dark:hover:text-[#111111]
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs opacity-40">
                                            {item.number}
                                        </span>

                                        <FiArrowUpRight
                                            size={18}
                                            className="
                                                opacity-30
                                                group-hover:opacity-100
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                                transition-all
                                            "
                                        />
                                    </div>

                                    <div>
                                        <h3 className="heading-font text-2xl mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm leading-6 opacity-50">
                                            {item.text}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Editorial Statement */}
                <section className="bg-[#171717] text-[#f5f2ea] dark:bg-black px-6 py-32">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-8">
                            A simple belief
                        </p>

                        <blockquote className="heading-font text-4xl md:text-5xl lg:text-6xl leading-tight">
                            "The life you want to live begins with
                            understanding the person you are
                            and consciously choosing the person
                            you want to become."
                        </blockquote>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
                            Your journey begins here
                        </p>

                        <h2 className="heading-font text-5xl md:text-6xl leading-tight mb-7">
                            Become more
                            <br />
                            <span className="italic">
                                intentional.
                            </span>
                        </h2>

                        <p className="text-black/60 dark:text-white/60 max-w-xl mx-auto leading-7 mb-9">
                            Explore ideas that encourage reflection,
                            challenge your perspective, and help you
                            grow into a more conscious version of yourself.
                        </p>

                        <Link
                            to="/articles"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                px-7
                                py-4
                                rounded-full
                                bg-[#171717]
                                text-white
                                dark:bg-[#f5f2ea]
                                dark:text-[#111111]
                                font-medium
                                hover:gap-5
                                transition-all
                            "
                        >
                            Explore the articles
                            <FiArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
