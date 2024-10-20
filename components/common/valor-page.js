export default function ValorPage({ num }) {
    return (
        <>
            <div className="h-[32px] text-[#0C2821] text-[24px] font-normal leading-[32px] flex justify-end mr-[24px]">
               / {num || '01' }
            </div>
        </>
    )
}