import { CardNews } from "./CardNews"

export const FooterNews = () => {
  return (
    <footer className="footer-news">
        <CardNews 
            img = './assets/images/image-retro-pcs.jpg'
            consecutivo = "01"
            title = "Reviving Retro Pcs"
            paragraph = "What happens when old PCs are given modern upgrades?"
        />
        <CardNews 
            img = './assets/images/image-top-laptops.jpg'
            consecutivo = "02"
            title = "Top 10 Laptops of 2022"
            paragraph = "Our best picks for various needs and budgets."
        />
        <CardNews 
            img = './assets/images/image-gaming-growth.jpg'
            consecutivo = "03"
            title = "The Growth of Gaming"
            paragraph = "How the pandemic has sparked fresh opportunities."
        />
    </footer>
  )
}
