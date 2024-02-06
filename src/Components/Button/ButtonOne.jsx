import { Button } from "@mui/material"
import Link from "next/link"

const ButtonOne = (props) => {
    return (
        <Link href="/test">
            <div className="my-8 button1  rounded-lg w-max">
                <Button className="rounded-lg textsize3 py-1 px-4 font-bold color1">
                    {
                        props.buttonName
                    }
                </Button>
            </div>
        </Link>
    )
}

export default ButtonOne