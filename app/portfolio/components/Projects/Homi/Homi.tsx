import { FeatureItem } from "./_components/FeatureItem";
import { Carousel } from "@mantine/carousel";

function Homi() {
  return (
    <div className="w-full h-full">
      <Carousel
        height={600}
      >
        <Carousel.Slide key={0}>
          <FeatureItem
            title="Simple Signup"
            text="It takes 1 minute to create an account."
            src="/homi/0.simple-signup.png"
          />
        </Carousel.Slide>
        <Carousel.Slide key={1}>
          <FeatureItem
            title="Verified Profiles"
            text="Only flatowners and residents can sign up for an account."
            src="/homi/1.verified-profiles.png"
          />
        </Carousel.Slide>
        <Carousel.Slide key={2}>
          <FeatureItem
            title="Intuitive Dashboard"
            text="Easily cutomisable dashboard provides access to main features."
            src="/homi/2.dashboard.png"
          />
        </Carousel.Slide>
        <Carousel.Slide key={3}>
          <FeatureItem
            title="Management Newsletter"
            text="Keep informed of the building news."
            src="/homi/3.news-management-letters.png"
          />
        </Carousel.Slide>
        <Carousel.Slide key={4}>
          <FeatureItem
            title="Discussions"
            text="Stay in touch with your neighbours and talk about what's important."
            src="/homi/4.tenants-discussions.png"
          />
        </Carousel.Slide>
        <Carousel.Slide key={5}>
          <FeatureItem
            title="Intercom"
            text="You can leave a message for any flat, without leaving your flat."
            src="/homi/5.easily-contact-neighbours.png"
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export const homi = {
  component: <Homi />,
  description: (
    <>
      <div className="flex gap-4 flex-col divide-y px-8">
        <div className="space-y-4">
          <div className="text-orange-500 text-2xl font-bold">
            <span className="text-3xl text-red-400">HOMI</span>{" "}
            - unite and conquer!
          </div>
          <div className="text-slate-600 text-lg">
            Personal project - a mobile app to bring neighbours together.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 py-8">
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <b>Pain point:</b>{" "}
              I live in a block of flats (~90 flats). Every year our management
              company raises service charge, whilst lowering the level of
              services. It's difficult to take action agains this as neighbours
              have no means of simple communication between them and with the
              management company.
            </div>
            <div>
              <b>Hypothesis A:</b>{" "}
              Neighbours (and small communities) do not have time/energy to
              spend on joint action (reading docs/shareholder's
              meetings/discussions etc) but they would be able to vote for a set
              of representatives. A digital proof of elections would be
              sufficient for the representatives to act on behalf of the
              community in relations with 3rd parties.
            </div>
            <div>
              <b>Hypothesis B:</b>{" "}
              neighbours might benefit from accessing a simple summary of their
              rights/obligations under their Leases, as well as their rights as
              Shareholders. Voting should be done in a form of a simple
              question: "Who do you vote for to be elected as Chairman of
              Resident Association? (A,B,C)" + link to the RAD. By casting vote
              they confirm they had read and agreed to the RAD.
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <b>Validation:</b>{" "}
              WhatsApp group with ~25 members. Used mainly to vent about
              management company's actions. ~20% members active. No actions
              taken, no documents read/discussed (no evidence that anyone read
              their Lease). Resident Association Draft (hereinafter "RAD", 3
              pages long) is too long/difficult/not interesting to read and
              vote.
            </div>
            <div>
              <b>Scaling:</b>{" "}
              unclear market size, but the idea to leverage resources of local
              communities to access better prices from the "outside world"
              service providers/merchants/businesses seems plausible.
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};


        // <Carousel.Slide key={6}>
        //   <FeatureItem
        //     title="Meters"
        //     text="Have access to your meter readings."
        //     src="/homi/6.meters.png"
        //   />
        // </Carousel.Slide>
        // <Carousel.Slide key={7}>
        //   <FeatureItem
        //     title="Inbox"
        //     text="All chats look familiar, no more emails or paper mails."
        //     src="/homi/7.inbox.png"
        //   />
        // </Carousel.Slide>
        // <Carousel.Slide key={9}>
        //   <FeatureItem
        //     title="Mobile Consierge"
        //     text="Your direct line to consierge services."
        //     src="/homi/9.mobile-consierge.png"
        //   />
        // </Carousel.Slide>
        // <Carousel.Slide key={10}>
        //   <FeatureItem
        //     title="Your Opinion Matters"
        //     text="You can leave a message for any flat, without leaving your flat."
        //     src="/homi/10.surveys.png"
        //   />
        // </Carousel.Slide>
        // <Carousel.Slide key={11}>
        //   <FeatureItem
        //     title="Invoicing and Payments"
        //     text="All invoices and payments to management company in one place."
        //     src="/homi/11.invoicing-payments.png"
        //   />
        // </Carousel.Slide>
        // <Carousel.Slide key={12}>
        //   <FeatureItem
        //     title="Management Reports"
        //     text="Receive timely and comprehensive reports from the Management Company."
        //     src="/homi/12.management-reports.png"
        //   />
        // </Carousel.Slide>
        // <Carousel.Slide key={13}>
        //   <FeatureItem
        //     title="Pool Resources"
        //     text="Leverage your community - pool resources to unlock greater value for all."
        //     src="/homi/13.resource-pooling.png"
        //   />
        // </Carousel.Slide>
