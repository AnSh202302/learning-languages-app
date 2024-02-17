import styled from "styled-components";
export const HeaderStyled = styled("header")({
  maxWidth: 1184,
  margin: "0 auto",
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-between",
});

export const LogoWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  "& p": {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
});

export const BtnWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const BtnLogIn = styled("button")({
  display: "inline-flex",
  gap: 8,
  backgroundColor: "transparent",
  border: "none",
  fontWeight: 700,
  lineHeight: 1.25,
});

export const BtnRegistration = styled("button")({
  maxWidthwidth: 166,
  fontWeight: 700,
  lineHeight: 1.25,
  padding: "14px 39px",
  // height: 48,
  border: "none",
  borderRadius: 12,
  backgroundColor: "var(--black)",
  color: "var(--white)",
});
