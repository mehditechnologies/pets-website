import Foot from "../Foot";

export default function Vaccinations() {
  return (
    <>
      <section>
        <div className="relative flex flex-col justify-center text-start gap-10 px-4 sm:mx-14 my-28">
          <h2 className="font-[Poppins] font-medium text-[20px] sm:text-[25px]">
            Services › Vaccinations
          </h2>

          <img
            src="/Vacc.png"
            className="w-full max-w-[1350px] h-auto object-cover"
          />

          <div className="flex flex-col font-[Poppins] gap-10 text-left w-full max-w-[1150px]">
            <p className="font-normal text-[16px] sm:text-[25px] leading-relaxed">
              If you're a pet owner, you're probably aware that some people are skeptical about vaccinations. In fact, the ongoing debate extends to more than just humans. Some animal lovers feel bad for their furry friends when they hear that their animal companions may not necessarily be in good health because of vaccination schedules.<br /><br />
              The truth is, though, that many vaccines are important for human and animal health — and whether or not your animals should get these vaccines is an important consideration to make as an owner. The most common reason people cite for not vaccinating their pets is the adverse effects of vaccinations.<br /><br />
              Read on to discover seven questions you should ask your veterinarian regarding vaccinations to help you understand what is and is not important regarding vaccinations.
            </p>

            {[
              {
                q: "Are There Other Ways to Prevent My Pet From Getting Sick?",
                a: "The best way to protect your pets from disease is through vaccination. But if you do not vaccinate, then the prognosis is not good. You might want to ask your vet if you can protect your pet from these diseases another way.",
              },
              {
                q: "Is My Pet's Vaccination Status Up-to-Date?",
                a: "This one may sound obvious, but you should always make sure your pet's vaccinations are current. Unless otherwise stated by the veterinarian or written in the vaccine instructional materials, vaccines should be kept up-to-date. Your vet will usually verify this condition and provide an updated vaccination record.",
              },
              {
                q: "Where Are the Vaccinations Given?",
                a: "Some veterinarians choose to administer the vaccines themselves, while others employ a veterinarian technician for this duty. Most people are fine with this option, but you can decide who will administer your pet's vaccine — and where. If you are uncomfortable with this process or prefer someone else to do it, then talk to your veterinarian.",
              },
              {
                q: "Should I Vaccinate a Sick Pet?",
                a: "Your veterinarian is the best person to determine which type of vaccine is the best for your sick pet. In some instances, the risks associated with vaccinating a pet before it has recovered from an illness may outweigh any benefits gained from vaccination. In other cases, vaccines will not work or cause disease if given too soon after an illness or surgery.",
              },
              {
                q: "How Many Vaccines Should Be Given?",
                a: "Your veterinarian will have a recommended vaccination schedule that includes the number of vaccinations for each year. Depending on your pet's health concerns and vaccination history, this number of vaccinations can change — but you need to know the possible overall number at all times.",
              },
              {
                q: "What Are the Side Effects of Vaccines?",
                a: `Vaccines can have side effects like many human medications — and not all of them are severe. For example, your pet may have a harder time receiving the vaccinations in a certain area because it damages the nerve endings or nerves.
                Other adverse reactions may include local reactions at the vaccination site or an itching reaction — but mild to moderate reactions are rare and rarely dangerous.`,
              },
              {
                q: "Which Are the Three Main Vaccine Types",
                a: `The three main vaccine types are killed, modified live virus, and recombinant virus.
                Killed vaccines contain the bodies of viruses killed with chemicals or heat to make them less able to cause disease. Modified live virus vaccines contain a weakened version of the virus and act as a defense against the disease. Recombinant vaccines are produced through genetic engineering.`,
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
            <span className="font-bold">Do you have questions about your pet's Vaccinations</span><br />
            Our veterinary team is happy to address any concerns you may have <span className="font-bold">Contact Us</span> to book a consultation.
          </p>
        </div>
      </section>

      <Foot />
    </>
  );
}
