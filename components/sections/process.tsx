import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/content/site";

export function Process() {
  return (
    <section className="bg-white">
      <Container className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Engagement Model"
          title="Focused support. Clear direction. Practical execution."
        />
        <ol className="mt-14 grid gap-px overflow-hidden border border-fog bg-fog sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li key={step.number} className="bg-white p-8">
              <span className="font-serif text-4xl text-gold">{step.number}</span>
              <h3 className="mt-4 text-h4 font-serif text-navy">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-brand">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
