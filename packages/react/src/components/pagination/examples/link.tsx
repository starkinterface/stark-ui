import { Pagination } from "../"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

export default function Link() {
  return (
    <Pagination.Root
      count={500}
      pageSize={10}
      siblingCount={1}
      type="link"
      getPageUrl={(details) => `#page=${details.page}`}
    >
      <Pagination.Context>
        {(context) => (
          <>
            <Pagination.FirstTrigger aria-label="First page" asChild>
              <a href="#page=1">
                <ChevronsLeft />
              </a>
            </Pagination.FirstTrigger>
            <Pagination.PrevTrigger aria-label="Previous page" asChild>
              <a
                href={
                  context.page > 1
                    ? `#page=${context.page - 1}`
                    : `#page=${context.page}`
                }
              >
                <ChevronLeft />
              </a>
            </Pagination.PrevTrigger>

            {context.pages.map((page, index) =>
              page.type === "page" ? (
                <Pagination.Item key={index} {...page} asChild>
                  <a href={`#page=${page.value}`}>{page.value}</a>
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={index} index={index}>
                  &#8230;
                </Pagination.Ellipsis>
              )
            )}

            <Pagination.NextTrigger aria-label="Next page" asChild>
              <a
                href={
                  context.page < context.totalPages
                    ? `#page=${context.page + 1}`
                    : `#page=${context.page}`
                }
              >
                <ChevronRight />
              </a>
            </Pagination.NextTrigger>
            <Pagination.LastTrigger aria-label="Last page" asChild>
              <a href={`#page=${context.totalPages}`}>
                <ChevronsRight />
              </a>
            </Pagination.LastTrigger>
          </>
        )}
      </Pagination.Context>
    </Pagination.Root>
  )
}
