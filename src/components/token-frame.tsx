export const TokenFrame = ({ tokenId, minHeight = 525 }: { tokenId: string; minHeight?: number }) => {
  return (

    <iframe allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"} allowFullScreen
            frameBorder={"0"}
            height={"100%"} sandbox={"allow-scripts"} src={`https://hyperion.stewart.codes/gen/${tokenId}/`}
            width={"100%"}
            style={{ "minHeight": minHeight||525 }}></iframe>

  )
}
