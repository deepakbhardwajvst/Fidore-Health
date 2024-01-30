import { Button } from "@mui/material"

Button
const ButtonOne = (props) => {
    return (
        <div className="my-8 button1 py-2 px-4 rounded-lg text-xl w-max">
            <Button className="   rounded-lg text-xl color1">
                {
                    props.buttonName
                }
            </Button>
        </div>
    )
}

export default ButtonOne