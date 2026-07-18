"use client"

import { Pagination, Steps } from "@stark-ui/react"
import {
  LuChevronLeft,
  LuChevronRight,
  LuSettings,
  LuPackage,
  LuRocket,
} from "react-icons/lu"

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

const StepsExample = () => {
  const items = [
    {
      description: "Environment",
      icon: LuSettings,
      title: "Configure",
    },

    { description: "Assets", icon: LuPackage, title: "Build" },
    { description: "Push to edge", icon: LuRocket, title: "Deploy" },
  ]

  return (
    <Steps.Root count={items.length} defaultStep={1}>
      <Steps.List>
        {items.map((item, index) => {
          const IconComponent = item.icon
          return (
            <Steps.Item key={index} index={index}>
              <Steps.Trigger>
                <Steps.Indicator>
                  <IconComponent />
                </Steps.Indicator>
                <Steps.Header>
                  <Steps.Title>{item.title}</Steps.Title>
                  <Steps.Description>{item.description}</Steps.Description>
                </Steps.Header>
              </Steps.Trigger>
              <Steps.Separator />
            </Steps.Item>
          )
        })}
      </Steps.List>
    </Steps.Root>
  )
}

const Navigation = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-12">
      <PaginationExample />
      <StepsExample />
    </div>
  </div>
)

export { Navigation }
