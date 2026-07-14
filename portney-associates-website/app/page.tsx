  DIFFERENTIATORS,

      {/* ENGAGEMENT MODEL */}
      <Process />

      {/* SECTORS */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Sectors Served" title="Organizations responsible for essential public services" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <li key={s.title} className="flex items-center gap-4 border border-fog bg-white p-6">
                <Icon name={s.icon} className="h-6 w-6 flex-none text-gold-dark" />
                <span className="font-serif text-lg text-navy">{s.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading eyebrow="Outcomes" title="What engagements are designed to produce" />
            <div className="self-center">
              <Checklist items={OUTCOME_CATEGORIES} columns={2} />
              {/* TODO: When verified engagement metrics exist, add a substantiated
                  results block here. Do not publish unverifiable numbers. */}
            </div>
          </div>
        </Container>
      </section>

      {/* FOUNDER */}
      <section className="bg-navy text-ivory">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow text-gold">The Founder</p>
              <div className="hairline my-6" />
              <h2 className="text-h2 text-ivory">Led by Jonathan Portney</h2>
              <p className="mt-6 max-w-measure text-lg leading-relaxed text-fog/85">
                {SITE.name} was founded by Jonathan &ldquo;JP&rdquo; Portney to provide government
                agencies, healthcare organizations, public health departments, and executive leaders
                with direct access to experienced, practical advisory support.
              </p>
              <div className="mt-8">
                <ButtonLink href="/jonathan-portney" variant="ghost">
                  Learn More About Jonathan Portney
                </ButtonLink>
              </div>
            </div>
            {/*
              IMAGE SLOT — founder portrait.
              /public/images/jonathan-portney-founder-portney-associates.jpg
              Dimensions: 1000 × 1200 (5:6), documentary editorial tone.
            */}
            <div
              className="relative mx-auto hidden aspect-[5/6] w-full max-w-sm border border-ivory/15 bg-navy-midnight lg:block"
              role="img"
              aria-label="Portrait of Jonathan Portney, founder and principal"
            >
              <div className="absolute inset-0 grid place-items-center text-center text-ivory/30">
                <p className="px-6 text-xs uppercase tracking-[0.18em]">
                  Founder portrait
                  <br />1000 × 1200
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CtaPanel {...HOME_FINAL_CTA} button={HOME_FINAL_CTA.button} />
    </>
  );
}
