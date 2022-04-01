import { Table } from "react-bootstrap"
import { useEffect, useMemo, useState } from "react";
import { tokenDetails } from "./token";
import { Loader } from "./loader";
import analysis from "../utils/analysis.json";
import config from "../config";

const truncate = (val:number, decimals:number) => {
  const snip = Math.pow(10, decimals);
  return Math.round(val*snip)/snip
}

export const TokenTraits = ({ tokenId }: { tokenId: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [traits, setTraits] = useState<{value:string;trait_type:string, percent:number, score:number}[]>([]);
  const [rank, setRank] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const token = useMemo(() => tokenDetails(tokenId), [tokenId]);
  useEffect(() => {
    if (!tokenId) {
      return;
    }
    (async () => {
      try {
        const md = await fetch(token.metadata)
        if (!md.ok) throw new Error(`${md.status} ${md.statusText}`)
      const mdJson =await md.json()
        const traits = mdJson.traits as {value:string;trait_type:string}[]
        const traitsWithPercent =traits.map(t => {

          // @ts-ignore
          const value = analysis[t.trait_type][t.value] as number
          const percent = value * 100
          return {...t, percent:truncate(percent,2), score: 1/value}
        }).sort((a,b) => b.percent - a.percent)

        setTraits(traitsWithPercent)
        // @ts-ignore
        const v = 1024-analysis.all[parseInt(tokenId)] as number + 1

        setRank(v)
        setScore(traitsWithPercent.reduce((acc,t) => acc + t.score, 0))
      } catch (e) {
        console.log(e)
        // @ts-ignore
        setError(e?.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [tokenId])

  return (
    <>
      {loading &&!error && <Loader />}
      {!loading && error && <div>An error occurred, reload the page.</div>}
      {!loading && !error && <>
          <Table responsive>
              <thead>
              <tr>
                  <th>Trait Name</th>
                  <th>Value</th>
                  <th>Shared Trait Percent</th>
                  <th>Score</th>
                {/*{Array.from({ length: 2 }).map((_, index) => (*/}
                {/*  <th key={index}>Table heading</th>*/}
                {/*))}*/}
              </tr>
              </thead>
              <tbody>
              {/*<tr>*/}
              {/*    <td>1</td>*/}
              {/*  {Array.from({ length: 12 }).map((_, index) => (*/}
              {/*    <td key={index}>Table cell {index}</td>*/}
              {/*  ))}*/}
              {/*</tr>*/}
              {traits.map((trait, index) => (
                <tr key={index}>
                  <td>{trait.trait_type}</td>
                  <td>{trait.value}</td>
                  <td>{trait.percent}</td>
                  <td>{truncate(trait.score,2)}</td>
                </tr>
              ))}
              {/*<tr>*/}
              {/*    <td>2</td>*/}
              {/*  {Array.from({ length: 12 }).map((_, index) => (*/}
              {/*    <td key={index}>Table cell {index}</td>*/}
              {/*  ))}*/}
              {/*</tr>*/}
              {/*<tr>*/}
              {/*    <td>3</td>*/}
              {/*  {Array.from({ length: 12 }).map((_, index) => (*/}
              {/*    <td key={index}>Table cell {index}</td>*/}
              {/*  ))}*/}
              {/*</tr>*/}
              </tbody>
              <tfoot>
              <tr>
                  <td>Total Score</td>
                  <td></td>
                  <td></td>
                  <td>{truncate(score, 2)}</td>
              </tr>
              <tr>
                  <td>Rank (1 is rarest)</td>
                  <td></td>
                  <td></td>
                  <td>{rank}</td>
              </tr>
              </tfoot>
          </Table>
          <br />
          <h5>IPFS Metadata</h5>
          <ul>
              <li>
                  <a href={`ipfs://${config.ipfsMetadataCid}/${tokenId}`}>Metadata</a>
              </li>
              <li>
                  <a href={`ipfs://${config.ipfsImageCid}/${tokenId}${config.fileUrlImageExtension}`}>Image</a>
              </li>
              <li>
                  <a href={`ipfs://${config.ipfsLiveCid}/${tokenId}`}>Live View</a>
              </li>
              <li>
                  <a href={`ipfs://${config.ipfsImageCid}/${tokenId}${config.fileUrlHighResImageExtension}`}>4K Render</a>
              </li>
          </ul>
      </>

      }
    </>
  )
}
