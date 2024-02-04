import { Button } from "@mui/material"


const ButtonOne = (props) => {
    return (
        <div className="my-8 button1  rounded-lg w-max">
            <Button className="rounded-lg textsize3 py-1 px-4 font-bold color1">
                {
                    props.buttonName
                }
            </Button>
        </div>
    )
}

export default ButtonOne