import Icon from "./footer/Icon"
import H2 from "./footer/H2"
import logoImg from "../assets/images/logo.svg"
import LinkIcon from "./footer/LinkIcon"
import Link from "./footer/Link"
import Appstore from "../assets/images/Appstore.png"


const Footer = () => {
    return (
        <footer>
          <div className="footer">
          <section className="logo">
                <img src={logoImg} alt="" />
                <p>Le plus grand marché publique en ligne de Guinée</p>
                <Icon/>
            </section>
            <section className="contact">
                <H2 text="Contact"/>
                <LinkIcon icon={0} text="République de Guinée Conakry, Yattaya-Fossidet"/>
                <LinkIcon icon={1} text="+224 666 66 66 66"/>
                <LinkIcon icon={2} text="support@makitiplus.com"/>
            </section>
            <section className="service">
                <H2 text="Service"/>
                <Link text="Aide et Support"/>
                <Link text="Aide et Support"/>
                <Link text="Aide et Support"/>
                <Link text="Aide et Support"/>
            </section>
            <section className="Liens-rapides">
                <H2 text="Liens Rapides"/>
                <Link text="Aide et Support"/>
                <Link text="Aide et Support"/>
                <Link text="Aide et Support"/>
                <Link text="Aide et Support"/>
            </section>
            <section className="apps">
                <H2 text="L’Application Makiti+"/>
                <div className="images">
                    <img src={Appstore} alt="" />
                    <img src={Appstore} alt="" />
                </div>
            </section>
            
          </div>
          <div className="copyright">
              <hr />
              <p>© 2021 Makitiplus SAS. Tous droits réservés.</p>
          </div>
        </footer>
    )
}

export default Footer
