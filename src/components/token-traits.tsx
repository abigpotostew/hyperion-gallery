import { Table } from "react-bootstrap"
import { useEffect, useState } from "react";
import { tokenDetails } from "./token";
import { Loader } from "./loader";
import analysis from "../utils/analysis.json";

export const TokenTraits = ({ tokenId }: { tokenId: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [traits, setTraits] = useState<{value:string;trait_type:string, percent:number}[]>([]);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    if (!tokenId) {
      return;
    }
    const token = tokenDetails(tokenId);
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
          return {...t, percent:Math.round(percent*1000)/1000}
        }).sort((a,b) => b.percent - a.percent)

        setTraits(traitsWithPercent)
        // @ts-ignore
        const v = analysis.all[parseInt(tokenId)] as number

        setScore(v)
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
                  <td>Score (1024 is rarest)</td>
                  <td></td>
                  <td>{score}</td>
              </tr>
              </tfoot>
          </Table>
      </>

      }
    </>
  )
}
