import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SectionStyle = styled("section")({
  margin: "0 64px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 24,
  "& img": {
    borderRadius: 30,
  },
});

export const Wrapper = styled("div")({
  maxWidth: 720,
  padding: "98px 64px",
  backgroundColor: "var(--grey)",
  borderRadius: 30,

  "& span": {
    display: "inline-block",
    padding: "0 2px",
    lineHeight: 0.8,
    fontStyle: "italic",
    fontWeight: 400,
    backgroundColor: ({ $randomNumber }) => {
      switch ($randomNumber) {
        case 0:
          return "var(--light-primary0)";
        case 1:
          return "var(--light-primary1)";
        case 2:
          return "var(--light-primary2)";
        case 3:
          return "var(--light-primary3)";
        default:
          return "var(--light-primary4)";
      }
    },
    borderRadius: 8,
  },

  "& p": {
    maxWidth: 471,
    marginBottom: 64,
  },
});

export const LinkStyle = styled(NavLink)({
  borderRadius: 12,
  border: "none",
  padding: "16px 88px",
  backgroundColor: ({ $randomNumber }) => {
    switch ($randomNumber) {
      case 0:
        return "var(--primary0)";
      case 1:
        return "var(--light-primary1)";
      case 2:
        return "var(--light-primary2)";
      case 3:
        return "var(--light-primary3)";
      default:
        return "var(--light-primary4)";
    }
  },

  fontWeight: 700,
  fontSize: 18,
  lineHeight: 1.56,
});

export const ListStyle = styled("ul")({
  backgroundImage: ({ $randomNumber }) => `url(line${$randomNumber}.svg)`,
  backgroundRepeat: "no-repeat",
  position: "relative",
  width: 1312,
  display: "flex",
  justifyContent: "center",
  gap: 100,
  padding: "40px 0",

  borderRadius: 30,
  "& li": {
    display: "flex",
    gap: 16,
  },
});
export const Amount = styled("p")({
  fontWeight: 500,
  fontSize: 28,
  lineHeight: 1.14,
  letterSpacing: "-0.02em",
  marginRight: 16,
  color: "var(--black)",
});

export const Text = styled("p")({
  maxWidth: 96,
  fontSize: 14,
  color: "rgba(18, 20, 23, 0.7)",
});
