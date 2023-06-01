# Frontend Mentor - Shortly URL shortening API landing page solution

This is a solution to the [Shortly URL shortening API landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Learnings](#learnings)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
- The `input` field is empty

### Links
- Live Site URL: [url-shortening-m9ic18wkh-brandtrump.vercel.app](url-shortening-m9ic18wkh-brandtrump.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- [React](https://reactjs.org/) - JS library
- [Next.js 13.4](https://nextjs.org/docs/getting-started) - React framework

### Learnings

- Next.js 13.4 server actions: (https://nextjs.org/blog/next-13-4#server-actions-alpha).

```js
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
```

### Useful resources

- [Server Actions: NextJS 13.4's Best New Feature](https://www.youtube.com/watch?v=czvSZqnpTHs&t=887s) - This helped me understand server actions. I really liked server actions for forms and will use it in future projects.

## Author

- Website - Brandon Trump (https://brandontrump.dev/)
