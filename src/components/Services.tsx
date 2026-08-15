type CardProps = {
  title: string;
  text: string;
  img: string;
};

const Card = ({ title, text, img }: CardProps) => {
  return (
    <div
      className="
        relative
        rounded-[18px]
        overflow-hidden
        border border-white/10
        bg-[#0000]
        shadow-[inset_0_0_40px_rgba(0,0,0,0.65)]
      "
      style={{ height: "340px" }}
    >
      {/* TOP BACKGROUND IMAGE */}
<div className="relative w-full h-[72%] overflow-hidden flex items-center justify-center bg-black">
  <img
    src={img}
    className="max-w-full max-h-full object-contain"
  />

  {/* ÜST GRADİENT */}
  <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent pointer-events-none" />

  {/* ALT FADE */}
  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black via-black/70 to-transparent pointer-events-none" />
</div>

      {/* TEXT AREA */}
      <div className="px-6 pt-8">
        <h2 className="text-white text-[17px] font-light leading-tight mb-1">
          {title}
        </h2>

        <p className="text-white/70 text-[12px]">
          {text}
        </p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards: CardProps[] = [
    {
      title: "Manage your day with our note app.",
      text: "Never miss a task or idea again.",
      img: "https://framerusercontent.com/images/cwzp0bAskvny0SFl6KjmbTF5c.png?scale-down-to=1024&width=2080&height=1600",
    },
    {
      title: "You start your day without a clear plan.",
      text: "Everything feels urgent, and nothing gets done.",
      img: "https://framerusercontent.com/images/MRfxoi6b3x5LAQs36zE406ggD8.png?scale-down-to=1024&width=2080&height=1600",
    },
    {
      title: "You're constantly switching tools.",
      text: "Notes here, reminders there, it's all fragmented.",
      img: "https://framerusercontent.com/images/YWaTWAsAybB8oDh47UCZxIfaw.png?scale-down-to=1024&width=2080&height=1600",
    },
    {
      title: "Distractions kill your flow.",
      text: "One notification, and you're out of the zone.",
      img: "https://framerusercontent.com/images/IjLaYU5VYCVRUMrugAtUlJyRsgw.png?scale-down-to=1024&width=2080&height=1600",
    },
  ];

  return (
    <section className="w-full bg-black  px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-4">

        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 1 — %35 */}
          <div className="w-full md:w-[35%]">
            <Card {...cards[0]} />
          </div>

          {/* Card 2 — %65 */}
          <div className="w-full md:w-[65%]">
            <Card {...cards[1]} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Card 3 — %65 */}
          <div className="w-full md:w-[65%]">
            <Card {...cards[2]} />
          </div>

          {/* Card 4 — %35 */}
          <div className="w-full md:w-[35%]">
            <Card {...cards[3]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardGrid;
