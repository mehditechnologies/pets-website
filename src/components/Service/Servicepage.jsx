import { Link } from 'react-router-dom'
import Head from '../Head.jsx'
import Foot from '../Foot.jsx'
const serve=[
    {
        icon:"/serv1.png",
        name:"Dental Care",
        content:"Our experienced veterinary doctors provide nose-to-tail consultations to make sure your pet is happy and healthy.",
        link:<Link to="/dental">Get Service</Link>
    },
    {
        icon:"/serv2.png",
        name:"Pet Grooming",
        content:"Professional pet groomers with magical hands for your pets. We provide bathing, cleaning, haircuts, nail trimming and medicated bath to make your pet look smart and healthy.",
        link:<Link to="/grooming">Get Service</Link>
    },
    {
        icon:"/serv3.png",
        name:"Surgeries",
        content:"We perform soft tissue surgeries like Neutering and spaying, orthopaedic, and other speciality surgeries right here in our clinic.",
        link:<Link to="/surgery">Get Service</Link>
    },
    {
        icon:"/serv4.png",
        name:"Pet Food",
        content:"Every pet is unique and has different taste buds, and we’ll help you zero in on the foods that works best for their growth and health.",
        link:<Link to="/food">Get Service</Link>
    },
    {
        icon:"/serv5.png",
        name:"Emergency care",
        content:"If your pet has urgent medical need like a serious injury, or a life-threatening illness, we’ll be there for his needs.",
        link:<Link to="/emergency">Get Service</Link>
    },
    {
        icon:"/serv6.png",
        name:"Vaccinations",
        content:"We’ll keep your pet safe from parvo, distemper, leptospirosis, rabies, corona, kennel cough and more — and send reminders when they’re due for a vaccine.",
        link:<Link to="/vaccination">Get Service</Link>
    }
]

export default function Services(){
    return(
        <>
        <Head/>
        <section className="relative flex flex-col justify-center text-center gap-9 mt-44">
            
            <img src="/Paw2.png" className="absolute left-[500px] top-[5px] w-[80px] h-[80px] "/>
            <h1 className="font-[Peralta]  font-normal text-[48px]">Our Services</h1>
            <p className="font-[Poppins] text-[#656689] font-normal text-[18px] px-[450px]">Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>

            <div className="flex gap-7 flex-wrap justify-center px-4 mt-20">
                {serve.map((serve,index)=>(
                    <div key={index} className="flex flex-wrap text-left gap-4 bg-[#FFFAF5] border-[3px] border-amber-300 rounded-[8px] p-8 w-[433px] h-[294px]">
                        <img src={serve.icon} className="w-[51px] h-[51px]" />
                        <h2 className="font-[Nunito] font-extrabold text-[24px] mt-2 mr-3">{serve.name}</h2>
                        <p className="font-[Lato] text-[18px] font-normal w-[354px]">{serve.content}</p>
                        <a href="#" className="font-[Nunito] font-extrabold text-[20px] mb-5">{serve.link} <span className="text-lg">→</span></a>
                    </div>
                ))}
            </div>
        </section>
        <Foot/>
        </>
    )
}