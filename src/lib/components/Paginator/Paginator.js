import React, { Fragment, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'
import { chunk } from 'maverick-toolkit-utils'
import {
  ArrowBlock,
  LimitBlock,
  Block,
  Ellipsis,
  range,
  isAdjacentEdgeCase,
} from './'

const Paginator = ({
  data = [],
  children,
  records,
  rows,
  adjacents = 0,
  blockColor = '',
}) => {
  const pages = data.length ? data.length : Math.ceil(records.length / rows)
  const blockRefs = useRef([])
  const initialState = {
    chunkedPages: data.length ? data : chunk(records, rows),
    pagesArray: [...Array(pages).keys()],
    adjacentPages: adjacents,
    adjacentEdgeCase: isAdjacentEdgeCase(pages, adjacents),
    rangeLength: 2 + adjacents * 2,
    indexValues: {
      currentPage: 0,
      principalIndex: 1,
    },
  }
  function reducer(state, { type, payload }) {
    switch (type) {
      case 'SET_INDEX_VALUES':
        const { currentPage, principalIndex } = payload
        return {
          ...state,
          indexValues: {
            currentPage,
            principalIndex,
          },
        }
      case 'SET_ADJACENT_PAGES':
        const { adjacentPages, rangeLength } = payload
        return { ...state, adjacentPages, rangeLength }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    chunkedPages,
    pagesArray,
    adjacentPages,
    adjacentEdgeCase,
    rangeLength,
    indexValues: { currentPage, principalIndex },
  } = state

  console.log(`currentPage ${currentPage}`)

  return (
    <Fragment>
      {chunkedPages[currentPage].map(props => {
        return children(props)
      })}
      <nav>
        <ul
          className='o-row o-row--gutters'
          role='navigation'
          aria-label={`Pagination Navigation, pages 1 through ${pages}`}>
          {[
            <ArrowBlock
              key='arrow-left'
              dispatch={dispatch}
              content='<'
              pages={pages}
              currentPage={currentPage}
              blockType='leftArrow'
              adjacentPages={adjacentPages}
              blockColor={blockColor}
            />,
            <LimitBlock
              key='limit-left'
              dispatch={dispatch}
              content='1'
              currentPage={currentPage}
              blockType='first'
              isAdjacentEdgeCase={adjacentEdgeCase}
              adjacentPages={adjacentPages}
              pages={pages}
              blockColor={blockColor}
            />,
            <Ellipsis
              key='ellipsis-left'
              position='left'
              pages={pages}
              currentPage={currentPage}
              adjacents={adjacents}
              isAdjacentEdgeCase={adjacentEdgeCase}
            />,
            range(
              pages,
              principalIndex,
              adjacentPages,
              pagesArray,
              dispatch
            ).map((page, blockIndex) => (
              <Block
                key={blockIndex}
                blockRefs={blockRefs}
                dispatch={dispatch}
                content={page + 1}
                currentPage={currentPage}
                page={page}
                pages={pages}
                principalIndex={principalIndex}
                blockIndex={blockIndex}
                adjacentPages={adjacentPages}
                adjacents={adjacents}
                rangeLength={rangeLength}
                blockColor={blockColor}
              />
            )),
            <Ellipsis
              key='ellipsis-right'
              position='right'
              pages={pages}
              currentPage={currentPage}
              adjacents={adjacents}
              isAdjacentEdgeCase={adjacentEdgeCase}
            />,
            <LimitBlock
              key='limit-right'
              dispatch={dispatch}
              content={pages}
              currentPage={currentPage}
              blockType='last'
              pages={pages}
              isAdjacentEdgeCase={adjacentEdgeCase}
              adjacentPages={adjacentPages}
              blockColor={blockColor}
            />,
            <ArrowBlock
              key='arrow-right'
              dispatch={dispatch}
              content='>'
              pages={pages}
              blockType='rightArrow'
              currentPage={currentPage}
              adjacentPages={adjacentPages}
              blockColor={blockColor}
            />,
          ]}
        </ul>
      </nav>
    </Fragment>
  )
}

Paginator.propTypes = {
  children: PropTypes.func.isRequired,
  records: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rows: PropTypes.number.isRequired,
  Pages: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape([])),
  blockColor: PropTypes.string,
}

export default Paginator
