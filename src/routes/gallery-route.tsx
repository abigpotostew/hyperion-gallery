import { Header } from "../components/header";
import { AllMintedGallery } from "../components/all-minted-gallery";
import Container from "react-bootstrap/Container";
import { PageTitle } from "../components/page-title";

export default function GalleryRoute() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem 0" }}>
        <Container>
        <PageTitle>Gallery</PageTitle>
        <AllMintedGallery />
        </Container>
      </main>
    </>
  );
}
