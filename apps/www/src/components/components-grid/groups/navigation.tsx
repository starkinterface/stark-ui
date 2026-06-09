"use client"

import { Pagination } from "@stark-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const PaginationExample = () => (
  <Pagination.Root count={100} pageSize={10} siblingCount={1} defaultPage={5}>
    <Pagination.PrevTrigger className="button--md">
      <LuChevronLeft data-icon="inline-start" />
      Previous
    </Pagination.PrevTrigger>

    <Pagination.Context>
      {(context) =>
        context.pages.map((page, index) =>
          page.type === "page" ? (
            <Pagination.Item key={index} {...page}>
              {page.value}
            </Pagination.Item>
          ) : (
            <Pagination.Ellipsis key={index} index={index}>
              &#8230;
            </Pagination.Ellipsis>
          )
        )
      }
    </Pagination.Context>

    <Pagination.NextTrigger className="button--md">
      Next
      <LuChevronRight data-icon="inline-end" />
    </Pagination.NextTrigger>
  </Pagination.Root>
)

const Navigation = () => (
  <div className="flex flex-col gap-4">
    <PaginationExample />
  </div>
)

export { Navigation }
