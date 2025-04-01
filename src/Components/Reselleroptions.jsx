

const ResellerOptions = () => {
    return (
        <section className="w-auto h-[auto] m-auto flex flex-col md:flex-row items-start gap-20 px-8 py-16">
            {/* Left Side */}
            <div className="max-w-md w-[500px]">
                <p className="text-xs font-semibold text-blue-500 uppercase font-[Inter] ">
                    Why Choose Our Services
                </p>
                <p className=" text-[#083376] text-[64px] w-auto" style={{
                    lineHeight: '65px',
                    letterSpacing: "-4%",
                    fontFamily: "'Inter',sans-serif",
                    fontWeight: "500"
                }}>
                    choose from variety of{" "}
                    <span className="text-blue-500">resellers</span>{" "}option
                </p>
                <p className="w-[370px] text-[#2D5087] mt-3 font-inter font-normal text-[14px] leading-[16.59px] tracking-[0%] align-middle">
                    Leave your system management to the experts so that you can focus your energy on what you do best.
                </p>
                <button className="mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-md font-semibold hover:bg-blue-100 transition">
                    Learn More
                </button>
            </div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Hosting Reseller */}
                <div className="p-6 bg-[#E8F0FF] rounded-lg shadow-sm w-[240px] h-[230px]" style={{ borderRadius: "20px" }}>
                    <p className="text-[#3973E6] font-inter font-medium text-[32px] leading-[32px] tracking-[0%] align-middle">
                        Hosting Reseller
                    </p>

                    <p className="w-[165px] text-[#3973E6] font-inter font-medium text-[11.06px] leading-[16.59px] tracking-[0%] align-middle">
                        Sell your own whitelable hosting to your client
                    </p>
                    <div className=" w-[38px] h-[38px] bg-[#3973E6] mt-[30px]" style={{ borderRadius: "56px" }}><p className="text-[#ffffff] p-[10px]">↗</p></div>
                </div>

                {/* Domain Reseller */}
                <div className="p-6 bg-[#FFF6EF] rounded-lg shadow-sm w-[240px] h-[230px]" style={{ borderRadius: "20px" }}>
                    <p className="text-[#BA6F07] font-inter font-medium text-[32px] leading-[32px] tracking-[0%] align-middle">
                        Domain Reseller
                    </p>

                    <p className="w-[165px] text-[#BA6F07] font-inter font-medium text-[11.06px] leading-[16.59px] tracking-[0%] align-middle">
                    Sell your own whitelable hosting to your client 
                    </p>
                    <div className=" w-[38px] h-[38px] bg-[#3973E6] mt-[30px]" style={{ borderRadius: "56px" }}><p className="text-[#ffffff] p-[10px]">↗</p></div>
                </div>

                {/* Server Reseller */}
                <div className="p-6 bg-[#ECFFF4] rounded-lg shadow-sm w-[240px] h-[230px]" style={{ borderRadius: "20px" }}>
                    <p className="text-[#245D18] font-inter font-medium text-[32px] leading-[32px] tracking-[0%] align-middle">
                    Server Reseller
                    </p>

                    <p className="w-[165px] text-[#245D18] font-inter font-medium text-[11.06px] leading-[16.59px] tracking-[0%] align-middle">
                    Sell your own whitelable hosting to your client 
                    </p>
                    <div className=" w-[38px] h-[38px] bg-[#3973E6] mt-[30px]" style={{ borderRadius: "56px" }}><p className="text-[#ffffff] p-[10px]">↗</p></div>
                </div>
            </div>
        </section>
    );
};

export default ResellerOptions;
