import {
  NavigationItemPrimary,
  NavigationItemSecondary,
} from "./navigation-item"
import { cx } from "@stark-ui/react"
import { NAVIGATION_ITEMS } from "@/config/docs"

const DocsSidebar = () => (
  <div className="px-content-padding py-content-padding h-full w-64 flex-col border-e border-decoration">
    <div className="-mx-2.5 flex flex-col gap-4">
      {NAVIGATION_ITEMS.primary.map((group) => (
        <div key={group.title} className="flex flex-col gap-px">
          <span
            className={cx(
              "mb-2 px-3 text-sm font-medium",
              group.shimmer && "shimmer"
            )}
          >
            {group.title}
          </span>
          {group.items.map((item) => (
            <NavigationItemPrimary key={item.id} href={item.href} id={item.id}>
              {item.label}
            </NavigationItemPrimary>
          ))}
        </div>
      ))}

      {NAVIGATION_ITEMS.secondary.map((group) => (
        <div key={group.title} className="flex flex-col gap-px">
          <span className="mb-2 px-3 text-sm font-medium">{group.title}</span>
          {group.items.map((item) => (
            <NavigationItemSecondary
              key={item.id}
              href={item.href}
              id={item.id}
            >
              {item.label}
            </NavigationItemSecondary>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export { DocsSidebar }
