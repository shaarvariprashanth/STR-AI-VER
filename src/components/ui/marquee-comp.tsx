import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const platforms = [
  {
    name: "LeetCode",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    url: "https://leetcode.com",
  },
  {
    name: "GeeksforGeeks",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    url: "https://www.geeksforgeeks.org",
  },
  {
    name: "HackerRank",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    url: "https://www.hackerrank.com",
  },
  {
    name: "Codeforces",
    img: "https://sta.codeforces.com/s/73599/images/codeforces-sponsored-by-ton.png",
    url: "https://codeforces.com",
  },
  {
    name: "CodeChef",
    img: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg",
    url: "https://www.codechef.com",
  },
  {
    name: "AtCoder",
    img: "https://img.atcoder.jp/assets/icon/atcoder.png",
    url: "https://atcoder.jp",
  },
  {
    name: "SPOJ",
    img: "https://static.e-olymp.com/content/fd/fdf013cf0b9ef65e61efed51e78ffbce5983a58f.png",
    url: "https://www.spoj.com",
  },
  {
    name: "InterviewBit",
    img: "https://assets.interviewbit.com/assets/logo.png",
    url: "https://www.interviewbit.com",
  },
  {
    name: "CS50",
    img: "https://cs50.harvard.edu/images/logo-cs50.png",
    url: "https://cs50.harvard.edu",
  },
  {
    name: "Exercism",
    img: "https://exercism.org/images/logo.svg",
    url: "https://exercism.org",
  },
  {
    name: "TopCoder",
    img: "https://www.topcoder.com/wp-content/uploads/2020/04/topcoder-logo.png",
    url: "https://www.topcoder.com",
  },
  {
    name: "BinarySearch",
    img: "https://binarysearch.com/favicon.ico",
    url: "https://binarysearch.com",
  },
];

const firstRow = platforms.slice(0, platforms.length / 2);
const secondRow = platforms.slice(platforms.length / 2);

const PlatformCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "bg-slate-950 border border-slate-800 text-white",
        "transition duration-300 ease-in-out hover:bg-gray-700"
      )}
    >
      <div className="flex items-center gap-4">
        <img
          className="bg-white p-1 object-contain rounded"
          width="40"
          height="60"
          alt={name}
          src={img}
        />
        <figcaption className="text-lg font-semibold pl-5">{name}</figcaption>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((platform) => (
          <a
            href={platform.url}
            key={platform.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlatformCard {...platform} />
          </a>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((platform) => (
          <a
            href={platform.url}
            key={platform.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlatformCard {...platform} />
          </a>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
