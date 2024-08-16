// import type { Metadata } from "next";
// import "../../styles/globals.css";
// import { getStrapiMedia, getStrapiURL } from "@/lib/api-helpers";
// import { fetchAPI } from "@/lib/fetch-api";

// import Footer from "@/components/blog/Footer";
// import Navbar from "@/components/blog/Navbar";

// const FALLBACK_SEO = {
//   title: "Strapi Starter Next Blog",
//   description: "Strapi Starter Next Blog",
// }


// async function getGlobal(): Promise<any> {
//   const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

//   if (!token) throw new Error("The Strapi API Token environment variable is not set.");

//   const path = `/global`;
//   const options = { headers: { Authorization: `Bearer ${token}` } };

//   const urlParamsObject = {
//     populate: [
//       "metaData.metaTitle",
//       "favicon",
//       "navbar.links",
//       "navbar.navbarLogo.logoImg",
//       "footer.footerLogo.logoImg",
//       "footer.menuLinks",
//       "footer.legalLinks",
//       "footer.socialLinks",
//       "footer.categories",
//     ],
//   };

//   const response = await fetchAPI(path, urlParamsObject, options);
//   return response;
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const meta = await getGlobal();

//   if (!meta.data || !meta.data.attributes) return FALLBACK_SEO;

//   const { favicon } = meta.data.attributes;
//   const url = favicon?.data?.attributes?.url;

//   return {
//     title: meta.data.attributes.metaData?.metaTitle || FALLBACK_SEO.title,
//     description: meta.data.attributes.metaData?.metaDescription || FALLBACK_SEO.description,
//     icons: url ? {
//       icon: [new URL(url, getStrapiURL())],
//     } : undefined,
//   };
// }

// export default async function RootLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: { lang: string };
// }) {
//   const global = await getGlobal();
//   if (!global.data || !global.data.attributes) {
//     console.error("Global data is missing or malformed");
//     return <div>Error loading layout. Please try again later.</div>;
//   }

//   const { navbar, footer } = global.data.attributes;

//   const navbarLogoUrl = getStrapiMedia(
//     navbar.navbarLogo?.logoImg?.data?.attributes?.url
//   );
//   const footerLogoUrl = getStrapiMedia(
//     footer.footerLogo?.logoImg?.data?.attributes?.url
//   );

//   return (
//       <div>
//         <Navbar
//           links={navbar.links}
//           logoUrl={navbarLogoUrl}
//           logoText={navbar.navbarLogo?.logoText}
//         />
//         <main className="dark:bg-black dark:text-gray-100 min-h-screen">
//           {children}
//         </main>
//         <Footer
//           logoUrl={footerLogoUrl}
//           logoText={footer.footerLogo?.logoText}
//           menuLinks={footer.menuLinks}
//           categoryLinks={footer.categories?.data}
//           legalLinks={footer.legalLinks}
//           socialLinks={footer.socialLinks}
//         />
//       </div>
//   );
// }
export default function layout({children} : {children: React.ReactNode}) {
  return (
    <div>{children}</div>
  )
}
