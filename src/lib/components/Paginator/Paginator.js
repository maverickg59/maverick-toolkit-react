import React, { Fragment, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'
import { chunk } from 'maverick-toolkit-utils'
import { ArrowBlock, LimitBlock, Block, range } from './'

function Paginator({ data, children, records, rows, adjacents }) {
  const pages = data.length ? data.length : Math.ceil(records.length / rows)
  const refs = useRef([])
  const initialState = {
    chunkedPages: data.length ? data : chunk(records, rows),
    pagesArray: [...Array(pages).keys()],
    adjacentPages: adjacents ? adjacents : 0,
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
        const { adjacentPages } = payload
        return { ...state, adjacentPages }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    chunkedPages,
    pagesArray,
    adjacentPages,
    rangeLength,
    indexValues: { currentPage, principalIndex },
  } = state

  console.log(`currentPage ${currentPage}`)

  return (
    <Fragment>
      {chunkedPages[currentPage].map(props => {
        return children(props)
      })}
      <Icon
        className='u-margin-right-small'
        icon='ellipsis-h'
        color='gray-dark'
      />
      <nav>
        <ul className='o-row'>
          {[
            <ArrowBlock
              key='arrow-left'
              dispatch={dispatch}
              content='<'
              pages={pages}
              currentPage={currentPage}
              blockType='leftArrow'
              adjacentPages={adjacentPages}
            />,
            pages > 5 && (
              <LimitBlock
                key='limit-left'
                dispatch={dispatch}
                content='1'
                currentPage={currentPage}
                blockType='first'
                adjacentPages={adjacentPages}
              />
            ),
            range(
              pages,
              principalIndex,
              adjacentPages,
              pagesArray,
              dispatch
            ).map((page, blockIndex) => {
              return (
                <Block
                  key={blockIndex}
                  blockRefs={refs}
                  dispatch={dispatch}
                  content={page + 1}
                  currentPage={currentPage}
                  page={page}
                  pages={pages}
                  principalIndex={principalIndex}
                  blockIndex={blockIndex}
                  adjacentPages={adjacentPages}
                  rangeLength={rangeLength}
                />
              )
            }),
            pages >= 6 && (
              <LimitBlock
                key='limit-right'
                dispatch={dispatch}
                content={pages}
                currentPage={currentPage}
                blockType='last'
                pages={pages}
                adjacentPages={adjacentPages}
              />
            ),
            <ArrowBlock
              key='arrow-right'
              dispatch={dispatch}
              content='>'
              pages={pages}
              blockType='rightArrow'
              currentPage={currentPage}
              adjacentPages={adjacentPages}
            />,
          ]}
        </ul>
      </nav>
    </Fragment>
  )
}

export default Paginator

Paginator.propTypes = {
  children: PropTypes.func.isRequired,
  records: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rows: PropTypes.number.isRequired,
  Pages: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape([])),
}

Paginator.defaultProps = {
  adjacents: 0,
  data: [],
}
