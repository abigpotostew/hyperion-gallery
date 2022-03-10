import Container from "react-bootstrap/Container";
import { Col, Pagination, Row } from "react-bootstrap";
import { Token } from "./token";
import { useQueryParam } from "../hooks/useQueryParam";
import { useEffect, useMemo, useState } from "react";
import { Gallery } from "./gallery";

export const PagedGallery = ({ totalNumTokens }: { totalNumTokens: number }) => {
  let [pageQp, setPageQp] = useQueryParam('page');
  const [page, setPage] = useState<number>(1)
  // const pageNum = parseInt(pageQp||'1')
  const limit = 15;

  useEffect(() => {
    setPage(parseInt(pageQp || '1'))
  }, [pageQp])

  const pages = useMemo(() => {
    const pages = [];
    const end = Math.ceil(totalNumTokens / limit);
    for (let i = 0; i < end; i++) {
      pages.push(i + 1);
    }
    return pages;
  }, [totalNumTokens]);
  const lastPage = pages.length > 0 ? pages[pages.length - 1] : 1;
  
  const pagesToRender = useMemo(() => {
    const pagesToRender = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(lastPage, page + 2);
    for (let i = start; i <= end; i++) {
      pagesToRender.push(i);
    }
    return { ellipsisStart:start>1 && pagesToRender.length,ellipsisEnd:end<lastPage, pagesToRender };
  }, [page, lastPage]);

  const tokenIds = useMemo(() => {
    const tokenIds = [];
    const from = (page - 1) * limit + 1;
    const to = Math.min(from + limit - 1, totalNumTokens);
    for (let i = from; i <= to; i++) {
      tokenIds.push(i.toString());
    }
    return tokenIds;
  }, [lastPage, page]);

  const changePage = (page: number) => {
    setPageQp(Math.max(pages[0], Math.min(page, pages[pages.length - 1])).toString());
    // update whatever
    window.scrollTo(0, 0);
    console.log("scrolling")
  }

  return (
    <Container>
      <Row>

        {/*<Col />*/}
        {/*<Col>*/}
        <Gallery tokenIds={tokenIds}/>
        {/*</Col>*/}
        {/*<Col />*/}
      </Row>
      <Row>
        <Col/>
        <Col>
          <div className={'text-center'} style={{ margin: "0 auto", width: "50%" }}>
            <Pagination>
              <Pagination.First disabled={(page === 1)} onClick={() => changePage(1)}/>
              <Pagination.Prev disabled={(page === 1)} onClick={() => changePage(page - 1)}/>
              {pagesToRender.ellipsisStart && <Pagination.Ellipsis/>}
              {pagesToRender.pagesToRender.map((pageN: number) => (
                <Pagination.Item key={pageN} active={pageN === page} onClick={() => changePage(pageN)}>
                  {pageN}
                </Pagination.Item>
              ))}
              {pagesToRender.ellipsisEnd && <Pagination.Ellipsis/>}
              <Pagination.Next disabled={(page === lastPage)} onClick={() => changePage(page + 1)}/>
              <Pagination.Last disabled={(page === lastPage)} onClick={() => changePage(pages[pages.length - 1])}/>
            </Pagination>
          </div>
        </Col>
        <Col/>
      </Row>
    </Container>
    // <Container >
    //   {chunks.map((chunk, index) => (
    //     <Row  key={index}>
    //       {chunk.map((tokenId:string) => (
    //         <Col xs={12} md={6} lg={4} key={tokenId}>
    //           <Token tokenId={tokenId} />
    //         </Col>
    //       ))}
    //     </Row>
    //   ))}
    // </Container>
  )
}
