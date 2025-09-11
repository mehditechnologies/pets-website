import Head from "../Head";
import Foot from "../Foot";
export default function(){
    return(
        <>
            <Head/>
        <section>
        <div className="relative flex flex-col justify-center text-start gap-10 mx-14 my-28">
            
            <h2 className="font-[Poppins] font-medium text-[25px]">Services › Dental Care</h2>
            <img src="/DC.png" className="w-[1350px] h-[695px]"/>


            <div className=" flex flex-col font-[Poppins] gap-10 text-left w-[1150px]">


            <p className="font-normal text-[25px]">Dental health is a very important part of your pet’s overall health, and dental problems can cause, or be caused by, other health problems.<br/>
                Your pet’s teeth and gums should be checked at least once a year by your veterinarian for early signs of problems and to keep your pet’s mouth healthy.<br/>
                Have your pet’s teeth checked sooner if you observe any of the following problems:<br/><br/>
                <ul className="list-disc px-10">
                    <li >Bad breath</li>
                    <li >Broken or loose teeth</li>
                    <li >Extra teeth or retained baby teeth</li>
                    <li >Teeth that are discolored or covered in tartar</li>
                    <li >Abnormal chewing, drooling, or dropping food from the mouth</li>
                    <li >Reduced appetite or refusal to eat</li>
                    <li >Pain in or around the mouth</li>
                    <li >Bleeding from the mouth</li>
                    <li >Swelling in the areas surrounding the mouth</li>
                </ul>
                <br/><br/>
                Some pets become irritable when they have dental problems, and any changes in your pet’s behavior should prompt a visit to your veterinarian. Always be careful when evaluating your pet’s mouth, because a painful animal may bite.</p>
                <h2 className="font-semibold text-[30px]">Causes of pet dental problems</h2> 
                <p className="font-normal text-[25px]">Although cavities are less common in pets than in people, they can have many of the same dental problems that people can develop:<br/><br/>
                    <ul className="list-disc px-10">
                    <li>Broken teeth and roots</li>
                    <li>Periodontal disease</li>
                    <li>Abscesses or infected teeth</li>
                    <li>Cysts or tumors in the mouth</li>
                    <li>Malocclusion, or misalignment of the teeth and bite</li>
                    <li>Broken (fractured) jaw</li>
                    <li>Palate defects (such as cleft palate)</li></ul><br/>Periodontal disease is the most common dental condition in dogs and cats – by the time your pet is 3 years old, he or she will very likely have some early evidence of periodontal disease, which will worsen as your pet grows older if effective preventive measures aren’t taken. Early detection and treatment are critical, because advanced periodontal disease can cause severe problems and pain for your pet. Periodontal disease doesn’t just affect your pet’s mouth. Other health problems found in association with periodontal disease include kidney, liver, and heart muscle changes.<br/><br/>It starts with plaque that hardens into tartar. Tartar above the gumline can often easily be seen and removed, but plaque and tartar below the gumline is damaging and sets the stage for infection and damage to the jawbone and the tissues that connect the tooth to the jaw bone. Periodontal disease is graded on a scale of 0 (normal) to 4 (severe).<br/><br/>The treatment of periodontal disease involves a thorough dental cleaning and x-rays may be needed to determine the severity of the disease. Your veterinarian or a board-certified veterinary dentist will make recommendations based on your pet’s overall health and the health of your pet’s teeth, and provide you with options to consider.<br/></p> 
            <h2 className="font-semibold text-[30px]">What is veterinary dentistry, and who should perform it?</h2> 
            <p className="font-normal text-[25px]">Veterinary dentistry includes the cleaning, adjustment, filing, extraction, or repair of your pets' teeth and all other aspects of oral health care. These procedures should be performed by a veterinarian or a board-certified veterinary dentist. Subject to state or provincial regulation, veterinary technicians are allowed to perform certain dental procedures under the supervision of a veterinarian.<br/><br/>The process begins with an oral exam of your pet’s mouth by a veterinarian. Radiographs (x-rays) may be needed to evaluate the health of the jaw and the tooth roots below the gumline. Because most dental disease occurs below the gumline, where you can’t see it, a thorough dental cleaning and evaluation are performed under anesthesia. Dental cleaning includes scaling (to remove dental plaque and tartar) and polishing, similar to the process used on your own teeth during your regular dental cleanings.</p> 
            <h2 className="font-semibold text-[30px]">Why does dentistry require anesthesia?</h2> 
            <p className="font-normal text-[25px]">When you go to the dentist, you know that what’s being done is meant to help you and keep your mouth healthy. Your dentist uses techniques to minimize pain and discomfort and can ask you how you are feeling, so you accept the procedures and do your best to keep still. Your pet does not understand the benefit of dental procedures, and he or she reacts by moving, trying to escape, or even biting.<br/><br/>Anesthesia makes it possible to perform the dental procedures with less stress and pain for your pet. In addition, anesthesia allows for a better cleaning because your pet is not moving around and risking injury from the dental equipment. If radiographs (x-rays) are needed, your pet needs to be very still in order to get good images, and this is unlikely without heavy sedation or anesthesia.<br/><br/>Although anesthesia will always have risks, it’s safer now than ever and continues to improve so that the risks are very low and are far outweighed by the benefits. Most pets can go home the same day of the procedure, although they might seem a little groggy for the rest of the day.<br/></p> 
            

            </div>
        </div>


           <div className="relative flex justify-center w-full bg-cover bg-[url('/PGbg.png')] bg-no-repeat my-44 py-56">
            <p className=" text-center font-[Poppins] font-normal text-[33px] w-[1158px]"><span className="font-bold">Do you have questions about your pet's Dental Care</span><br/> 
            Our veterinary team is happy to address any concerns you may have <span className="font-bold">Contact Us</span> to book a consultation.</p>
           </div>

        </section>
        <Foot/>
        </>       
    )
}