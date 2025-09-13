import Foot from "../Foot";

export default function PetSurgery() {
  return (
    <>
      <section>
        <div className="relative flex flex-col justify-center text-start gap-10 px-4 sm:mx-14 my-28">
          <h2 className="font-[Poppins] font-medium text-[20px] sm:text-[25px]">
            Services › Pet Surgery
          </h2>

          <img
            src="/PS.png"
            className="w-full max-w-[1350px] h-auto object-cover"
          />

          <div className="flex flex-col font-[Poppins] gap-10 text-left w-full max-w-[1150px]">
            {[
              {
                q: "What are the most common surgeries performed on pets?",
                a: "Surgeries at East Orlando Animal Hospital are classified as either elective or urgent care surgical procedures. In this post, our Orlando vets list the most common surgeries, our standards of care, and factors for choosing to proceed with surgery for your pet.",
              },
              {
                q: "What Should I Know If My Vet Has Recommended Surgery?",
                a: `We understand it can be daunting — even overwhelming — to learn that your pet needs surgery.
                At East Orlando Animal Hospital, our vets do not decide to recommend surgery lightly. If a procedure is being recommended, you can be assured that it's in your pet's best interest. It's also important that you understand why a surgical procedure is being recommended and that you feel comfortable making the right choices about your pet's health.
                Veterinary surgical procedures are categorized as either urgent or elective procedures.`,
              },
              {
                q: "Most Common Elective Pet Surgery Procedures",
                a: (
                  <>
                    <p className="mb-4">
                      We often perform these types of procedures at our animal hospital:
                    </p>
                    <ul className="list-disc px-6 sm:px-10 text-[16px] sm:text-[20px]">
                      <li>Spay</li>
                      <li>Neuter</li>
                      <li>Dental extractions</li>
                      <li>Benign skin growths</li>
                    </ul>
                    <p className="mt-6 mb-4">Most Common Urgent Care Pet Surgery Procedures:</p>
                    <ul className="list-disc px-6 sm:px-10 text-[16px] sm:text-[20px]">
                      <li>Skin abscesses or lacerations</li>
                      <li>Fracture repair</li>
                      <li>Internal bleeding</li>
                      <li>Intestinal obstruction due to foreign body</li>
                      <li>Torn cruciate or ACL ruptures</li>
                      <li>Mass or tumor removal</li>
                      <li>Bladder stones or urethral blockages</li>
                      <li>Malignant skin tumors</li>
                    </ul>
                  </>
                ),
              },
              {
                q: "Most Pet Surgeries Are Deemed Low-Risk",
                a: `We perform elective surgeries when your pet is considered generally healthy, which reduces complications. That said, even urgent care pet surgery has become significantly lower risk today due to improvements in modern veterinary medicine and changes in standards of veterinary care. Our extensive list of pre-surgical protocols and procedures such as exams, pre-surgery medication, anesthesia, pain control measures, and monitoring of vital signs, in addition to protocols during surgery such as monitoring of vital signs (heart rate, blood pressure, oxygen levels, body temperature, CO2 levels) reduce risk. We also have a dedicated nurse to continuously monitor anesthesia and your pet's condition.`,
              },
              {
                q: "Our Orlando Vets Follow the Highest Standards of Veterinary Care",
                a: (
                  <>
                    <p>
                      At East Orlando Animal Hospital, we are committed to providing the highest standards of excellence in veterinary medicine. The procedures we follow when it comes to surgery ensure that we're able to deliver excellent and conscientious care for your pet. Our surgical protocols include:
                    </p>
                    <br />
                    <p><span className="text-[#808080]">Pre-surgical assessments.</span> Our team will confirm the specifics of the procedure, complete a physical examination of the patient, and make sure blood tests have been completed and reviewed by the vet to determine if your pet faces any risk of anesthesia-related complications.</p>
                    <br />
                    <p><span className="text-[#808080]">Dedicated surgical suites.</span> Surgeries are performed in a dedicated surgical suite within our animal hospital. This room is kept completely sterile to prevent infection and cross-contamination.</p>
                    <br />
                    <p><span className="text-[#808080]">Surgical attire.</span> Our staff wears disposable caps and masks at all times when they are in the surgical suite. Those involved in the procedure itself will also wear sterile gowns and single-use gloves.</p>
                    <br />
                    <p><span className="text-[#808080]">Sterile packs and equipment.</span> We carefully clean, sterilize and wrap our surgical instruments and equipment before every surgery.</p>
                  </>
                ),
              },
              {
                q: "Making the Choice to Proceed With Pet Surgery",
                a: (
                  <>
                    <p>
                      Before you decide whether to proceed with surgery, your vet will review potential complications and all factors you should consider when deciding what is best for your pet. Factors to consider when choosing whether to move ahead with pet surgery include:
                    </p>
                    <ul className="list-disc px-6 sm:px-10 text-[16px] sm:text-[20px] mt-4">
                      <li>Your pet's overall health and age</li>
                      <li>Potential complications from surgery</li>
                      <li>Potential outcome if surgery is not performed</li>
                      <li>Recovery time and post-op care at home after surgery</li>
                    </ul>
                    <p className="mt-6">
                      While it's up to you whether to have your pet undergo recommended surgery, our veterinary team will provide you with all facts and potential outcomes to assist you in making an informed and compassionate decision that's in the best interests of both you and your pet.
                    </p>
                  </>
                ),
              },
            ].map((item, index) => (
              <div key={index}>
                <h2 className="font-semibold text-[20px] sm:text-[30px] leading-snug">
                  {item.q}
                </h2>
                <div className="font-normal text-[16px] sm:text-[25px] leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center w-full bg-cover bg-[url('/PGbg.png')] bg-no-repeat my-44 py-56 px-4">
          <p className="text-center font-[Poppins] font-normal text-[20px] sm:text-[33px] w-full max-w-[1158px]">
            <span className="font-bold">Do you have questions about your pet's upcoming surgery?</span><br />
            Our veterinary team is happy to address any concerns you may have <span className="font-bold">Contact Us</span> to book a consultation.
          </p>
        </div>
      </section>

      <Foot />
    </>
  );
}
