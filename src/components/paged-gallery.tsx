import Container from "react-bootstrap/Container";
import { Col, Form, Pagination, Row } from "react-bootstrap";
import { useQueryParam } from "../hooks/useQueryParam";
import { useEffect, useMemo, useState } from "react";
import { Gallery } from "./gallery";
import analysis from "../utils/analysis.json";

export const PagedGallery = ({ totalNumTokens }: { totalNumTokens: number }) => {
  let [pageQp, setPageQp] = useQueryParam('page');
  let [pageSort, setPageSort] = useQueryParam('sort');
  const [page, setPage] = useState<number>(1)

  const [orderByRankArray, setOrderByRankArray] = useState<string[]>([]);
  
  const setPageSortQp = (sortBy: string) => {
    console.log('setting sort by', sortBy)
    setPageSort(sortBy)
  }

  const limit = 15;
  useEffect(() => {
    if (pageSort !== 'rank') {
      return [];
    }
    const orderByRankArray: string[] = [];
    analysis.all.map((score, i) => ({
      score,
      id: i
    })).sort((a, b) => b.score - a.score).map(({ id }) => orderByRankArray.push(id));
    setOrderByRankArray(orderByRankArray);
  }, [pageSort])

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
    const start = Math.max(1, page - 3);
    const end = Math.min(lastPage, page + 3);
    for (let i = start; i <= end; i++) {
      pagesToRender.push(i);
    }
    const ellipsisStart = start > 1 && pagesToRender.length
    const ellipsisEnd = end < lastPage

    return { ellipsisStart, ellipsisEnd, pagesToRender };
  }, [page, lastPage]);

  const tokenIds = useMemo(() => {
    const tokenIds = [];
    const from = (page - 1) * limit + 1;
    const to = Math.min(from + limit - 1, totalNumTokens);
    for (let i = from; i <= to; i++) {
      if (pageSort === 'rank') {
        //
        tokenIds.push(orderByRankArray[i - 1]);
      } else {
        tokenIds.push(i.toString());
      }
    }
    return tokenIds;
  }, [pageSort, lastPage, page, orderByRankArray]);

  const changePage = (page: number) => {
    setPageQp(Math.max(pages[0], Math.min(page, pages[pages.length - 1])).toString());
    // update whatever
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="sortBy">
          <Form.Check
            type="switch"
            id="sort-switch"
            label="Sort by Rank"
            checked={pageSort === 'rank'}
            onClick={(e) => setPageSortQp(e.currentTarget.checked ? 'rank' : 'token')}
          />
        </Form.Group>
      </Form>
      <Row>
        <Gallery tokenIds={tokenIds}/>
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
  )
}
