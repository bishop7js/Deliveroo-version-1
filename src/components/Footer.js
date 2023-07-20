import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Data from "../data/FootaData.json";
import Appstore from "../media/App stores.png";
import PlayStore from "../media/play store.png";
import { FacebookRounded, Twitter, Instagram } from "@mui/icons-material";

const FooterCardTitleStyle = {
  fontFamily: "plex-sans, sans-serif",
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "700",
};

const FooterCardContentStyle = {
  fontFamily: "plex-sans, sans-serif",
  fontSize: "14px",
  lineHeight: "29px",
};

const Footer = () => {
  const CardSection = () => {
    const renderCardSubItems = (footer) => {
      const { items } = footer;

      if (items.length > 0) {
        return items.map((item) => {
          return <div style={FooterCardContentStyle}>{item}</div>;
        });
      } else {
        return (
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
            <img
              src={Appstore}
              alt="Description of the image"
              style={{ width: 135, height: 38 }}
            />
            <img
              src={PlayStore}
              width={135}
              height={38}
              alt="Description of the image"
              style={{ width: 135, height: 38, marginTop: "8px" }}
            />
          </div>
        );
      }
    };

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {Data.footerData.map((footer) => (
          <Card
            key={footer.id}
            style={{
              backgroundColor: "#434848",
              width: "268px",
              flexBasis: "268px",
              flexGrow: 1,
              margin: "16px",
            }}
          >
            <CardContent>
              <Typography
                style={FooterCardTitleStyle}
                sx={{ fontSize: 20, color: "#ffffff", marginBottom: "8px" }}
              >
                {footer.title}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#ffffff" }}>
                {renderCardSubItems(footer)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const BottomSection = () => {
    const renderSocialMediaSection = () => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginRight: "16px" }}>
            <FacebookRounded style={{ color: "#ffffff" }} />
          </div>
          <div style={{ marginRight: "16px" }}>
            <Twitter style={{ color: "#ffffff" }} />
          </div>
          <div>
            <Instagram style={{ color: "#ffffff" }} />
          </div>
        </div>
      );
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>{renderSocialMediaSection()}</div>
        <div
          style={{
            fontSize: "14px",
            fontFamily: "plex-sans, sans-serif",
            color: "#585C5C",
          }}
        >
          © 2023 Deliveroo
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        paddingTop: "24px",
        paddingBottom: "24px",
        paddingInline: "54px",
        // marginTop: "64px",
        backgroundColor: "#2E3333",
      }}
    >
      <div style={{ marginBottom: "24px" }}>{CardSection()}</div>
      <div>{BottomSection()}</div>
    </div>
  );
};

export default Footer;
