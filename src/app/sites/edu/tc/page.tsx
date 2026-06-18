import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions – Garnish Music Production School",
  description:
    "Read the fair and reasonable Terms & Conditions for Garnish Ent. LLC courses, including cancellation, refund, liability waiver, and jurisdiction policies.",
};

export default function EduTcPage() {
  return (
    <>
      <Header />
      <div className="pt-[88px] min-h-screen bg-[#fafafa]">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-14 text-[#333333]">

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-10">
            Our fair and reasonable Terms:
          </h1>

          <div className="space-y-8 text-[15px] leading-relaxed">

            {/* Location of Courses */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Location of Courses
              </h2>
              <p>
                All courses are delivered at Garnish Ent. LLC unless stated
                otherwise. Please check the course details on our website both
                when booking and shortly before your course starts. Learners are
                responsible for confirming their course location in advance.
              </p>
            </div>

            {/* Use of Garnish Ent. LLC's Property */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Use of Garnish Ent. LLC&apos;s Property
              </h2>
              <p>
                Learners must ensure that Garnish Ent. LLC&apos;s equipment and
                property are not damaged, lost, or stolen due to their actions or
                failure to act responsibly. This responsibility also extends to
                any guests learners may invite to the premises.
              </p>
              <p className="mt-3">
                If any equipment or property is damaged, lost, or stolen as a
                result of a learner&apos;s or guest&apos;s actions, the learner agrees to
                cover all reasonable costs for replacement or repairs.
              </p>
            </div>

            {/* Student Conduct */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Student Conduct
              </h2>
              <p>
                We expect students to treat staff, facilities, and classmates
                with respect. Garnish Ent. LLC reserves the right to exclude or
                expel any student for unacceptable behavior, with no refund
                issued. Decisions are made at the discretion of management.
              </p>
            </div>

            {/* Course Timetable */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Course Timetable
              </h2>
              <p>
                Garnish Ent. LLC reserves the right to modify course dates,
                times, and content if necessary.
              </p>
            </div>

            {/* Cancellation and Refund Policy */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Cancellation and Refund Policy
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  A learner&apos;s place is secured upon full payment or registration
                  fee for programs.
                </li>
                <li>The registration fee is non-refundable.</li>
                <li>
                  For cancellations made more than 72 hours before the course
                  start date, a 90% refund will be issued (10% is retained to
                  cover admin and credit card fees).
                </li>
                <li>
                  For cancellations made fewer than 72 hours before the course
                  starts, no refund will be issued.
                </li>
                <li>
                  If, in the unlikely event, Garnish Ent. LLC has to cancel a
                  course, we will either offer a mutually agreeable alternative
                  or issue a prorated refund, based on the remaining course
                  duration.
                </li>
                <li>
                  For private instruction discounted block bookings, if a learner
                  cancels mid-term, they will be charged for the hours they have
                  used at the best possible rate for that number of hours, plus
                  booking fees.
                </li>
              </ul>
            </div>

            {/* Special Requirements */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Special Requirements
              </h2>
              <p>
                Please inform us in advance of any special physical or medical
                requirements so we can try to accommodate you.
              </p>
            </div>

            {/* Learners' Own Equipment */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Learners&apos; Own Equipment
              </h2>
              <p>
                Learners are responsible for any equipment they bring to Garnish
                Ent. LLC premises. Learners must ensure that any software they
                use on-site is legal and properly licensed.
              </p>
            </div>

            {/* Photo & Video Release */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Photo &amp; Video Release
              </h2>
              <p>
                By enrolling, you grant Garnish Ent. LLC irrevocable,
                non-exclusive, royalty-free permission to use images and footage
                of you for promotional purposes in all media formats worldwide,
                indefinitely.
              </p>
            </div>

            {/* Private Instruction and Mentor Hours */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Private Instruction and Mentor Hours
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Booked private instruction classes must be paid for unless
                  cancelled at least 24 hours in advance.
                </li>
                <li>
                  Private instruction block booking hours expire 12 months from
                  purchase.
                </li>
                <li>
                  Academy mentoring hours expire 6 months after the
                  academy&apos;s end date.
                </li>
              </ul>
            </div>

            {/* Garnish Ent. LLC Liability and Policy */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Garnish Ent. LLC Liability and Policy
              </h2>
              <p className="mb-2">Garnish Ent. LLC:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Accepts no responsibility for the loss, damage, or theft of
                  personal belongings.
                </li>
                <li>
                  Reserves the right to alter advertised instructors at any time.
                </li>
                <li>
                  May cancel courses or reschedule bookings as necessary; students
                  unable to attend rescheduled dates will receive a refund or
                  credit.
                </li>
                <li>
                  Reserves the right to vary course materials and decline any
                  application or booking without explanation.
                </li>
                <li>
                  Is not responsible for the quality of services or products
                  provided by third-party advertisers or vendors.
                </li>
              </ul>
            </div>

            {/* Attorneys' Fees Provision */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Attorneys&apos; Fees Provision
              </h2>
              <p>
                In the event of litigation arising from these terms, the
                prevailing party is entitled to recover all reasonable costs,
                including court fees, attorneys&apos; fees, and other related
                expenses.
              </p>
            </div>

            {/* Liability Waiver */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Liability Waiver
              </h2>
              <p className="mb-3">
                By participating in Garnish Ent. LLC activities, you:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Acknowledge and accept the risks involved, including injury or
                  death.
                </li>
                <li>
                  Release Garnish Ent. LLC from liability for any loss, damage,
                  or injury sustained, regardless of cause, to the fullest extent
                  allowed by law.
                </li>
                <li>
                  Agree to indemnify Garnish Ent. LLC from any costs resulting
                  from your actions.
                </li>
              </ul>
              <p className="mt-4">
                This waiver applies to your family, heirs, assigns, and
                representatives. This agreement is governed by California law,
                and disputes must be filed in California courts.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Severability
              </h2>
              <p>
                If any provision of this contract is deemed unenforceable, the
                remaining terms shall remain in full effect.
              </p>
            </div>

            {/* Law and Jurisdiction */}
            <div>
              <h2 className="font-bold text-[17px] text-[#1a1a1a] mb-2">
                Law and Jurisdiction
              </h2>
              <p>
                These Terms and Conditions are governed by US law, with
                California courts holding exclusive jurisdiction over any
                disputes.
              </p>
              <p className="mt-3">
                By taking a course at Garnish Ent. LLC, you confirm you have
                read and understood these terms. Participants under 18 must have
                a parent or guardian agree to these terms on their behalf.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
