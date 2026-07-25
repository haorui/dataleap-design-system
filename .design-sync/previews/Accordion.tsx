import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "dataleap-design-system"

export const Basic = () => (
  <Accordion defaultValue={["shipping"]} style={{ width: 420 }}>
    <AccordionItem value="shipping">
      <AccordionTrigger>How long does shipping take?</AccordionTrigger>
      <AccordionContent>
        Standard shipping takes 3-5 business days within the US. Express
        options are available at checkout for next-day delivery.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="returns">
      <AccordionTrigger>What is your return policy?</AccordionTrigger>
      <AccordionContent>
        Items can be returned within 30 days of delivery for a full refund,
        as long as they are unused and in original packaging.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="warranty">
      <AccordionTrigger>Do products come with a warranty?</AccordionTrigger>
      <AccordionContent>
        All hardware ships with a one-year limited warranty covering
        manufacturing defects.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const MultipleOpen = () => (
  <Accordion defaultValue={["billing", "limits"]} style={{ width: 420 }}>
    <AccordionItem value="billing">
      <AccordionTrigger>How am I billed?</AccordionTrigger>
      <AccordionContent>
        Usage is metered hourly and invoiced at the start of each month.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="limits">
      <AccordionTrigger>Are there rate limits?</AccordionTrigger>
      <AccordionContent>
        Free plans include 1,000 requests per minute. Contact sales to raise
        limits on paid plans.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="sla">
      <AccordionTrigger>Is there an SLA?</AccordionTrigger>
      <AccordionContent>
        Enterprise plans include a 99.9% uptime SLA with service credits.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)
