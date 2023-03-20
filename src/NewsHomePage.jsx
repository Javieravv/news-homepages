import { NavBar, SectionMain, NewsPage, FooterNews  } from "./components/"

export const NewsHomePage = () => {
  return (
    <section className="container">
        <NavBar />
        <div>
            { /*Sección principal*/ }
            <div className="main-section">
                <SectionMain />
                <NewsPage />
                <FooterNews />
            </div>
        </div>
    </section>
  )
}
