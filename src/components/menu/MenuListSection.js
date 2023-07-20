import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import ImageList from "@mui/material/ImageList";
import CardMedia from "@mui/material/CardMedia";
import FoodImage from "../../media/food.jpg";
import "./styles.css";

const MenuListSection = (props) => {
  const [col, setCols] = useState(3);

  const { items } = props;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 815) {
        setCols(1);
      } else {
        setCols(2);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderFoodsItemList = () => {
    return items?.map((item) => {
      return (
        <div>
          <Card
            className="menu-list-item-card"
            // sx={{
            //   display: "flex",
            //   paddingInline: "12px",
            //   paddingTop: "24px",
            //   paddingBottom: "24px",
            //   marginTop: "8px",
            //   marginBottom: "8px",
            //   marginRight: "12px",
            //   width: "343px",
            //   outline: "none",
            //   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            // }}
          >
            <div>
              <div
                style={{
                  fontFamily: "plex-sans-bold, sans-serif",
                  fontSize: "16px",
                }}
              >
                {item.name}
              </div>
              <div style={{}}>
                {item.description.length > 70 ? (
                  <div
                    style={{
                      color: "#585c5c",
                      fontSize: 14,
                      fontFamily: "plex-sans,sans-serif",
                      marginTop: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    {item.description.substring(0, 60 - 3) + "..."}
                  </div>
                ) : (
                  <div
                    style={{
                      color: "#585c5c",
                      fontSize: 14,
                      fontFamily: "plex-sans,sans-serif",
                      marginTop: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>
              <div
                style={{
                  color: "#585c5c",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  fontFamily: "plex-sans, sans-serif",
                  fontSize: "16px",
                  marginBottom: "4px",
                }}
              >
                {item.cal}
              </div>
              <div
                style={{
                  color: "#585c5c",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  fontFamily: "plex-sans, sans-serif",
                  fontSize: "16px",
                }}
              >
                <div>{item.price}</div>
                {item.popular ? (
                  <div style={{ marginLeft: "4px", color: "#E87452" }}>
                    . Popular
                  </div>
                ) : null}
              </div>
            </div>
            <CardMedia
              component="img"
              sx={{
                width: 103,
                height: 103,
                borderRadius: 1,
                paddingLeft: "32px",
              }}
              image={item.imageUrl}
              alt="Image"
            />
          </Card>
        </div>
      );
    });
  };

  return (
    <div style={{ marginBottom: "32px" }}>
      <ImageList style={{ overflow: "hidden" }} cols={col}>
        {renderFoodsItemList()}
      </ImageList>
    </div>
  );
};

export default MenuListSection;
