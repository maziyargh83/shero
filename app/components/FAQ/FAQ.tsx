import { Accordion } from "~/components/Accordion";

export const FAQ = () => {
  return (
    <div className="mt-16 md:mt-32">
      <Accordion title="I'm new to the Shero app, how do I get started?">
        <p className="text-2xl font-medium">
          answer answer answer answer answer answer answer answer answer answer
          answer answer answer answer answer answer answer answer answer answer
          answer answer answer
        </p>
      </Accordion>
      <Accordion title="What are benefits of Femometer Website Membership?">
        <p className="text-2xl font-medium">
          answer answer answer answer answer answer answer answer answer answer
          answer answer answer answer answer answer answer answer answer answer
          answer answer answer
        </p>
      </Accordion>
      <Accordion title="How can I cancel my membership?">
        <p className="text-2xl font-medium">
          answer answer answer answer answer answer answer answer answer answer
          answer answer answer answer answer answer answer answer answer answer
          answer answer answer
        </p>
      </Accordion>
    </div>
  );
};
