import styled from "styled-components";

export const WrapImage = styled.div`
  background-color: #f1f1f1;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  margin: 20px;
  width: 200;
  height: 300px;
  object-fit: "cover";
`;

export const Name = styled.span`
  font-family: sans-serif;
  font-size: 1.3em;
`;

export const Price = styled(Name)`
  font-weight: bold;
`;

export const Description = styled.p`
  width: 80%;
  max-width: 380px;
  font-family: sans-serif;
  font-size: 1em;
`;

export const Button = styled.div`
  width: 70%;
  max-width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4c4c4c;
  color: white;
  border-radius: 25px;
  margin-top: 40px;
  cursor: pointer;
`;
