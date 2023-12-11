import styled from "styled-components"
import { mediaQuery } from "./Variable"
import { clearFix } from "./Mixin"

const { mediaTablet, mediaMobile } = mediaQuery

export const Inners = styled.div`
  position: relative;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;

  ${clearFix}

  ${mediaTablet} {
    margin: 0 48px;
  }

  ${mediaMobile} {
    margin: 0 24px;
  }
`
