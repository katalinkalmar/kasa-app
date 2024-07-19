import logoFooter from "../../assets/LOGO_Footer.svg"

export default function Footer() {
    return (
        <div className="FooterBox">
            <img src={logoFooter} alt="logo footer" />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </div>
    )
}