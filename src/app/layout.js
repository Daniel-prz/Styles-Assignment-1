import "./SCSS/styles.css";

export const metadata = {
  title: "Style Assignment 1",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
