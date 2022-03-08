import { useEffect } from "react";

export const TokenFrame = ({ tokenId, minHeight = 275 }: { tokenId: string; minHeight?: number }) => {
  const id = `tokenFrame${tokenId}`
  useEffect(()=>{
    setTimeout(()=>{
      const el=  document.getElementById(id);
      if(el){
        (el as HTMLIFrameElement).contentWindow?.focus()
      }
    }, 100);
  },[])
  return (
    <iframe id={id} allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"} allowFullScreen
            frameBorder={"0"}
            height={"100%"} sandbox={"allow-scripts"} src={`https://hyperion.stewart.codes/gen/${tokenId}/`}
            width={"100%"}
            onLoad={(e)=>{e.currentTarget.contentWindow?.focus()}}
            style={{ "minHeight": minHeight }}
    title={'#'+tokenId}></iframe>

  )
}
