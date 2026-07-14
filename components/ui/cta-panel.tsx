import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaPanel({
  headline,
  copy,
  button,
}: {
  headline: string;
  copy: string;
  button: { label: string; href: string };
}) {
  return (
    <section className="bg-navy text-ivory">
      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hairline mx-auto mb-6" />
          <h2 className="text-h2 text-ivory">{headline}</h2>
          <p className="mx-auto mt-5 max-w-measure text-lg text-fog/85">{copy}</p>
          <div className="mt-9 flex justify-center">
            <ButtonLink href={button.href} variant="ghost">
              {button.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
