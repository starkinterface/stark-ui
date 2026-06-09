import { Pagination } from "../"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CustomTrigger() {
  return (
    <Pagination.Root count={500} pageSize={10} siblingCount={1}>
      <Pagination.PrevTrigger className="button--md">
        <ChevronLeft data-icon="inline-start" />
        Prev
      </Pagination.PrevTrigger>

      <Pagination.Context>
        {(context) =>
          context.pages.map((page, index) =>
            page.type === "page" ? (
              <Pagination.Item
                key={index}
                {...page}
                className="data-selected:button--accent"
              >
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
        <ChevronRight data-icon="inline-end" />
      </Pagination.NextTrigger>
    </Pagination.Root>
  )
}
