const serve=[
    {
        icon:"/serv1.png",
        name:"Dental Care",
        content:"Our experienced veterinary doctors provide nose-to-tail consultations to make sure your pet is happy and healthy.",
        link:"Get Service"
    },
    {
        icon:"/serv2.png",
        name:"Pet Grooming",
        content:"Professional pet groomers with magical hands for your pets. We provide bathing, cleaning, haircuts, nail trimming and medicated bath to make your pet look smart and healthy.",
        link:"Get Service"
    },
    {
        icon:"/serv3.png",
        name:"Surgeries",
        content:"We perform soft tissue surgeries like Neutering and spaying, orthopaedic, and other speciality surgeries right here in our clinic.",
        link:"Get Service"
    },
    {
        icon:"/serv4.png",
        name:"Pet Food",
        content:"Every pet is unique and has different taste buds, and we’ll help you zero in on the foods that works best for their growth and health.",
        link:"Get Service"
    },
    {
        icon:"/serv5.png",
        name:"Emergency care",
        content:"If your pet has urgent medical need like a serious injury, or a life-threatening illness, we’ll be there for his needs.",
        link:"Get Service"
    },
    {
        icon:"/serv6.png",
        name:"Vaccinations",
        content:"We’ll keep your pet safe from parvo, distemper, leptospirosis, rabies, corona, kennel cough and more — and send reminders when they’re due for a vaccine.",
        link:"Get Service"
    }
]

export default function Services(){
    return(
        <section className="relative flex flex-col justify-center text-center gap-9 my-8">
            
            <img src="/Paw2.png" className="absolute left-[500px] top-[5px] w-[80px] h-[80px] "/>
            <h1 className="font-[Peralta]  font-normal text-[48px]">Our Services</h1>
            <p className="font-[Poppins] text-[#656689] font-normal text-[18px] px-[450px]">Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>

            <div className="flex gap-3 overflow-auto px-4">
                {serve.map((serve,index)=>(
                    <div key={index} className="flex flex-wrap gap-4 rounded-[8px]">
                        <img src={serve.icon}/>
                        <h2>{serve.name}</h2>
                        <p>{serve.content}</p>
                        <a href="#">{serve.link}</a>
                    </div>
                ))}
            </div>
        </section>
    )
}