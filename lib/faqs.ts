export type FAQItem = { slug: string; question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    slug: "rental-cost",
    question: "How much does rental property insurance cost?",
    answer: `For a single family rental in the western US, expect $800 to $1,800 per year for a DP-3 policy with $300K in dwelling coverage and $1M of liability. That is the realistic range for most properties built after 1980 with a clean claims history.

The number moves up or down based on five things: location, construction type (frame vs masonry), roof age, prior claims, and whether the property is occupied or vacant.

A 2-4 unit rental typically runs $1,500 to $3,500. A small apartment building (5-10 units) on a commercial package runs $3,000 to $8,000. A short-term rental sits between $1,200 and $3,000 because of the higher liability exposure.

What pushes the rate up: pre-1980 construction with knob and tube wiring, fuse boxes, or galvanized plumbing. Properties in wildfire-prone areas of CA, OR, WA, CO, or wind-prone parts of TX. Vacant properties. Prior liability claims.

What brings it down: newer roof (under 10 years), updated plumbing and electrical, owner occupied or full-time tenant, no claims in 5 years, and being placed with a carrier that actually wants investor property business.

The fastest way to know your real number is to call or text 541-681-8793 with your address and a few details. We can usually quote in the same day.`,
  },
  {
    slug: "dp3-vs-ho",
    question: "What is the difference between a DP-3 and a homeowner policy?",
    answer: `A DP-3 (Dwelling Property 3) is built for rental properties. A homeowner policy (HO-3 or HO-5) is built for owner occupied homes. They look similar, but the coverage triggers and exclusions are different in ways that matter at claim time.

A homeowner policy assumes you live in the property. If you turn around and rent it out without telling the carrier, your claim can be denied for material misrepresentation. A DP-3 is written for the way investors actually use the property: rented to a tenant, with you as the named insured and landlord.

DP-3 coverage typically includes dwelling, other structures, and personal property you keep on site for tenant use (think appliances). It excludes the tenant's personal belongings (that is on their renters policy). It includes loss of rents instead of loss of use.

Liability on a DP-3 is landlord liability. It covers your exposure as the property owner if a tenant or guest is injured on the premises. It does not cover your personal liability the way a homeowner policy does.

A DP-3 is also often available on an open peril basis, which means it covers any cause of loss except those specifically excluded. That matches how most modern HO-3 forms work.

If you own a rental property and your insurance is currently a homeowner form, you have a coverage gap. Call us and we will move you to the right form.`,
  },
  {
    slug: "homeowner-rental",
    question: "Does my homeowner policy cover my rental property?",
    answer: `No. A homeowner policy covers an owner occupied home. The moment you stop living in the property and rent it to a tenant, you have changed the use of the property, and most homeowner policies will not respond to a claim.

Carriers explicitly write homeowner policies for owner occupied use. Buried in the policy language are conditions about occupancy, residence, and how the property is used. A long-term rental, short-term rental, or even an extended vacancy without notice can void coverage.

What typically happens at claim: the adjuster comes out, sees evidence the property was being rented (a tenant on site, a lease in your file, rental income on your tax return), and the carrier denies the claim or rescinds the policy. You get back the premium you paid, and that is it.

Even if a carrier does not formally rescind, they may pay a smaller amount under a different settlement basis or non-renew you at the next anniversary.

The fix is simple: when you turn a property into a rental, switch from a homeowner policy to a landlord/investor policy (typically a DP-3 for 1-4 units, or a commercial package for 5+). Tell us about the change and we will rewrite it. The premium difference is usually modest, and the coverage actually responds to your claim.

Do not assume your existing carrier "knows" you rent the property because you mentioned it once. The classification has to be on the policy.`,
  },
  {
    slug: "loss-of-rents",
    question: "What is loss of rents coverage and do I need it?",
    answer: `Loss of rents coverage pays the rental income you would have collected while the property is being repaired after a covered loss. If a fire damages your single family rental and the property is uninhabitable for six months, loss of rents pays the rent that was supposed to come in during those six months.

Yes, you need it. For active investors, loss of rents is one of the most important coverages on your policy because it protects the cash flow that pays your mortgage, taxes, and other operating costs while the property is out of service.

Most DP-3 and commercial property policies include loss of rents as an option, often called "fair rental value" or "business income." Limits are usually expressed as 12 months of rental income. Some carriers offer 18 or 24 month limits. For larger properties or properties in areas where contractors are slow, the longer period is worth the small extra premium.

Read the policy carefully. Some forms only pay loss of rents while the property is being repaired. Others pay until the rental is re-tenanted, which is more useful. The trigger is usually damage from a covered cause of loss, so cosmetic vacancy (a tenant moves out and you cannot re-rent) is not covered.

If you carry a mortgage, your lender often requires loss of rents (or business income) coverage. Even without a lender requirement, carrying it is rarely the wrong call for an active investor. Call us and we will confirm what you have.`,
  },
  {
    slug: "vacancy",
    question: "What happens if my rental property is vacant?",
    answer: `Most landlord policies have a vacancy clause that limits or eliminates coverage if the property is vacant for more than 30 or 60 days (carrier specific). After the vacancy threshold, the carrier may exclude coverage for vandalism, theft, water damage, broken glass, and certain other perils, even if the policy is still in force.

Vacancy is one of the biggest gotchas in investor insurance. Investors think the policy covers the property all the time. The policy actually has conditions that change based on whether the property is occupied.

What counts as vacant: no one living there and no business activity. A property between tenants with most of the previous tenant's belongings still inside may not technically be vacant. A property that is fully empty (no people, no furniture) and waiting to be re-tenanted typically is.

What to do if the property is going to be vacant for an extended period: call us before the vacancy threshold. We can usually add a vacancy permit endorsement for a small additional premium that keeps the standard coverage in place during the vacant period. For longer vacancies (30+ days) or properties undergoing renovation, we move you to a vacant property form (a DP-1 dwelling form or a builders risk policy) that is designed for unoccupied properties.

Do not let a property sit vacant under a standard policy without telling us. The premium adjustment is small. The claim denial if something happens is not.`,
  },
  {
    slug: "renovation",
    question: "What insurance do I need for a property under renovation?",
    answer: `For a property under active renovation, you need either a vacant property form with a renovation endorsement or a builders risk policy, depending on the scope of work.

Standard landlord policies (DP-3) are designed for occupied or short-term vacant properties. If you are doing major renovation, gut rehab, or any work that triggers a vacancy or "course of construction" condition, the standard policy may not respond at claim time.

Two paths:

Path 1: Vacant property form with renovation endorsement. Best for cosmetic renovations, minor repairs, or short-term work where the building structure is unchanged. Coverage stays in place during the work and switches back to a standard rental form when complete and re-tenanted.

Path 2: Builders risk policy. Best for major renovations, additions, or any work where the structural condition of the building changes. Builders risk covers the structure during the construction period, including the value of materials on site, soft costs (architect fees, permits) if there is a delay, and protection against theft or vandalism of building materials.

When the project is complete and ready for occupancy, builders risk ends and a permanent landlord/investor policy takes over. We coordinate the transition so there is no gap.

Important: tell us about the renovation before it starts, not after. Most denied renovation claims happen because the carrier was not notified that the property was under construction. The premium for the right form is small. The denied claim is not.

Call or text 541-681-8793 with the scope and timeline, and we will set you up correctly.`,
  },
  {
    slug: "airbnb-coverage",
    question: "Does my insurance cover short-term rentals like Airbnb?",
    answer: `Standard homeowner and landlord policies do not cover short-term rental activity. If you rent your property on Airbnb, VRBO, Vrbo, or similar platforms and a guest is injured or causes damage, your standard policy is likely to deny the claim.

Carriers view short-term rental activity as a commercial use of the property. The exposure is different: high turnover guests, guests who are unfamiliar with the property, parties, accidents in pools and hot tubs. Standard residential policies are not priced for that.

What you actually need:

A purpose-built short-term rental policy. These come from carriers that specialize in STR (Proper, Slice, Steadily, REInsurePro, Obie, others). The policy covers the property, contents, host liability, and lost income if a covered loss takes the property out of service.

Don't rely on Airbnb's "Host Protection." It has gaps, exclusions, and is not a substitute for a real policy. It is a backstop, not primary coverage. Read the fine print and you will see what is and is not actually covered.

Things to check on an STR policy: amenity liability (pools, hot tubs, fire pits, trampolines), bedbug coverage, theft of contents, malicious damage by guests, business income for periods when the property is uninhabitable, and minimum stay restrictions that may be baked into the policy.

If you operate even part-time as an STR (a few weekends a month, seasonal rental), you still need an STR policy. The exposure is the same per guest stay.

Call us and we will quote across our STR carrier panel.`,
  },
  {
    slug: "ordinance-and-law",
    question: "What is ordinance and law coverage and why does it matter?",
    answer: `Ordinance and law coverage pays the additional cost of bringing a damaged building up to current code during repair. Without it, your insurance will pay to rebuild the damaged portion as it was before, but it will not pay the extra cost to meet new building codes.

This matters for older buildings, where the cost of code upgrades after a loss can be tens of thousands of dollars. Wiring, plumbing, structural connections, and energy code upgrades have all changed substantially over the last few decades. After a partial loss, the city can require you to bring the entire affected portion up to current code as a condition of the building permit.

There are typically three components to ordinance and law coverage:

Coverage A: pays to demolish and remove the undamaged portion of the building if code requires it.

Coverage B: pays the cost to demolish and remove damaged property.

Coverage C: pays the increased cost of construction to comply with current building codes.

Most policies include some baseline ordinance and law coverage, often a small percentage of the dwelling limit. For older properties (pre-1990, especially pre-1980), bumping it up to a meaningful amount (10-25% of the dwelling) is one of the highest-value optional coverages you can add.

A real example: a small apartment building from the 1960s with a partial fire loss. Repair cost was $180K. Code upgrades to electrical, fire sprinkler, and ADA bathroom were another $90K. Without ordinance and law coverage, the owner paid that $90K out of pocket.

Add the coverage. Especially on older buildings.`,
  },
  {
    slug: "portfolio",
    question: "How does portfolio insurance work for multiple properties?",
    answer: `Portfolio insurance lets you cover multiple investment properties under one policy with one renewal date, one insurance company, and one set of policy limits. It simplifies your insurance program and often saves money compared to insuring each property individually.

There are two main structures:

Scheduled portfolio: each property is listed on the policy with its own dwelling limit, deductible, and replacement cost. You add and remove properties as your portfolio changes. Best for portfolios where each property has different values or different coverage needs.

Blanket portfolio: a single dwelling limit applies across all properties. The limit moves with the loss to wherever it is needed. Best for larger portfolios where the values are similar across properties and you want flexibility.

Portfolio policies typically come from carriers that specifically write investor business: REInsurePro, Steadily, Obie, and certain E&S markets. Standard regional carriers usually require a separate policy per property.

When portfolio makes sense: 5+ properties, frequent buying and selling, multiple states, or a mix of property types. The administrative simplicity is meaningful. Quoting one portfolio policy beats quoting 10 individual policies.

When individual policies make sense: portfolios of 1-4 properties, properties in states the portfolio carrier does not write, or unusual properties (very high value, very old, specialty asset classes) that need specific coverage.

We write both. If you have grown to 5+ doors and are still on individual policies, ask us about consolidating. The renewal cycle alone is worth the conversation.`,
  },
  {
    slug: "blanket-vs-scheduled",
    question: "What is blanket vs. scheduled coverage?",
    answer: `Scheduled coverage lists each property separately on the policy. Each property has its own dwelling limit, deductible, and named perils. Claims are paid based on what is scheduled for that specific property.

Blanket coverage applies a single limit across all properties on the policy. If one property has a total loss, the entire blanket limit is available to pay that claim. The limit "follows the loss."

Pros and cons:

Scheduled: predictable, easy to understand, easy to add and remove properties. Each property has its own limit. The premium is calculated on each property individually.

Blanket: more flexible, often cheaper for portfolios where individual property values vary, and can provide higher per-property limits if you ever have a single large loss. The complexity is in the underwriting (the carrier wants a complete property list and replacement values to set the blanket limit correctly).

When to choose blanket: portfolios of 5+ properties with similar property types, where you want flexibility and the simplicity of one limit. Common for multifamily portfolios.

When to choose scheduled: portfolios with widely varying property values (a $200K rental plus a $2M apartment building), or properties in different states with different insurance requirements.

Some policies are hybrid: scheduled at the property level but blanket on certain coverages like business income or ordinance and law.

If you are running a growing portfolio and not sure which structure fits, this is exactly the conversation to have with a specialist agent. Call us.`,
  },
  {
    slug: "carriers",
    question: "What carriers insure real estate investors?",
    answer: `The carriers that actively write real estate investor business include both standard market and specialty carriers. The right one for you depends on the asset class, the property condition, the state, and the size of your portfolio.

Standard market carriers writing investor business: Travelers, Liberty Mutual, Safeco, Hartford, Openly, Berkshire Hathaway Homestate (BHHC). These work well for newer properties (post-1980 typically), good condition, in standard markets, with clean loss history.

Specialty investor carriers: REInsurePro, Steadily, Obie. These are built specifically for real estate investors. Streamlined intake, better understanding of investor needs, easier to insure portfolios, often quicker to write properties that standard carriers will decline.

Excess and Surplus (E&S) markets: for properties that standard or specialty markets will not write. Older buildings, vacant properties, properties with prior claims, unusual locations, large portfolios with concentration risk. The premium is higher, but the coverage is real.

Short-term rental specialists: Proper, Slice, Steadily, REInsurePro. STR is its own niche and the right carrier matters.

We write across all of these. When you bring us your property, we look at the asset class, condition, location, and your loss history, and we send the submission to the right carriers. We do not waste time submitting to carriers that are going to decline.

If you want to know which carriers might fit your specific properties, call or text 541-681-8793 and we will walk through it.`,
  },
  {
    slug: "reinsurepro",
    question: "What is REInsurePro and is it right for me?",
    answer: `REInsurePro is an insurance program built specifically for real estate investors. It is not an insurance company itself; it is a managing general agency that designs and administers investor focused programs underwritten by stable insurance carriers behind it.

REInsurePro fits well for:

Active investors with multiple properties (often 3+ doors) who want a portfolio policy with one renewal date.

Investors with a mix of property types (rentals, rehabs, short-term rentals) on a single policy.

Investors who buy and sell frequently and need a streamlined way to add and remove properties.

Vacant or rehab properties that standard carriers may not write at acceptable rates.

What REInsurePro is good at: simplicity, speed of intake, willingness to insure properties that standard carriers may decline, and broad coverage forms designed for investor exposures (vacancy, rehab, short-term rental, business income).

Where it is not the best fit: very simple single-property situations (where a Travelers, Safeco, or Openly policy may be cheaper), or extremely high value commercial properties (where a true commercial market may write better terms).

How we use it: REInsurePro is one of our 10+ carrier markets. We quote it whenever it makes sense for the investor's situation. Sometimes it wins on coverage and price. Sometimes another carrier wins. We show you the comparison and you pick.

If you have heard about REInsurePro and want to know if it fits your portfolio, give us a call or send a list of your properties and we will run a quote.`,
  },
  {
    slug: "umbrella",
    question: "Do I need an umbrella policy for my rental properties?",
    answer: `For most active real estate investors, yes. An umbrella policy adds liability coverage above your underlying landlord, commercial, or auto policies and is one of the most cost-effective protections you can buy.

Standard underlying policies typically provide $500K to $1M of liability per property. That sounds like a lot until you see what a serious tenant injury claim costs in practice. Slips, falls, lead paint exposure, tenant assault claims, and other major liability events have produced multi-million dollar settlements.

An umbrella policy sits on top of your underlying coverage. If a claim exceeds the underlying limit, the umbrella picks up the next $1M, $2M, or $5M (depending on the limit you buy). It also covers some claims your underlying policies exclude (with conditions).

Cost: a $1M umbrella for a small portfolio runs $300 to $800 per year. For larger portfolios or higher net worth, $5M umbrellas in the $1,500 to $3,000 range are common.

What an umbrella requires: typically you need underlying liability of at least $500K to $1M on each property, plus liability on your personal autos and any other liability policies. The umbrella sits over all of them.

Who needs an umbrella most:

Investors with 5+ properties (more units, more exposure).

Investors with high-amenity properties (pools, hot tubs, playgrounds).

Investors with personal net worth that would be exposed in a tenant lawsuit.

Investors operating in higher-litigation states.

If you have 2 or more rentals and no umbrella, that is usually the first conversation we have. The premium is small relative to the protection.`,
  },
  {
    slug: "landlord-liability",
    question: "What liability coverage do I need as a landlord?",
    answer: `For most rental properties, $1M of premises liability per occurrence is the right starting point. Some investors carry $500K underlying with a $1M to $5M umbrella; others carry $1M underlying with an umbrella above. Either structure works.

Premises liability covers your exposure as the property owner if someone is injured on the property. The most common claims are slip and falls (icy steps, wet floors, broken handrails), dog bites (when allowed), tenant injury due to property defects, and guest injuries.

What the policy needs to include:

Bodily injury liability for medical costs, pain and suffering, and lost wages of an injured party.

Property damage liability for damage you cause to a tenant or guest's property.

Defense costs for legal expenses if you are sued. Most policies pay defense outside the policy limit, which matters because trial defense alone can run six figures.

Premises medical payments. A small no-fault coverage (typically $1K to $5K) that pays for minor injuries without a lawsuit. This is cheap to add and often resolves small situations before they escalate.

Coverage to add depending on the property:

Hired and non-owned auto if you ever drive for the rental business or have employees who do.

Employment practices liability if you have property managers or employees.

Habitational liability endorsements for assault and battery, sexual abuse, or communicable disease for multifamily properties (these are typically excluded by default).

Talk to us before you cut liability limits to save premium. The savings are small. The exposure is large.`,
  },
  {
    slug: "assault-battery",
    question: "What is assault and battery coverage for apartments?",
    answer: `Assault and battery coverage is a habitational liability endorsement that covers your exposure as a property owner if a tenant or guest is assaulted on your property. It is typically excluded from standard commercial property policies and has to be added as a specific endorsement.

The exposure: as a multifamily property owner, you have a duty to provide reasonable security. If a tenant or guest is assaulted on your property and the assault was foreseeable (poor lighting, broken locks, prior incidents on or near the property, inadequate security), you can be sued for negligent security.

Without assault and battery coverage, these claims are excluded by your liability policy. With the coverage in place, you have defense costs and indemnification up to the policy limit.

Standard market habitational policies often exclude or sublimit assault and battery to a small amount ($25K to $100K). For larger properties or properties in higher-crime areas, you typically want a higher sublimit ($500K to $1M) or to negotiate the exclusion off the policy.

Related exclusions to watch for:

Sexual abuse and molestation (SAM): a separate exclusion. Add it back as an endorsement for properties where the exposure is meaningful (particularly properties with vulnerable resident populations).

Communicable disease exclusion: post-COVID, most carriers added a CD exclusion. Some buy back or sublimit is available.

Lead paint, asbestos, mold: standard exclusions on most habitational policies. Endorsements available depending on the property condition.

If you own apartments, this is part of the conversation when we quote. We will tell you what is excluded by default and what is worth adding back.`,
  },
  {
    slug: "llc-trust",
    question: "How does insurance work for LLCs and trusts?",
    answer: `Title and insurance need to match. If you own a property in an LLC or a trust, the named insured on the policy needs to be the LLC or trust, not you personally. Otherwise the carrier may have grounds to deny a claim because the named insured does not have an insurable interest in the damaged property.

Common setups:

Single member LLC owns the property. Named insured: the LLC. You can add yourself as an additional insured for personal liability coverage.

Multi-member LLC. Named insured: the LLC, with all members typically named as additional insureds.

Revocable living trust holds title. Named insured: the trust, with you as trustee. Most carriers handle this routinely.

Land trust (Illinois style or similar). Named insured: the trustee for the benefit of the beneficiary.

Multiple LLCs (one per property). Each LLC needs its own policy or a portfolio policy that lists all the LLCs as named insureds. Some portfolio carriers handle multi-LLC structures cleanly. Others do not.

Things to get right:

Make sure the named insured exactly matches the recorded title. A misspelled LLC name can be enough for a coverage dispute.

If you transfer a property into a different entity, update the policy. We can usually issue an endorsement same day.

If you are the personal guarantor on a mortgage but the LLC owns the property, both should appear on the policy in the right roles.

If you operate through complex entity structures, send us your title documents and we will set the policy up correctly.`,
  },
  {
    slug: "lender-requirements",
    question: "What does my lender require for insurance?",
    answer: `Most lenders require a minimum dwelling coverage equal to the loan balance or full replacement cost of the building (whichever is greater), with the lender named as mortgagee on the policy and a 30-day notice of cancellation.

Specific requirements vary by lender, but the common list includes:

Dwelling coverage at full replacement cost or 100% of loan balance.

The lender named as mortgagee/loss payee on the policy. The lender's exact name and loan number must appear on the certificate.

A 30-day notice of cancellation in favor of the mortgagee. The carrier must notify the lender 30 days before any cancellation or non-renewal.

Liability coverage of at least $500K (some lenders require $1M).

Loss of rents or business income coverage equal to 12 months of gross rental income.

Flood coverage if the property is in a FEMA flood zone.

Wind/hail coverage where applicable.

Commercial loans often add: ordinance and law coverage, equipment breakdown, terrorism coverage (TRIA), and specific environmental endorsements.

Things to watch:

Lender escrow accounts. If your lender escrows insurance, the bill goes to them. Stay on top of renewal so they pay it on time. Late payment can cancel coverage.

Force placed insurance. If you let coverage lapse, the lender will buy "force placed" insurance and bill you. It is expensive (often 2-4x normal premium) and provides only the coverage the lender needs (not what you need). Avoid force placement.

Send us your loan documents and we will write the policy to satisfy the requirements without overpaying for unnecessary coverage. We also send the binder/certificate directly to your lender for closing.`,
  },
  {
    slug: "equipment-breakdown",
    question: "What is equipment breakdown coverage?",
    answer: `Equipment breakdown coverage pays for damage caused by mechanical or electrical breakdown of equipment installed at your property: HVAC, boilers, water heaters, electrical panels, kitchen equipment in multifamily, elevators, and similar systems.

Standard property policies do not cover mechanical breakdown. They cover damage from "covered causes of loss" (fire, wind, vandalism, water damage from sudden discharge, and similar). A boiler that breaks down on its own without an external cause is a maintenance issue, not a covered claim, on a standard policy.

Equipment breakdown changes that. The coverage applies when the breakdown of insured equipment causes physical damage to the equipment itself or to other property. Examples:

A commercial boiler ruptures and floods the basement of a small apartment building. Equipment breakdown pays to repair the boiler plus the resulting water damage.

An electrical panel arcs and starts a fire that damages the building. Equipment breakdown pays the panel repair plus the fire damage.

A walk-in cooler in a mixed-use building fails and the owner of the food business in the unit loses inventory. Equipment breakdown can pay both the equipment and the business income loss.

Cost: usually $100 to $500 per year per property, depending on the building and the equipment. For multifamily and commercial properties, it is one of the highest value-per-dollar coverages on the policy.

Add it whenever the property has commercial or shared equipment (HVAC serving multiple units, central water heating, elevators, walk-in coolers). For single family rentals, it is optional but cheap.

We include equipment breakdown as a standard quote for multifamily and commercial properties. If you have a multifamily and your current policy does not include it, ask us about adding it.`,
  },
  {
    slug: "flipping",
    question: "How do I insure a property I'm flipping?",
    answer: `For a flip, you typically need either a vacant property/rehab policy for shorter cosmetic flips or a builders risk policy for full gut rehabs and major renovations. Standard landlord forms do not work for active rehab projects.

Two scenarios:

Scenario 1: Cosmetic flip. Paint, flooring, kitchen and bath updates, minor electrical or plumbing. The structure is unchanged. A vacant/rehab dwelling policy with a renovation endorsement covers this. The policy stays in place during the rehab. When you sell the property, you cancel coverage. If you decide to hold and rent, we transition to a standard landlord form.

Scenario 2: Gut rehab or structural renovation. Walls coming down, additions, foundation work, complete electrical and plumbing replacement. The structure is changing. A builders risk policy is the right form. Coverage applies to the structure during construction, the value of materials on site, and "soft costs" (architect, permits, financing) if a covered loss delays the project.

Important specifics for flippers:

Time horizon. Some carriers want to know your project timeline. Many builders risk policies are written for 6, 9, or 12 months and need to be extended if the project runs long.

Vacant during rehab. Even if it is a flip, the property has the same vacancy and theft exposure as any vacant building. Make sure the policy covers vandalism, theft of materials, and copper/scrap theft (a common flipper claim).

Liability during rehab. If a contractor or visitor is injured on the property during the rehab, you need general liability. Add it to the rehab policy.

Active flippers should consider a portfolio rehab policy that handles multiple flips on one master policy. We write these regularly. Call us with the details and we will set you up.`,
  },
  {
    slug: "builders-risk",
    question: "What is builders risk insurance?",
    answer: `Builders risk insurance covers a building during construction or major renovation. It protects the structure, the materials on site, and certain "soft costs" if the project is damaged or delayed by a covered loss.

A typical homeowner or landlord policy is designed for an existing, occupied or completed structure. During construction, the property has different exposures: open framing, exposed materials, contractor activity, theft of materials, and no certificate of occupancy. Standard policies often exclude or limit coverage during active construction. Builders risk fills the gap.

Coverage typically includes:

The building under construction, up to its completed value.

Materials, supplies, and equipment intended to become part of the building, while on site or in transit.

Soft costs: architect fees, permits, additional financing costs if a covered loss delays the project completion.

Optional: business income loss for projects where the building was scheduled to start producing rent on a specific date.

Builders risk does not cover:

Tools and equipment owned by the contractor (their inland marine policy covers that).

Liability claims (you need a general liability policy for that, or coverage from the contractor).

Faulty workmanship (the policy covers damage from a covered loss, not damage from a contractor doing something wrong).

When does builders risk start and end? It starts at the beginning of construction and ends when the building is complete and ready for occupancy. At completion, it is replaced by a permanent landlord, commercial, or owner occupied policy. We coordinate the transition so there is no gap.

Cost: typically 1-3% of the project value per year, depending on the project type and location. For a $200K renovation budget, expect $2K to $6K for the builders risk policy.

Send us the project details and we will quote it.`,
  },
  {
    slug: "add-remove-properties",
    question: "How do I add and remove properties from my policy?",
    answer: `On a portfolio or scheduled investor policy, you can add and remove properties mid-term with a quick endorsement. Most updates take 24 to 48 hours and are pro-rated for premium.

To add a property:

Send us the address, year built, square footage, construction type (frame, masonry, mixed), occupancy (rented, vacant, rehab), and replacement cost estimate.

We send the request to the carrier as an endorsement. The carrier confirms acceptance and issues a binder.

You receive a certificate of insurance and a confirmation of the new premium.

To remove a property:

Send us the property address and the date the property was sold or transferred.

We endorse the property off the policy effective on the sale date.

You receive a return premium credit (pro-rated to the policy term).

Things to know:

Same-day binding. For most properties on most carriers, we can bind a new property the same business day if you call before noon Pacific.

Acquisition acquired property clauses. Some portfolio policies include automatic coverage for newly acquired properties for the first 30 to 90 days, even before you formally add them. Check your policy. This is a useful safety net for active investors.

Sold property tail coverage. Once a property is sold, you may want to keep "tail" coverage for prior acts liability (claims that arise after the sale but relate to events that happened while you owned it). Talk to us about this if you sell frequently.

Mid-term value changes. If you renovate a property and the replacement cost increases, update the dwelling limit. Otherwise you may be underinsured at claim time.

We make this easy. Email or text the change and we handle the paperwork.`,
  },
  {
    slug: "tenant-stops-paying",
    question: "What happens to my coverage if a tenant stops paying rent?",
    answer: `Your insurance is unaffected if a tenant stops paying rent. The policy covers physical damage and liability; it does not cover the loss of rental income from a non-paying tenant.

A nuance: if a tenant stops paying and you eventually evict them, the property may go vacant for a period while you find a new tenant. That vacancy can trigger your policy's vacancy clause and reduce coverage for vandalism, theft, water damage, and certain other perils after 30 or 60 days (carrier specific). See the vacancy FAQ above.

What does cover unpaid rent or eviction costs:

Rent guarantee insurance, also called landlord rental income protection. A separate product (usually written by specialty carriers) that pays rent if a tenant defaults. Typically requires tenant screening at lease signing and has waiting periods and limits.

Tenant eviction defense, sometimes bundled with landlord legal expense coverage. Pays for the legal cost of evicting a non-paying or problem tenant.

These are separate from your property insurance. Most landlord policies do not include them.

Loss of rents on your standard policy only pays when a covered cause of loss (fire, water damage, etc.) makes the property uninhabitable. It does not pay because a tenant simply stopped paying.

Practical guidance:

Strong tenant screening at the start. Most rent loss problems trace back to weak screening.

A rent guarantee product if you have multiple rentals and want to protect the income. It is not free, but for some investors the certainty is worth it.

If a property goes vacant after eviction, call us to add a vacancy permit so your standard coverage stays in place during the gap.

Eviction is a property management issue, not an insurance issue. Talk to your attorney for legal options and we will keep the property covered.`,
  },
  {
    slug: "acv-vs-rcv",
    question: "What is the difference between actual cash value and replacement cost?",
    answer: `Actual cash value (ACV) pays the depreciated value of damaged property at the time of loss. Replacement cost (RCV) pays the cost to repair or replace the property with materials of like kind and quality, without deducting depreciation.

Example: a 20 year old roof is destroyed by a covered windstorm.

ACV pays the depreciated value of the old roof, which after 20 years might be $4,000 against a replacement cost of $14,000. You pay the $10,000 difference out of pocket.

RCV pays the full $14,000 to replace the roof with a new equivalent roof, less your deductible.

For investor properties:

RCV on the dwelling is almost always the right choice. The premium difference is small. The claim difference is large.

RCV on contents (appliances, fixtures, owner provided furnishings) is typically optional and worth the cost.

Some carriers settle the RCV claim in two steps: they pay ACV upfront and then release the depreciation holdback once the repair is complete and you submit the receipts. Plan for the cash flow during the repair period.

Some specific scenarios where ACV applies even on RCV policies:

Roofs in certain wind/hail prone states where carriers have moved to ACV-only roof settlements for older roofs (10+ years).

Cosmetic damage exclusions (matching, color, etc.) that may apply on some policies.

Fences, sheds, and other outbuildings sometimes settle on ACV by default.

What to do:

Always carry RCV on the dwelling. Confirm the limit equals or exceeds 100% of replacement cost. Update annually as construction costs rise.

Watch for roof settlement endorsements. If the carrier has moved your roof to ACV after a certain age, factor that into your reserve planning.

Ask us at renewal: "Is everything still RCV?" Some carriers quietly change the basis at renewal.

The right answer is RCV. Pay the small premium difference and sleep better.`,
  },
  {
    slug: "bundle-vs-separate",
    question: "Do I need separate coverage for each property or can I bundle?",
    answer: `Both work. The right choice depends on the size of your portfolio, the variety of property types, and which carriers you use.

Separate (individual) policies. Each property is its own policy with its own renewal date, deductible, dwelling limit, and carrier. Best for:

Small portfolios (1 to 3 properties).

Properties in different states with different insurance markets.

Unusual properties (high value, very old, specialty asset class) that need a different carrier than the rest of your portfolio.

Bundled (portfolio) policy. All properties on one policy with one renewal date and (usually) one carrier. Best for:

Portfolios of 5+ properties.

Investors who buy and sell frequently and want a streamlined add/remove process.

Investors who want to align renewal dates and simplify administration.

Most active investors end up bundling once they hit 5 or 6 doors. The administrative time saved is significant. Quoting and managing one renewal beats quoting and managing 10.

Things to know:

Premium difference is usually modest. Bundling does not always save money on premium directly, but it often saves money indirectly through carrier discounts for portfolio business and through the time saved.

You can mix structures. A common setup is one portfolio policy for the bulk of your residential rentals, plus separate policies for unusual properties that the portfolio carrier will not write.

Switching from separate to bundled can be done at renewal of any one of your existing policies. Time it so you do not pay a cancellation fee on the others.

If you have 4+ properties on separate policies, ask us about consolidating. We can quote a portfolio policy and show you the comparison.`,
  },
  {
    slug: "find-agent",
    question: "How do I find an insurance agent who specializes in real estate investors?",
    answer: `Look for an independent agency that writes real estate investor business as a primary line, not as a side product. Most general insurance agents do not understand investor coverage and will write you on a standard form that is not designed for the way you actually use the property.

What to look for:

Independent agency, not captive. A captive agent (State Farm, Farmers, Allstate) writes one carrier's products. An independent agency works with many carriers and shops your business across them. For investor coverage, you want access to multiple markets.

Investor specialization. Ask: how many real estate investor accounts do you write? How many doors? Which carriers do you work with for investor business? An agent who can rattle off REInsurePro, Steadily, Obie, and a few standard markets is a real specialist.

Asset class understanding. Ask about your specific asset class. STR, multifamily, rehab, commercial. The agent should be able to talk through coverage specifics without looking it up.

Carrier panel size. For investor business, you want at least 6 to 10 carrier markets. More is better. We work with 10+.

Direct communication. Real estate investors need fast certificates of insurance, mid-term endorsements when properties change, and quick turnaround at renewal. Look for an agent who answers the phone and texts.

Red flags:

Generic intake forms that do not ask about asset class, vacancy, or rehab status.

Quotes that come back at homeowner premiums (because they wrote you on the wrong form).

No mention of investor specific carriers.

A pitch that focuses on your home and auto bundle when you came in for rental coverage.

What we do: real estate investor insurance is the entire business. We work with 10+ carrier markets and we know which ones write your asset class. Call or text 541-681-8793 with your portfolio and we will show you the difference.`,
  },
];
