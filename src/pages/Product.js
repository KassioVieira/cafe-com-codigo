import React, { useContext, useState } from "react";
import Layout from "../components/Layout";

import { Image, WrapImage, Name, Price, Description, Button } from "./styles";
import { CartContext } from "../shared/contexts/CartContext";

function Product() {
  const [state, setState] = useState({
    url:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1572825197207",
    product: "MacBook Pro",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie",
    price: "Mil Milhões",
  });

  const { addProduct } = useContext(CartContext);

  return (
    <>
      <WrapImage>
        <Image src={state.url} />
      </WrapImage>
      <Name>{state.product}</Name>
      <Price>R$ {state.price}</Price>
      <Description>{state.description}</Description>
      <Button onClick={() => addProduct(state)}>Adicionar ao carrinho</Button>
    </>
  );
}

export default Product;
