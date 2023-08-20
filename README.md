# Qode Assessment

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) latest version
- Install [Next](https://nextjs.org/docs/getting-started/installation) latest version
- Install [TypeScript](https://www.typescriptlang.org/download) latest version

# Getting started

- Clone the repository

```
git clone  <git lab template url> <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

- Build and run the project

## Project Structure

The folder structure of this app is explained below:

| Name                        | Description                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------- |
| **node_modules**            | Contains all npm dependencies                                                          |
| **package json**            | Contains all the info related to the project setup and any packages that are installed |
| **page.tsx**                     | The main file where the project is running                                             |
| **components/photoUploader** | Contains the Image upload Logic.                                                           |
| **components/PhotoWithComments**  | Photo Display and Comments add logic here.                                                  |

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| `start`    | Runs full build and runs node on dist/index.js. Can be invoked with `npm run dev` |
| `lint`     | Runs build and run tests using jest. Can be invoked with `npm lint`         |

## Deployed

This project is deployed in vercel.
Here is the link:
```
https://qcode-six.vercel.app/
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
