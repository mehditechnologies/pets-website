import Foot from "../Foot";

export default function EmergencyCare() {
  return (
    <>
      <section>
        <div className="relative flex flex-col justify-center text-start gap-10 px-4 sm:mx-14 my-28">
          <h2 className="font-[Poppins] font-medium text-[20px] sm:text-[25px]">
            Services › Emergency Care
          </h2>

          <img
            src="/EC.png"
            className="w-full max-w-[1350px] h-auto object-cover"
          />

          <div className="flex flex-col font-[Poppins] gap-10 text-left w-full max-w-[1150px]">
            {[
              {
                q: "What are some common symptoms that could indicate a pet emergency?",
                a: "Breathing difficulties, limping, vomiting, bleeding, and weakness are some of the many common symptoms of emergency cases. Visit our Pet Emergency page for more detailed information about these and other emergency symptoms.",
              },
              {
                q: "Do I need to make an appointment to bring my pet to the Animal Emergency Center?",
                a: "No. Because we are an emergency practice, we operate primarily on a walk-in basis, so making an appointment is not necessary. However, it is always beneficial to call in advance, if possible, so we can prepare for your pet’s arrival.",
              },
              {
                q: "What items do I need to bring with me when I come in with my pet?",
                a: "We ask that you bring your pet’s medications and your photo ID if you will be paying by check or credit card.",
              },
              {
                q: "What will happen when I arrive to the Animal Emergency Center with my pet?",
                a: "When you arrive, you and your pet will be checked into our computer system, then placed in an examination room as soon as one is available. If your pet is experiencing a life-threatening emergency, they will be seen immediately. You may be asked to sign an emergency consent form.",
              },
              {
                q: "How long will my pet have to wait before being seen by a veterinarian?",
                a: "Depending on the severity of your pet’s emergency, the wait time can vary. If your pet is experiencing a life-threatening emergency, they will be seen immediately. The most critical animals are seen first.",
              },
              {
                q: "Will my pet be alone at all during treatment?",
                a: "No. We monitor all our patients for the entirety of their treatment, so your pet will never be left alone.",
              },
              {
                q: "If my pet has to be hospitalized, can I visit them?",
                a: "Yes, if the situation allows. However, there are times when our team is very busy caring for other patients, which may prevent you from visiting your pet.",
              },
              {
                q: "How much will my pet’s treatment cost?",
                a: "Prices vary from patient to patient, depending on the condition being treated. Although we do not offer billing plans, we accept CareCredit and ScratchPay for payment. We can provide you with an estimate prior to receiving your pet.",
              },
              {
                q: "If my pet has to be hospitalized, can I bring them personal items, such as toys or blankets?",
                a: "We do not typically recommend bringing any personal items because we do not have a designated storage area for them, so there is a chance items may be misplaced.",
              },
              {
                q: "Will I receive updates of my pet’s condition during treatment?",
                a: "Consider no news to be good news, as time does not always allow us to call owners with frequent updates. However, if there is a significant change in your pet’s status or variance from the estimate, you will be called immediately. It is reasonable for owners to call once daily to see how their pet is doing.",
              },
              {
                q: "How long will treatment take?",
                a: "Some treatments can be completed in only minutes, but other cases are complex and require days of hospitalization with continued care at your regular veterinarian after we close.",
              },
              {
                q: "What’s the difference between emergency care at the Animal Emergency Center vs. emergency care at my regular family vet?",
                a: "Although your pet may be able to receive urgent care from your regular veterinarian during their daytime business hours, the Animal Emergency Center is open for emergency care AFTER normal business hours. We are open 7 PM to 7 AM during the week and all day on Saturdays, Sundays, and holidays. In addition, all of our doctors and staff have a wealth of experience dealing with emergency cases. It’s what we do!",
              },
              {
                q: "What if I can’t pick up my pet by closing time?",
                a: "For an additional fee, we offer transport service to your regular veterinarian by one of our technicians.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h2 className="font-semibold text-[20px] sm:text-[30px] leading-snug">
                  {item.q}
                </h2>
                <p className="font-normal text-[16px] sm:text-[25px] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center w-full bg-cover bg-[url('/PGbg.png')] bg-no-repeat my-44 py-56 px-4">
          <p className="text-center font-[Poppins] font-normal text-[20px] sm:text-[33px] w-full max-w-[1158px]">
            <span className="font-bold">Do you have questions about your pet's Emergency Care</span><br />
            Our veterinary team is happy to address any concerns you may have <span className="font-bold">Contact Us</span> to book a consultation.
          </p>
        </div>
      </section>

      <Foot />
    </>
  );
}
