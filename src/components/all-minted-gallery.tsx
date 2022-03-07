import { useEffect, useState } from "react";
import { useQueryContract } from "../hooks/useQueryContract";
import { Gallery } from "./gallery";
import { PagedGallery } from "./paged-gallery";
import Container from "react-bootstrap/Container";
import { useNumberTokens } from "../hooks/useNumberTokens";

export const AllMintedGallery = ()=>{
  const {numTokens}= useNumberTokens()

  return (
    <Container>

      <p>
        <b>{numTokens || 0}</b> of <b>1024</b> tokens have been minted.
      </p>
      {numTokens?<PagedGallery totalNumTokens={numTokens} />:<p>Loading...</p>}
    </Container>
  );


}
