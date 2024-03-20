import styled from "styled-components";

export const MainStyled = styled("main")({
  padding: "96px 128px",
  border: "1px solid black",
  backgroundColor: "#f8f8f8",

  "& form": {
    display: "flex",
    gap: 20,
    width: 583,
    "& > div": {
      position: "relative",
    },
    "& > div:first-child": {
      width: 221,
    },
    "& > div:nth-child(2)": {
      width: 198,
    },
    "& > div:nth-child(3)": {
      width: 124,
    },
  },
  "& label": {
    display: "block",
    marginBottom: 8,
    fontWeight: 500,
    fontSize: 14,
    color: " #8a8a89",
  },
  "& select": {
    borderRadius: 14,
    paddingLeft: 18,
    width: "100%",
    height: 48,
    background: "#fff",
    border: "none",
    appearance: "none",
    outline: "none",
  },
  "& option": {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.11,
    color: "#121417",
  },
  "& svg": {
    position: "absolute",

    top: "54%",
    right: 14,
    pointerEvents: "none",
  },
});
