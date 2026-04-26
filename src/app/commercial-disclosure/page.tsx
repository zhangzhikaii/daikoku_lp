export default function CommercialDisclosure() {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-6 py-12">
      <main className="max-w-2xl mx-auto">
        {/* Title */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Commercial Disclosure</h1>
          <h2 className="text-2xl font-semibold text-gray-600">
            特定商取引法に基づく表記
          </h2>
        </header>

        {/* Content */}
        <div className="space-y-8 leading-relaxed">
          <Section title="Legal Name">
            We will disclose without delay if requested
          </Section>

          <Section title="Address">
            We will disclose without delay if requested
          </Section>

          <Section title="Phone Number">
            We will disclose without delay if requested
          </Section>

          <Section title="Email Address">joshua.pandu96@gmail.com</Section>

          <Section title="Head of Operations">Joshua Pandu</Section>

          <Section title="Price">
            Prices are displayed on each product page. Taxes are
            included/excluded as indicated.
          </Section>

          <Section title="Additional Fees">
            No additional fees will be incured, as everything (tolls, gas, car)
            are all included in the booking price
          </Section>

          <Section title="Accepted Payment Methods">Credit cards only.</Section>

          <Section title="Payment Period">
            Payment is processed at the time of purchase.
          </Section>

          <Section title="Delivery Times">
            Service will be provided to the customer as per the booked slot.
          </Section>

          <Section title="Exchanges & Returns Policy">
            <div className="space-y-6">
              {/* 1 */}
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  1. Customer Cancellations & Refunds
                </h4>
                <p className="mb-3">
                  We understand that travel plans can change. To receive a
                  refund, please notify us via email at{" "}
                  <span className="font-medium">joshua.pandu96@gmail.com</span>{" "}
                  within the following timeframes:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>72 Hours or More Before Tour Start:</strong> Full
                    refund (minus any non-refundable transaction/credit card
                    processing fees).
                  </li>
                  <li>
                    <strong>24 to 72 Hours Before Tour Start:</strong> 50%
                    refund of the total booking price.
                  </li>
                  <li>
                    <strong>Less than 24 Hours Before Tour Start:</strong> No
                    refund will be issued.
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  2. Rescheduling & Exchanges
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Advance Requests:</strong> Rescheduling requests
                    made more than 48 hours in advance will be accommodated free
                    of charge, subject to vehicle and guide availability.
                  </li>
                  <li>
                    <strong>Last-Minute Requests:</strong> Requests made within
                    24 hours of the tour start time will be treated as a new
                    booking. The original booking will follow the cancellation
                    policy above.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  3. The &quot;Daikoku Clause&quot;
                </h4>
                <p className="mb-2">
                  The JDM scene is organic and subject to local regulations.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Police Closures:</strong> On rare occasions, the
                    Japanese Highway Police may temporarily close access to the
                    Daikoku Parking Area (PA) due to overcrowding or noise
                    control.
                  </li>
                  <li>
                    <strong>Our Guarantee:</strong> If a specific location is
                    closed, the tour will continue to an alternative back-up
                    destination.
                  </li>
                  <li>
                    <strong>Policy:</strong> No refunds or partial refunds are
                    issued due to police-mandated closures, as the tour, vehicle
                    access, and expert commentary are still provided.
                  </li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  4. Weather & Force Majeure
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Tours operate <strong>&quot;Rain or Shine&quot;</strong>. The car
                    community is active in all weather conditions.
                  </li>
                  <li>
                    If we determine that weather conditions are unsafe (e.g.,
                    typhoon warnings or extreme snow), we will offer a{" "}
                    <strong>full refund</strong> or a{" "}
                    <strong>complimentary reschedule</strong>.
                  </li>
                </ul>
              </div>

              {/* 5 */}
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  5. Late Arrivals & No-Shows
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Punctuality:</strong> Your guide will wait for a
                    maximum of 15 minutes past the scheduled pick-up time.
                  </li>
                  <li>
                    <strong>No-Show:</strong> If the group is not present after
                    15 minutes, the tour will be marked as a &quot;No-Show&quot; and no
                    refund will be issued.
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}

/* Reusable Section Component */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold border-b pb-1">
        {title}
      </h3>
      <div className="text-gray-800 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
