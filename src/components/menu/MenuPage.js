import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { ArrowBack, InfoOutlined } from "@mui/icons-material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import StarIcon from "@mui/icons-material/Star";
import FoodImage from "../../media/food.jpg";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuListScreen from "./MenuListScreen";
import "./styles.css";

const GropOrderButtonStyles = {
  //marginTop: "16px",
  transitionProperty: "box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease-out",
  borderRadius: "4px",
  height: "40px",
  width: "100%",
  width: 200,
  fontSize: "16px",
  //fontWeight: "700",
  textTransform: "none",
  fontFamily: "plex-sans,sans-serif",
  color: "#000000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  outline: "none",
  cursor: "pointer",
  border: "1px solid #E8EBEB",
};

const MenuPage = () => {
  const renderBackButton = () => {
    return (
      <div>
        <Button
          style={{ textTransform: "none", color: "#00C2B3" }}
          startIcon={<ArrowBack />}
          size="large"
        >
          Back
        </Button>
      </div>
    );
  };

  const renderImageButton = () => {
    return (
      <div className="button-on-image">
        <Button
          startIcon={<PeopleOutlinedIcon style={{ color: "#00CCBC" }} />}
          style={GropOrderButtonStyles}
          variant="outlined"
        >
          Start group order
        </Button>
      </div>
    );
  };

  const renderTopCardSection = () => {
    return (
      <Card sx={{ display: "flex", boxShadow: "none" }}>
        {renderImageButton()}
        <CardMedia
          component="img"
          sx={{
            width: 370,
            height: 250,
            borderRadius: 1,
            paddingLeft: "32px",
          }}
          image={FoodImage}
        />
        <div
          className="menu-page-top-section"
          // style={{
          //   width: "100%",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "space-between",
          //   backgroundColor: "blue",
          // }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "space-between",
            }}
          >
            <div style={{ paddingInline: "24px" }}>
              <div
                style={{
                  fontFamily: "Stratos",
                  fontSize: "40px",
                  fontWeight: 800,
                }}
              >
                Tossed - St Martin's Lane
              </div>
              <div
                style={{
                  marginTop: "16px",
                  marginBottom: "12px",
                  fontSize: "16px",
                  fontFamily: "plex-sans,sans-serif",
                  fontWeight: 400,
                }}
              >
                Chicken · Salads · Healthy
              </div>
              <div
                style={{
                  marginTop: "16px",
                  marginBottom: "12px",
                  fontSize: "16px",
                  fontFamily: "plex-sans,sans-serif",
                  fontWeight: 400,
                  color: "#585c5c",
                }}
              >
                0.20 miles away · Opens at 11:00 · £0.99 delivery · £7.00
                minimum
              </div>
              <div>
                <Button
                  style={{ textTransform: "none", color: "#ABADAD" }}
                  startIcon={<InfoOutlined />}
                  endIcon={
                    <ArrowForwardIosOutlinedIcon style={{ color: "#00C2B3" }} />
                  }
                  size="large"
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        color: "#000000",
                        fontSize: "16px",
                        fontFamily: "plex-sans,sans-serif",
                        lineHeight: "22px",
                      }}
                    >
                      Info
                    </div>
                    <div
                      style={{
                        color: "#585c5c",
                        fontSize: 14,
                        fontFamily: "plex-sans,sans-serif",
                      }}
                    >
                      Map, allergens and hygiene rating
                    </div>
                  </div>
                </Button>
              </div>
              <div>
                <Button
                  style={{ textTransform: "none" }}
                  startIcon={<StarIcon style={{ color: "#4D7C1B" }} />}
                  endIcon={
                    <ArrowForwardIosOutlinedIcon style={{ color: "#00C2B3" }} />
                  }
                  size="large"
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        color: "#4D7C1B",
                        fontSize: "16px",
                        fontFamily: "plex-sans,sans-serif",
                        lineHeight: "22px",
                      }}
                    >
                      4.6 Excellent
                    </div>
                    <div
                      style={{
                        color: "#585c5c",
                        fontSize: 14,
                        fontFamily: "plex-sans,sans-serif",
                      }}
                    >
                      See all 500 reviews
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   marginLeft: 50
          // }}
          >
            <Button
              style={{ textTransform: "none", marginLeft: 24 }}
              startIcon={<DirectionsBikeIcon style={{ color: "#00C2B3" }} />}
              endIcon={
                <div
                  style={{
                    color: "#00C2B3",
                    fontSize: "16px",
                    fontFamily: "plex-sans,sans-serif",
                    lineHeight: "22px",
                  }}
                >
                  Change
                </div>
              }
              size="large"
            >
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "plex-sans,sans-serif",
                  lineHeight: "22px",
                  color: "#2E3333",
                }}
              >
                Deliver
              </div>
            </Button>
            <div className="start-group-oredr-button">
              <Button
                startIcon={<PeopleOutlinedIcon style={{ color: "#00CCBC" }} />}
                style={GropOrderButtonStyles}
                variant="outlined"
              >
                Start group order
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div>
      <div style={{ paddingInline: "32px" }}>{renderBackButton()}</div>
      <div
        style={{
          paddingTop: "8px",
          paddingBottom: "32px",
          paddingRight: "32px",
          borderBottom: "1px solid #E8EBEB",
        }}
      >
        {renderTopCardSection()}
      </div>
      <div>
        <MenuListScreen />
      </div>
    </div>
  );
};

export default MenuPage;
