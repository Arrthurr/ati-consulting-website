export function About() {
  return (
    <section
      className="bg-[#f5ece0] py-section-padding-mobile md:py-section-padding-desktop px-gutter"
      id="about"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 md:col-span-5 md:order-2">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-4 bg-secondary-container/20 blur-2xl rounded-[60px]" />
            <img
              alt="Angela T. Ingram"
              className="relative w-full aspect-[3/4] object-cover border-4 ambient-shadow rounded-tl-[120px] rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] translate-y-[20px] scale-100 object-top"
              src="/Angela_T_Ingram-Headshot.png"
              style={{ borderColor: "rgb(61, 90, 122)" }}
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-7 md:order-1">
          <h2 className="font-headline-lg text-headline-lg md:font-display md:text-display text-primary mb-2">
            Angela T. Ingram, MBA
          </h2>
          <span className="font-display text-xl text-secondary mb-6 block">
            Principal Culture Consultant | Leadership & Engagement Strategist
          </span>
          <div className="prose prose-lg text-on-surface-variant font-body-md space-y-4 font-body-lg">
            <p className="font-body-lg text-body-lg">
              <strong>Angela T. Ingram</strong> is a respected culture and
              communication leader and former media executive with more than four
              decades of experience in communication, marketing and public
              engagement. She has guided high-performing teams and built trusted
              relationships with media decision-makers and stakeholder communities
              nationwide. Angela is recognized for designing award-winning
              engagement initiatives and creating platforms to empower leaders.
            </p>
            <p className="font-body-lg text-body-lg">
              As Principal Culture Consultant at ATI Consulting, Angela partners
              with leaders and teams to strengthen culture through strategic
              communication, coaching, facilitation, leadership development and
              change management. She guides organizations to lead change with
              clarity, connection and purpose. Known for building trust and
              meaningful partnerships, she has led high-impact engagement
              initiatives, elevated executives, and cultivated collaborative
              networks across business, civic and nonprofit communities.
            </p>
            <p className="font-body-lg text-body-lg">
              Angela earned a Master of Business Administration, a Master of
              Science in Business Communication with specializations in
              Organizational Leadership and Healthcare Management, and a Bachelor
              of Science in Communication, all from Spalding University. She is
              also the co-founder of the iServe Women&apos;s Ministry, where she
              encourages women to grow in faith and use their spiritual gifts to
              glorify God, and facilitates a weekly virtual Bible Study with
              women across the U.S. She lives in the South Suburbs of Chicago
              with her husband, Mark.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
