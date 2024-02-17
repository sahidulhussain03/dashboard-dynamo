This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# dashboard-dynamo
    Features in this application.
    🤯 Multivendor B2B2B Saas
    🏢 Agency and Sub accounts
    🌐 Unlimited funnel hosting
    🚀 Full Website & Funnel builder
    💻 Role-based Access
    🔄 Stripe Subscription plans
    🛒Stripe add-on products
    🔐 Connect Stripe accounts for all users! - Stripe Connect
    💳 Charge application fee per sale and recurring sales
    💰 Custom Dashboards
    📊 Media Storage
    📈 Stripe Product Sync
    📌Custom checkouts on funnels
    📢 Get leads from funnels
    🎨 Khanban board
    📂 Project management system
    🔗 Notifications
    📆 Funnel performance metrics
    🧾 Agency and subacc metrics
    🌙 Graphs and charts
    ☀️ Light & Dark mode
    📄 Functioning landing page

# Project Setup
  ## Bun: 
    It is a javascript runtime, package manager, test runner bundler built from scratch. 
    For more detail visit: https://bun.sh/

    ### Build an app with Next.js and Bun
        # bun create next-app .
    
  ## uploadthing: 
    File Uploads For Next.js Developers. UploadThing is the easiest way to add file uploads to your full stack TypeScript application. 
    For more detail visit: https://uploadthing.com/

    ```bash
        bun add uploadthing @uploadthing/react
    ```
    Also, refer to doc to make changes in the tailwind.config.ts

  ## shadcn/ui: 
    Beautifully designed components that you can copy and paste into your apps.
    This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.
    For more detail visit: https://ui.shadcn.com/docs

    ```bash
        npx shadcn-ui@latest init
    ```
  ## clerk: 
    Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.
    For more detail visit: https://clerk.com/

    # install themes
        ```bash
            npm install @clerk/themes
            npm install @clerk/nextjs
        ```
  ## prisma: 
    Prisma is a next-generation ORM that makes working with databases easy for application developers.
    For more detail visit: https://bun.sh/guides/ecosystem/prisma

    # install prisma
        ```bash
            bun add -d prisma
            bun add @prisma/client
            bunx prisma init --datasource-provider mysql

            bunx prisma generate
            bunx prisma db push

            bunx prisma studio
        ```
  ## tremor: 
    Tremor is a react components to build charts and dashboards.
    For more detail visit: https://www.tremor.so/

    # install tremor
        ```bash
            npm i @tremor/react
            bun add @tremor/react --using bun
        ```
  ## uuid:
    # install uuid
      ```bash
          bun add uuid
          bun add @types/uuid
      ```
    