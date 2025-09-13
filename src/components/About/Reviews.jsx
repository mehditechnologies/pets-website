const rev=[
    {
        image:"/rev1.png",
        name:"Ramesh Velaga",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
    },
    {
        image:"/rev2.png",
        name:"Yeshika Bedi",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
    }

]
export default function Reviews(){
    return(
        <section className="relative flex flex-col bg-[#FFD56E] overflow-hidden my-10 px-24 py-16"> 
            <div className="flex">
            <h1 className="inherit font-[Peralta] font-normal text-[48px] text-white">What People Say</h1>
            <img src="/pawblend.png" className="absolute left-[560px] top-[50px]"/>
            <img src="/twinkw.png" className="absolute right-[50px] top-[20px]"/>
            <img src="/ringsw.png" className="absolute left-[40px] bottom-[50px] w-[122px] h-[122px]"/>
            </div>
            <div className="relative flex flex-col sm:flex-row gap-16 sm:gap-32 h-auto sm:h-[557px] mt-36 items-center sm:items-start">
            <div className="testimonial-track">
              {[...rev, ...rev].map((rev, index) =>(
                    <div className="relative flex flex-col w-full max-w-[964px] h-auto sm:h-[481px] bg-linear-to-b from-[#ffff] to-[#ffd56e] border-amber-50 border-4 rounded-3xl mb-10">
                        <img src={rev.image} className="absolute w-[160px] h-[160px] left-[40px] top-[-80px]"/>
                     <div className="pt-32 font-[Poppins] font-light text-white px-1 sm:px-10">
                        <img src="/Rating.png" className="mb-4 w-[120px] sm:w-[160px] bg-[#ffd56e]" />
                        <p className="text-[15px] sm:text-[22px] w-[300px] sm:w-[885px] break-words">{rev.content}</p>
                        <p className="text-[24px] mt-6 sm:mt-14">{rev.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            
        </section>
    )
}