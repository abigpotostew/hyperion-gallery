import { Col, Row } from "react-bootstrap";
import { ReactNode } from "react";

export const CenteredRowBootstrap = ({ children, ...props }: { children?:ReactNode, props?: any }) => {
  return (<Row className="" {...props}>
      < Col/>
      <Col>
        {children}
      </Col>
      < Col/>
    </Row>
  )
}