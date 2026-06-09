import { Pagination } from "../"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

export default function Basic() {
  return (
    <Pagination.Root count={500} pageSize={10} siblingCount={1}>
      <Pagination.FirstTrigger aria-label="First page">
        <ChevronsLeft />
      </Pagination.FirstTrigger>
      <Pagination.PrevTrigger aria-label="Previous page">
        <ChevronLeft />
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

      <Pagination.NextTrigger aria-label="Next page">
        <ChevronRight />
      </Pagination.NextTrigger>
      <Pagination.LastTrigger aria-label="Last page">
        <ChevronsRight />
      </Pagination.LastTrigger>
    </Pagination.Root>
  )
}
