import styled from "styled-components";

export const NavStyled = styled("nav")({
  display: "flex",
  alignItems: "center",
  gap: 28,
  "& a": {
    fontWeight: 400,
    lineHeight: 1.25,
  },
});
