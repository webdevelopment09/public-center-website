import "./globals.css";
import Navbar from "@/components/Navbar";
import { Noto_Sans_Georgian, Playfair_Display } from "next/font/google";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian", "latin"],
  variable: "--font-main",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN-HERE.ge"),
  title: {
    default: "მრავალფუნქციური საზოგადოებრივი ცენტრი | თბილისი",
    template: "%s | მრავალფუნქციური საზოგადოებრივი ცენტრი",
  },
  description:
    "მრავალფუნქციური საზოგადოებრივი ცენტრი თბილისში — სპორტული სივრცეები, ფილიალები, სერვისები და აქტიური ცხოვრების შესაძლებლობები.",
  keywords: [
    "მრავალფუნქციური საზოგადოებრივი ცენტრი",
    "სპორტული ცენტრი თბილისი",
    "ფეხბურთი თბილისი",
    "კალათბურთი თბილისი",
    "ცურვა თბილისი",
    "სატრენაჟორო დარბაზი თბილისი",
    "ჩოგბურთი თბილისი",
    "პადელი თბილისი",
    "სკეიტ პარკი თბილისი",
  ],
  openGraph: {
    title: "მრავალფუნქციური საზოგადოებრივი ცენტრი | თბილისი",
    description:
      "თანამედროვე სპორტული და საზოგადოებრივი სივრცე თბილისში აქტიური ცხოვრების სტილისთვის.",
    url: "https://YOUR-DOMAIN-HERE.ge",
    siteName: "მრავალფუნქციური საზოგადოებრივი ცენტრი",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "მრავალფუნქციური საზოგადოებრივი ცენტრი თბილისში",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "მრავალფუნქციური საზოგადოებრივი ცენტრი | თბილისი",
    description:
      "სპორტული სივრცეები, ფილიალები და სერვისები თბილისში.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ka"
      data-scroll-behavior="smooth"
      className={`${notoGeorgian.variable} ${playfair.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}