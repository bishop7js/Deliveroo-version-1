import React, { useState, useRef, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { showFoodItems } from "../../actions";
import MenuListSection from "./MenuListSection";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

const tabItemStyle = {
  color: "#00CCBC",
  fontSize: "14px",
  fontFamily: "plex-sans,sans-serif",
  textTransform: "none",
};

const tabSelectedStyle = {
  "&.Mui-selected": {
    fontWeight: "bolder",
  },
};

const MenuListScreen = (props) => {
  const { foods } = props;

  useEffect(() => {
    props.showFoodItems();
  }, []);

  const TopNavigationBarAndItemList = () => {
    const [activeTab, setActiveTab] = useState(0);
    const contentRefs = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
    ];

    const handleTabChange = (event, newValue) => {
      setActiveTab(newValue);
      contentRefs[newValue].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const renderBasket = () => {
      return (
        <Card sx={{ minWidth: 275, padding: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: "16px" }}>
              <ShoppingBagOutlinedIcon
                style={{ width: "48px", height: "48px", color: "#ABADAD" }}
              />
            </div>
            <div
              style={{
                fontFamily: "plex-sans,sans-serif",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#abadad",
                marginTop: "4px",
                marginBottom: "24px",
              }}
            >
              Your basket is empty
            </div>
            <div>
              <Button style={{ width: "455px" }} variant="contained" disabled>
                <div
                  style={{
                    color: "#abadad",
                    fontFamily: "plex-sans-bold,sans-serif",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  Go to checkout
                </div>
              </Button>
            </div>
          </div>
        </Card>
      );
    };

    const renderMenuList = () => {
      if (foods.length > 0) {
        return foods?.map((food) => {
          return (
            <div ref={contentRefs[food.id]}>
              <div
                style={{
                  fontFamily: "plex-sans-bold, sans-serif",
                  fontSize: "22px",
                  fontWeight: "700px",
                  color: "#2e3333",
                  marginBottom: "24px",
                }}
              >
                {food.title}
              </div>
              <MenuListSection items={food.items} />
            </div>
          );
        });
      } else {
        return null;
      }
    };

    return (
      <div>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            backgroundColor: "#ffffff",
            position: "sticky",
            top: 85,
            zIndex: 1,
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab sx={tabSelectedStyle} label="Bundles" style={tabItemStyle} />
          <Tab sx={tabSelectedStyle} label="Salads" style={tabItemStyle} />
          <Tab
            sx={tabSelectedStyle}
            label="Hot Power Bowls"
            style={tabItemStyle}
          />
          <Tab sx={tabSelectedStyle} label="Vegan Menu" style={tabItemStyle} />
          <Tab
            sx={tabSelectedStyle}
            label="Rainbow Wraps"
            style={tabItemStyle}
          />
          <Tab
            sx={tabSelectedStyle}
            label="Snack & Slides"
            style={tabItemStyle}
          />
          <Tab
            sx={tabSelectedStyle}
            label="Smoothies, Shake & Juice"
            style={tabItemStyle}
          />
          <Tab sx={tabSelectedStyle} label="Cold Drinks" style={tabItemStyle} />
          <Tab
            sx={tabSelectedStyle}
            label="Yoghurt & Fruit"
            style={tabItemStyle}
          />
        </Tabs>
        <div
          style={{
            backgroundColor: "#F9FAFA",
            paddingInline: "32px",
            paddingBottom: "64px",
          }}
        >
          <div style={{ paddingTop: "32px" }}>
            <div
              className="menu-list-items"
              // style={{
              //   display: "flex",
              //   flexDirection: "row",
              //   justifyContent: "space-between",
              // }}
            >
              <div
                style={{
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "19px",
                    fontFamily: "plex-sans,sans-serif",
                    marginBottom: "32px",
                  }}
                >
                  Adults need around 2000 kcal a day
                </div>
                {renderMenuList()}
              </div>
              <div
                className="basket"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "sticky",
                  top: 180,
                  marginLeft: "16px",
                }}
              >
                {renderBasket()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSearchBar = () => {
    return (
      <div>
        <Paper
          style={{
            backgroundColor: "#F5F5F5",
            boxShadow: "none",
            border: "1px solid #e8ebeb",
          }}
          className="search-bar"
          component="form"
        >
          <IconButton
            type="button"
            //sx={{ p: "10px"}}
            aria-label="search"
          >
            <SearchIcon className="serachbar-icon-button" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, outline: "none" }}
            placeholder="Search Tossed - St Martin's Lane"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div>
    );
  };

  return (
    <div>
      <div>{TopNavigationBarAndItemList()}</div>
      <div
        style={{
          position: "fixed",
          top: 13,
          left: 260,
          zIndex: 1,
        }}
      >
        {renderSearchBar()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    foods: state.foods,
  };
};

export default connect(mapStateToProps, { showFoodItems })(MenuListScreen);
