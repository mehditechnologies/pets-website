import Foot from "../Foot";

export default function PetFood() {
  return (
    <>
      <section>
        <div className="relative flex flex-col justify-center text-start gap-10 px-4 sm:mx-14 my-28">
          <h2 className="font-[Poppins] font-medium text-[20px] sm:text-[25px]">
            Services › Pet Food
          </h2>

          <img
            src="/PF.png"
            className="w-full max-w-[1350px] h-auto object-cover"
          />

          <div className="flex flex-col font-[Poppins] gap-10 text-left w-full max-w-[1150px]">
            {[
              {
                q: "What is the best food for my pet?",
                a: "When it comes to pets, there is no one best or right diet. Like people, different pets have different nutritional needs that can be influenced by a number of factors, including overall health status, medical conditions, activity level and body condition.",
              },
              {
                q: "Does my pet need a varied diet?",
                a: "There’s no solid evidence to support that pets are healthier when they eat a variety of foods. However, variety can have some advantages: It can help keep your pet from getting locked into one type of food and can help make it easier to make changes to his diet if necessary. Just be mindful to switch diets slowly, taking several days to gradually introduce a new one. And also watch closely for vomiting, diarrhea or other signs of gastrointestinal upset.",
              },
              {
                q: "What is the difference between therapeutic and regular diets?",
                a: "Therapeutic diets are formulated to help manage signs of disease or slow disease progression. Diets formulated to address kidney disease, for example, can slow progression of the disease in pets and improve their quality of life. Therapeutic diets usually contain more defined ingredients, and variation in ingredients is minimized in order to help avoid altering the composition of the food. Ingredients tend to have tighter quality-control standards, and the formulations don’t change unless new scientific information becomes available. Because they’re intended for pets with specific health conditions, these diets are only available through veterinarians and should be used under veterinary supervision.",
              },
              {
                q: "Is there a danger in feeding my pet the wrong diet?",
                a: "In a word, yes. Your pet should be fed a diet formulated for his specific stage of life. It would be inappropriate to feed an adult dog a diet designed for growing puppies, for example, because doing so could result in obesity. Likewise, it’d be inappropriate to feed cat food to a dog, or vice versa, because diets are designed specifically to meet the different nutritional requirements of each species.",
              },
              {
                q: "My pet is overweight. What can I do?",
                a: "Obesity is a common nutritional problem in dogs and cats. Being overweight can lead to a host of problems, including arthritis, heart disease, diabetes and certain types of cancer. It has even been shown to decrease life expectancy in dogs. When addressing obesity, it helps to feed your pet regular meals every day rather than having food available to him all the time; decrease or eliminate treats; and prevent access to additional foods. Exercise helps, too, assuming your pet is healthy enough to do this. Your veterinarian can tell you if your pet is obese and help you determine how much weight he needs to lose, as well as help you create a plan to address his weight-loss goals.",
              },
              {
                q: "Is it OK to give my pet table scraps?",
                a: "That depends on what and how much is fed. Pets that receive a therapeutic diet should not have table scraps, because this can cause variation in their diet that may negate the benefit of feeding a therapeutic diet. For other pets, feeding large amounts can increase your pet’s risk of obesity. What’s more, some people food is toxic or unsafe for pets. Some examples include chocolate, onions, high-fat foods like butter and oil (they can lead to pancreatitis or intestinal problems), dairy products (most pets lose the ability to adequately digest milk) and raw eggs (because of the potential for bacteria).",
              },
              {
                q: "What should I look for in a pet food?",
                a: "It’s important to read the label. In addition to listing the nutrients and the guaranteed analysis (the minimum or maximum amount of four essential nutrients: water, fiber, protein and fat), the label provides a nutritional adequacy statement that details which animal the diet is intended for, if it is complete and balanced and if it should be fed under veterinary supervision. Ideally, choose a food that bears the seal of the Association of American Feed Control Officials (AAFCO) and one that has been through AAFCO feeding trials—this tells you that it was actually fed to dogs or cats before sale. Be sure to work with your veterinarian to choose a food that’s appropriate for your pet’s size and age and that meets any special nutritional requirements.",
              },
              {
                q: "When it comes to dry or canned food, is one better for my pet?",
                a: "Depending on the diet, the manufacturer and your preferences, both are acceptable. Dry food is made by mixing dry ingredients with water; the dough is then baked and cut into shapes. For this reason, ingredients may be listed as meals (for example, chicken meal). Canned foods have a higher water content. Remember, the best way to decide what food is right for your pet is to talk with your veterinarian, who can provide individual nutritional advice that you—and your pet—can sink your teeth into.",
              },
              {
                q: "What about raw food diets—are they safe for my pet?",
                a: "Raw food diets have potential drawbacks, including causing nutritional imbalances and deficiencies and the risk of infectious disease like salmonella. Because of these and other risks, the American Veterinary Medical Association, American Animal Hospital Association and Centers for Disease Control and Prevention do not recommend feeding raw food diets to pets. If you’re interested in feeding your pet a raw food diet, talk to your veterinarian.",
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
            <span className="font-bold">Do you have questions about your pet's food</span><br />
            Our veterinary team is happy to address any concerns you may have <span className="font-bold">Contact Us</span> to book a consultation.
          </p>
        </div>
      </section>

      <Foot />
    </>
  );
}
