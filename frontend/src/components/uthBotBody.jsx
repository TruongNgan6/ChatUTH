// import React from "react";

const UthBotBody = () => {

    const botStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md"
    return (
        <div className="flex flex-col gap-4">
            {/* client message */}
            <div className="border-[#999999] break-words border-2 rounded-xl self-end px-3 max-w-[80%] py-4">
                <pre className="whitespaces-pre-wrap">
                    <span>Xin chào UTHbot, bạn có thể giúp tôi không?</span>
                </pre>
            </div>

            {/* bot message */}
            <div className={`border-[#999999] break-words border-2 rounded-xl self-start px-3 max-w-[100%] py-4
            <pre className="whitespaces-pre-wrap ${botStyle}`}>
                <pre>
                    <span>Xin chào, chúc bạn một ngày tốt đẹp đến, tôi có thể giúp bạn trả lời bất kỳ câu hỏi nào</span>
                </pre>
            </div>
        </div>
    )
}

export default UthBotBody;