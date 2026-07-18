import {
  NavigationItemPrimary,
  NavigationItemSecondary,
} from "./navigation-item"
import { NAVIGATION_ITEMS } from "@/config/docs"

const DocsSidebar = () => (
  <div className="flex h-full w-64 flex-col gap-4 border-e border-decoration px-2 py-4">
    {NAVIGATION_ITEMS.primary.map((group) => (
      <div key={group.title} className="flex flex-col gap-px">
        <span className="mb-2 px-3 text-sm font-medium">{group.title}</span>
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
          <NavigationItemSecondary key={item.id} href={item.href} id={item.id}>
            {item.label}
          </NavigationItemSecondary>
        ))}
      </div>
    ))}
  </div>
)

export { DocsSidebar }
