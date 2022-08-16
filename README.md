This project is built on [Next.js](https://nextjs.org/) and a response to QSHOP frontend assessment.

## Functionalities it meet 
[the functionality is subjected to change or addition without notice]
-  A landing page showing the categories in navbar.
   A categories functionality listing the various products under that category
- A product detail page showing the details of the product: this is on the landing page
- Used Context API to build in a simple cart functionality that 
  - Add product to Cart
  - Delete from Card
  - Display cart
 - mobile responsive
 - server side rendered: If you reload the specific shop page, details remain intact.

Fake API is used as the backend service. 
Initially, I created a [simpler async fake api from a json](https://github.com/kelvinsekx/black-and-white-store/blob/main/utils/util.ts) that works as fine as FakeAPI and meets the required functionalities of asynchronous operation.

See how it works below: ** fake API is now used instead of an async JSON service.**
![shopper](https://user-images.githubusercontent.com/51183064/184626123-41371c79-8042-41fb-bad6-b828e643aa10.gif)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# black-and-white-store
