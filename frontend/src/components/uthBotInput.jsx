import { useState } from "react"

const UthBotInput = (sendMessage) => {

    const [value, setValue] = useState("")

    const handleSubmit = () => {
        if (value === "") return;
        sendMessage({ sender: "user", message: value })
        setValue("")
    }

    return (
        <div className="w-full bg-white 
        max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
            <textarea
                rows={1}
                className="border-0 bg-transparent outline-none w-11/12 "
                value={value}
                type="text"
                onChange={(e) => setValue(e.target.value)}

            />
            <img
                onClick={handleSubmit}
                src="./send.png"
                width={20}
                alt="send-button"
                className="absolute top-5 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125" />
        </div>
    )
}

export default UthBotInput