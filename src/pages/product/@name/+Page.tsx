import type { PageContext } from 'vike/types'

import List from '@/components/List'

export const Page = (_pageContext: PageContext) => {
  return (
    <>
      {/* <div>Item name: {name}</div> */}
      <br />
      <List />
      <a href={`/item/A`}>Lint to item A</a>
    </>
  )
}