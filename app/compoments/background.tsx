import React from "react";

export default function BackgroundImage({ children, isSky = true, isGround = false, isSky2 = false }: { children?: React.ReactNode, isSky?: boolean, isGround?: boolean, isSky2?: boolean }) {
    if (isSky)
        return (
            <div
                className="bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(/bg-sky.PNG)" }}
            >
                {children}
            </div>
        )

    else if (isSky2)
        return (
            <div
                className="bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(/bg-sky2.PNG)" }}
            >
                {children}
            </div>
        )

    else if (isGround) {
        return (
            <div
                className="bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(/bg-ground.PNG)" }}
            >
                {children}
            </div>
        )
    }
    else {
        return (
            <div>
                no bg choosen
            </div>
        )
    }
}
