import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { loadGapiInsideDOM } from "gapi-script";
import Button from "@mui/material/Button";
import {
  FacebookRounded,
  Apple,
  MailOutlineOutlined,
} from "@mui/icons-material";
import { ReactComponent as GoogleIcon } from "../media/google.svg";

const FacebookButtonStyles = {
  marginTop: 24,
  transitionProperty: "box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease-out",
  borderRadius: "4px",
  height: "48px",
  width: "100%",
  width: 400,
  fontSize: "16px",
  fontWeight: "700",
  textTransform: "none",
  fontFamily: "plex-sans,sans-serif",
  backgroundColor: "#4c69ba",
  border: "none",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  outline: "none",
  cursor: "pointer",
};

const GoogleButtonStyles = {
  marginTop: "16px",
  transitionProperty: "box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease-out",
  borderRadius: "4px",
  height: "48px",
  width: "100%",
  width: 400,
  fontSize: "16px",
  fontWeight: "700",
  textTransform: "none",
  fontFamily: "plex-sans,sans-serif",
  color: "#000000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  outline: "none",
  cursor: "pointer",
  border: "1px solid #A3AFAF",
};

const AppleButtonStyles = {
  marginTop: 16,
  transitionProperty: "box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease-out",
  borderRadius: "4px",
  height: "48px",
  width: "100%",
  width: 400,
  fontSize: "16px",
  fontWeight: "700",
  textTransform: "none",
  fontFamily: "plex-sans,sans-serif",
  backgroundColor: "#000000",
  border: "none",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  outline: "none",
  cursor: "pointer",
};

const EmailButtonStyles = {
  transitionProperty: "box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease-out",
  borderRadius: "4px",
  height: "48px",
  width: "100%",
  width: 400,
  fontSize: "16px",
  fontWeight: "700",
  textTransform: "none",
  fontFamily: "plex-sans,sans-serif",
  backgroundColor: "#00CCBC",
  border: "none",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  outline: "none",
  cursor: "pointer",
};

const LoginScreen = (props) => {
  const googleAuthenticationInitiate = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "344427400991-iqji0l73u6l62rhtmga1vpatcopq09mj.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          getFirstAuthInstance(
            window.gapi.auth2.getAuthInstance().isSignedIn.get()
          );
        });
    });
  };

  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();

    googleAuthenticationInitiate();
  }, []);

  const getFirstAuthInstance = (isSignedIn) => {
    if (isSignedIn) {
      props.signIn(
        window.gapi.auth2.getAuthInstance().currentUser.get().getId()
      );
    } else {
      props.signOut();
    }
  };

  const renderOrText = () => {
    return (
      <div
          style={{
            position: "relative",
            top: -18,
            zIndex: 1,
            left: -8,
            padding: 5,
            backgroundColor: "#ffffff"
          }}
        >
          or
        </div>
    );
  }

  const renderOrSeperator = () => {
    return (
      <div
        style={{
          marginTop: 32,
          borderBottom: "2px solid #E4E7E7",
          width: 400,
        }}
      >
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 64,
      }}
    >
      <div
        style={{
          fontFamily: "plex-sans,sans-serif",
          fontSize: 22,
          fontWeight: 700,
          width: 400,
          alignItems: "flex-start",
        }}
      >
        Sign up or log in
      </div>
      <div>
        <Button
          onClick={() => {
            window.gapi.auth2
              .getAuthInstance()
              .signIn()
              .then(() => googleAuthenticationInitiate())
              .then(() => props.signIn())
              .then(() => {
                // Redirect to the menu page after successful sign-in
                window.location.href = "/menu";
              })
              .catch((error) => {
                // Handle any sign-in errors
                console.error("Error signing in:", error);
              });
          }}
          startIcon={<FacebookRounded />}
          style={FacebookButtonStyles}
        >
          Continue with Facebook
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            window.gapi.auth2
              .getAuthInstance()
              .signIn()
              .then(() => googleAuthenticationInitiate())
              .then(() => props.signIn())
              .then(() => {
                // Redirect to the menu page after successful sign-in
                window.location.href = "/menu";
              })
              .catch((error) => {
                // Handle any sign-in errors
                console.error("Error signing in:", error);
              });
          }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <GoogleIcon />
            </svg>
          }
          style={GoogleButtonStyles}
          variant="outlined"
        >
          Continue with Google
        </Button>
      </div>
      <div>
        <Button startIcon={<Apple />} style={AppleButtonStyles}>
          Continue with Apple
        </Button>
      </div>
      <div>{renderOrSeperator()}</div>
      <div>{renderOrText()}</div>
      <div>
        <Button startIcon={<MailOutlineOutlined />} style={EmailButtonStyles}>
          Continue with email
        </Button>
      </div>
      <div
        style={{
          marginTop: 16,
          width: 400,
          fontFamily: "plex-sans,sans-serif",
          fontSize: 14,
          lineHeight: "19px",
          color: "#2E3333",
          marginBottom: "32px"
        }}
      >
        By continuing you agree to our{" "}
        <a style={{ color: "#00CCBC" }} href="/terms-and-conditions">
          T&Cs
        </a>{" "}
        and{" "}
        <a style={{ color: "#00CCBC" }} href="/terms-and-conditions">
          Privacy Policy
        </a>
        . We use your data to offer you a personalised experience and to better
        understand and improve our services.{" "}
        <a style={{ color: "#00CCBC" }} href="/more-information">
          For more information see here
        </a>
        .
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { signOut, signIn })(LoginScreen);
