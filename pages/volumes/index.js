import Link from "next/link";
import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

const StyledMain = styled.main`
  max-width: 30rem;
  margin: 0 auto;
`;

const StyledHeadline1 = styled.h1`
  font: var(--font-headline-1);
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  justify-content: space-evenly;
`;

const StyledLink = styled.a`
  color: var(---color-smoke);
  text-decoration: none;
`;

export default function OverviewPage() {
  const router = useRouter();

  function handleSubmit() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <StyledMain>
      <StyledHeadline1>Lord of the Rings</StyledHeadline1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <StyledList>
        {volumes.map(({ slug, title, cover }) => (
          <li key={slug}>
            <StyledLink href={`/volumes/${slug}`}>
              <figure>
                <Image
                  src={cover}
                  height={164}
                  width={100}
                  alt={`Book cover: ${title}`}
                />
                <figcaption>
                  {title}
                </figcaption>
              </figure>
            </StyledLink>
          </li>
        ))}
      </StyledList>
      <button onClick={handleSubmit}>Go to a random volume</button>
    </StyledMain>
  );
}
