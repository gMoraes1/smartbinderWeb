import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  FooterTitle,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

 return (
  <>
    <FooterSection>
      <Container>
        <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={12}>
            <Language>{t("Contato")}</Language>
            <Large href="/">{t("Sessões de perguntas")}</Large>
            <Para>
              {t(`Você tem alguma pergunta? Sinta-se a vontade para mandar um email.`)}
            </Para>
            <a href="mailto:l.qqbadze@gmail.com">
            </a>
          </Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Title>{t("Equipe")}</Title>
            <Large href="https://github.com/gMoraes1" target="blank">{t("Gustavo Moraes")}</Large>
            <Large href="https://github.com/vitorhaoliveira"target="blank">{t("Vitor Hugo")}</Large>
            <Large href="https://github.com/marcs13013"target="blank">{t("Marcus Vinicius")}</Large>
            <Large href="https://github.com/FernandoAquinoPinheiro "target="blank">{t("Fernando Aquino")}</Large>
            <Large href="https://github.com/DorianGrayBolado38"target="blank">{t("Lucas Moraes")}</Large>
            <Large href="https://github.com/HeitorBalero"target="blank">{t("Heitor Balero")}</Large>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={12}>
            <Empty />
            <Language>{t("Endereço")}</Language>
            <Para>Etec de Guarulhos</Para>
            <Para> R. Cristóbal Cláudio Elilo, 88 - Parque Cecap, Guarulhos - SP, 07190-065 </Para>
            <Para>Brasil</Para>
          </Col>
        </Row>
      </Container>
    </FooterSection>
    <Extra>
      <Container border={true}>
        <Row
          justify="space-between"
          align="middle"
          
          style={{ paddingTop: "3rem" }}
        >
          <NavLink to="/">
            <LogoContainer>
            <FooterTitle>Site desenvolvido pela equipe SmartBinder. Todos os direitos reservados 2024.</FooterTitle>    
            </LogoContainer>
          </NavLink>
          <FooterContainer>
        
          </FooterContainer>
        </Row>
      </Container>
    </Extra>
  </>
);
};

export default withTranslation()(Footer);
