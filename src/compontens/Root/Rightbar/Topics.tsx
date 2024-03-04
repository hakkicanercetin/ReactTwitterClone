function TopicsContent(){
    return(
        <>
        <div className="py-3 px-4 transition-colors hover:bg-white/[0.03]">
                    <div className="text-[13px] mb-2 text-[#71767b] leading-4">Turkish series · Trending</div>
                    <div className="text-[15px] mt-0.5">
                        <div className="h-2 bg-slate-700 rounded col-span-2 mb-2"></div>
                        <div className="h-2 bg-slate-700 rounded w-[20%]"></div>
                    </div>
                </div>
                <div className="py-3 px-4 transition-colors hover:bg-white/[0.03]">
                    <div className="text-[13px] mb-2 text-[#71767b] leading-4">Trending in Turkey</div>
                    <div className="text-[15px] mt-0.5">
                        <div className="h-2 bg-slate-700 rounded col-span-2 mb-2"></div>
                        <div className="h-2 bg-slate-700 rounded w-[20%]"></div>
                    </div>
                </div>
                </>
    )
}

export function Topics(){
    return(
        <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5">
            <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]">İlgini çekebilecek gündemler</h5>
            <div className="grid">
                <TopicsContent></TopicsContent>
                <TopicsContent></TopicsContent>
                <TopicsContent></TopicsContent>
                <TopicsContent></TopicsContent>
            </div>
        </section>
    )
}