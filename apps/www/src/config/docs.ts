const NAVIGATION_ITEMS = {
  primary: [
    {
      items: [
        {
          href: "/docs/agents/overview",
          id: "agents-overview",
          label: "Overview",
        },
        {
          href: "/docs/agents/mcp-server",
          id: "agents-mcp-server",
          label: "MCP Server",
        },
        {
          href: "/docs/agents/llms",
          id: "agents-llms",
          label: "LLMs.txt",
        },
        {
          href: "/docs/agents/skills",
          id: "agents-skills",
          label: "Skills",
        },
      ],
      shimmer: true,
      title: "AI Agents",
    },
    {
      items: [
        {
          href: "/docs/introduction",
          id: "introduction",
          label: "Introduction",
        },
        {
          href: "/docs",
          id: "installation",
          label: "Installation",
        },
        {
          href: "/docs/customization",
          id: "customization",
          label: "Customization",
        },
        {
          href: "/docs/changelog",
          id: "changelog",
          label: "Changelog",
        },
      ],
      title: "Get Started",
    },
  ],
  secondary: [
    {
      items: [
        {
          group: "display",
          href: "/docs/components/accordion",
          id: "accordion",
          label: "Accordion",
        },
        {
          group: "display",
          href: "/docs/components/button",
          id: "button",
          label: "Button",
        },
        {
          group: "display",
          href: "/docs/components/button-group",
          id: "button-group",
          label: "Button Group",
        },
        {
          group: "display",
          href: "/docs/components/toggle",
          id: "toggle",
          label: "Toggle",
        },
        {
          group: "display",
          href: "/docs/components/toggle-group",
          id: "toggle-group",
          label: "Toggle Group",
        },
      ],
      title: "Components",
    },
  ],
}

export { NAVIGATION_ITEMS }
