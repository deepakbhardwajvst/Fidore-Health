import { Button } from "@mui/material"

Button
const ButtonOne = (props) => {
    return (
        <Button className="my-8 button1 py-2 px-4 rounded-lg text-xl">
            <button className="   rounded-lg text-xl">
                {
                    props.buttonName
                }
            </button>
        </Button>
    )
}

export default ButtonOne