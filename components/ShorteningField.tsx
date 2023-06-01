import ShortenedUrlCard from "./ShortenedUrlCard";

function ShorteningField() {
  const shortenUrl = async (search: string) => {
    "use server";

    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${search}`);

    if (!res.ok) return undefined;

    const shortenedUrl = await res.json();

    const urlResponse = shortenedUrl.result.short_link;

    console.log("Short URL: " + urlResponse);

    return urlResponse;
  };

  return <ShortenedUrlCard search={shortenUrl} />;
}

export default ShorteningField;
