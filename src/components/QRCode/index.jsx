import { Card } from "../Card"

import './style.css'

export const QRCode = () => {
    return(
        <Card className="QRCode">
            <img  src="./assets/image-qr-code.png"alt="" />
            <h1>Improve your frond-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>

        </Card>
    )
}