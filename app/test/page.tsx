
import BackgroundImage from "../compoments/background"

export default function test() {
    return (
        <div>
            <BackgroundImage isGround={true} isSky={false}>
                <div className="w-full h-screen">
                    testt
                </div>
            </BackgroundImage>
        </div>
    )
}