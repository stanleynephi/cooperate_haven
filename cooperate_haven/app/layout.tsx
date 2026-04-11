/**import css styling */
import Footer from "./components/footer"
import Header from "./components/header"
import "./components/ui/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
