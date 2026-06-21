import { Accordion } from "../"

export default function Basic() {
  const faqItems = [
    {
      content:
        "You can sign up and use all features of the platform for 14 days without entering credit card details. At the end of the trial, you can choose a plan that suits your needs, or your account will transition to a read-only state.",
      title: "How does the 14-day free trial work?",
      value: "trial",
    },
    {
      content:
        "Yes, you can upgrade, downgrade, or cancel your subscription directly from your billing dashboard. Upgrades take effect immediately (pro-rated), while downgrades and cancellations are applied at the end of the billing cycle.",
      title: "Can I change my plan or cancel at any time?",
      value: "billing",
    },
    {
      content:
        "Security is our top priority. We use industry-standard AES-256 encryption at rest and TLS 1.3 in transit. Our database is backed up every hour, and we maintain complete SOC2 compliance.",
      title: "Is my data secure and encrypted?",
      value: "security",
    },
  ]

  return (
    <div className="flex flex-col gap-4 h-dvh items-center justify-center w-full max-w-2xl mx-auto">
      <div className="text-center flex gap-1 flex-col mb-4">
        <h2>Frequently Asked Questions</h2>
        <p className="text-sm text-foreground-muted">
          Answers to commonly asked questions about our platform.
        </p>
      </div>
      <Accordion.Root defaultValue={["trial"]} className="w-full" collapsible>
        {faqItems.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              <Accordion.ItemTitle>{item.title}</Accordion.ItemTitle>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
