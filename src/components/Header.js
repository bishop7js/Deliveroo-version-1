import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { loadGapiInsideDOM } from "gapi-script";
import { connect } from "react-redux";
import { signOut, signIn } from "../actions";
import { ReactComponent as Deliveroo } from "../media/deliveroo.svg";
import { HomeOutlined, Menu } from "@mui/icons-material";
import "./style.css";

const LoginButtonStyles = {
  marginTop: "16px",
  transitionProperty: "box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease-out",
  borderRadius: "4px",
  height: "40px",
  width: "100%",
  //width: 185,
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

const Header = (props) => {

  const renderLeftSideItems = () => {
    return (
      <div style={{ position: "relative", bottom: 8 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="80"
          viewBox="0 0 300 80"
          style={{ transform: "scale(0.4)" }}
        >
          <Deliveroo />
        </svg>
      </div>
    );
  };

  const renderAuthButtons = () => {
    if (props.auth.isSignedIn === null || props.auth.isSignedIn === undefined) {
      return (
        <div className="menu-screen-login-button">
          <Button
            onClick={() => (window.location.href = "/")}
            startIcon={<HomeOutlined style={{ color: "#00CCBC" }} />}
            style={LoginButtonStyles}
            variant="outlined"
          >
            Sign up or log in
          </Button>
        </div>
      );
    } else {
      if (props.auth.isSignedIn === true) {
        return (
          <div style={{ marginRight: 8 }}>
            <Button
              onClick={() => {
                window.gapi.auth2.getAuthInstance().signOut();
                // .then(() => googleAuthenticationInitiate());
                props.signOut();
              }}
              startIcon={<HomeOutlined style={{ color: "#00CCBC" }} />}
              style={LoginButtonStyles}
              variant="outlined"
            >
              Sign out
            </Button>
          </div>
        );
      } else {
        return (
          <div className="login-screen-login-button">
            <Button
              startIcon={<HomeOutlined style={{ color: "#00CCBC" }} />}
              style={LoginButtonStyles}
              variant="outlined"
            >
              Sign up or log in
            </Button>
          </div>
        );
      }
    }
  };

  const renderRightSideItems = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: 32,
        }}
      >
        {renderAuthButtons()}
        <div>
          <Button
            startIcon={<Menu style={{ color: "#00CCBC" }} />}
            style={LoginButtonStyles}
            variant="outlined"
          >
            Menu
          </Button>
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
        width: "100%",
        height: "100%",
        position: "sticky",
        zIndex: 1,
        top: 0,
        borderBottom: "1px solid #E8EBEB",
        backgroundColor: "#ffffff",
        //zIndex: 2
      }}
    >
      <div>{renderLeftSideItems()}</div>
      <div>{renderRightSideItems()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(Header);
