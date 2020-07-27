import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Wrapper, Title } from "./styles";
import { CartContext } from "../../../shared/contexts/CartContext";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function Header() {
  const { products } = useContext(CartContext);

  return (
    <Wrapper>
      <ArrowBackIosIcon style={{ marginLeft: 10 }} />
      <Title>Product Detail</Title>
      <IconButton aria-label="cart" style={{ marginRight: 10 }}>
        <StyledBadge badgeContent={products.length} color="secondary">
          <ShoppingCartIcon style={{ color: "black" }} />
        </StyledBadge>
      </IconButton>
    </Wrapper>
  );
}

export default Header;
