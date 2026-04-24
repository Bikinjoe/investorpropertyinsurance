import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import SembleyQuoteForm from "@/components/SembleyQuoteForm";

export const metadata = {
  title: "Get Your Investor Insurance Quote",
  description:
    "Tell us the basics. Takes 60 seconds. We will get back to you fast with options for your asset class and property profile.",
};

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to get a real estate investor insurance quote",
          step: [
            { "@type": "HowToStep", name: "Quick intake", text: "Fill out the 60-second form with property basics." },
            { "@type": "HowToStep", name: "We review", text: "We look at your property type, location, and coverage needs." },
            { "@type": "HowToStep", name: "We follow up", text: "Expect a call or text from our team. We'll have questions and options ready." },
            { "@type": "HowToStep", name: "You decide", text: "We walk through options in plain English. No pressure, no jargon. You pick." },
          ],
        }}
      />
      <PageHero
        eyebrow="60-second intake"
        title="Get Your Investor Insurance Quote."
        sub="Tell us the basics. Takes 60 seconds."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Get a Quote" }]} />

      <section className="container-narrow py-10">
        <div className="mx-auto max-w-3xl">
          <SembleyQuoteForm />
        </div>
      </section>
    </>
  );
}
