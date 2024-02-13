export default function Footer(){
    return (
        <div className="footer hidden sm:flex justify-between px-10 w-full py-5 rounded-tl-3xl rounded-tr-3xl customShadowForFooter">
            <div className="logo font-black text-2xl tracking-[0.25rem] cursor-pointer">CODEBOT</div>
            <div className="footerOptions flex gap-4">
                <p className="hover:underline cursor-pointer">help</p>
                <p className="hover:underline cursor-pointer">contact us!</p>
                <p className="hover:underline cursor-pointer">Terms and conditions</p>
            </div>
        </div>
    )
}