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
    backgroundColor: "var(--light-primary1)",
    borderRadius: 8,
  },

  "& p": {
    maxWidth: 471,
    marginBottom: 64,
  },
  "& button": {
    borderRadius: 12,
    border: "none",
    padding: "16px 88px",
    backgroundColor: "var(--primary1)",

    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.56,
  },
});

export const ListStyle = styled("ul")({
  backgroundImage: "url(line.svg)",
  backgroundRepeat: "no-repeat",
  position: "relative",
  width: 1312,
  display: "flex",
  justifyContent: "center",
  gap: 100,
  padding: "40px 0",

  //   border: "1.50px dashed #f4c550",
  borderRadius: 30,
  "& li": {
    display: "flex",
    gap: 16,
  },

  //   maxWidth: 1312,
  //   maxHeight: 116,
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
